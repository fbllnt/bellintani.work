# Bellintani portfolio — working rules

Static site (HTML/CSS/JS, no build). `main` on GitHub (fbllnt/bellintani.work) is deployed automatically by
a Cloudflare Worker named `bellintani-work` serving static assets (free plan; moved from Netlify on Oct 26 2026
after Netlify paused the site for deploy credits) to https://bellintani.work about a minute after each push.
Config: `wrangler.jsonc` (assets = repo root; its build step runs `tools/build-pages.mjs`, which writes the
/p/<slug>/ project pages and sitemap.xml), `.assetsignore` (files never served) and `_headers` (images cached
for a day: replacing an image under the same name can take that long to reach returning visitors, so rename it instead). Deploy command `npx wrangler deploy`.
Deploys run from GitHub Actions (`.github/workflows/deploy.yml`, secret `CLOUDFLARE_API_TOKEN`) because Cloudflare's own
Workers Builds started skipping builds on Oct 26 2026. Check a deploy with `gh run list --workflow deploy.yml`.
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

## New projects: draft until approved (Felipe, Oct 29 2026)

- A new project goes in with `hidden: true` and stays off the live site while it is being built. Felipe reviews it on a
  hidden preview link in the browser (a `wrangler versions upload` preview of the draft, never the production deploy) and
  it goes live (remove `hidden`) only when he says it is ready. Don't push an unfinished project live.
- Logos and lettering that arrive with a colour block from the source file: always remove that background (transparent
  PNG) so the page's own background shows through.

## Pending ideas (Felipe)

