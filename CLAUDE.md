## Atualização aprovada em 4 de novembro de 2026

Felipe pediu remover as disciplinas dos cases. Foram removidas também do Sobre para evitar repetição. Manter serviços na homepage, filtros de trabalhos, hashtags, ficha técnica, introdução, números e materiais. Não restaurar `.case-disc` nem os antigos arrays `disciplines`; esta decisão substitui as referências anteriores abaixo. A navegação agora usa `/p/<slug>/` com History API e aceita os antigos links `#p-`. Executar `node tools/check-site.mjs` antes de publicar.

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

- Small, explicit fixes (a text, a number, a typo Felipe asked for) go live without asking: once finished and tested
  in the browser (desktop and phone widths), commit and push to `main`. Don't push half-done work. Anything visual or
  new goes through the preview below first.
- After pushing, confirm the live site serves the new version and update the prototype artifact.
- Preview before going live (Felipe, Oct 24 2026; workflow since Oct 29 2026): new projects and visual changes are built
  on a `rascunho/<name>` branch and shown on a hidden preview made with
  `npx wrangler versions upload --preview-alias <name>` → `https://<name>-bellintani-work.fbellintani.workers.dev`
  (pushing a `rascunho/<name>` branch runs `.github/workflows/preview.yml`, which does this upload from GitHub Actions)
  (never the production deploy). Publish only when Felipe says "aprovado": `git checkout main && git merge --ff-only`,
  push, delete the branch, then check `gh run watch` and curl the live `?v=` stamp. Small explicit text/data fixes
  may go straight live once tested.
- Before each push that changes CSS or JS, bump the `?v=` stamp on the three asset links in `index.html`
  (e.g. `v=$(date +%Y%m%d%H%M)`) so browsers fetch the new files instead of a cached copy. `_headers` caches
  `/css/*` and `/js/*` for a year as immutable, so a missed bump means visitors keep the old file.

## New projects: draft until approved (Felipe, Oct 29 2026)

- A new project goes in with `hidden: true` and stays off the live site while it is being built. Felipe reviews it on a
  hidden preview link in the browser (a `wrangler versions upload` preview of the draft, never the production deploy) and
  it goes live (remove `hidden`) only when he says it is ready. Don't push an unfinished project live.
- Logos and lettering that arrive with a colour block from the source file: always remove that background (transparent
  PNG) so the page's own background shows through.

## Pending ideas (Felipe)

