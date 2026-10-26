# Bellintani portfolio — working rules

Static site (HTML/CSS/JS, no build). `main` on GitHub (fbllnt/bellintani.work) is deployed automatically by
a Cloudflare Worker named `bellintani-work` serving static assets (free plan; moved from Netlify on Oct 26 2026
after Netlify paused the site for deploy credits) to https://bellintani.work about a minute after each push.
Config: `wrangler.jsonc` (assets = repo root) and `.assetsignore` (files never served). Deploy command `npx wrangler deploy`.
Limits: 25 MB per file, 20,000 files, free builds a month are limited. Still batch pushes.

## Publishing workflow (agreed with Felipe)

- Felipe asked (Oct 2026) for publishing without asking first: once a change is finished and tested in the
  browser (desktop and phone widths), commit it and push to `main`. Don't push half-done work.
- After pushing, confirm the live site serves the new version and update the prototype artifact.
- Preview before going live (Felipe, Oct 24 2026): when Felipe wants to see a change first, push it to a branch and
  open a pull request instead of pushing to `main`. Cloudflare builds a preview for the branch at
  `https://<branch>-bellintani-work.<account>.workers.dev` (the exact link appears as a check on the PR); send him that link. Merge to `main` only when he approves.
- Before each push that changes CSS or JS, bump the `?v=` stamp on the three asset links in `index.html`
  (e.g. `v=$(date +%Y%m%d%H%M)`) so browsers fetch the new files instead of a cached copy.

## Projects hidden on the public site (Felipe, Oct 24 2026)

- bellintani.work (and the production `bellintani-work.<account>.workers.dev`) shows no projects: `main.js` empties `S.projects` and the `no-work` class
  hides the Work section and the Work link in the corner menu. Everything else stays.
- Felipe sees the full site on any preview link (`<branch or id>-bellintani-work.<account>.workers.dev`), or at https://bellintani.work/?full (remembered in that
  browser; `?public` switches back). Undo by removing the block "Projects hidden on the public site" in main.js.

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
`tags` (hashtags), meta with `before` (if a rebrand) / `sector` / `deliverables` / `tools` (Ferramentas & IA: a list in use order, AI tools prefixed with `*` and marked "IA"; Adobe is just "Adobe CC", never the individual apps — Felipe, Oct 26 2026), edge-to-edge cover, then numbered
chapters (`01 · Intro`, `Desafio`, `Naming`, `Posicionamento`, `Estratégia`, `Identidade aplicada`), each a `chapter`
item with kicker, big headline (`*words*` in the accent colour), short text, optional `pills`, followed by captioned
images that prove the text. Extra blocks: `swap` (before → after names), `word` (big word + dictionary entry),
`strip` (same-height row, e.g. posts), `marquee` (social carousel, shown as a still grid so every piece is whole). A project may set `theme`
({ bg, fg, mute, line, panel, accent }) to use its brand colours instead of the white page, when it makes sense.
Never invent facts for the text: ask Felipe.

Each project sets `type` (see `types` in content.js) and follows that kind's chapter pattern:
- branding: 01 Intro · Desafio · Naming/Símbolo · Sistema (cor, tipo) · Posicionamento/Estratégia · Identidade aplicada
- campaign (campanha/publicidade): 01 Ideia · Ativação/Key visual · Peças (rua, digital, social) · Filmes (no Resultados chapter: Felipe removed it Oct 26 2026)
- motion (filme/TV): 01 Ideia · Filme · Frames · Processo
Spacing: images inside a section sit close together (`--rg` = `--cg`); chapters open with a big gap and a 2px rule,
so sections read as clearly separate blocks.

## Grid and gaps (Felipe, Oct 26 2026)

- Content always fills the width between the page margins (16px), unlike the cover, which touches the edges.
- One gap for everything, `--gap` (8px on a phone up to 16px on a wide screen): between pieces in a row, between rows,
  grid columns, strips, marquees. No `--breathe` inset inside gallery frames.
- Loose galleries are justified rows: consecutive images/films share one height and fill the width (width in
  proportion to each ratio), so nothing is cropped and gaps are equal. `col: 1`, `span` 9+ or spans passing 12 start a
  new row; `shift`, `nudge`, `tight`, `speed` no longer do anything. A row taller than 115% of the screen narrows and centres.
  On phones, rows of landscape pieces stack; portrait pairs stay side by side. Captions sit 6px below each piece.
- Video buttons (play, sound, full screen) sit inside the film as one tag hanging from the top edge, `--tag-x` in from the left.

Missing material (Felipe, Oct 24 2026): when a project lacks something its pattern calls for (an image, a fact, a
section), put a visible placeholder instead of skipping it: a gallery item `{ todo: { en, pt }, ar?, col, span }`
(dashed box "Falta …") or `"?"` as a meta value (year, role…). Felipe finds and sends the material. If something
in a project doesn't fit, flag it to him so you decide together; never remove it silently.

## Domain

Registrar: Namecheap. Hosting: Cloudflare Worker `bellintani-work` (custom domains bellintani.work and www.bellintani.work).
Old Netlify DNS was A `@` → 75.2.60.5, CNAME `www` → fbllnt.netlify.app.
Keep the iCloud mail records (MX, TXT, `sig1._domainkey`) exactly as they are wherever DNS lives.
