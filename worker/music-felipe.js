// Felipe's listening, from his public Last.fm (https://www.last.fm/user/fbellintani).
// The lists below are the snapshot of Nov 20 2026. The worker refreshes them once a week from the Last.fm API
// (worker/lastfm.js, needs the LASTFM_KEY secret) and falls back to this snapshot when there is no key or the API fails.
// musicText() turns either into the buddy's facts; BRIDGE (hand-picked songs) drives the Music match's song pick.

export const PROFILE = { since: "21 Nov 2006", scrobbles: 283802, artists: 11742, loved: 3218 };

// Top 50 artists, all time: [name, scrobbles]
export const TOP_ARTISTS = [
  ["The Beatles", 4952], ["NOFX", 3154], ["Spoon", 3089], ["Phoenix", 2700], ["The Radio Dept.", 2636],
  ["Radiohead", 2446], ["Bob Marley & The Wailers", 2404], ["Kings of Convenience", 2310], ["Arctic Monkeys", 2075], ["M83", 1956],
  ["Arcade Fire", 1932], ["The Dandy Warhols", 1901], ["Pearl Jam", 1882], ["Maxïmo Park", 1831], ["The Strokes", 1735],
  ["The Interrupters", 1700], ["The Flaming Lips", 1644], ["New Order", 1636], ["Hot Chip", 1389], ["Sublime", 1382],
  ["Cut Copy", 1381], ["Beck", 1376], ["Depeche Mode", 1374], ["Shout Out Louds", 1349], ["Amy Winehouse", 1329],
  ["Green Day", 1286], ["The Shins", 1266], ["of Montreal", 1255], ["Kings of Leon", 1237], ["David Bowie", 1236],
  ["Foo Fighters", 1213], ["Bloc Party", 1153], ["The xx", 1106], ["The Cure", 1104], ["The Magic Numbers", 1103],
  ["Cake", 1102], ["Mumford & Sons", 1078], ["The Killers", 1027], ["Chromeo", 999], ["Queen", 998],
  ["The Clash", 997], ["LCD Soundsystem", 993], ["Red Hot Chili Peppers", 965], ["311", 944], ["Jamiroquai", 941],
  ["R.E.M.", 930], ["Pet Shop Boys", 910], ["Clap Your Hands Say Yeah", 893], ["The Cranberries", 858], ["Gorillaz", 844],
];

// Other artists in his library: loved tracks, top albums and tracks, what he is playing lately, his site soundtracks
export const MORE_ARTISTS = [
  "Rex the Dog", "Daft Punk", "Morcheeba", "French 79", "Crystal Castles", "deadmau5", "The Distillers", "Against Me!",
  "Social Distortion", "Fred again..", "Purple Disco Machine", "CHVRCHES", "Marshmello", "Roman Flügel", "Stefan Rio", "Sono", "BUNT.",
  "Dire Straits", "José González", "Blind Melon", "The Offspring", "Band of Horses", "MGMT", "Tracy Chapman", "Al Green",
  "M.I.A.", "Faith No More", "Weezer", "Lorde", "The White Stripes", "Big D And The Kids Table", "Mad Caddies",
  "Bruce Springsteen", "Bill Withers", "Talking Heads", "The Chemical Brothers", "Blur", "The National", "Modest Mouse",
  "Coldplay", "Billie Eilish", "Dexys Midnight Runners", "Cazuza", "Tiê", "blink-182", "Lewis Capaldi", "Labrinth",
  "Phoebe Bridgers", "The Marías", "Shouse", "Audrey Nuna", "Ferreck Dawn", "Sturgill Simpson", "Chance the Rapper",
  "Guns N' Roses", "The American Analog Set", "Tokyo Police Club", "Local Natives", "The Whitest Boy Alive", "The Knife",
  "Dirty Pretty Things", "Au Revoir Simone", "Kraftwerk", "DJ Shadow", "Explosions in the Sky", "Dirty Projectors",
  "Tim Maia", "Jorge Ben Jor", "Madonna", "Dolly Parton", "Rage Against the Machine", "Ennio Morricone", "Hans Zimmer",
  "Paul Simon", "Lola Young",
];

