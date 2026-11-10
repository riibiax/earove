const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const { registerHooks } = require("node:module");
const { pathToFileURL } = require("node:url");
const { transformSync } = require("@babel/core");
const { createElement } = require("react");
const { renderToString } = require("react-dom/server");
const { StaticRouter } = require("react-router-dom");
const { homepage } = require("../package.json");
const descriptions = require("../config/project-descriptions.json");

const source = path.join(__dirname, "../src");
const sourceUrl = pathToFileURL(source + path.sep).href;
const jsUrl = `${sourceUrl}js/`;

// Render the existing React pages in a separate Node process. Only site source
// files use these hooks. CSS is emitted by the regular browser build.
registerHooks({
  resolve(specifier, context, nextResolve) {
    if (context.parentURL?.startsWith(jsUrl) && specifier.startsWith(".") && !path.extname(specifier)) {
      return nextResolve(`${specifier}.js`, context);
    }
    return nextResolve(specifier, context);
  },
  load(url, context, nextLoad) {
    if (url.startsWith(sourceUrl) && url.endsWith(".css")) {
      return { format: "module", source: "", shortCircuit: true };
    }
    if (url.startsWith(jsUrl) && url.endsWith(".js")) {
      const filename = new URL(url);
      const { code } = transformSync(fs.readFileSync(filename, "utf8"), {
        configFile: false,
        babelrc: false,
        presets: [["@babel/preset-react", { runtime: "automatic" }]],
      });
      return { format: "module", source: code, shortCircuit: true };
    }
    return nextLoad(url, context);
  },
});

async function renderPages() {
  const [{ pageRoutes }, { homeContent, aboutContent }, { default: projects }, { basePath }] = await Promise.all([
    import(`${jsUrl}pageRoutes.js`),
    import(`${jsUrl}components/home/homeContent.js`),
    import(`${jsUrl}projectData.js`),
    import(`${jsUrl}sitePaths.js`),
  ]);
  const contentDir = path.join(source, "js/content");
  const studies = await Promise.all(fs.readdirSync(contentDir)
    .filter((file) => file.endsWith("CaseStudy.js"))
    .map(async (file) => (await import(pathToFileURL(path.join(contentDir, file)).href)).default));
  const byPath = new Map(studies.map((study) => [study.path, study]));
  const projectPaths = projects.map(({ path }) => path).sort();
  assert.deepEqual([...byPath.keys()].sort(), projectPaths, "Every project needs one case study.");
  assert.deepEqual(pageRoutes.filter(({ project }) => project).map(({ project }) => project).sort(), projectPaths,
    "Every project needs one public route.");
  assert.equal(new Set(pageRoutes.map(({ path }) => path)).size, pageRoutes.length, "Duplicate public routes.");
  assert.equal(studies.length, byPath.size, "Duplicate case studies.");

  const absolute = (relative) => new URL(relative, homepage).href;
  const name = homeContent.name;
  const websiteId = `${homepage}#website`;
  const personId = `${homepage}#andrea`;
  const pages = await Promise.all(pageRoutes.map(async ({ project, path, load }) => {
    const study = byPath.get(project);
    const title = study ? `${study.title} | ${name}` : `${name} | Software Engineer & Creative Technologist`;
    const description = study ? descriptions[project] || study.introduction
      : "Andrea Rovescalli is a senior software engineer in Lausanne, Switzerland. Explore selected work in creative technology, interactive installations, real-time 3D and XR.";
    const url = absolute(path.slice(1));
    // Use the compact cover art instead of the 5.6 MiB Death Lap hero.
    const image = project === "/deathlap"
      ? { src: "img/deathlap/deathlap.png", alt: "Death Lap cover art", width: 960, height: 540 }
      : (study || byPath.get("/evoka")).hero;
    const imageUrl = absolute(image.src);
    const schema = study ? {
      "@context": "https://schema.org", "@type": "WebPage", "@id": `${url}#page`,
      name: study.title, url, description, image: imageUrl, inLanguage: "en",
      isPartOf: { "@id": websiteId }, author: { "@id": personId },
    } : {
      "@context": "https://schema.org", "@graph": [
        { "@type": "WebSite", "@id": websiteId, name, url, description, inLanguage: "en" },
        { "@type": "ProfilePage", "@id": `${url}#page`, name: title, url, description, inLanguage: "en",
          isPartOf: { "@id": websiteId }, mainEntity: { "@id": personId } },
        { "@type": "Person", "@id": personId, name, url, jobTitle: "Senior Software Engineer",
          sameAs: homeContent.socialLinks.map(({ href }) => href) },
      ],
    };
    const { default: Page } = await load();
    const markup = renderToString(createElement(StaticRouter, {
      basename: basePath, location: `${basePath}${path.slice(1)}`,
    }, createElement(Page)));
    return { path, title, description, url, imageUrl, imageAlt: image.alt,
      imageWidth: image.width, imageHeight: image.height, schema, markup,
      type: study ? "article" : "website", bodyClass: study ? "case-study-active" : "editorial-home-active" };
  }));
  const documentUrls = [aboutContent.research.href, ...aboutContent.cvFiles.map(({ href }) => href)].map(absolute);
  return { name, pages, documentUrls };
}

renderPages().then((result) => process.stdout.write(JSON.stringify(result))).catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
