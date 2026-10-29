// Runs before the page HTML only (run_worker_first in wrangler.jsonc); every other file is served straight from the assets.
// Tags the visitor's country in a cookie so main.js can open in Portuguese for Brazil and English everywhere else.
export default {
  async fetch(request, env) {
    const res = await env.ASSETS.fetch(request);
    const country = request.cf && request.cf.country;
    if (!country || !(res.headers.get("content-type") || "").includes("text/html")) return res;
    const out = new Response(res.body, res);
    out.headers.append("Set-Cookie", `geo=${country}; Path=/; Max-Age=86400; SameSite=Lax; Secure`);
    return out;
  }
};
