import * as THREE from './vendor/three-0.180.0/three.module.min.js';

// Original Shape 1 vector mask from 01_materia_daftpunk_001.psd.
// Outer contours and counters are preserved as cubic curves, not a font or tracing.
const CONTOURS = [{"operation":1,"knots":[{"anchor":[733.898799,278.207061],"in":[733.898799,232.375565],"out":[733.898799,278.207061]},{"anchor":[733.898799,388.544744],"in":[733.898799,388.544744],"out":[733.898799,434.37624]},{"anchor":[657.940185,452.534822],"in":[703.687255,452.534822],"out":[657.940185,452.534822]},{"anchor":[345.136635,452.534822],"in":[345.136635,452.534822],"out":[345.136635,452.534822]},{"anchor":[345.136635,214.216098],"in":[345.136635,214.216098],"out":[345.136635,214.216098]},{"anchor":[657.940185,214.216098],"in":[657.940185,214.216098],"out":[703.687255,214.216098]}]},{"operation":-1,"knots":[{"anchor":[632.875714,273.329034],"in":[645.995321,273.329034],"out":[632.875714,273.329034]},{"anchor":[424.062524,273.329034],"in":[424.062524,273.329034],"out":[424.062524,273.329034]},{"anchor":[424.062524,393.422851],"in":[424.062524,393.422851],"out":[424.062524,393.422851]},{"anchor":[632.875714,393.422851],"in":[632.875714,393.422851],"out":[645.995321,393.422851]},{"anchor":[654.971945,371.285695],"in":[654.971945,388.579264],"out":[654.971945,371.285695]},{"anchor":[654.971945,295.46611],"in":[654.971945,295.46611],"out":[654.971945,278.171656]}]},{"operation":1,"knots":[{"anchor":[409.011276,501.102009],"in":[363.263369,501.102009],"out":[409.011276,501.102009]},{"anchor":[670.024095,501.102009],"in":[670.024095,501.102009],"out":[715.772967,501.102009]},{"anchor":[733.898799,577.19872],"in":[733.898799,531.368029],"out":[733.898799,577.19872]},{"anchor":[733.898799,739.937729],"in":[733.898799,739.937729],"out":[733.898799,739.937729]},{"anchor":[345.136635,739.937729],"in":[345.136635,739.937729],"out":[345.136635,739.937729]},{"anchor":[345.136635,577.19872],"in":[345.136635,577.19872],"out":[345.136635,531.368029]}]},{"operation":-1,"knots":[{"anchor":[421.455867,587.245578],"in":[421.455867,574.101412],"out":[421.455867,587.245578]},{"anchor":[421.455867,675.932202],"in":[421.455867,675.932202],"out":[421.455867,675.932202]},{"anchor":[657.579503,675.932202],"in":[657.579503,675.932202],"out":[657.579503,675.932202]},{"anchor":[657.579503,587.245578],"in":[657.579503,587.245578],"out":[657.579503,574.101412]},{"anchor":[635.482371,565.109387],"in":[652.745025,565.109387],"out":[635.482371,565.109387]},{"anchor":[443.553064,565.109387],"in":[443.553064,565.109387],"out":[426.290345,565.109387]}]}];