- Oct 29 2026: a text on how he works with AI and the tools he uses (likely near the AI filter or the "Vibe Coding & AI
  Workflows" service). He is still thinking it through: don't write it unprompted, and the copy/tools must come from him.

## Launch (Felipe, Oct 28 2026)

- The site is public with all projects: the old "Projects hidden on the public site" block was removed from main.js
  (the unused `.no-work` rule in style.css can bring it back). `hidden: true` in content.js still hides a single project.
- Icon: Figtree Black "B" centred with a small ® (favicon.svg, apple-touch-icon.png, images/icon-512.png; avatars in the
  project files folder avatar-b/).

## Content

- Corner links (Oct 27 2026 review): scrolling down past the first screen hides the bottom corners (all four on phones);
  scrolling up brings them back, so they never sit on the work. Project meta shows Type only when a project has no Scope.
  Chapters are numbered from 01 in every project, Desafio and Identidade aplicada included.

- Music (Felipe, Oct 27 2026): "♪ Música" in the top-right corner opens a small Spotify embed (loaded only when opened)
  with the song suggested for the page: each project's `track: { id, name, by }`, `homeTrack` on the home. It keeps
  playing across pages; on another project it offers that project's song. The intro jingle was tried and removed (Felipe, Oct 27 2026: it did not work); no sound in the intro.
- All copy and projects live in `js/content.js`, in two languages as `{ en, pt }` (EN-US / PT-BR).
- Work order (Felipe, Oct 28 2026): FIXED, exactly the order of `projects` in content.js (no shuffle). As of Oct 28 2026:
  Seja ANTI, Globo, SCRV*, HOUSECALL PRO, XP Inc., Cinema Especial, PopStar, (THURA hidden), Tela Quente, CoreHi,
  Adidas 60, DJ Shadow (added Oct 29 2026), Dirty Projectors, Globoplay, DMA, Explosions in the Sky (added Oct 29 2026), (Lomography hidden), Logofolio always last.
  content.js is the source of truth; update this list when the order changes. The home has only the Index list (the Grid view was removed). Ask Felipe where a new project goes.
- `spotify: "artist/<id>"` (or album/playlist) in a gallery puts a Spotify player in place (`h`, default 452px); used for
  the Explosions in the Sky top tracks.
- Projects can use `layout: "loose"` (free placement: `col`, `span`, `shift`, `speed`, `{ text }` lines),
  `hero: "bleed"`, videos (`video` MP4 + `webm` + `poster`) and a 360° viewer (`spin`).
- Compress media before adding: videos to 720p H.264 MP4 plus a VP9 WebM; images max 2000 px wide JPEG.
- Lomography (`layout: "lomo"`, Felipe Oct 27 2026): one horizontal film roll per camera (Fisheye, Super Sampler, LC-A),
  two or three photos in view, arrows + drag/swipe, no full-screen view. Camera = the `camera` field of each photo.
  Drag cues: "← Arraste →" in each roll head, a position bar under it, a one-time slide on entering view, and the
  cursor ball grows into a labelled drag handle over a roll. Cover = Super Sampler losangeles-01.
- Logos project (`layout: "logos"`): every logo file must be pure black #000000 on a transparent background
  (PNG or SVG, trimmed). Check each upload and correct off-blacks such as #231F20 before adding it.
- Typefaces: Figtree (display) and JetBrains Mono (small copy / body). White page, black type, blue accents.
- Colour rule (Felipe, Oct 29 2026): highlights and hovers use the project's own contrast colour (theme `accent`).
  When a project has no colour of its own (no theme, or a black/white accent such as Cinema Especial and Adidas 60),
  use the site blue #1a2bff (`var(--ai,var(--blue))`).

## Images: never crop (Felipe, Oct 24 2026)

- Never cut any part of an image, anywhere on the site (galleries, home cards, sequences, photo tiles,
  thumbnails, full screen; desktop and phone). Use `object-fit: contain`, never `cover`, and no zoom-in
  (`scale` > 1) or parallax shift of an image inside its frame.
- Pointer effects (Felipe, Oct 28 2026: "manter sem cortar"): move the whole piece (`.ph`, frame and image together),
  never the image inside it, and at most 3px so it never reaches a neighbour (`case-depth`, CoreHi). Living gradients
  are drawn as a `coverFlow` colour layer over the still, never by zooming the image (Globo cover; a gallery item can reuse it with `coverFlow: true`).
- Gallery images get breathing room: they sit inside their frame with the `--breathe` margin of white page around them (no grey frames: Felipe said "sem cinza").
- No image may cover part of another: gallery items don't drift on scroll, and `unstack()` in main.js pushes
  down any item a negative `shift` pulls over an earlier one.
- Exception: the cover at the top of each project page runs edge to edge (full width, no side margin), with its
  height following the image's own proportion, so it is not cut either.

## Project page template (agreed with Felipe, Oct 24 2026)

Project pages follow the THURA case (SCRV.ag format, reference artifact https://claude.ai/artifact/KSPS6ZoiADyGuixJDJoSt6):
`tags` (hashtags), meta with `before` (if a rebrand) / `sector` / `deliverables` / `tools` (Ferramentas & IA: a list in use order, AI tools prefixed with `*` and marked "IA", always in a contrast colour: the project accent, or the site blue when the project has no colour or a black/white accent; Adobe is just "Adobe CC", never the individual apps — Felipe, Oct 26 2026), edge-to-edge cover, then numbered
chapters (`01 · Intro`, `Desafio`, `Naming`, `Posicionamento`, `Estratégia`, `Identidade aplicada`), each a `chapter`
item with kicker, big headline (`*words*` in the accent colour), short text, optional `pills`, followed by captioned
images that prove the text. Extra blocks: `swap` (before → after names), `word` (big word + dictionary entry),
`strip` (same-height row, e.g. posts), `marquee` (social carousel, shown as a still grid so every piece is whole), `rooms` (a few named groups, one large piece at a time with arrows/swipe and no thumbnail strip; used for Globo signage). A project may set `theme`
({ bg, fg, mute, line, panel, accent }) to use its brand colours instead of the white page, when it makes sense.
Never invent facts for the text: ask Felipe.

Each project sets `type` (see `types` in content.js) and follows that kind's chapter pattern:
- branding: 01 Intro · Desafio · Naming/Símbolo · Sistema (cor, tipo) · Posicionamento/Estratégia · Identidade aplicada
- campaign (campanha/publicidade): 01 Ideia · Ativação/Key visual · Peças (rua, digital, social) · Filmes (no Resultados chapter: Felipe removed it Oct 26 2026)
- motion (filme/TV): 01 Ideia · Filme · Frames · Processo
Spacing: images inside a section sit close together (`--rg` = `--cg`); chapters open with a big gap and a 1px rule (thinned from 2px, Felipe Oct 29 2026),
so sections read as clearly separate blocks.

## Grid and gaps (Felipe, Oct 26 2026)

- Content always fills the width between the page margins (`--side`: 16px on a phone up to 32px on a wide screen, same
  left and right; Oct 27 2026 review), unlike the cover, which touches the edges.
- One 12-column grid with `--gap` for everything (Oct 27 2026 review): chapter label = columns 1-4, chapter headline/text/
  pills, case "about" text, flips and `.ltext` sub-headings = columns 5-12; meta = 6 per row, stats = 6, services = 3,
  cards = 4; narrow strips = the middle 10 columns. Don't use free fractions (1fr 2fr, 84%, auto-fit minmax) for layout.
- Optical left edge: `inkAlign()` in main.js pulls big type (name, intro lines, titles, headlines) left by its first
  glyph's side bearing, so its ink sits on the margin. Add new display-type selectors to its `INK` list.
- Slide-type images with empty white borders get the border trimmed (content untouched) so pairs don't show white voids.
- One gap for everything, `--gap` (8px on a phone up to 16px on a wide screen): between pieces in a row, between rows,
  grid columns, strips, marquees. No `--breathe` inset inside gallery frames.
- Loose galleries are justified rows: consecutive images/films share one height and fill the width (width in
  proportion to each ratio), so nothing is cropped and gaps are equal. `col: 1`, `span` 9+ or spans passing 12 start a
  new row; `shift`, `nudge`, `tight`, `speed` no longer do anything. A row taller than 115% of the screen narrows and centres.
  On phones, rows of landscape pieces stack; portrait pairs stay side by side. Captions sit 6px below each piece.
- Video buttons (play, sound, full screen) sit inside the film as one tag hanging from the top edge, `--tag-x` in from the left.
- Grids per project (Felipe, Oct 27 2026): `grid` on a project picks one of five ways to fill the 12 columns, and
  `grid` on a chapter switches from there on. fluxo = justified rows by col/span (the original); destaque = one
  piece, then two, then three (films max two per row); trilho = chapter text sticky in cols 1-4, its pieces in 5-12;
  modulos = equal cells (`cell`, default 4/3), piece contained on the panel colour, 3+ pieces only; cartaz = huge
  chapter headline across the columns, first piece in 1-6 beside the text. Picker artifact with Felipe's choices:
  https://claude.ai/artifact/U5iuV1W89pBKLttprKtTy7 (db collection `escolhas`).
- Text beside images (Felipe, Oct 27 2026): a chapter or a text line never floats alone above its images; it sits in
  cols 1-4 next to the first piece, flip, strip or live page that follows (cols 5-12). Phones stack text first.

Missing material (Felipe, Oct 24 2026): when a project lacks something its pattern calls for (an image, a fact, a
section), put a visible placeholder instead of skipping it: a gallery item `{ todo: { en, pt }, ar?, col, span }`
(dashed box "Falta …") or `"?"` as a meta value (year, role…). Felipe finds and sends the material. If something
in a project doesn't fit, flag it to him so you decide together; never remove it silently.
For launch (Felipe, Oct 27 2026) `showMissing: false` in content.js keeps the placeholders off the site: "?" meta values,
todo boxes and a chapter left empty are dropped and chapters renumber themselves. Add `?missing` to the address to see
them; set `showMissing: true` to bring them back for everyone. Keep adding placeholders as before.

## Domain

Registrar: Namecheap. Hosting: Cloudflare Worker `bellintani-work` (custom domains bellintani.work and www.bellintani.work).
Old Netlify DNS was A `@` → 75.2.60.5, CNAME `www` → fbllnt.netlify.app.
Keep the iCloud mail records (MX, TXT, `sig1._domainkey`) exactly as they are wherever DNS lives.
