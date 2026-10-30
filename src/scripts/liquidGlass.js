// Edge refraction for liquid glass surfaces (Chromium only: it is the one
// engine that renders SVG filters inside backdrop-filter).
//
// For each glass element we paint a displacement map the size of the element:
// neutral in the middle (no shift) and, within a thin bezel along the rounded
// edge, a push along the edge normal that pulls in the backdrop from just
// outside — the bent-lens rim of the iOS 26 tab bar.

const SELECTOR = [
  ".nav__inner",
  // Phone layout: the capsule splits into these three floating pieces
  ".nav__logo",
  ".nav__links",
  ".nav__actions",
  ".btn--ghost",
  ".btn--primary",
  ".badge",
  ".chips li",
  ".social-links a",
  ".timeline__period",
  // ponytail: big cards (.bento-card, .timeline__card, .contact-card) skip
  // refraction; the filter repaints every scroll frame and its cost grows with
  // area (~30fps on Projects). They keep the blur. Revisit if Chrome caches it.
].join(",");

// Controls that swell when pressed, like glass under a fingertip
const PRESSABLE = ".btn, .icon-btn, .social-links a, .nav__inner, .nav__links";
const PRESS_BEND = 1.8; // refraction multiplier while pressed

const SVG_NS = "http://www.w3.org/2000/svg";

// Signed distance to a rounded rectangle centred on the origin
function roundedRectSDF(x, y, hw, hh, r) {
  const qx = Math.abs(x) - (hw - r);
  const qy = Math.abs(y) - (hh - r);
  const outside = Math.hypot(Math.max(qx, 0), Math.max(qy, 0));
  return outside + Math.min(Math.max(qx, qy), 0) - r;
}

function displacementMap(w, h, r) {
  const bezel = Math.max(Math.min(w, h) * 0.3, 6);
  const canvas = document.createElement("canvas");
  canvas.width = w;
  canvas.height = h;
  const ctx = canvas.getContext("2d");
  const img = ctx.createImageData(w, h);
  const hw = w / 2;
  const hh = h / 2;

  for (let py = 0; py < h; py++) {
    for (let px = 0; px < w; px++) {
      const x = px + 0.5 - hw;
      const y = py + 0.5 - hh;
      const d = -roundedRectSDF(x, y, hw, hh, r); // depth inside the shape
      let dx = 0;
      let dy = 0;

      if (d < bezel) {
        // Outward normal from the SDF gradient
        const nx =
          roundedRectSDF(x + 1, y, hw, hh, r) -
          roundedRectSDF(x - 1, y, hw, hh, r);
        const ny =
          roundedRectSDF(x, y + 1, hw, hh, r) -
          roundedRectSDF(x, y - 1, hw, hh, r);
        const len = Math.hypot(nx, ny) || 1;
        const t = 1 - Math.max(d, 0) / bezel;
        const strength = t * t * (3 - 2 * t); // smoothstep: strongest at the rim
        dx = (nx / len) * strength;
        dy = (ny / len) * strength;
      }

      const i = (py * w + px) * 4;
      img.data[i] = 128 + dx * 127;
      img.data[i + 1] = 128;
      img.data[i + 2] = 128 + dy * 127;
      img.data[i + 3] = 255;
    }
  }

  ctx.putImageData(img, 0, 0);
  return canvas.toDataURL();
}

// Ease toward a target with a little overshoot, like a spring settling
function easeOutBack(t) {
  const c = 1.7;
  return 1 + (c + 1) * Math.pow(t - 1, 3) + c * Math.pow(t - 1, 2);
}

export default function initLiquidGlass() {
  initPress();
  if (!window.chrome) return;
  initRefraction();
}

function initPress() {
  const release = (el) => el.classList.remove("is-pressed");

  document.addEventListener("pointerdown", (e) => {
    if (e.button !== 0) return;
    let el = e.target.closest(PRESSABLE);
    // Pressing a control inside the nav swells both the control and the capsule
    while (el) {
      const target = el;
      target.classList.add("is-pressed");
      const up = () => {
        release(target);
        window.removeEventListener("pointerup", up);
        window.removeEventListener("pointercancel", up);
      };
      window.addEventListener("pointerup", up);
      window.addEventListener("pointercancel", up);
      el = el.parentElement && el.parentElement.closest(PRESSABLE);
    }
  });
}