export const TOP_TRACKS = [
  "Delayed Dreams – New Year's Rain (a rain sound, 666 plays: his most played track ever)",
  "NOFX – Linoleum (340)", "Dire Straits – Sultans of Swing (287)", "José González – Heartbeats (267)",
  "Maxïmo Park – Books from Boxes (257)", "Kings of Convenience – Know How (256)", "Phoenix – If I Ever Feel Better (249)",
  "Mumford & Sons – I Will Wait (241)", "The Cure – Close to Me (240)", "311 – Amber (237)", "Phoenix – Lisztomania (228)",
  "Sublime – Badfish (223)", "NOFX – Eat the Meek (222)", "Green Day – Good Riddance (Time of Your Life) (215)",
  "R.E.M. – Losing My Religion (213)", "Red Hot Chili Peppers – Under the Bridge (210)", "Coldplay – Magic (204)",
  "Bob Marley & The Wailers – Waiting In Vain (202)", "Blind Melon – No Rain (201)", "The Killers – Mr. Brightside (201)",
  "Spoon – I Turn My Camera On (193)", "The Offspring – Self Esteem (192)", "Band of Horses – Is There a Ghost (190)",
  "Bruce Springsteen – Dancing in the Dark (189)", "M83 – Kim & Jessie (188)", "MGMT – Kids (185)",
  "The Interrupters – She's Kerosene (184)", "Tracy Chapman – Fast Car (179)", "Radiohead – Creep (178)",
  "Al Green – Let's Stay Together (173)", "M.I.A. – Paper Planes (172)", "The White Stripes – Hotel Yorba (168)",
  "Weezer – Island in the Sun (164)", "Arctic Monkeys – 505 (163)", "Lorde – Royals (163)", "Hot Chip – Crap Kraft Dinner (162)",
];

export const TOP_ALBUMS = [
  "NOFX – Punk in Drublic (1,438 plays, his most played album)", "Maxïmo Park – A Certain Trigger (939)",
  "The Radio Dept. – Lesser Matters (901)", "Spoon – Ga Ga Ga Ga Ga (848)", "Kings of Convenience – Riot on an Empty Street (819)",
  "The Magic Numbers – The Magic Numbers (811)", "The Dandy Warhols – Welcome to the Monkey House (787)",
  "Arctic Monkeys – Whatever People Say I Am, That's What I'm Not (742)", "Shout Out Louds – Our Ill Wills (735)",
  "311 – From Chaos (711)", "The Flaming Lips – Yoshimi Battles the Pink Robots (706)", "Arcade Fire – Funeral (695)",
  "The xx – xx (680)", "Green Day – Dookie (673)", "MGMT – Oracular Spectacular (613)", "Radiohead – In Rainbows (590)",
];

// What he played most in the last 30 days (Nov 2026)
export const LATELY = [
  "Rex the Dog – Intro", "LCD Soundsystem – Daft Punk Is Playing at My House", "Marshmello – Here With Me",
  "Morcheeba – Dead To Me (Rex The Dog Remix Edit)", "The Killers – Mr. Brightside", "The Killers – Somebody Told Me",
  "Daft Punk – Harder, Better, Faster, Stronger", "New Order – Blue Monday", "The Interrupters – Warrior Spirit",
  "Fred again.. – Marea (We've Lost Dancing)", "Purple Disco Machine – Hypnotized", "Social Distortion – Wicked Game",
];

export const TAGS = ["indie", "rock", "electronica", "alternative", "pop", "electro", "minimal", "folk", "techno", "experimental",
  "80s", "ambient", "90s", "downtempo", "trip-hop", "psychedelic", "dance", "synthpop", "post-punk", "shoegaze", "dream pop", "punk", "ska"];

