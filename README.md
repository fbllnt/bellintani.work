# Bellintani — portfolio

Static site: plain HTML, CSS and JavaScript. No build step.

- `index.html` — page structure
- `css/style.css` — all styles
- `js/content.js` — **all copy and projects, in EN and PT** (edit this to update the site)
- `js/main.js` — intro, navigation, project pages, video and 360° viewer
- `images/` — project images, films (MP4 + WebM) and the 360° frames

## Run locally

Open `index.html` in a browser, or serve the folder:

```
python3 -m http.server 8000
```

## Deploy

Any static host works (Netlify, Vercel, Cloudflare Pages, GitHub Pages).
Publish directory: the repository root. No build command.
