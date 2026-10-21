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
  // Intro loader: each word cuts on in turn; a word starting with * shows in blue. Add loaderBig: { en, pt } to end on one big word.
  loader: {
    en: ["Hey", "don't", "blink", "*good", "*things", "take", "a", "sec"],
    pt: ["Ei,", "não", "pisca", "*coisa", "*boa", "leva", "um", "tempo"],
  },
  services: {
    en: ["Brand identity", "Typography", "Posters & print", "Packaging", "Editorial design", "Art direction"],
    pt: ["Identidade de marca", "Tipografia", "Pôsteres e impressos", "Embalagem", "Design editorial", "Direção de arte"],
  },

  // About, run as film end credits (content from LinkedIn).
  // Each block: { head, rows }. A row is { role, name, years, url } (role left, name right) or a single
  // value, which is centred. `flow: true` sets single values side by side. `placeholder: true` marks unfinished blocks.
  about: {
    intro: {
      en: "I build brands, design systems and creative operations that scale. For over 20 years I've led branding, design and creative work across Latin America, Europe and North America.",
      pt: "Construo marcas, sistemas de design e operações criativas que escalam. Há mais de 20 anos lidero branding, design e criação na América Latina, Europa e América do Norte.",
    },
    credits: [
      { head: { en: "Experience", pt: "Experiência" }, rows: [
        { role: "Senior Visual Designer", name: "Housecall Pro", years: { en: "2026 — now", pt: "2026 — hoje" } },
        { role: "Creative Director", name: "500 Designs", years: "2026" },
        { role: "Owner / Design Director", name: "Haute Rift", years: "2018 — 2025" },
        { role: "Brand Design Specialist", name: "JBS", years: "2021 — 2023" },
        { role: "Senior Art Director", name: "VML", years: "2020 — 2022" },
        { role: "Lead Designer", name: "Globo", years: "2014 — 2018" },
        { role: "Senior Art Director", name: "Lew'Lara\\TBWA", years: "2012 — 2014" },
        { role: "Head of Art", name: "Havas (EuroRSCG 4D)", years: "2010 — 2011" },
        { role: "Interactive Art Director / Team Lead", name: "AgênciaClick", years: "2008 — 2010" },
        { role: "Interactive Art Director / Team Lead", name: "Wunderman Thompson", years: "2006 — 2008" },
      ] },
      { head: { en: "Special thanks", pt: "Agradecimentos especiais" }, flow: true, rows: [
        "Adidas", "Globo", "Meta", "Pernod Ricard", "Diageo", "Absolut", "Gatorade", "Nissan", "Land Rover", "Nokia", "Philips",
        "FIAT", "TIM", "Banco do Brasil", "Velo / Vuse", "Qiddiya", "JBS", "Housecall Pro", "ANTI Creative Finance", "SCRV.ag",
      ] },
      { head: { en: "Disciplines", pt: "Disciplinas" }, flow: true, rows: [
        { en: "Brand design", pt: "Design de marca" }, { en: "Logo design", pt: "Logotipos" }, { en: "Graphic design", pt: "Design gráfico" },
        { en: "Advertising", pt: "Publicidade" }, { en: "Brand consulting", pt: "Consultoria de marca" }, { en: "Content strategy", pt: "Estratégia de conteúdo" },
        { en: "Social media", pt: "Redes sociais" }, { en: "Interaction design", pt: "Design de interação" }, { en: "Video production", pt: "Produção de vídeo" },
      ] },
      { head: { en: "Education", pt: "Formação" }, rows: [
        { role: { en: "MBA, Data-Driven Marketing and AI", pt: "MBA, Marketing Orientado a Dados e IA" }, name: "USP / Esalq", years: "2026 — 2027" },
        { role: { en: "Master's, Branding", pt: "Mestrado, Branding" }, name: "ESPM", years: "2022 — 2024" },
        { role: { en: "UX/UI Design", pt: "UX/UI Design" }, name: "EBAC", years: "2020 — 2022" },
        { role: { en: "Master's, Design and Applied Arts", pt: "Mestrado, Design e Artes Aplicadas" }, name: "IDEP Barcelona", years: "2005 — 2006" },
        { role: { en: "Bachelor's, Advertising and Marketing", pt: "Bacharelado, Propaganda e Marketing" }, name: "FAAP", years: "1998 — 2002" },
      ] },
      { head: { en: "Languages", pt: "Idiomas" }, rows: [
        { role: { en: "Native or bilingual", pt: "Nativo ou bilíngue" }, name: { en: "Portuguese", pt: "Português" } },
        { role: { en: "Native or bilingual", pt: "Nativo ou bilíngue" }, name: { en: "English", pt: "Inglês" } },
        { role: { en: "Native or bilingual", pt: "Nativo ou bilíngue" }, name: { en: "Spanish", pt: "Espanhol" } },
        { role: { en: "Limited working", pt: "Proficiência limitada" }, name: { en: "Italian", pt: "Italiano" } },
        { role: { en: "Limited working", pt: "Proficiência limitada" }, name: { en: "Catalan", pt: "Catalão" } },
      ] },
      { head: { en: "Filmed on location", pt: "Filmado em" }, flow: true, rows: [
        { en: "Latin America", pt: "América Latina" }, { en: "Europe", pt: "Europa" }, { en: "North America", pt: "América do Norte" },
      ] },
      { head: { en: "Contact", pt: "Contato" }, rows: [
        { role: "Email", name: "felipe@bellintani.work", url: "mailto:felipe@bellintani.work" },
        { role: "WhatsApp", name: "+55 11 91255-2508", url: "https://wa.me/5511912552508" },
        { role: "Instagram", name: "@fbllnt", url: "https://www.instagram.com/fbllnt/" },
        { role: "LinkedIn", name: "in/fbellintani", url: "https://www.linkedin.com/in/fbellintani/" },
      ] },
    ],
    end: { en: "No pixels were harmed in the making of this portfolio.", pt: "Nenhum pixel foi ferido na produção deste portfólio." },
  },

  // Interface labels
  ui: {
    en: {
      work: "Work", services: "Services", letsTalk: "Let's talk",
      skip: "Skip intro →", replay: "↻ Replay intro", index: "Index", grid: "Grid", view: "View",
      gotProject: "( Got a project? )", allWork: "← All work", next: "( Next project )", about: "( About )",
      client: "Client", year: "Year", scope: "Scope", role: "Role", live: "Live",
      dragToRotate: "⟷ Drag to rotate", play: "Play", pause: "Pause", soundOn: "Sound on", soundOff: "Sound off", fullscreen: "Full screen", all: "All", filter: "Filter by sector", close: "Close", prev: "Previous", nextItem: "Next", scrollToPlay: "Scroll to play ↓", aboutNav: "About", scrollDown: "Scroll down to see the work", overview: "Overview", camera: "Camera", film: "Film", aboutTitle: "About", skipCredits: "Skip credits →",
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
      dragToRotate: "⟷ Arraste para girar", play: "Play", pause: "Pausar", soundOn: "Com som", soundOff: "Sem som", fullscreen: "Tela cheia", all: "Todos", filter: "Filtrar por setor", close: "Fechar", prev: "Anterior", nextItem: "Próximo", scrollToPlay: "Role para assistir ↓", aboutNav: "Sobre", scrollDown: "Role para ver os trabalhos", overview: "Visão geral", camera: "Câmera", film: "Filme", aboutTitle: "Sobre", skipCredits: "Pular créditos →",
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
        { src: "images/anti/site-espere.jpg", ar: "2000/1079", col: 1, span: 12 },
        { src: "images/anti/site-uma-vida.jpg", ar: "2000/1997", col: 1, span: 6, tight: true },
        { src: "images/anti/site-seja-anti.jpg", ar: "1956/2000", col: 7, span: 6, tight: true },
        { video: "images/anti/film-freela.mp4", webm: "images/anti/film-freela.webm", poster: "images/anti/film-freela-poster.jpg", ar: "16/9", col: 1, span: 6, caption: { en: "Film 001 — Free my freela", pt: "Filme 001 — Free my freela" } },
        { video: "images/anti/film-jab.mp4", webm: "images/anti/film-jab.webm", poster: "images/anti/film-jab-poster.jpg", ar: "16/9", col: 7, span: 6, caption: { en: "Film 002 — Jab", pt: "Filme 002 — Jab" } },
        { video: "images/anti/film-umavida.mp4", webm: "images/anti/film-umavida.webm", poster: "images/anti/film-umavida-poster.jpg", ar: "16/9", col: 1, span: 6, tight: true, caption: { en: "Film 003 — Uma vida", pt: "Filme 003 — Uma vida" } },
        { video: "images/anti/film-payday.mp4", webm: "images/anti/film-payday.webm", poster: "images/anti/film-payday-poster.jpg", ar: "16/9", col: 7, span: 6, tight: true, caption: { en: "Film 004 — Payday", pt: "Filme 004 — Payday" } },
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
      title: "SCRV*",
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
        { src: "images/scriva/billboard-logo.jpg", ar: "3/2", col: 1, span: 12, shift: "6vh", speed: .02 },
        { video: "images/scriva/kinetic.mp4", webm: "images/scriva/kinetic.webm", poster: "images/scriva/kinetic-poster.jpg", ar: "16/9", col: 1, span: 12, shift: "6vh", speed: .02, caption: { en: "Kinetic type", pt: "Tipografia cinética" } },
        { src: "images/scriva/kinetic-outline.jpg", ar: "2000/833", col: 5, span: 8, shift: "-16vh", speed: -.04, caption: { en: "Kinetic type, outline", pt: "Tipografia cinética, contorno" } },
        { text: "Quem não se posiciona é posicionado.", col: 1, span: 9, shift: "4vh" },
        { src: "images/scriva/posters.jpg", ar: "16/9", col: 1, span: 12, speed: .02, caption: { en: "Lambe-lambe posters", pt: "Lambe-lambes" } },
        { src: "images/scriva/flag.jpg", ar: "3/2", col: 1, span: 7, shift: "6vh", speed: .03 },
        { src: "images/scriva/bag.jpg", ar: "3/2", col: 7, span: 6, shift: "-14vh", speed: -.04 },
        { src: "images/scriva/instagram-profile.jpg", ar: "1103/2000", col: 1, span: 5, shift: "6vh", speed: .03, caption: { en: "Social: the grid as one image", pt: "Redes: o grid como uma imagem só" } },
        { src: "images/scriva/process.jpg", ar: "1920/1018", col: 6, span: 7, shift: "26vw", speed: -.02 },
      ],
    },
    {
      title: "Cinema Especial",
      client: "TV Globo",
      scope: { en: "TV opening // Style frames // Motion", pt: "Abertura de TV // Style frames // Motion" },
      image: "images/cinema-especial/cover.jpg",
      summary: {
        en: "Opening for Cinema Especial, Globo's movie slot. Ink spreads over old film stock, the featured film's hero surfaces from the stains, and the title lands before the Globo mark closes. Style frames shown with The Amazing Spider-Man as the featured film.",
        pt: "Abertura do Cinema Especial, a faixa de filmes da Globo. A tinta se espalha sobre película antiga, o herói do filme da noite surge das manchas e o título entra antes da marca Globo fechar. Style frames com O Espetacular Homem-Aranha como filme em destaque.",
      },
      layout: "loose",
      gallery: [
        { video: "images/cinema-especial/opening.mp4", webm: "images/cinema-especial/opening.webm", poster: "images/cinema-especial/opening-poster.jpg", ar: "16/9", col: 1, span: 12, caption: { en: "Opening — 7s preview", pt: "Abertura — prévia de 7s" } },
        { scrub: { frames: "images/cinema-especial/frame-##.jpg", count: 10 }, ar: "16/9", col: 1, span: 12, caption: { en: "Style frames — the opening, frame by frame", pt: "Style frames — a abertura, quadro a quadro" } },
      ],
    },
    {
      title: "Globo",
      client: "Globo",
      year: "2014 — 2018",
      role: "Lead Designer",
      scope: { en: "Branding // Rebrand // Motion", pt: "Branding // Rebranding // Motion" },
      image: "images/globo/cover.jpg",
      hero: "bleed",
      heroAr: "2000/1052",
      summary: {
        en: "Four years as lead designer at Globo, Brazil's largest broadcaster: branding and identity for entertainment, journalism and sports, at home and abroad. A key role in the network's rebrand, from the new design system, brand volume rules, colours and gradients to the new type family, plus on-air studies, show identities, title sequences and institutional vignettes.",
        pt: "Quatro anos como lead designer na Globo, a maior emissora do Brasil: branding e identidade para entretenimento, jornalismo e esporte, no Brasil e fora. Papel central no rebranding da emissora, do novo sistema de design, regras de volume da marca, cores e degradês à nova família tipográfica, além de estudos on-air, identidades de programas, aberturas e vinhetas institucionais.",
      },
      layout: "loose",
      gallery: [],
    },
    // Logofolio stays the last project.
    {
      title: "Logofolio",
      scope: { en: "Logo design // Brand identity", pt: "Design de logotipo // Identidade de marca" },
      summary: {
        en: "A wall of marks, from full identities to a single sign, in a new order on every visit. Open any of them to look closer.",
        pt: "Um mural de marcas, de identidades completas a uma única placa, numa ordem nova a cada visita. Abra qualquer uma para ver de perto.",
      },
      hue: [230, 90, 55],
      // The wall: one tile per logo, black on white; hover and the close-up flood in the site blue with the mark in white.
      // Each logo: { name (screen readers only), year, tag: { en, pt }, src: one-colour SVG or PNG on transparent (the site colours it),
      //   scale: optical size correction (1 = automatic; >1 for thin or detailed marks, <1 for heavy ones),
      //   color: optional full-colour file for the close-up, bg / ink: optional, to override the site blue and white, note: { en, pt } — the short description shown in the close-up }.
      // Sector filters appear when two or more tags are used.
      layout: "logos",
      logos: [
        { name: "REUD Co.", src: "images/logos/reud-co.png" },
        { name: "HOU", src: "images/logos/hou.png", scale: 1.2 },
        { name: "mokoko.", src: "images/logos/mokoko.png" },
        { name: "mr.", src: "images/logos/mr.png" },
        { name: "Descubra o Brasil", src: "images/logos/descubra-o-brasil.png", scale: 1.4 },
        { name: "ink", src: "images/logos/ink.png" },
        { name: "Join", src: "images/logos/join.png", scale: 1.12 },
        { name: "life's good", src: "images/logos/lifes-good.png" },
        { name: "Las Movidas de Puta Madre", src: "images/logos/las-movidas.png", scale: 1.12 },
        { name: "Leo Mafra", src: "images/logos/leo-mafra.png", scale: 1.05 },
        { name: "Space Lab", src: "images/logos/space-lab.png", scale: .9 },
        { name: "SavageBrit", src: "images/logos/savage-brit.png" },
        { name: "Thura", src: "images/logos/thura.png" },
        { name: "Soma", src: "images/logos/soma.png", scale: 1.1 },
        { name: "Supawvisor of the Month", src: "images/logos/supawvisor.png", scale: 1.1 },
        { name: "Garage Ira", src: "images/logos/garage-ira.png" },
        { name: "Logo", src: "images/logos/logo-p10.png" },
        { name: "Semana", src: "images/logos/semana.png", scale: 1.1 },
        { name: "Agro, a indústria-riqueza do Brasil", src: "images/logos/agro.png" },
        { name: "Globoplay", src: "images/logos/globoplay.png", scale: .9 },
        { name: "Meu Ibira", src: "images/logos/meu-ibira.png" },
        { name: "Tá na vida, tá na Globo", src: "images/logos/ta-na-vida.png", scale: 1.35 },
        { name: "menos 30", src: "images/logos/menos-30.png", scale: 1.1 },
        { name: "Hora Um da Notícia", src: "images/logos/hora-um.png" },
        { name: "Heritage Premium Olive Oil", src: "images/logos/heritage.png" },
        { name: "Bora Malhar", src: "images/logos/bora-malhar.png" },
        { name: "Domingo Maior", src: "images/logos/domingo-maior.png", scale: .95 },
        { name: "Wings", src: "images/logos/wings.png" },
        { name: "D", src: "images/logos/d-mark.png", scale: .85 },
        { name: "Veeludo", src: "images/logos/veeludo.png" },
        { name: "coore.hi", src: "images/logos/coore-hi.png" },
        { name: "JBS Sem Fronteiras", src: "images/logos/jbs-sem-fronteiras.png" },
      ].concat(Array.from({ length: 18 }, (_, k) => ({
        name: `Logo ${String(k + 33).padStart(2, "0")}`,
        year: String(2026 - (k % 9)),
      }))),
    },
  ],

  // Hidden for now — move an entry back into `projects` (before Logofolio) to publish it again.
  drafts: [
    {
      title: "Lomography",
      scope: { en: "Analogue photography", pt: "Fotografia analógica" },
      image: "images/lomography/fisheye-05.jpg",
      summary: {
        en: "Film photography shot on three Lomography cameras: the LC-A, the Fisheye and the Super Sampler. Flares, double exposures and whatever the street gives.",
        pt: "Fotografia em filme feita com três câmeras Lomography: a LC-A, a Fisheye e a Super Sampler. Flares, dupla exposição e o que a rua oferecer.",
      },
      // Photo library: justified mosaic. Each photo: { src, ar: "w/h", camera: "LC-A" | "Fisheye" | "Super Sampler", film, caption }.
      layout: "lomo",
      photos: [
        { src: "images/lomography/fisheye-01.jpg", ar: "2000/1326", camera: "Fisheye" },
        { src: "images/lomography/fisheye-02.jpg", ar: "2000/1326", camera: "Fisheye" },
        { src: "images/lomography/fisheye-03.jpg", ar: "2000/1326", camera: "Fisheye" },
        { src: "images/lomography/fisheye-04.jpg", ar: "2000/1326", camera: "Fisheye" },
        { src: "images/lomography/fisheye-05.jpg", ar: "2000/1326", camera: "Fisheye" },
      ],
    },
  ],
};
