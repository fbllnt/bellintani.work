# Bellintani — portfolio

Static site: plain HTML, CSS and JavaScript, no framework. Live at https://bellintani.work.
The only build step is `tools/build-pages.mjs`, which writes one page per project at `/p/<slug>/` and `sitemap.xml`.

- `index.html` — page structure
- `css/style.css` — all styles
- `js/content.js` — **all copy and projects, in EN, PT and ES** (edit this to update the site)
- `js/main.js` — intro, navigation, project pages, video and 360° viewer
- `images/` — project images, films (MP4 + WebM) and the 360° frames
- `embeds/` — self-contained pages shown inside a project (e.g. the ANTI landing page)

Working rules for the site (layout, images, publishing) are in `CLAUDE.md`.

## Run locally

```
node tools/build-pages.mjs   # project pages at /p/<slug>/
python3 -m http.server 8000
```

Before publishing: `node tools/check-site.mjs` (syntax, missing files, generated pages, cache stamps).

## Deploy

Every push to `main` publishes to the Cloudflare Worker `bellintani-work` through GitHub Actions
(`.github/workflows/deploy.yml`). `wrangler.jsonc` serves the repository root as static files;
`.assetsignore` lists files that are never served and `_headers` sets the image cache.
