# Bellintani portfolio — working rules

Static site (HTML/CSS/JS, no build). `main` on GitHub (fbllnt/bellintani.work) is deployed automatically by
Netlify to https://bellintani.work about a minute after each push.

## Publishing workflow (agreed with Felipe)

- Felipe asked (Oct 2026) for publishing without asking first: once a change is finished and tested in the
  browser (desktop and phone widths), commit it and push to `main`. Don't push half-done work.
- After pushing, confirm the live site serves the new version and update the prototype artifact.

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
