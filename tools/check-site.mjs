// Run before deploying: node tools/check-site.mjs
// Checks actual project assets, generated pages, links and cache versions without dependencies.
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { execFileSync } from "node:child_process";
import assert from "node:assert/strict";

const root = new URL("..", import.meta.url).pathname;
const read = file => fs.readFileSync(path.join(root, file), "utf8");
for (const file of ["js/main.js", "js/content.js", "worker/index.js", "tools/build-pages.mjs"]) {
  execFileSync(process.execPath, ["--check", path.join(root, file)]);
}
const context = { window: {} };
vm.runInNewContext(read("js/content.js"), context);
const site = context.window.SITE;
const projects = site.projects.filter(p => !p.hidden);
const slug = p => p.slug || String(p.title.en || p.title).toLowerCase().normalize("NFD")
  .replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
assert.equal(new Set(projects.map(slug)).size, projects.length, "Project slugs must be unique");

const assets = new Set();
function collect(value) {
  if (typeof value === "string" && /^(images|embeds)\//.test(value)) {
    // URL cache stamps are not part of a filename; expand sequence patterns below.
    if (!value.includes("#")) assets.add(value.split("?")[0]);
  } else if (Array.isArray(value)) value.forEach(collect);
  else if (value && typeof value === "object") {
    for (const key of ["spin", "scrub"]) {
      if (value[key]?.frames) {
        const sequence = value[key];
        for (let i = 1; i <= sequence.count; i++) {
          assets.add(sequence.frames.replace(/#+/, m => String(i).padStart(m.length, "0")));
        }
      }
    }
    Object.values(value).forEach(collect);
  }
}
collect(site);
for (const asset of assets) assert.ok(fs.existsSync(path.join(root, asset)), `Missing asset: ${asset}`);

execFileSync(process.execPath, [path.join(root, "tools/build-pages.mjs")]);
const sitemap = read("sitemap.xml");
for (const project of projects) {
  const route = `/p/${slug(project)}/`;
  const html = read(`${route.slice(1)}index.html`);
  assert.ok(html.includes(`<link rel="canonical" href="https://bellintani.work${route}">`), `Wrong canonical: ${route}`);
  assert.ok(html.includes(`<meta property="og:url" content="https://bellintani.work${route}">`), `Wrong preview: ${route}`);
  assert.ok(sitemap.includes(`<loc>https://bellintani.work${route}</loc>`), `Missing sitemap route: ${route}`);
  for (const block of html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)) JSON.parse(block[1]);
}
for (const project of site.projects.filter(p => p.hidden)) {
  assert.ok(!sitemap.includes(`/p/${slug(project)}/`), "Hidden project in sitemap");
}
const index = read("index.html");
assert.equal((index.match(/<base href="\/">/g) || []).length, 1, "A single root base URL keeps media valid after navigation");
const versions = [...index.matchAll(/(?:css\/style\.css|js\/(?:main|content)\.js)\?v=(\d+)/g)].map(m => m[1]);
assert.equal(versions.length, 3, "Every stylesheet/script needs a cache version");
assert.equal(new Set(versions).size, 1, "Asset cache versions must match");
console.log(`PASS: syntax; ${projects.length} project pages; ${assets.size} local assets including sequences; canonical/OG/JSON-LD/sitemap; cache versions.`);
