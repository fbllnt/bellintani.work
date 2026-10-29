# Bellintani — portfolio

Static site: plain HTML, CSS and JavaScript. No build step. Live at https://bellintani.work.

- `index.html` — page structure
- `css/style.css` — all styles
- `js/content.js` — **all copy and projects, in EN and PT** (edit this to update the site)
- `js/main.js` — intro, navigation, project pages, video and 360° viewer
- `images/` — project images, films (MP4 + WebM) and the 360° frames
- `embeds/` — self-contained pages shown inside a project (e.g. the ANTI landing page)

Working rules for the site (layout, images, publishing) are in `CLAUDE.md`.

## Run locally

```
python3 -m http.server 8000
```

## Deploy

Every push to `main` publishes to the Cloudflare Worker `bellintani-work` through GitHub Actions
(`.github/workflows/deploy.yml`). `wrangler.jsonc` serves the repository root as static files;
`.assetsignore` lists files that are never served and `_headers` sets the image cache.
