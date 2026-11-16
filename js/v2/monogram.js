import * as THREE from '../vendor/three-0.180.0/three.module.min.js';

// Turning B monogram: the site icon's letter B (favicon.svg, without the ® symbol), extruded in 3D and turned
// around its vertical axis by the scroll, next to a degree counter that runs 000° → 180°. Same family as
// disorder-logo-3d.js: orthographic camera (the front keeps the exact flat silhouette), flat front faces in the
// mark's own colour, lit standard-material sides, transparent canvas, pixel ratio capped at 2, paused offscreen.
//
// API
//   createMonogram(host, { signal, progress, onDegrees, color, onFailure }) → { destroy, update, setColor } | null
//   host       an empty block element the caller sizes; a <canvas class="monogram-canvas"> is added filling it
//              and host gets the class "is-3d" while the 3D mark is live (removed on destroy or context loss).
//   signal     AbortSignal: aborting it is the same as destroy().
//   progress() returns 0..1 (the caller computes it from scroll). The mark eases toward progress × 180° on Y,
//              with a slight constant tilt on X for depth.
//   onDegrees(n) called with the integer degree whenever it changes (also once at start).
//   color      CSS colour for the mark (any CSS syntax, including var(--ai, var(--blue)) and currentColor, resolved
//              in the host's context). Default: getComputedStyle(host).color. Either way it is re-resolved when the
//              theme changes (html class / data-theme / style attributes, prefers-color-scheme, or a colour
//              transition on the host finishing).
//   onFailure  optional, called if the WebGL context is lost later (caller shows the flat mark again).
//   Returns null when WebGL is unavailable, the signal is already aborted or the geometry fails: keep the flat mark.
//   update()   asks for a new frame (call it if progress changes without a scroll, e.g. after layout).
//   setColor(css) switches the colour (pass null to go back to reading the host's colour).
//
// Work is on demand: frames run only while the host is on screen, the tab is visible and the angle is still
// easing toward its target; scroll/resize just schedule one requestAnimationFrame.
// Reduced motion: no easing and no turning. The mark stays in its frontal pose (rendered once per change of
// size or colour) and onDegrees still reports round(progress × 180) so the counter stays meaningful.

// favicon.svg letter B only (subpaths before "M27.67", which is the ® symbol). viewBox 0 0 32 32, y down.
const B_PATH = 'M7.05 27.84V4.16H15.58Q18.05 4.16 19.94 4.9Q21.84 5.65 22.92 7.2Q24 8.76 24 11.16Q24 12.25 23.39 13.29Q22.78 14.34 21.7 15.22Q23.26 16.07 24.1 17.44Q24.95 18.81 24.95 20.8Q24.95 23.07 23.9 24.64Q22.85 26.22 21.01 27.03Q19.16 27.84 16.76 27.84ZM13.14 22.33H16.02Q17.13 22.33 17.79 21.72Q18.45 21.11 18.45 20.16Q18.45 19.21 17.79 18.66Q17.13 18.1 16.02 18.1H13.14ZM13.14 13.12H15.14Q16.22 13.12 16.9 12.58Q17.57 12.04 17.57 11.06Q17.57 10.08 16.9 9.54Q16.22 9 15.14 9H13.14Z';

const HEIGHT = 100;          // letter height in world units (the path is scaled to this)
const DEPTH = 36;            // extrusion, about 36% of the letter height
const BEVEL = 1.6;           // small bevel; the negative offset keeps the outline identical to the flat icon
const TILT = .14;            // constant X tilt in radians (about 8°)
const EASE = 7;              // easing speed toward the scroll target (per second, frame-rate independent)
const SEGMENTS = 24;         // curve subdivision

