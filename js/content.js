// All site copy and projects live here. Edit this file to update the site.
// Text in two languages is written as { en: "…", pt: "…" }. Plain strings are the same in both.
window.SITE = {
  name: "Bellintani",
  year: "26",
  email: "felipe@bellintani.work",
  social: [
    { label: "Instagram", url: "https://www.instagram.com/fbllnt/" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/fbellintani/" },
  ],
  tagline: {
    en: "Multidisciplinary designer, art director, and who knows what else",
    pt: "Designer multidisciplinar, diretor de arte e sabe-se lá o que mais",
  },
  subline: {
    en: ["Branding, Identity, Advertising, Digital, Social and Multimedia"],
    pt: ["Branding, Identidade, Publicidade, Digital, Social e Multimídia"],
  },
  // Intro loader: each word cuts on in turn. Add loaderBig: { en, pt } to end on one big word.
  loader: {
    en: ["Hey", "don't", "blink", "→good", "things", "take", "a", "sec"],
    pt: ["Ei,", "não", "pisca", "→coisa", "boa", "leva", "um", "tempo"],
  },
  services: {
    en: ["Brand identity", "Typography", "Posters & print", "Packaging", "Editorial design", "Art direction"],
    pt: ["Identidade de marca", "Tipografia", "Pôsteres e impressos", "Embalagem", "Design editorial", "Direção de arte"],
  },

  // Interface labels
  ui: {
    en: {
      work: "Work", services: "Services", letsTalk: "Let's talk",
      skip: "Skip intro →", replay: "↻ Replay intro", index: "Index", grid: "Grid", view: "View",
      gotProject: "( Got a project? )", allWork: "← All work", next: "( Next project )", about: "( About )",
      client: "Client", year: "Year", scope: "Scope", role: "Role", live: "Live",
      dragToRotate: "⟷ Drag to rotate", play: "Play", pause: "Pause", soundOn: "Sound on", soundOff: "Sound off", fullscreen: "Full screen", all: "All", filter: "Filter by sector", close: "Close", prev: "Previous", nextItem: "Next", scrollToPlay: "Scroll to play ↓",
      placeholder: "Placeholder", selectedWork: "Selected work",
      placeholderText: "Placeholder text. Replace with the project story: the brief, the idea, and what was made.",
      langSwitch: "PT", langLabel: "Ver em português",
      description: "Bellintani — multidisciplinary designer and art director.",
    },
    pt: {
      work: "Trabalhos", services: "Serviços", letsTalk: "Vamos conversar",
      skip: "Pular intro →", replay: "↻ Rever intro", index: "Lista", grid: "Grade", view: "Visualização",
      gotProject: "( Tem um projeto? )", allWork: "← Todos os trabalhos", next: "( Próximo projeto )", about: "( Sobre )",
      client: "Cliente", year: "Ano", scope: "Escopo", role: "Função", live: "No ar",
      dragToRotate: "⟷ Arraste para girar", play: "Play", pause: "Pausar", soundOn: "Com som", soundOff: "Sem som", fullscreen: "Tela cheia", all: "Todos", filter: "Filtrar por setor", close: "Fechar", prev: "Anterior", nextItem: "Próximo", scrollToPlay: "Role para assistir ↓",
      placeholder: "Provisório", selectedWork: "Trabalhos selecionados",
      placeholderText: "Texto provisório. Substitua pela história do projeto: o briefing, a ideia e o que foi feito.",
      langSwitch: "EN", langLabel: "View in English",
      description: "Bellintani — designer multidisciplinar e diretor de arte.",
    },
  },

  // Projects. `placeholder: true` marks example entries until real work replaces them.
  // Add `image: "images/file.jpg"` to use a real cover instead of the generated one.
  // Project page fields (all optional):
  //   client, role, summary: { en, pt }, stats: [["4", { en, pt }]],
  //   gallery: [{ src: "images/x.jpg", size: "full" }, { video: "x.mp4", webm: "x.webm", poster: "x.jpg", size: "half" }, …]
  //   Consecutive "half", "third" or "quarter" items sit side by side. `caption` can be { en, pt }.
  //   layout: "loose" places each item freely: { col, span, shift, speed } and allows { text } lines.
  //   hero: "bleed" runs the cover edge to edge.
  projects: [
    {
      title: "Seja ANTI",
      client: "ANTI Creative Finance",
      year: "2026",
      scope: { en: "Campaign // Activation // Digital", pt: "Campanha // Ativação // Digital" },
      image: "images/anti/skeletons.jpg",
      link: { label: "naoespere.sejaanti.com.br", url: "https://naoespere.sejaanti.com.br" },
      summary: {
        en: "“Não espere uma vida para receber.” Don't wait a lifetime to get paid. At the Clube de Criação de São Paulo festival, four benches were taken by skeletons still waiting for their money: the Influencer, the Producer, the Creator and the Creative. The idea then ran through films, street posters, social and a landing page.",
        pt: "“Não espere uma vida para receber.” No festival do Clube de Criação de São Paulo, quatro bancos foram ocupados por esqueletos que ainda esperam o pagamento: o Influencer, o Produtor, o Creator e o Criativo. A ideia seguiu para filmes, lambe-lambes, redes sociais e uma landing page.",
      },
      stats: [
        ["4", { en: "Benches", pt: "Bancos" }],
        ["4", { en: "Films", pt: "Filmes" }],
        ["23", { en: "Posters", pt: "Pôsteres" }],
        ["117", { en: "Social statics", pt: "Estáticos para redes" }],
        ["30", { en: "Animations", pt: "Animações" }],
        ["1", { en: "Landing page", pt: "Landing page" }],
      ],
      // Loose layout: benches float as a staggered collage, the campaign line sits big between them and the films
      layout: "loose",
      gallery: [
        { src: "images/anti/bench-influencer.jpg", ar: "9/5", col: 1, span: 7, speed: .04, caption: { en: "Bench 01 — Influencer", pt: "Banco 01 — Influencer" } },
        { src: "images/anti/bench-produtor.jpg", ar: "9/5", col: 7, span: 5, shift: "-34vh", speed: -.05, caption: { en: "Bench 02 — Producer", pt: "Banco 02 — Produtor" } },
        { src: "images/anti/bench-creator.jpg", ar: "9/5", col: 2, span: 5, shift: "-22vh", speed: .06, caption: { en: "Bench 03 — Creator", pt: "Banco 03 — Creator" } },
        { src: "images/anti/bench-criativo.jpg", ar: "9/5", col: 6, span: 6, shift: "-30vh", speed: -.03, caption: { en: "Bench 04 — Creative", pt: "Banco 04 — Criativo" } },
        { src: "images/anti/street-posters.jpg", ar: "2000/1121", col: 1, span: 12, shift: "-10vh", speed: .02, caption: { en: "Lambe-lambe posters on the street, São Paulo", pt: "Lambe-lambes na rua, São Paulo" } },
        { text: "Não espere uma vida para receber.", col: 1, span: 9 },
        { video: "images/anti/film-freela.mp4", webm: "images/anti/film-freela.webm", poster: "images/anti/film-freela-poster.jpg", ar: "16/9", col: 1, span: 7, speed: .03, caption: { en: "Film 001 — Free my freela", pt: "Filme 001 — Free my freela" } },
        { video: "images/anti/film-jab.mp4", webm: "images/anti/film-jab.webm", poster: "images/anti/film-jab-poster.jpg", ar: "16/9", col: 6, span: 6, shift: "-32vh", speed: -.05, caption: { en: "Film 002 — Jab", pt: "Filme 002 — Jab" } },
        { video: "images/anti/film-umavida.mp4", webm: "images/anti/film-umavida.webm", poster: "images/anti/film-umavida-poster.jpg", ar: "16/9", col: 2, span: 5, shift: "-18vh", speed: .05, caption: { en: "Film 003 — Uma vida", pt: "Filme 003 — Uma vida" } },
        { video: "images/anti/film-payday.mp4", webm: "images/anti/film-payday.webm", poster: "images/anti/film-payday-poster.jpg", ar: "16/9", col: 7, span: 5, shift: "-30vh", speed: -.03, caption: { en: "Film 004 — Payday", pt: "Filme 004 — Payday" } },
        { src: "images/anti/landing.jpg", ar: "1670/1015", col: 2, span: 10, shift: "4vh", speed: .02, caption: { en: "Landing page, desktop and mobile", pt: "Landing page, desktop e mobile" } },
        { spin: { frames: "images/anti/spin/###.jpg", count: 120 }, ar: "16/9", col: 1, span: 12, shift: "6vh", caption: { en: "The waiting skeleton, in 360°", pt: "O esqueleto que espera, em 360°" } },
      ],
    },
    {
      title: "Warriors of the Turf",
      client: "Adidas",
      scope: { en: "Key Visual // Film", pt: "Key Visual // Filme" },
      image: "images/warriors/key-visual.jpg",
      summary: {
        en: "Legends from different eras meet on the same rain-soaked pitch. A key visual and a short film for Adidas, built on the grit of the game: mud, rain and the slide tackle.",
        pt: "Lendas de épocas diferentes se encontram no mesmo gramado encharcado. Um key visual e um filme curto para a Adidas, construídos sobre a garra do jogo: lama, chuva e o carrinho.",
      },
      // Told in storyboard order: duel films, the finale, the second key visual with the end line, then the storyboard as process
      hero: "bleed",
      layout: "loose",
      gallery: [
        { video: "images/warriors/film.mp4", webm: "images/warriors/film.webm", poster: "images/warriors/film-poster.jpg", ar: "16/9", col: 1, span: 9, speed: .03, caption: { en: "Film 01 — Messi vs Beckenbauer", pt: "Filme 01 — Messi vs Beckenbauer" } },
        { text: { en: "Adidas — official FIFA World Cup ball supplier since 1970.", pt: "Adidas — fornecedora oficial da bola da Copa do Mundo FIFA desde 1970." }, col: 6, span: 7, shift: "4vh" },
        { video: "images/warriors/film-02.mp4", webm: "images/warriors/film-02.webm", poster: "images/warriors/film-02-poster.jpg", ar: "16/9", col: 4, span: 9, speed: -.03, caption: { en: "Film 02 — The breakaway", pt: "Filme 02 — A arrancada" } },
        { text: { en: "Higuita, final boss.", pt: "Higuita, o chefão final." }, col: 1, span: 6, shift: "6vh" },
        { video: "images/warriors/film-03.mp4", webm: "images/warriors/film-03.webm", poster: "images/warriors/film-03-poster.jpg", ar: "16/9", col: 4, span: 9, speed: .02, caption: { en: "Film 03 — Finale: Yamal scores", pt: "Filme 03 — Final: Yamal marca" } },
        { src: "images/warriors/key-visual-02.jpg", ar: "2000/1116", col: 1, span: 7, shift: "-30vh", speed: .05, caption: { en: "Key visual 02 — Yamal vs Higuita", pt: "Key visual 02 — Yamal vs Higuita" } },
        { src: "images/warriors/storyboard.jpg", ar: "2000/1116", col: 1, span: 12, shift: "4vh", caption: { en: "Storyboard — six scenes, from Pelé to the end card", pt: "Storyboard — seis cenas, de Pelé ao end card" } },
      ],
    },
    {
      title: "Scriva",
      client: "SCRV.ag",
      year: "2025",
      scope: { en: "Rebranding // Positioning // Brand content", pt: "Rebranding // Posicionamento // Conteúdo de marca" },
      image: "images/scriva/cover.jpg",
      summary: {
        en: "Rebranding for SCRV.ag, a branding and brand-content agency that only posts when it makes sense. Three verbs became three marks: think (+), create (×), position (✱). Together they make the asterisk, from the Greek for “little star”. Red Fuse, Deep Black and Hey Grey, set in Mango Grotesque and Space Mono, carried through seals, stickers, street posters, social and the agency deck.",
        pt: "Rebranding da SCRV.ag, agência de branding e conteúdo de marca que só posta quando faz sentido. Três verbos viraram três sinais: pensar (+), criar (×), posicionar (✱). Juntos formam o asterisco, do grego “pequena estrela”. Red Fuse, Deep Black e Hey Grey, em Mango Grotesque e Space Mono, levados para selos, adesivos, lambe-lambes, redes sociais e o deck da agência.",
      },
      // Story: the symbol, the system, type in motion, the street, then the agency's own voice
      layout: "loose",
      gallery: [
        { video: "images/scriva/asterisk.mp4", webm: "images/scriva/asterisk.webm", poster: "images/scriva/asterisk-poster.jpg", ar: "16/9", col: 1, span: 9, speed: .03, caption: { en: "The asterisk, in 3D", pt: "O asterisco, em 3D" } },
        { text: "Pensar. Criar. Posicionar.", col: 7, span: 6, shift: "4vh" },
        { src: "images/scriva/symbols.jpg", ar: "16/9", col: 1, span: 7, speed: .04, caption: { en: "Think + · Create × · Position ✱", pt: "Pensar + · Criar × · Posicionar ✱" } },
        { src: "images/scriva/seals.jpg", ar: "16/9", col: 6, span: 7, shift: "-24vh", speed: -.04, caption: { en: "The seal", pt: "O selo" } },
        { text: { en: "Asterisk: from the Greek for “little star”.", pt: "Asterisco: do grego, “pequena estrela”." }, col: 1, span: 8, shift: "4vh" },
        { src: "images/scriva/logo-red.jpg", ar: "16/9", col: 1, span: 6, speed: .05, caption: { en: "Wordmark", pt: "Logotipo" } },
        { src: "images/scriva/logo-versions.jpg", ar: "16/9", col: 6, span: 7, shift: "-18vh", speed: -.03, caption: { en: "Versions", pt: "Versões" } },
        { src: "images/scriva/color.jpg", ar: "16/9", col: 2, span: 5, shift: "-8vh", speed: .04, caption: { en: "Color code", pt: "Cores" } },
        { src: "images/scriva/type.jpg", ar: "16/9", col: 7, span: 6, shift: "-20vh", speed: -.05, caption: { en: "Type: Mango Grotesque and Space Mono", pt: "Tipografia: Mango Grotesque e Space Mono" } },
        { video: "images/scriva/kinetic.mp4", webm: "images/scriva/kinetic.webm", poster: "images/scriva/kinetic-poster.jpg", ar: "16/9", col: 1, span: 12, shift: "6vh", speed: .02, caption: { en: "Kinetic type", pt: "Tipografia cinética" } },
        { src: "images/scriva/kinetic-outline.jpg", ar: "2000/833", col: 5, span: 8, shift: "-16vh", speed: -.04, caption: { en: "Kinetic type, outline", pt: "Tipografia cinética, contorno" } },
        { text: "Quem não se posiciona é posicionado.", col: 1, span: 9, shift: "4vh" },
        { src: "images/scriva/posters.jpg", ar: "16/9", col: 1, span: 12, speed: .02, caption: { en: "Lambe-lambe posters", pt: "Lambe-lambes" } },
        { src: "images/scriva/billboard.jpg", ar: "2000/571", col: 2, span: 11, shift: "-10vh", speed: -.03, caption: { en: "On the street", pt: "Na rua" } },
        { src: "images/scriva/instagram.jpg", ar: "814/1444", col: 1, span: 5, shift: "6vh", speed: .03, caption: { en: "Social: the grid as one image", pt: "Redes: o grid como uma imagem só" } },
        { src: "images/scriva/deck-hands.jpg", ar: "16/9", col: 6, span: 7, shift: "6vh", speed: -.03, caption: { en: "Agency deck", pt: "Deck da agência" } },
        { src: "images/scriva/deck-what.jpg", ar: "16/9", col: 6, span: 7, shift: "-46vw", speed: .02, caption: { en: "What we do", pt: "O que fazemos" } },
        { src: "images/scriva/deck-sense.jpg", ar: "16/9", col: 3, span: 8, shift: "6vh", speed: -.02, caption: { en: "Does it make sense to you?", pt: "Faz sentido pra você?" } },
      ],
    },
    {
      title: "Cinema Especial",
      client: "TV Globo",
      scope: { en: "TV opening // Style frames // Motion", pt: "Abertura de TV // Style frames // Motion" },
      image: "images/cinema-especial/frame-07.jpg",
      summary: {
        en: "Opening for Cinema Especial, Globo's movie slot. Ink spreads over old film stock, the featured film's hero surfaces from the stains, and the title lands before the Globo mark closes. Style frames shown with The Amazing Spider-Man as the featured film.",
        pt: "Abertura do Cinema Especial, a faixa de filmes da Globo. A tinta se espalha sobre película antiga, o herói do filme da noite surge das manchas e o título entra antes da marca Globo fechar. Style frames com O Espetacular Homem-Aranha como filme em destaque.",
      },
      layout: "loose",
      gallery: [
        { scrub: { frames: "images/cinema-especial/frame-##.jpg", count: 10 }, ar: "16/9", col: 1, span: 12, caption: { en: "Style frames — the opening, frame by frame", pt: "Style frames — a abertura, quadro a quadro" } },
      ],
    },
    {
      title: "Logos",
      scope: { en: "Logo design // Brand identity", pt: "Design de logotipo // Identidade de marca" },
      summary: {
        en: "Thirty marks, from full identities to a single sign. Hover to see each one in its own colours; open one to look closer.",
        pt: "Trinta marcas, de identidades completas a uma única placa. Passe o mouse para ver cada uma nas suas cores; abra para ver de perto.",
      },
      hue: [230, 90, 55],
      placeholder: true,
      // The wall: one tile per logo, black on white; hover and the close-up flood in the site blue with the mark in white.
      // Each logo: { name, year, tag: { en, pt }, src: one-colour SVG or PNG on transparent (the site colours it),
      //   color: optional full-colour file for the close-up, bg / ink: optional, to override the site blue and white, note: { en, pt } }.
      // Sector filters appear when two or more tags are used.
      layout: "logos",
      logos: [
        { name: "REUD Co.", src: "images/logos/reud-co.png" },
        { name: "HOU", src: "images/logos/hou.png" },
        { name: "mokoko.", src: "images/logos/mokoko.png" },
      ].concat(Array.from({ length: 27 }, (_, k) => ({
        name: `Logo ${String(k + 4).padStart(2, "0")}`,
        year: String(2026 - (k % 9)),
        tag: [{ en: "Food", pt: "Comida" }, { en: "Tech", pt: "Tecnologia" }, { en: "Culture", pt: "Cultura" }, { en: "Fashion", pt: "Moda" }, { en: "Sport", pt: "Esporte" }][k % 5],
      }))),
    },
    { title: { en: "Type Specimen", pt: "Espécime Tipográfico" }, scope: { en: "Custom Typography", pt: "Tipografia Customizada" }, year: "2025", hue: [0, 0, 15], placeholder: true },
    { title: { en: "Campaign", pt: "Campanha" }, scope: { en: "Advertising // Art Direction", pt: "Publicidade // Direção de Arte" }, year: "2024", hue: [150, 55, 40], placeholder: true },
    { title: { en: "Editorial", pt: "Editorial" }, scope: { en: "Layout // Publication", pt: "Layout // Publicação" }, year: "2024", hue: [18, 85, 55], placeholder: true },
  ],
};