export function createLogo(host, { signal, onFailure } = {}) {
  if (signal?.aborted) return null;
  const canvas = document.createElement('canvas');
  canvas.setAttribute('aria-hidden', 'true');
  let renderer;
  try {
    renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true, powerPreference: 'low-power' });
  } catch {
    onFailure?.();
    return null; // Static original artwork remains visible when WebGL is unavailable.
  }
  renderer.setPixelRatio(Math.min(devicePixelRatio || 1, 2));
  renderer.setClearColor(0, 0);
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.NoToneMapping;
  const scene = new THREE.Scene();
  const camera = new THREE.OrthographicCamera(-300, 300, 300, -300, .1, 2000);
  camera.position.set(0, 0, 900);
  camera.lookAt(0, 0, 0);
  // The orthographic projection preserves the original front silhouette and spacing.
  const scale = 316 / (733.898799 - 345.136635);
  const centerX = (733.898799 + 345.136635) / 2;
  const centerY = (739.937729 + 214.216098) / 2;
  const xy = point => [(point[0] - centerX) * scale, (centerY - point[1]) * scale];
  const trace = (data, Path) => {
    const path = new Path(), first = xy(data.knots[0].anchor);
    path.moveTo(...first);
    data.knots.forEach((knot, i) => {
      const next = data.knots[(i + 1) % data.knots.length];
      path.bezierCurveTo(...xy(knot.out), ...xy(next.in), ...xy(next.anchor));
    });
    path.closePath();
    return path;
  };
  const fronts = new THREE.MeshBasicMaterial({ color: '#faf1e6' }); // the page cream (lighter since Nov 16 2026)
  const sides = new THREE.MeshStandardMaterial({ color: '#cfab87', roughness: .48, metalness: .12 });
  scene.add(new THREE.HemisphereLight(0xfff6e8, 0x8c4d29, 2.2));
  const key = new THREE.DirectionalLight(0xfff2dc, 3);
  key.position.set(-220, 300, 400);scene.add(key);
  const fill = new THREE.DirectionalLight(0xffffff, 1.5);
  fill.position.set(240, 30, -150);scene.add(fill);
  const meshes = [], geometries = [];
  for (let i = 0; i < CONTOURS.length; i += 2) {
    const shape = trace(CONTOURS[i], THREE.Shape);
    shape.holes.push(trace(CONTOURS[i + 1], THREE.Path));
    const geometry = new THREE.ExtrudeGeometry(shape, { depth: 35, bevelEnabled: false, steps: 1, curveSegments: 32 });
    geometry.computeBoundingBox();
    const center = geometry.boundingBox.getCenter(new THREE.Vector3());
    geometry.translate(-center.x, -center.y, -center.z);
    const mesh = new THREE.Mesh(geometry, [fronts, sides]);
    mesh.position.set(center.x, center.y, 0);
    scene.add(mesh);meshes.push(mesh);geometries.push(geometry);
  }
  let disposed = false, paused = false, visible = false, lost = false;
  let frame = 0, last = 0, elapsed = 0;
  // Coin-like turns: 2.45s per piece. The second starts at 1.0s, while the first is still turning
  // (Felipe, Nov 16 2026: "can start sooner"; it used to wait until 2.6s). Each starts briskly and slows to rest.
  const turn = (time, start) => {
    const t = THREE.MathUtils.clamp((time - start) / 2.45, 0, 1);
    return (1 - Math.pow(1 - t, 3)) * Math.PI * 2;
  };
  const render = () => {
    const time = elapsed % 5.2;
    meshes[0].rotation.y = turn(time, 0);
    meshes[1].rotation.y = turn(time, 1.0);
    renderer.render(scene, camera);
  };
  const resize = () => {
    if (disposed || lost) return;
    const size = Math.max(1, host.clientWidth);
    renderer.setSize(size, size, false);render();
  };
  const stop = () => { cancelAnimationFrame(frame);frame = 0;last = 0; };
  const animate = now => {
    frame = 0;
    if (disposed || paused || !visible || document.hidden || lost) return;
    if (last) elapsed += Math.min((now - last) / 1000, .1);
    last = now;render();frame = requestAnimationFrame(animate);
  };
  const sync = () => {
    stop();
    if (!disposed && !paused && visible && !document.hidden && !lost) frame = requestAnimationFrame(animate);
  };
  const observer = new IntersectionObserver(entries => { visible = entries[0].isIntersecting;sync(); });
  const ro = new ResizeObserver(resize);
  const dispose = () => {
    if (disposed) return;disposed = true;stop();observer.disconnect();ro.disconnect();
    document.removeEventListener('visibilitychange', sync);
    canvas.removeEventListener('webglcontextlost', contextLost);
    signal?.removeEventListener('abort', dispose);
    geometries.forEach(g => g.dispose());fronts.dispose();sides.dispose();
    renderer.dispose();canvas.remove();host.classList.remove('is-3d');
  };
  const contextLost = event => {
    event.preventDefault();lost = true;stop();host.classList.remove('is-3d');onFailure?.();
  };
  try {
    resize();host.append(canvas);host.classList.add('is-3d');observer.observe(host);ro.observe(host);
    document.addEventListener('visibilitychange', sync);
    canvas.addEventListener('webglcontextlost', contextLost);
    signal?.addEventListener('abort', dispose, { once: true });
  } catch { dispose();onFailure?.();return null; }
  return { setPaused(value) { paused = value;sync(); }, dispose };
}