- Oct 29 2026: a text on how he works with AI and the tools he uses (likely near the AI filter or the "Vibe Coding & AI
  Workflows" service). He is still thinking it through: don't write it unprompted, and the copy/tools must come from him.
- Nov 1 2026 answers (Felipe): keep "Work" in the top menu (don't remove it). Service 04 = "Video, Content & TV" (Felipe, Nov 1 15:45Z; was "Video & TV") in all three
  languages. HCP Top 50 Names cites only Flora.AI and Claude Code as AI tools (Nano Banana Pro, Topaz, Seedance taken out
  of the text; the step-strip images still show those names baked in, asked him). Globo has a ficha técnica: Type design =
  Plau, Sinalização = Estúdio Sílvia Girão. Drag cursor on rolls / 360°: the 92px circle goes, the 11px ball shows
  "← Drag →" in the `.ball-tag` chip; `theme.accentText` = a stronger accent tone for text
  only (Explosions #ff5c94, Dirty Projectors #c8102e, CoreHi #d01436). Approved and LIVE Nov 1 2026.
- Waiting on Felipe (review pages sent Nov 1 2026): image alt texts (96 suggestions, PT/EN, https://claude.ai/artifact/Ybs93J9e4GiaXaoij2LWsc;
  then add an optional `alt: { en, pt, es }` per image), research ideas GRID button / fixed list caption / drawn rules /
  Ikeda-style poster data (demos at https://claude.ai/artifact/GeTAyFHSdo44frEKWHhT24). Felipe chose (Nov 1 2026): NO GRID
  button, NO Ikeda poster data; YES running caption under the work list (`.list-cap`, replaces the bottom corners while the
  list is on screen) and YES drawn rules on the project sheet and chapters (`.fx-lines`); approved and LIVE Nov 1 2026.
  Still open: whether the ♪ leaves the work-list invite line; ← → keys between projects, cover-to-project transition.
  Research: `../pesquisa-sites-minimalistas-2026-10-29.md`; audit: `notas/auditoria-bellintani-2026-10-29.md` in the project files.

## Navigation and interaction (Felipe, Oct 29-30 2026)

- Cursor rule (Felipe, Nov 16 2026): the dot and its trail are ALWAYS the same colour. They share one layer (`.cursor-layer`), so any blend
  treats them as one shape. In Ramón's case only, that layer inverts (white on black, black on white) so the cursor never disappears;
  everywhere else it keeps its own colour.
- Cursor: the trailing ball is one fixed size, 11px (no dot/big switch, no change on hover; Felipe found the switch
  strange). Over a work-list row a small "View" / "Ver" chip (`.ball-tag`, `ui.viewProject`) rides next to it, filled
  with the ball colour. Over rolls and the 360° viewer the ball stays 11px and the chip reads "← Drag →" (Nov 1 2026).
- Work list hover: the title gets a strike-through line in the project's accent colour (`.index .ti`).
- Arrows: plain SVG arrows with no circle around them, everywhere (`arw()` / `arwSvg()` at the top of main.js).
- Project header: title and hashtags only (no "All work", no prev/number/next up there).
- Project sheet (`.case-sheet`): the facts (meta) pinned in cols 1-4 while the summary and numbers sit on the right
  (the discipline list was removed Nov 4 2026, see the note at the top).
- Project end: the original `case-neighbors` (← previous · next →, two titles side by side). A big "next project"
  page-turn card with the cover was tried Oct 30 2026 and rejected ("Não gostei"): don't bring it back.
- Closing a project returns to its row in the work list (centred), and the title flashes in the project's accent
  (`back-here`, #1a2bff for black/white projects).
- Intro: the full intro on the first visit and on "Rever intro"; a quick ~1.5s version (`.play.quick`) when the visitor
  came back within 7 days (`localStorage.introSeen`). No intro when returning from a project or with reduced motion.

## Launch (Felipe, Oct 28 2026)

- The site is public with all projects: the old "Projects hidden on the public site" block was removed from main.js
  (the unused `.no-work` rule in style.css can bring it back). `hidden: true` in content.js still hides a single project.
- Icon: Figtree Black "B" centred with a small ® (favicon.svg, apple-touch-icon.png, images/icon-512.png; avatars in the
  project files folder avatar-b/).

## Brand pages with cases inside (sub-cases; Felipe, Nov 13-15 2026)

- A project with `cases: [...]` (Housecall Pro; Globo = Rebranding, Globo On, Globoplay) opens on the brand
  (cover, intro `summary`, fact sheet), then the list "BRAND / CASES (0N)". A row opens its case in place.
- The open case's bar (sticky, edge to edge once it reaches the top) shows the crumb "BRAND / CASE 02 DE 03" above the
  title, then ← n / N →, then the ✕ alone at the far right, a little apart, in the case colour. Under it, a track with one
  clickable segment per case (the open one filled in the case accent). Scope and year are NOT in the bar (they are in
  the case's fact sheet). On phones the bar keeps only the arrows and the ✕. This is the rule for every job with sub-cases.
- Top menu (Nov 15 2026): Início/Home, Trabalhos/Work, Sobre/About, Trilha/Soundtrack, EN/PT. Home goes to the top of the home.

## Content

- Lines (Felipe approved Nov 11 2026): every separator is `var(--rule-w) solid var(--fg)` (1px, the section's own ink); the light
  `--line` grey is only for control outlines (filters, pills, player, logo tiles). Lines draw once on entering view, then stay.
- Corner links (Oct 27 2026 review; all four on every screen since Nov 11 2026): scrolling down past the first screen hides the corners;
  scrolling up brings them back, so they never sit on the work. Project meta shows Type only when a project has no Scope.
  Chapters are numbered from 01 in every project, Desafio and Identidade aplicada included.

- Music (Felipe, Oct 27 2026): "Soundtrack" / "Trilha" (no ♪ since Oct 29 2026) in the top-right corner opens a small Spotify embed (loaded only when opened)
  with the song suggested for the page: each project's `track: { id, name, by }`, `homeTrack` on the home. It keeps
  playing across pages; on another project it offers that project's song. The intro jingle was tried and removed (Felipe, Oct 27 2026: it did not work); no sound in the intro.
- All copy and projects live in `js/content.js`, in three languages as `{ en, pt, es }` (EN-US / PT-BR / Spanish, neutral
  Latin American, "tú"; added Oct 29 2026). New text needs all three; a missing `es` falls back to English.
- Language on arrival (Felipe, Nov 16 2026: "mostre o site sempre em inglês primeiro"): English for everyone; only the
  visitor's own EN / PT choice (saved) changes it. The country cookie (worker/index.js) and browser language no longer pick PT.
  (Was: saved choice, else the visitor's country (worker/index.js sets a `geo` cookie on page requests:)
  Brazil → PT, anywhere else → EN), else the browser language. Switcher: an EN / PT pill with a sliding knob (Felipe's
  "Future / Now" reference, Oct 29 2026). Spanish is hidden for now (Felipe, Oct 29 2026) but its `es` text stays in
  content.js and must still be written for new copy; main.js says how to switch it back on.
- Work order (Felipe, Oct 28 2026): FIXED, exactly the order of `projects` in content.js (no shuffle). As of Oct 28 2026:
  Seja ANTI, Globo, SCRV*, HOUSECALL PRO, XP Inc., Cinema Especial, PopStar, (THURA hidden), Tela Quente, CoreHi,
  Adidas 60, DJ Shadow (added Oct 29 2026), DISORD/AIR, Dirty Projectors, Globo On (draft, Nov 11 2026), DMA, Explosions in the Sky (added Oct 29 2026), (Lomography hidden), Globoplay (moved Nov 11 2026), Logofolio always last.
  Nov 16 2026: Ramón Vasconcelos and Carbono went live after Explosions in the Sky, before Logofolio (Felipe: "Publish both"). content.js is the source of truth; update this list when the order changes. The home has the Index list plus a Grid view again (Felipe, Nov 16 2026: medium 16:9 cards, 3 per row, List / Grid switch in the filter row, choice remembered; it was removed Oct 28 2026). Ask Felipe where a new project goes.
- `spotify: "artist/<id>"` (or album/playlist) in a gallery puts a Spotify player in place (`h`, default 452px); used for
  the Explosions in the Sky top tracks.
- Projects can use `layout: "loose"` (free placement: `col`, `span`, `shift`, `speed`, `{ text }` lines),
  `hero: "bleed"`, videos (`video` MP4 + `webm` + `poster`) and a 360° viewer (`spin`).
- Compress media before adding: videos to 720p H.264 MP4 plus a VP9 WebM; images max 2000 px wide JPEG.
- Lomography (`layout: "lomo"`, Felipe Oct 27 2026): one horizontal film roll per camera (Fisheye, Super Sampler, LC-A),
  two or three photos in view, arrows + drag/swipe, no full-screen view. Camera = the `camera` field of each photo.
  Drag cues: "← Arraste →" in each roll head, a position bar under it, a one-time slide on entering view, and the
  cursor ball grows into a labelled drag handle over a roll. Cover = Super Sampler losangeles-01.
- Logofolio sizing (Nov 16 2026): `markWidth()` in main.js balances each mark by its measured ink box and density; the weight
  correction applies after the size cap (heavy marks down to 70%, light up to 130%, never past capW/capH), so wide heavy
  wordmarks like GBR no longer read too big. Use `scale` only as a last correction by eye.
- Logos project (`layout: "logos"`): every logo file must be pure black #000000 on a transparent background
  (PNG or SVG, trimmed). Check each upload and correct off-blacks such as #231F20 before adding it.
- Typefaces: Figtree (display) and JetBrains Mono (small copy / body). White page, black type, blue accents.
- Colour rule (Felipe, Oct 29 2026): highlights and hovers use the project's own contrast colour (theme `accent`).
  When a project has no colour of its own (no theme, or a black/white accent such as Cinema Especial and Adidas 60),
  use the site blue #1a2bff (`var(--ai,var(--blue))`).
- About below Services on black, white text (Felipe, Oct 29 2026: "texto branco sobre fundo preto"), inverted via the
  section's tokens in style.css. Links there hover as white on a blue band, since blue type on black is 2.7:1. The black
  footer (Let's talk) and the rule-draw entrance come from the Oct 29 2026 audit (approved and live). The About end line
  shows a live São Paulo clock (`.ab-clock`).

## Case system (Felipe, Nov 16 2026: "we can vary but we need a system, consistency")

Every case uses the standard frame; custom pieces live inside it, never instead of it. Carbono was moved onto it on
Nov 16 2026 (standard header, cover, chapters, loops, device frame; only its palette and feed are custom blocks,
`{ cbPalette: true }` / `{ cbFeed: true }`, js/carbono-case.js + css/v2/carbono.css). Ramón keeps its own layout for
now but uses the same values:
- Opening: case title, tags, fact sheet, cover (a film when the project is motion: `coverVideo`).
- Chapter label = `.chap-k`: JetBrains Mono 300, 10px, uppercase, "01 · Name" (middle dot, never a slash).
- Chapter headline = `.chap-h` (Figtree Black, uppercase); one oversized poster moment at most (`grid: "cartaz"`).
- Body = `.body`: JetBrains Mono 400, clamp(15px, 1.25vw, 18px) / 1.6.
- Captions = `.fig figcaption`: JetBrains Mono 300, 13px, uppercase, `--mute`, 6px under the piece.
- Text lines (`{ text }`) are display sub-headlines of 4-8 words, not paragraphs.
- Between chapters: the standard gap and the 1px rule.

## v2 motion and media tools (Nov 16 2026; references buck.co, santalarch.com, dennypratama.com)

v1 is saved as tag `v1-2026-11-16` (preview branch `rascunho/v1-arquivo`). Each tool is its own file in js/v2/ and
css/v2/ and stays still with reduced motion.
- `loop: { frames: [...], fps, ar }` + `caption`: an image sequence plays as a silent loop (motion studies, storyboards,
  vignette frames). Use it instead of a flip or a row of frames. A loop right next to the film its frames came from
  repeats it: three do today (Tela Quente opening, Cinema Especial logo, Globoplay launch film), kept until Felipe
  decides whether they go.
- `device: "iphone" | "macbook"` on a gallery image or film: CSS device frame, content contained (never cropped). Only
  for real screen work (stories, feeds, Reels, sites, apps). `ar` stays the content's ratio; main.js swaps in the device
  ratio for the layout.
- `fold: N` on a project or sub-case: the first N chapters show, the rest opens with "See the full case" (nothing is
  removed). Used on the longest cases (Rebranding, Globo On, DMA, DJ Shadow at 4; Carbono at 3).
- `preview: { video, webm, poster }` (optional) on a project: the loop shown beside the pointer on the work list;
  without it the list uses `coverVideo`, then the first gallery film, then the cover and first two stills.
- Home: smooth wheel scroll on desktop (vendored Lenis 1.1.20). A turning 3D B® on the first screen and a word-by-word
  tagline reveal were tried on Nov 16 2026 and removed: Felipe kept the v1 home ("não gosto dessa home assim"; the rest
  of v2 approved). A full-bleed flash of every project behind white type (with chaos, mosh, dither and ASCII treatments) was
  also tried that day and set aside for now ("we were better off without it", "not for now"); the full version with all
  treatments is in commit 6f8d169 on rascunho/v2 (js/v2/flash.js, css/v2/flash.css, images/flash/) if he wants it back. Don't bring these back unless he asks.

## Images: never crop (Felipe, Oct 24 2026)


- Never cut any part of an image, anywhere on the site (galleries, home cards, sequences, photo tiles,
  thumbnails, full screen; desktop and phone). Use `object-fit: contain`, never `cover`, and no zoom-in
  (`scale` > 1) or parallax shift of an image inside its frame.
- Pointer effects (Felipe, Oct 28 2026: "manter sem cortar"): move the whole piece (`.ph`, frame and image together),
  never the image inside it, and at most 3px so it never reaches a neighbour (`case-depth`, CoreHi). Living gradients
  are drawn as a `coverFlow` colour layer over the still, never by zooming the image (Globo cover; a gallery item can reuse it with `coverFlow: true`).
- Gallery images get breathing room: they sit inside their frame with the `--breathe` margin of white page around them (no grey frames: Felipe said "sem cinza").
- No image may cover part of another: gallery items don't drift on scroll, and loose galleries are justified rows
  (`shift`/`nudge`/`tight`/`speed` are ignored), so nothing can overlap (the old `unstack()` safety net was removed Nov 14 2026).
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
  pills, case "about" text and `.ltext` sub-headings = columns 5-12; pieces beside text and lone flips / rooms =
  columns 6-12, column 5 left as air (Felipe, Oct 29 2026: "mais respiro"); meta = 6 per row, stats = 6, services = 3,
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
  piece, then two, then three (films max two per row); trilho = chapter text sticky in cols 1-4, its pieces in 6-12;
  modulos = equal cells (`cell`, default 4/3), piece contained on the panel colour, 3+ pieces only; cartaz = huge
  chapter headline across the columns, first piece in 1-5 beside the text (7-12). Picker artifact with Felipe's choices:
  https://claude.ai/artifact/U5iuV1W89pBKLttprKtTy7 (db collection `escolhas`).
- Text beside images (Felipe, Oct 27 2026): a chapter or a text line never floats alone above its images; it sits in
  cols 1-4 next to the first piece, flip, strip or live page that follows (cols 6-12, column 5 is air since
  Oct 29 2026). `vh` on that piece caps its height at that share of the screen. Phones stack text first.

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