// Tiny SVG path parser → THREE.ShapePath. Handles M L H V Q C Z (absolute, and the lowercase relative forms),
// with implicit repeats. Y is flipped (SVG y points down, three.js y points up).
function parsePath(d, scale) {
  const tokens = d.match(/[MmLlHhVvQqCcZz]|[-+]?(?:\d+\.?\d*|\.\d+)(?:[eE][-+]?\d+)?/g) || [];
  const path = new THREE.ShapePath();
  let i = 0, cmd = '', x = 0, y = 0, sx = 0, sy = 0;
  const num = () => {
    const v = parseFloat(tokens[i++]);
    if (!Number.isFinite(v)) throw new Error('monogram: bad path data');
    return v;
  };
  const P = (px, py) => [px * scale, -py * scale];
  while (i < tokens.length) {
    if (/[a-z]/i.test(tokens[i])) cmd = tokens[i++];
    else if (!cmd) throw new Error('monogram: path must start with a command');
    const rel = cmd === cmd.toLowerCase(), ox = rel ? x : 0, oy = rel ? y : 0;
    switch (cmd.toUpperCase()) {
      case 'M':
        x = ox + num(); y = oy + num(); sx = x; sy = y;
        path.moveTo(...P(x, y));
        cmd = rel ? 'l' : 'L'; // extra pairs after M are line-tos
        break;
      case 'L': x = ox + num(); y = oy + num(); path.lineTo(...P(x, y)); break;
      case 'H': x = ox + num(); path.lineTo(...P(x, y)); break;
      case 'V': y = oy + num(); path.lineTo(...P(x, y)); break;
      case 'Q': {
        const cx = ox + num(), cy = oy + num();
        x = ox + num(); y = oy + num();
        path.quadraticCurveTo(...P(cx, cy), ...P(x, y));
        break;
      }
      case 'C': {
        const c1x = ox + num(), c1y = oy + num(), c2x = ox + num(), c2y = oy + num();
        x = ox + num(); y = oy + num();
        path.bezierCurveTo(...P(c1x, c1y), ...P(c2x, c2y), ...P(x, y));
        break;
      }
      case 'Z':
        path.currentPath?.closePath();
        x = sx; y = sy;
        break;
      default: throw new Error('monogram: unsupported path command ' + cmd);
    }
  }
  return path;
}

// Even-odd ray test: is point p inside polygon pts?
function inside(p, pts) {
  let hit = false;
  for (let a = 0, b = pts.length - 1; a < pts.length; b = a++) {
    const A = pts[a], B = pts[b];
    if ((A.y > p.y) !== (B.y > p.y) && p.x < (B.x - A.x) * (p.y - A.y) / (B.y - A.y) + A.x) hit = !hit;
  }
  return hit;
}

// ShapePath → Shapes with holes found by nesting, not by winding: a subpath inside an odd number of others is a
// hole of the smallest solid that contains it. (ShapePath.toShapes guesses from the first subpath's winding,
// which the Y flip reverses; nesting is unambiguous for the B's outer contour and its two counters.)
function toShapes(shapePath) {
  const subs = shapePath.subPaths.map(sub => {
    const pts = sub.getPoints(SEGMENTS);
    return { sub, pts, area: Math.abs(THREE.ShapeUtils.area(pts)), parents: [] };
  }).filter(s => s.pts.length > 2 && s.area > 1e-6);
  subs.forEach(s => { s.parents = subs.filter(o => o !== s && o.area > s.area && inside(s.pts[0], o.pts)); });
  const solids = new Map();
  subs.filter(s => s.parents.length % 2 === 0).forEach(s => {
    const shape = new THREE.Shape();
    shape.curves = s.sub.curves;
    solids.set(s, shape);
  });
  subs.filter(s => s.parents.length % 2 === 1).forEach(s => {
    const owner = s.parents.filter(o => solids.has(o)).sort((a, b) => a.area - b.area)[0];
    if (owner) solids.get(owner).holes.push(s.sub);
  });
  return [...solids.values()];
}

// Builds the centred, extruded B. Exported for tests and reuse; createMonogram is the main API.
export function createMonogramGeometry() {
  const scale = HEIGHT / (27.84 - 4.16);
  const shapes = toShapes(parsePath(B_PATH, scale));
  const geometry = new THREE.ExtrudeGeometry(shapes, {
    depth: DEPTH, steps: 1, curveSegments: SEGMENTS,
    bevelEnabled: true, bevelThickness: BEVEL * 1.25, bevelSize: BEVEL, bevelOffset: -BEVEL, bevelSegments: 3
  });
  geometry.center();
  geometry.computeBoundingBox();
  return geometry;
}

// Any CSS colour → THREE.Color (sRGB), via a 1×1 2D canvas so oklch(), color-mix(), named colours etc. all work.
let scratch;
function cssColor(css) {
  try {
    scratch ||= document.createElement('canvas').getContext('2d', { willReadFrequently: true });
    scratch.clearRect(0, 0, 1, 1);
    scratch.fillStyle = '#000';
    scratch.fillStyle = css;
    scratch.fillRect(0, 0, 1, 1);
    const [r, g, b] = scratch.getImageData(0, 0, 1, 1).data;
    return new THREE.Color().setRGB(r / 255, g / 255, b / 255, THREE.SRGBColorSpace);
  } catch {
    try { return new THREE.Color(css); } catch { return new THREE.Color(0, 0, 0); }
  }
}

