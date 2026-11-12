const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const { parseSync } = require("@babel/core");

const root = path.resolve(__dirname, "..");
const dist = path.join(root, "dist");
const siteUrl = new URL(require(path.join(root, "package.json")).homepage);
const publicPath = siteUrl.pathname;
const walk = dir => fs.readdirSync(dir, { withFileTypes: true }).flatMap(item => item.isDirectory() ? walk(path.join(dir, item.name)) : [path.join(dir, item.name)]);
const files = walk(dist);
let total = 0;
for (const file of files) {
  assert.ok(!/\.(acr|xmp)$/i.test(file), `Photo editing sidecar would be published: ${path.relative(dist, file)}`);
  total += fs.statSync(file).size;
  const header = Buffer.alloc(100);
  const fd = fs.openSync(file, "r");
  fs.readSync(fd, header, 0, header.length, 0);
  fs.closeSync(fd);
  assert.ok(!header.toString().startsWith("version https://git-lfs.github.com/spec/v1"), `LFS pointer would be published: ${path.relative(dist, file)}`);
}
assert.ok(total < 1_000_000_000, "Published site exceeds the GitHub Pages 1 GB size limit.");
assert.ok(fs.existsSync(path.join(dist, ".nojekyll")), "Missing .nojekyll.");
assert.ok(/^\* -filter$/m.test(fs.readFileSync(path.join(dist, ".gitattributes"), "utf8")), "Published assets must disable LFS filtering.");