export const YEARS = "2006: 1,767 · 2007: 24,907 · 2008: 39,216 (his record year) · 2009: 26,641 · 2010: 19,931 · 2011: 13,900 · 2012: 9,944 · 2013: 6,047 · 2014: 13,150";

export const SNAPSHOT = { asOf: "Nov 20 2026", profile: PROFILE, topArtists: TOP_ARTISTS, topTracks: TOP_TRACKS, topAlbums: TOP_ALBUMS, lately: LATELY, more: MORE_ARTISTS, years: YEARS };

const n = v => Number(v).toLocaleString("en-US");
// The buddy's music facts, as plain text (from the weekly Last.fm data or the snapshot)
export const musicText = d => `FROM HIS LAST.FM (public profile last.fm/user/fbellintani, scrobbling since ${d.profile.since}; data as of ${d.asOf}):
- ${n(d.profile.scrobbles)} scrobbles (songs played and logged), ${n(d.profile.artists)} different artists, ${n(d.profile.loved)} loved tracks.
- Most played artists of all time (plays): ${d.topArtists.map(([a, c]) => `${a} ${n(c)}`).join(", ")}.
- Most played tracks: ${d.topTracks.join("; ")}.${d.topTracks.some(t => /rain/i.test(t)) ? " Fun fact: his top tracks include rain sounds he plays to focus and sleep." : ""}
- Most played albums: ${d.topAlbums.join("; ")}.
- On repeat lately (last 30 days): ${d.lately.join("; ")}.${d.yearArtists ? `\n- Most played artists in the last 12 months: ${d.yearArtists.map(([a, c]) => `${a} ${n(c)}`).join(", ")}.` : ""}${d.years ? `\n- Scrobbles per year: ${d.years}.` : ""}
- Genres he tags most: ${TAGS.join(", ")}.
- Also in his library and loved tracks: ${d.more.slice(0, 60).join(", ")}.
- His taste in one line: indie rock from the 2000s, skate punk and ska punk (NOFX, The Interrupters, Big D And The Kids Table), synth and indie dance (New Order, M83, Hot Chip, LCD Soundsystem, Rex the Dog), Scandinavian softness (Kings of Convenience, The Radio Dept.), The Beatles and Bob Marley forever, and rain sounds for focus.`;

// Music match: the picks' song suggestions. Each sound maps to songs he really plays a lot.
export const BRIDGE = {
  indie: [["Phoenix", "Lisztomania"], ["Spoon", "The Underdog"], ["Arctic Monkeys", "505"], ["Maxïmo Park", "Books from Boxes"]],
  punk: [["NOFX", "Linoleum"], ["Green Day", "Basket Case"], ["The Offspring", "Self Esteem"]],
  ska: [["The Interrupters", "She's Kerosene"], ["Mad Caddies", "She"], ["Big D And The Kids Table", "Describing The Sky"]],
  synth: [["New Order", "Blue Monday"], ["M83", "Kim & Jessie"], ["The Cure", "Close to Me"]],
  dance: [["LCD Soundsystem", "Daft Punk Is Playing at My House"], ["Hot Chip", "Crap Kraft Dinner"], ["Rex the Dog", "Intro"]],
  calm: [["José González", "Heartbeats"], ["Kings of Convenience", "Know How"], ["Band of Horses", "Is There a Ghost"]],
  classic: [["The Beatles", "Yellow Submarine"], ["Dire Straits", "Sultans of Swing"], ["Al Green", "Let's Stay Together"]],
  reggae: [["Bob Marley & The Wailers", "Waiting In Vain"], ["Sublime", "Badfish"], ["311", "Amber"]],
  pop: [["The Killers", "Mr. Brightside"], ["Lorde", "Royals"], ["Coldplay", "Magic"]],
};
