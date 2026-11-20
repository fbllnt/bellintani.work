// Weekly Last.fm refresh for the Pop quiz (Felipe, Nov 20 2026: "refresh once a week").
// Reads his public stats from the official Last.fm API (the web pages block automated reads), keeps the result in the
// Workers cache for 7 days, then fetches again. Needs the secret LASTFM_KEY (a free Last.fm API key):
//   npx wrangler secret put LASTFM_KEY
// No key, or the API is down: the hand snapshot in music-felipe.js is used, so the quiz never breaks.
import { SNAPSHOT, MORE_ARTISTS } from "./music-felipe.js";

const USER = "fbellintani", WEEK = 7 * 24 * 3600;
const CACHE_KEY = "https://bellintani.work/__cache/lastfm-v1";
let memo = null; // same isolate: skip the cache lookup

const api = async (env, method, params = "") => {
  const r = await fetch(`https://ws.audioscrobbler.com/2.0/?method=${method}&user=${USER}&api_key=${env.LASTFM_KEY}&format=json${params}`,
    { headers: { "user-agent": "bellintani.work pop quiz" } });
  if (!r.ok) throw new Error(`${method} ${r.status}`);
  const j = await r.json();
  if (j.error) throw new Error(`${method} ${j.message}`);
  return j;
};
const list = x => (Array.isArray(x) ? x : x ? [x] : []);
const fmt = v => Number(v).toLocaleString("en-US");

async function load(env) {
  const [info, artists, year, tracks, albums, month, loved] = await Promise.all([
    api(env, "user.getinfo"),
    api(env, "user.gettopartists", "&period=overall&limit=50"),
    api(env, "user.gettopartists", "&period=12month&limit=15"),
    api(env, "user.gettoptracks", "&period=overall&limit=40"),
    api(env, "user.gettopalbums", "&period=overall&limit=16"),
    api(env, "user.gettoptracks", "&period=1month&limit=12"),
    api(env, "user.getlovedtracks", "&limit=60"),
  ]);
  const u = info.user || {};
  const since = u.registered?.unixtime ? new Date(u.registered.unixtime * 1000).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" }) : SNAPSHOT.profile.since;
  const topArtists = list(artists.topartists?.artist).map(a => [a.name, Number(a.playcount)]);
  if (topArtists.length < 10) throw new Error("too few artists");
  const lovedArtists = list(loved.lovedtracks?.track).map(t => t.artist?.name).filter(Boolean);
  const albumArtists = list(albums.topalbums?.album).map(a => a.artist?.name);
  const monthTracks = list(month.toptracks?.track);
  return {
    asOf: new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }),
    profile: { since, scrobbles: Number(u.playcount) || SNAPSHOT.profile.scrobbles, artists: Number(u.artist_count) || SNAPSHOT.profile.artists,
      loved: Number(loved.lovedtracks?.["@attr"]?.total) || SNAPSHOT.profile.loved },
    topArtists,
    yearArtists: list(year.topartists?.artist).map(a => [a.name, Number(a.playcount)]),
    topTracks: list(tracks.toptracks?.track).map(t => `${t.artist?.name} – ${t.name} (${fmt(t.playcount)})`),
    topAlbums: list(albums.topalbums?.album).map(a => `${a.artist?.name} – ${a.name} (${fmt(a.playcount)})`),
    lately: monthTracks.map(t => `${t.artist?.name} – ${t.name}`),
    more: [...new Set([...monthTracks.map(t => t.artist?.name), ...lovedArtists, ...albumArtists, ...MORE_ARTISTS].filter(Boolean))],
    years: SNAPSHOT.years,
    live: true,
  };
}

export async function getMusic(env, ctx) {
  if (memo && Date.now() - memo.at < WEEK * 1000) return memo.data;
  if (!env.LASTFM_KEY) return SNAPSHOT;
  const cache = typeof caches !== "undefined" ? caches.default : null;
  try {
    const hit = cache && await cache.match(CACHE_KEY);
    if (hit) { const data = await hit.json(); memo = { at: Date.now(), data }; return data; }
  } catch {}
  try {
    const data = await load(env);
    memo = { at: Date.now(), data };
    if (cache) {
      const put = cache.put(CACHE_KEY, new Response(JSON.stringify(data), { headers: { "content-type": "application/json", "cache-control": `max-age=${WEEK}` } }));
      ctx?.waitUntil ? ctx.waitUntil(put) : await put;
    }
    return data;
  } catch {
    return SNAPSHOT;
  }
}