// Resolve with exact casing: Windows accepts mismatches that Pages would reject.
function requireAsset(relative) {
  const clean = decodeURIComponent(relative.split(/[?#]/)[0]);
  assert.ok(!clean.startsWith("/") && !clean.split("/").includes(".."), `Invalid public asset path: ${relative}`);
  let current = dist;
  for (const segment of clean.split("/")) {
    assert.ok(fs.existsSync(current) && fs.readdirSync(current).includes(segment), `Missing or case-mismatched public asset: ${relative}`);
    current = path.join(current, segment);
  }
  return current;
}
let checked = 0;
const sitemap = fs.readFileSync(path.join(dist, "sitemap.xml"), "utf8");
const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(([, url]) => url);
assert.equal(new Set(urls).size, urls.length, "Duplicate sitemap URLs.");
assert.ok(urls.includes(siteUrl.href), "The sitemap must include the homepage.");
const titles = new Set();
const descriptions = new Set();
const pageUrls = urls.filter((url) => url.endsWith("/"));
const visitedPages = new Set();
for (const url of urls) {
  assert.ok(url.startsWith(siteUrl.href) && !/[?#]/.test(url), `Invalid sitemap URL: ${url}`);
  const relative = url.slice(siteUrl.href.length);
  if (!url.endsWith("/")) {
    requireAsset(relative);
    checked++;
    continue;
  }

  const file = requireAsset(`${relative}index.html`);
  visitedPages.add(file);
  const html = fs.readFileSync(file, "utf8");
  const uniqueValue = (pattern) => {
    const matches = [...html.matchAll(pattern)];
    assert.equal(matches.length, 1, `${url}: expected exactly one match for ${pattern}`);
    assert.ok(matches[0][1].trim(), `${url}: empty value for ${pattern}`);
    return matches[0][1];
  };
  const title = uniqueValue(/<title>([^<]+)<\/title>/g);
  const description = uniqueValue(/<meta name="description" content="([^"]+)"/g);
  assert.ok(!titles.has(title) && !descriptions.has(description), `Duplicated page metadata: ${url}`);
  titles.add(title);
  descriptions.add(description);
  assert.equal(uniqueValue(/<link rel="canonical" href="([^"]+)"/g), url);
  assert.equal(uniqueValue(/<meta property="og:url" content="([^"]+)"/g), url);
  assert.equal(uniqueValue(/<meta property="og:title" content="([^"]+)"/g), title);
  assert.equal(uniqueValue(/<meta property="og:description" content="([^"]+)"/g), description);
  const image = uniqueValue(/<meta property="og:image" content="([^"]+)"/g);
  assert.ok(image.startsWith(siteUrl.href), `Invalid social image URL: ${image}`);
  const imageFile = requireAsset(image.slice(siteUrl.href.length));
  assert.ok(fs.statSync(imageFile).size < 5_000_000, `Social image exceeds 5 MB: ${image}`);
  assert.equal(uniqueValue(/<meta name="twitter:image" content="([^"]+)"/g), image);
  assert.equal(uniqueValue(/<meta name="twitter:card" content="([^"]+)"/g), "summary_large_image");
  assert.equal(uniqueValue(/<meta name="twitter:title" content="([^"]+)"/g), title);
  assert.equal(uniqueValue(/<meta name="twitter:description" content="([^"]+)"/g), description);
  assert.equal(uniqueValue(/<meta name="twitter:image:alt" content="([^"]+)"/g),
    uniqueValue(/<meta property="og:image:alt" content="([^"]+)"/g));
  JSON.parse(uniqueValue(/<script type="application\/ld\+json">([^<]+)<\/script>/g));
  assert.match(html, /<main\b/);
  assert.match(html, /<h1\b/);
  assert.ok(html.includes(`src="${publicPath}main.`), `Missing application scripts: ${url}`);
  for (const [, reference] of html.matchAll(/\s(?:src|href|poster)="(\/[^\"]+)"/g)) {
    assert.ok(reference.startsWith(publicPath), `URL bypasses the Pages base path: ${reference}`);
    assert.ok(!reference.startsWith(`${publicPath}#/`), `Legacy hash link in built HTML: ${reference}`);
    const target = reference.slice(publicPath.length).split(/[?#]/)[0];
    requireAsset(!target || target.endsWith("/") ? `${target}index.html` : target);
    checked++;
  }
  if (url === siteUrl.href) {
    for (const projectUrl of pageUrls.filter((candidate) => candidate !== url)) {
      assert.ok(html.includes(`href="${new URL(projectUrl).pathname}"`), `Missing crawlable homepage link: ${projectUrl}`);
    }
  }
}
for (const file of files.filter((file) => path.basename(file) === "index.html")) {
  assert.ok(visitedPages.has(file), `HTML page missing from sitemap: ${path.relative(dist, file)}`);
}
for (const file of files.filter(f => f.endsWith(".css"))) {
  for (const match of fs.readFileSync(file, "utf8").matchAll(/url\(\s*["']?([^)'"\s]+)["']?\s*\)/g)) {
    const url = match[1];
    if (/^(data:|https?:|#)/.test(url)) continue;
    if (url.startsWith("/")) assert.ok(url.startsWith(publicPath), `CSS asset bypasses the Pages base path: ${url}`);
    const relative = url.startsWith(publicPath) ? url.slice(publicPath.length) : path.relative(dist, path.resolve(path.dirname(file), url)).replaceAll("\\", "/");
    requireAsset(relative);
    checked++;
  }
}
function visit(node) {
  if (!node || typeof node !== "object") return;
  if (node.type === "StringLiteral" && /^(img|docs|visualizations)\//.test(node.value)) { requireAsset(node.value); checked++; }
  if (node.type === "TemplateLiteral" && /^(img|docs|visualizations)\//.test(node.quasis[0].value.cooked)) {
    assert.equal(node.expressions.length, 0, "List local asset paths explicitly so every file can be checked before publishing.");
    requireAsset(node.quasis[0].value.cooked);
    checked++;
  }
  for (const [key, value] of Object.entries(node)) {
    if (["loc", "start", "end", "extra", "comments", "tokens"].includes(key)) continue;
    if (Array.isArray(value)) value.forEach(visit);
    else if (value && typeof value === "object") visit(value);
  }
}
for (const source of walk(path.join(root, "src", "js")).filter(file => file.endsWith(".js"))) {
  visit(parseSync(fs.readFileSync(source, "utf8"), { configFile: false, babelrc: false, sourceType: "module", parserOpts: { plugins: ["jsx"] } }));
}
for (const [alias, source] of [["rovescalli_cv.pdf", "andrea-rovescalli-skills-en.pdf"], ["rovescalli_cv_fr.pdf", "andrea-rovescalli-skills-fr.pdf"], ["rovescalli_cv_ita.pdf", "andrea-rovescalli-skills-it.pdf"]]) {
  assert.ok(fs.readFileSync(requireAsset(`docs/${alias}`)).equals(fs.readFileSync(requireAsset(`docs/${source}`))), `Legacy CV URL is outdated: ${alias}`);
}
console.log(`Release verified: ${pageUrls.length} indexable HTML pages, ${files.length} files, ${(total / 1048576).toFixed(2)} MiB, ${checked} local references, no LFS pointers.`);
