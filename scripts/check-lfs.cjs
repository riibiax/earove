const assert = require("node:assert/strict");
const crypto = require("node:crypto");
const fs = require("node:fs");
const path = require("node:path");
const { execFileSync } = require("node:child_process");

const root = path.resolve(__dirname, "..");
const git = (args, options = {}) => execFileSync("git", args, { cwd: root, encoding: "utf8", maxBuffer: 16 * 1024 * 1024, ...options });
const digest = bytes => crypto.createHash("sha256").update(bytes).digest("hex");

// Check the staged snapshot: that is what the next commit will actually contain.
const records = git(["ls-files", "--stage", "-z", "--", "img", "docs", "src/fonts", "d8210a18b13b602bc230.ico"])
  .split("\0").filter(Boolean).map(record => {
    const [metadata, file] = record.split("\t");
    const [, oid, stage] = metadata.split(" ");
    assert.equal(stage, "0", `Resolve the asset conflict: ${file}`);
    return { file, oid };
  });
const attributes = git(["check-attr", "-z", "--cached", "--stdin", "filter"], { input: records.map(r => r.file).join("\0") + "\0" }).split("\0");
const lfsFiles = new Set();
for (let i = 0; i + 2 < attributes.length; i += 3) if (attributes[i + 2] === "lfs") lfsFiles.add(attributes[i]);
const tracked = records.filter(r => lfsFiles.has(r.file));
assert.ok(tracked.length > 0, "No staged LFS assets found. Stage the intended assets first.");

const objectIds = [...new Set(tracked.map(r => r.oid))];
const sizes = git(["cat-file", "--batch-check"], { input: objectIds.join("\n") + "\n" }).trim().split("\n");
for (const line of sizes) assert.ok(Number(line.split(" ")[2]) < 1024, `A staged LFS asset is still an ordinary Git blob: ${line}`);
const contents = git(["cat-file", "--batch"], { input: objectIds.join("\n") + "\n", encoding: null });
const pointers = new Map();
let cursor = 0;
while (cursor < contents.length) {
  const end = contents.indexOf(10, cursor);
  const [oid, type, size] = contents.subarray(cursor, end).toString().split(" ");
  assert.equal(type, "blob");
  cursor = end + 1;
  pointers.set(oid, contents.subarray(cursor, cursor + Number(size)).toString());
  cursor += Number(size) + 1;
}
const mediaDir = git(["lfs", "env"]).split(/\r?\n/).find(line => line.startsWith("LocalMediaDir=")).slice("LocalMediaDir=".length);
let bytes = 0;
for (const { file, oid } of tracked) {
  const pointer = pointers.get(oid);
  assert.ok(pointer.startsWith("version https://git-lfs.github.com/spec/v1\n"), `Invalid LFS pointer: ${file}`);
  const hash = pointer.match(/^oid sha256:([a-f0-9]{64})$/m)?.[1];
  const size = Number(pointer.match(/^size (\d+)$/m)?.[1]);
  assert.ok(hash && Number.isSafeInteger(size), `Malformed pointer: ${file}`);
  const local = fs.readFileSync(path.join(root, file));
  assert.equal(local.length, size, `Working asset size mismatch: ${file}`);
  assert.equal(digest(local), hash, `Working asset differs from staged pointer: ${file}`);
  const object = fs.readFileSync(path.join(mediaDir, hash.slice(0, 2), hash.slice(2, 4), hash));
  assert.equal(digest(object), hash, `Missing or damaged local LFS object: ${file}`);
  bytes += size;
}
assert.equal(git(["config", "--get", "filter.lfs.required"]).trim(), "true", "Git LFS filter must be required.");
const hook = path.resolve(root, git(["rev-parse", "--git-path", "hooks/pre-push"]).trim());
assert.ok(fs.readFileSync(hook, "utf8").includes("git lfs pre-push"), "Git LFS pre-push hook is missing.");
console.log(`Git LFS verified: ${tracked.length} staged pointers, matching working files and local objects (${(bytes / 1048576).toFixed(2)} MiB).`);