export function createMonogram(host, { signal, progress, onDegrees, color, onFailure } = {}) {
  if (!host || signal?.aborted) return null;
  const canvas = document.createElement('canvas');
  canvas.className = 'monogram-canvas';
  canvas.setAttribute('aria-hidden', 'true');
  // Inline so no page rule for canvases (e.g. `.fig .ph > canvas`: black matte, grab cursor) can restyle it.
  canvas.style.cssText = 'display:block;width:100%;height:100%;background:transparent;pointer-events:none';
  let renderer;
  try {
    renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true, powerPreference: 'low-power' });
  } catch {
    return null; // No WebGL: the caller keeps the flat mark.
  }
  renderer.setPixelRatio(Math.min(devicePixelRatio || 1, 2));
  renderer.setClearColor(0, 0);
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.NoToneMapping;

  const scene = new THREE.Scene();
  const camera = new THREE.OrthographicCamera(-100, 100, 100, -100, .1, 2000);
  camera.position.set(0, 0, 900);
  camera.lookAt(0, 0, 0);

  // Flat fronts show the exact CSS colour; sides are a shade lighter or darker so the depth reads either way.
  const fronts = new THREE.MeshBasicMaterial();
  const sides = new THREE.MeshStandardMaterial({ roughness: .48, metalness: .12 });
  // Same three-light rig as the Disorder logo, in neutral white so the mark's colour is not tinted.
  scene.add(new THREE.HemisphereLight(0xffffff, 0x6a6a6a, 2.2));
  const key = new THREE.DirectionalLight(0xffffff, 3);
  key.position.set(-220, 300, 400); scene.add(key);
  const fill = new THREE.DirectionalLight(0xffffff, 1.5);
  fill.position.set(240, 30, -150); scene.add(fill);

  let geometry;
  try { geometry = createMonogramGeometry(); } catch {
    fronts.dispose(); sides.dispose(); renderer.dispose();
    try { renderer.forceContextLoss(); } catch {}
    return null;
  }
  const mesh = new THREE.Mesh(geometry, [fronts, sides]);
  const pivot = new THREE.Group(); // tilt lives on the parent so the letter turns around its own upright axis
  pivot.add(mesh); scene.add(pivot);

  // Frame that holds the letter at every angle: widest projection is the box diagonal (w, d); the tilt adds height.
  const box = geometry.boundingBox.getSize(new THREE.Vector3());
  const diag = Math.hypot(box.x, box.z);
  const needW = diag * 1.06;
  const needH = (box.y * Math.cos(TILT) + diag * Math.sin(TILT)) * 1.06;

  const ac = new AbortController(), opts = { signal: ac.signal };
  const reducedMQ = matchMedia('(prefers-reduced-motion: reduce)');
  let reduced = reducedMQ.matches;
  let disposed = false, visible = false, lost = false, dirty = true;
  let frame = 0, last = 0, reported = null, colorOverride = color ?? null, currentColor = '';
  const target = () => {
    let p = 0;
    try { p = Number(progress?.()); } catch { p = 0; }
    return (Number.isFinite(p) ? Math.min(1, Math.max(0, p)) : 0) * 180;
  };
  let deg = target();

  // Resolve the colour in the host's context so var(--x), currentColor and theme overrides on <html> all apply.
  // An invalid override is ignored by the browser and the probe simply inherits the host's colour.
  const resolveColor = () => {
    if (colorOverride == null) return getComputedStyle(host).color;
    const probe = document.createElement('span');
    probe.style.cssText = 'display:none';
    probe.style.color = colorOverride;
    host.append(probe);
    const css = getComputedStyle(probe).color;
    probe.remove();
    return css;
  };
  const applyColor = () => {
    if (disposed) return false;
    const css = resolveColor();
    if (css === currentColor) return false;
    currentColor = css;
    const c = cssColor(css);
    fronts.color.copy(c);
    const hsl = c.getHSL({}, THREE.SRGBColorSpace);
    const lift = hsl.l < .35 ? .16 : -.14;
    sides.color.setHSL(hsl.h, hsl.s, Math.min(1, Math.max(0, hsl.l + lift)), THREE.SRGBColorSpace);
    return true;
  };

  let sizeKey = '';
  const resize = () => {
    if (disposed || lost) return;
    const w = Math.max(1, host.clientWidth), h = Math.max(1, host.clientHeight || host.clientWidth);
    const dpr = Math.min(devicePixelRatio || 1, 2);
    const key = w + 'x' + h + '@' + dpr;
    if (key === sizeKey) return; // re-setting the canvas size would clear it for nothing
    sizeKey = key;
    renderer.setPixelRatio(dpr); // follows zoom / moving to another screen
    renderer.setSize(w, h, false);
    const aspect = w / h;
    const halfH = Math.max(needH / 2, needW / 2 / aspect), halfW = halfH * aspect;
    camera.left = -halfW; camera.right = halfW; camera.top = halfH; camera.bottom = -halfH;
    camera.updateProjectionMatrix();
    // Resizing clears the WebGL canvas, so draw now (same frame) instead of waiting a frame and flashing empty.
    draw(); kick();
  };

  const report = value => {
    const n = Math.round(value);
    if (n !== reported) { reported = n; try { onDegrees?.(n); } catch {} }
  };

  const draw = () => {
    if (reduced) { pivot.rotation.x = 0; mesh.rotation.y = 0; }
    else { pivot.rotation.x = TILT; mesh.rotation.y = THREE.MathUtils.degToRad(deg); }
    renderer.render(scene, camera);
    dirty = false;
  };

  const live = () => !disposed && !lost && visible && !document.hidden;
  const tick = now => {
    frame = 0;
    if (!live()) { last = 0; return; }
    const goal = target();
    const dt = last ? Math.min((now - last) / 1000, .1) : 1 / 60;
    last = now;
    let next = goal;
    if (!reduced) {
      const diff = goal - deg;
      next = Math.abs(diff) < .05 ? goal : deg + diff * (1 - Math.exp(-dt * EASE));
    }
    if (next !== deg) { deg = next; if (!reduced) dirty = true; }
    report(reduced ? goal : deg);
    if (dirty) draw();
    if (!reduced && deg !== goal) frame = requestAnimationFrame(tick);
    else last = 0;
  };
  function kick() { if (!frame && live()) frame = requestAnimationFrame(tick); }

  const onVisibility = () => { if (document.hidden) { cancelAnimationFrame(frame); frame = 0; last = 0; } else kick(); };
  const io = new IntersectionObserver(entries => {
    visible = entries[entries.length - 1].isIntersecting;
    if (visible) kick(); else { cancelAnimationFrame(frame); frame = 0; last = 0; }
  });
  const ro = new ResizeObserver(resize);
  const recolor = () => { if (applyColor()) { dirty = true; kick(); } };
  let mo = null;

  const contextLost = event => {
    event.preventDefault(); lost = true;
    cancelAnimationFrame(frame); frame = 0;
    host.classList.remove('is-3d');
    try { onFailure?.(); } catch {}
  };

  const destroy = () => {
    if (disposed) return;
    disposed = true;
    cancelAnimationFrame(frame); frame = 0;
    ac.abort(); io.disconnect(); ro.disconnect(); mo?.disconnect();
    canvas.removeEventListener('webglcontextlost', contextLost);
    geometry.dispose(); fronts.dispose(); sides.dispose();
    renderer.dispose();
    try { renderer.forceContextLoss(); } catch {} // frees the context now instead of at garbage collection
    canvas.remove(); host.classList.remove('is-3d');
  };

  try {
    applyColor();
    // Measure before the canvas goes in: an auto-height host would otherwise take the canvas's default 300×150 and
    // settle at 2:1. Measured empty, it gets a square (clientHeight 0 → width), which the canvas then holds.
    resize();
    host.append(canvas);
    host.classList.add('is-3d');
    canvas.addEventListener('webglcontextlost', contextLost);
    io.observe(host); ro.observe(host);
    document.addEventListener('visibilitychange', onVisibility, opts);
    // Capture catches scrolling of any element, not only the window; kick() is one rAF at most.
    document.addEventListener('scroll', kick, { ...opts, capture: true, passive: true });
    addEventListener('resize', kick, { ...opts, passive: true });
    reducedMQ.addEventListener('change', e => { reduced = e.matches; last = 0; dirty = true; kick(); }, opts);
    // Always watched (cheap; recolor is a no-op when nothing changed): a var() override follows the theme too, and
    // setColor(null) after a forced colour goes back to tracking the host.
    matchMedia('(prefers-color-scheme: dark)').addEventListener('change', recolor, opts);
    host.addEventListener('transitionend', recolor, opts); // a colour transition read mid-way settles here
    mo = new MutationObserver(recolor);
    mo.observe(document.documentElement, { attributes: true, attributeFilter: ['class', 'data-theme', 'style'] });
    signal?.addEventListener('abort', destroy, { once: true, signal: ac.signal });
    report(deg);
  } catch {
    destroy();
    return null;
  }

  return {
    destroy,
    update() { kick(); },
    setColor(css) { if (disposed) return; colorOverride = css ?? null; recolor(); }
  };
}
