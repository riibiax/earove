const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const { parseSync } = require("@babel/core");

const root = path.resolve(__dirname, "..");
const dist = path.join(root, "dist");
const publicPath = new URL(require(path.join(root, "package.json")).homepage).pathname;
const walk = dir => fs.readdirSync(dir, { withFileTypes: true }).flatMap(item => item.isDirectory() ? walk(path.join(dir, item.name)) : [path.join(dir, item.name)]);
const files = walk(dist);
let total = 0;
for (const file of files) {
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
const html = fs.readFileSync(path.join(dist, "index.html"), "utf8");
for (const match of html.matchAll(/(?:src|href)="(\/[^"#]+)"/g)) {
  assert.ok(match[1].startsWith(publicPath), `Asset bypasses the Pages base path: ${match[1]}`);
  requireAsset(match[1].slice(publicPath.length));
  checked++;
}
assert.ok(html.includes(`src="${publicPath}main.`), `Production scripts must use the ${publicPath} base path.`);
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
  if (node.type === "StringLiteral" && /^(img|docs)\//.test(node.value)) { requireAsset(node.value); checked++; }
  if (node.type === "TemplateLiteral" && /^(img|docs)\//.test(node.quasis[0].value.cooked)) {
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
for (const source of walk(path.join(root, "src")).filter(file => file.endsWith(".js"))) {
  visit(parseSync(fs.readFileSync(source, "utf8"), { configFile: false, babelrc: false, sourceType: "module", parserOpts: { plugins: ["jsx"] } }));
}
for (const [alias, source] of [["rovescalli_cv.pdf", "andrea-rovescalli-skills-en.pdf"], ["rovescalli_cv_fr.pdf", "andrea-rovescalli-skills-fr.pdf"], ["rovescalli_cv_ita.pdf", "andrea-rovescalli-skills-it.pdf"]]) {
  assert.ok(fs.readFileSync(requireAsset(`docs/${alias}`)).equals(fs.readFileSync(requireAsset(`docs/${source}`))), `Legacy CV URL is outdated: ${alias}`);
}
console.log(`Release verified: ${files.length} files, ${(total / 1048576).toFixed(2)} MiB, ${checked} asset references, no LFS pointers in published files.`);
