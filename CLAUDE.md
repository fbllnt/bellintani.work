# Bellintani portfolio — working rules

Static site (HTML/CSS/JS, no build). `main` on GitHub (fbllnt/bellintani.work) is deployed automatically by
Netlify to https://bellintani.work about a minute after each push.

## Publishing workflow (agreed with Felipe)

- Felipe asked (Oct 2026) for publishing without asking first: once a change is finished and tested in the
  browser (desktop and phone widths), commit it and push to `main`. Don't push half-done work.
- After pushing, confirm the live site serves the new version and update the prototype artifact.
- Before each push that changes CSS or JS, bump the `?v=` stamp on the three asset links in `index.html`
  (e.g. `v=$(date +%Y%m%d%H%M)`) so browsers fetch the new files instead of a cached copy.

## Content

- All copy and projects live in `js/content.js`, in two languages as `{ en, pt }` (EN-US / PT-BR).
- Projects can use `layout: "loose"` (free placement: `col`, `span`, `shift`, `speed`, `{ text }` lines),
  `hero: "bleed"`, videos (`video` MP4 + `webm` + `poster`) and a 360° viewer (`spin`).
- Compress media before adding: videos to 720p H.264 MP4 plus a VP9 WebM; images max 2000 px wide JPEG.
- Logos project (`layout: "logos"`): every logo file must be pure black #000000 on a transparent background
  (PNG or SVG, trimmed). Check each upload and correct off-blacks such as #231F20 before adding it.
- Typefaces: Figtree (display) and JetBrains Mono (small copy / body). White page, black type, blue accents.

## Images: never crop (Felipe, Oct 24 2026)

- Never cut any part of an image, anywhere on the site (galleries, home cards, sequences, photo tiles,
  thumbnails, full screen; desktop and phone). Use `object-fit: contain`, never `cover`, and no zoom-in
  (`scale` > 1) or parallax shift of an image inside its frame.
- Gallery images get breathing room: they sit inside their frame with the `--breathe` margin of white page around them (no grey frames: Felipe said "sem cinza").
- No image may cover part of another: gallery items don't drift on scroll, and `unstack()` in main.js pushes
  down any item a negative `shift` pulls over an earlier one.
- Exception: the cover at the top of each project page runs edge to edge (full width, no side margin), with its
  height following the image's own proportion, so it is not cut either.

## Project page template (agreed with Felipe, Oct 24 2026)

Project pages follow the THURA case (SCRV.ag format, reference artifact https://claude.ai/artifact/KSPS6ZoiADyGuixJDJoSt6):
`tags` (hashtags), meta with `before` (if a rebrand) / `sector` / `deliverables`, edge-to-edge cover, then numbered
chapters (`01 · Intro`, `Desafio`, `Naming`, `Posicionamento`, `Estratégia`, `Identidade aplicada`), each a `chapter`
item with kicker, big headline (`*words*` in the accent colour), short text, optional `pills`, followed by captioned
images that prove the text. Extra blocks: `swap` (before → after names), `word` (big word + dictionary entry),
`strip` (same-height row, e.g. posts), `marquee` (sliding social carousel). A project may set `theme`
({ bg, fg, mute, line, panel, accent }) to use its brand colours instead of the white page, when it makes sense.
Never invent facts for the text: ask Felipe.

## Domain

DNS at Namecheap: A `@` → 75.2.60.5, CNAME `www` → fbllnt.netlify.app.
Leave the iCloud mail records (MX, TXT, `sig1._domainkey`) untouched.
