// Builds one page per project at /p/<slug>/ and the sitemap, from index.html and js/content.js.
// Runs in the deploy (GitHub Actions) right before `wrangler deploy`; the output is not committed (.gitignore).
// Local preview: `node tools/build-pages.mjs`, then serve the folder.
//
// Each page is the normal site (same body and scripts) with its own title, description, canonical address and
// link preview (the project cover). `<base href="/">` keeps every relative path working one folder down, and a
// small script opens the project on load (the site routes by #p-<slug>). Links inside a project page that go
// elsewhere (#work, #p-other) resolve to the home page through the base, so they load it as usual.
import fs from "node:fs";
import vm from "node:vm";

const SITE_URL = "https://bellintani.work";
const root = new URL("..", import.meta.url).pathname;
const read = f => fs.readFileSync(root + f, "utf8");

const ctx = { window: {} };
vm.createContext(ctx);
vm.runInContext(read("js/content.js"), ctx);
const S = ctx.window.SITE;

// Same slug rule as main.js
const slugOf = p => p.slug || String(p.title.en || p.title).toLowerCase().normalize("NFD")
  .replace(/[̀-ͯ]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
const en = v => (v && typeof v === "object" ? v.en : v) || "";
const esc = s => String(s).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
// Search results show about 155 characters: cut at a word and add an ellipsis
const clip = (s, n = 155) => s.length <= n ? s : s.slice(0, s.lastIndexOf(" ", n - 1)).replace(/[,;:.—-]+$/, "") + "…";

const index = read("index.html");
const swap = (html, re, to) => {
  if (!re.test(html)) throw new Error(`index.html: ${re} not found`);
  return html.replace(re, to);
};

const projects = S.projects.filter(p => !p.hidden);
fs.rmSync(root + "p", { recursive: true, force: true });

for (const p of projects) {
  const slug = slugOf(p), url = `${SITE_URL}/p/${slug}/`;
  const title = `${en(p.title)} — Bellintani`;
  const summary = en(p.summary) || en(p.scope);
  const desc = clip(`${en(p.title)}${p.year ? ` (${p.year})` : ""}. ${summary}`);
  const image = `${SITE_URL}/${p.image || "images/og.jpg"}`;
  const ld = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "@id": `${url}#work`,
    name: en(p.title),
    url,
    description: summary,
    image,
    ...(p.client ? { sourceOrganization: { "@type": "Organization", name: en(p.client) } } : {}),
    ...(p.tags ? { keywords: (p.tags.en || p.tags).join(", ") } : {}),
    author: { "@type": "Person", "@id": `${SITE_URL}/#felipe`, name: "Felipe Bellintani", url: `${SITE_URL}/` },
    isPartOf: { "@id": `${SITE_URL}/#site` },
  };

  let html = index;
  html = swap(html, /<meta charset="utf-8">/, `<meta charset="utf-8">\n<base href="/">`);
  html = swap(html, /<title>[^<]*<\/title>/, `<title>${esc(title)}</title>`);
  html = swap(html, /<meta name="description" content="[^"]*">/, `<meta name="description" content="${esc(desc)}">`);
  html = swap(html, /<link rel="canonical" href="[^"]*">/, `<link rel="canonical" href="${url}">`);
  html = swap(html, /<meta property="og:type" content="[^"]*">/, `<meta property="og:type" content="article">`);
  html = swap(html, /<meta property="og:url" content="[^"]*">/, `<meta property="og:url" content="${url}">`);
  html = swap(html, /<meta property="og:title" content="[^"]*">/, `<meta property="og:title" content="${esc(title)}">`);
  html = swap(html, /<meta property="og:description" content="[^"]*">/, `<meta property="og:description" content="${esc(desc)}">`);
  // The cover replaces the site card; its size differs, so the fixed 1200×630 is dropped
  html = swap(html, /<meta property="og:image" content="[^"]*">\n<meta property="og:image:width" content="\d+">\n<meta property="og:image:height" content="\d+">/,
    `<meta property="og:image" content="${image}">\n<meta property="og:image:alt" content="${esc(en(p.title))}">`);
  html = swap(html, /<\/script>\n(<link rel="preconnect")/, `</script>\n<script type="application/ld+json">${JSON.stringify(ld)}</script>\n$1`);
  // Open the project on arrival (keeps any #p-… already in the address)
  html = swap(html, /<script src="js\/content\.js/, `<script>if(!location.hash)history.replaceState(null,"","/p/${slug}/#p-${slug}")</script>\n<script src="js/content.js`);

  fs.mkdirSync(`${root}p/${slug}`, { recursive: true });
  fs.writeFileSync(`${root}p/${slug}/index.html`, html);
}

const today = new Date().toISOString().slice(0, 10);
const urls = [`${SITE_URL}/`, ...projects.map(p => `${SITE_URL}/p/${slugOf(p)}/`)];
fs.writeFileSync(root + "sitemap.xml", `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(u => `  <url><loc>${u}</loc><lastmod>${today}</lastmod></url>`).join("\n")}
</urlset>
`);

console.log(`Built ${projects.length} project pages in p/ and sitemap.xml (${urls.length} URLs).`);