function initRefraction() {
  const defs = document.createElementNS(SVG_NS, "svg");
  defs.setAttribute("width", "0");
  defs.setAttribute("height", "0");
  defs.setAttribute("aria-hidden", "true");
  defs.style.position = "absolute";
  document.body.prepend(defs);

  // Maps are costly to paint, so elements of the same shape share one
  const maps = new Map();
  const mapFor = (w, h, r) => {
    const key = `${w}x${h}r${r}`;
    if (!maps.has(key)) maps.set(key, displacementMap(w, h, r));
    return maps.get(key);
  };

  // Each element owns its filter so it can bend on its own when pressed
  let count = 0;
  const state = new WeakMap();

  const apply = (el) => {
    const w = Math.round(el.offsetWidth);
    const h = Math.round(el.offsetHeight);
    if (!w || !h) return;
    const r = Math.min(
      parseFloat(getComputedStyle(el).borderRadius) || 0,
      h / 2,
      w / 2,
    );

    let s = state.get(el);
    if (!s) {
      const filter = document.createElementNS(SVG_NS, "filter");
      filter.setAttribute("id", `lg-${count++}`);
      filter.setAttribute("color-interpolation-filters", "sRGB");
      // Pin the filter region to the element so the map lines up with its box
      filter.setAttribute("filterUnits", "userSpaceOnUse");
      filter.setAttribute("primitiveUnits", "userSpaceOnUse");
      filter.setAttribute("x", "0");
      filter.setAttribute("y", "0");
      filter.innerHTML = `
        <feImage x="0" y="0" result="map"/>
        <feDisplacementMap in="SourceGraphic" in2="map"
          xChannelSelector="R" yChannelSelector="B"/>`;
      defs.appendChild(filter);
      s = { filter, base: 0, current: 0, frame: 0, pressed: false };
      state.set(el, s);
      el.style.setProperty("--glass-refraction", `url(#${filter.id})`);
    }

    const image = s.filter.querySelector("feImage");
    s.filter.setAttribute("width", w);
    s.filter.setAttribute("height", h);
    image.setAttribute("width", w);
    image.setAttribute("height", h);
    image.setAttribute("href", mapFor(w, h, r));
    // Bend grows with the element, capped so big cards stay calm
    s.base = Math.min(Math.min(w, h) * 0.9, 56);
    setBend(
      s,
      el.classList.contains("is-pressed") ? s.base * PRESS_BEND : s.base,
    );
  };

  const setBend = (s, value) => {
    s.current = value;
    s.filter.lastElementChild.setAttribute("scale", value.toFixed(2));
  };

  const animateBend = (el, pressed) => {
    const s = state.get(el);
    if (!s || s.pressed === pressed) return;
    s.pressed = pressed;
    cancelAnimationFrame(s.frame);
    const from = s.current;
    const to = pressed ? s.base * PRESS_BEND : s.base;
    const start = performance.now();
    const step = (now) => {
      const t = Math.min((now - start) / 450, 1);
      setBend(s, from + (to - from) * easeOutBack(t));
      if (t < 1) s.frame = requestAnimationFrame(step);
    };
    s.frame = requestAnimationFrame(step);
  };

  const resizeObserver = new ResizeObserver((entries) =>
    entries.forEach((entry) => apply(entry.target)),
  );
  // Follow the is-pressed class set by initPress
  const pressObserver = new MutationObserver((records) =>
    records.forEach(({ target }) =>
      animateBend(target, target.classList.contains("is-pressed")),
    ),
  );

  document.querySelectorAll(SELECTOR).forEach((el) => {
    resizeObserver.observe(el);
    pressObserver.observe(el, { attributeFilter: ["class"] });
  });
}
