# Bellintani portfolio — working rules

Static site (HTML/CSS/JS, no build). `main` on GitHub (fbllnt/bellintani.work) is deployed automatically by
Netlify to https://bellintani.work about a minute after each push.

## Publishing workflow (agreed with Felipe)

- Work locally during a session: edit, test in the browser (desktop and phone widths), show a preview.
  Commit each meaningful step locally, but **do not push** while working.
- **Push to `main` only** at the end of a session, after a significant update, or when Felipe says "publish".
  After pushing, confirm the live site serves the new version.
- Before a session ends with unpushed commits, ask: "Publish to the site?" The container is temporary;
  anything not pushed is lost.

## Content

- All copy and projects live in `js/content.js`, in two languages as `{ en, pt }` (EN-US / PT-BR).
- Projects can use `layout: "loose"` (free placement: `col`, `span`, `shift`, `speed`, `{ text }` lines),
  `hero: "bleed"`, videos (`video` MP4 + `webm` + `poster`) and a 360° viewer (`spin`).
- Compress media before adding: videos to 720p H.264 MP4 plus a VP9 WebM; images max 2000 px wide JPEG.
- Logos project (`layout: "logos"`): every logo file must be pure black #000000 on a transparent background
  (PNG or SVG, trimmed). Check each upload and correct off-blacks such as #231F20 before adding it.
- Typefaces: Figtree (display) and JetBrains Mono (small copy / body). White page, black type, blue accents.

## Domain

DNS at Namecheap: A `@` → 75.2.60.5, CNAME `www` → fbllnt.netlify.app.
Leave the iCloud mail records (MX, TXT, `sig1._domainkey`) untouched.
