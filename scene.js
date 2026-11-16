/* Home hero: magazine-cover layers — type behind, cutout in front —
   plus a quiet particle field and pointer parallax at different depths. */

import * as THREE from "three";

const hero = document.querySelector(".hero");
const field = document.querySelector(".hero__field");
const canvas = document.getElementById("hero-canvas");
const typeLayer = document.querySelector(".hero__type");
const subjectShift = document.querySelector(".hero__subject-shift");
const copy = document.querySelector(".hero__copy");
const hint = document.getElementById("hero-hint");

if (canvas && field && hero) boot();

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function hasWebGL() {
  for (const type of ["webgl", "experimental-webgl", "webgl2"]) {
    try {
      const c = document.createElement("canvas");
      if (c.getContext(type)) return true;
    } catch { /* try next */ }
  }
  return false;
}

function fallback() {
  hero.classList.add("is-static");
  if (hint) hint.hidden = true;
}

async function boot() {
  if (prefersReducedMotion()) return fallback();
  try {
    startParallax();
    if (hasWebGL()) startParticles();
    else if (hint) hint.hidden = true;
  } catch {
    fallback();
  }
}

function startParallax() {
  const pointer = { x: 0, y: 0, tx: 0, ty: 0 };
  let raf = 0;
  let onScreen = true;

  function tick() {
    if (!onScreen) { raf = 0; return; }
    pointer.x += (pointer.tx - pointer.x) * 0.08;
    pointer.y += (pointer.ty - pointer.y) * 0.08;
    const x = pointer.x;
    const y = pointer.y;
    if (typeLayer) {
      typeLayer.style.transform = `translate3d(${(x * 10).toFixed(2)}px, ${(y * 7).toFixed(2)}px, 0)`;
    }
    if (subjectShift) {
      const rx = (-y * 3.2).toFixed(3);
      const ry = (x * 4.4).toFixed(3);
      subjectShift.style.transform =
        `translate3d(${(x * 22).toFixed(2)}px, ${(y * 14).toFixed(2)}px, 0) rotateX(${rx}deg) rotateY(${ry}deg)`;
    }
    if (copy) {
      copy.style.transform = `translate3d(${(x * 8).toFixed(2)}px, ${(y * 5).toFixed(2)}px, 0)`;
    }
    raf = requestAnimationFrame(tick);
  }

  function play() {
    if (!raf && onScreen && !document.hidden) raf = requestAnimationFrame(tick);
  }

  window.addEventListener("pointermove", (event) => {
    const rect = hero.getBoundingClientRect();
    if (!rect.width || !rect.height) return;
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    pointer.tx = Math.max(-1, Math.min(1, (event.clientX - cx) / (rect.width * 0.7)));
    pointer.ty = Math.max(-1, Math.min(1, (event.clientY - cy) / (rect.height * 0.7)));
    play();
  }, { passive: true });

  const io = new IntersectionObserver(([entry]) => {
    onScreen = Boolean(entry && entry.isIntersecting);
    if (onScreen) play();
  }, { threshold: 0.05 });
  io.observe(hero);
  document.addEventListener("visibilitychange", () => { if (!document.hidden) play(); });
  play();
}

function startParticles() {
  const renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: false,
    alpha: true,
    powerPreference: "high-performance"
  });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
  renderer.setClearColor(0x000000, 0);
  renderer.outputColorSpace = THREE.SRGBColorSpace;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(32, 1, 0.1, 40);
  camera.position.z = 8;

  const count = window.matchMedia("(max-width: 700px)").matches ? 180 : 360;
  const positions = new Float32Array(count * 3);
  const phases = new Float32Array(count);
  for (let i = 0; i < count; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 14;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 5;
    phases[i] = Math.random() * Math.PI * 2;
  }
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  const material = new THREE.PointsMaterial({
    color: 0x9bb6ff,
    size: 0.035,
    transparent: true,
    opacity: 0.62,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    sizeAttenuation: true
  });
  const points = new THREE.Points(geometry, material);
  scene.add(points);

  const pointer = { x: 0, y: 0 };
  let onScreen = true;
  let running = false;
  let last = 0;

  function resize() {
    const rect = field.getBoundingClientRect();
    const w = Math.max(1, Math.round(rect.width));
    const h = Math.max(1, Math.round(rect.height));
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  }

  function tick(dt) {
    const pos = geometry.attributes.position.array;
    for (let i = 0; i < count; i++) {
      phases[i] += dt * 0.35;
      pos[i * 3 + 1] += Math.sin(phases[i]) * 0.004;
      if (pos[i * 3 + 1] > 5.4) pos[i * 3 + 1] = -5.4;
    }
    geometry.attributes.position.needsUpdate = true;
    points.rotation.y = pointer.x * 0.18;
    points.rotation.x = pointer.y * 0.1;
    points.position.x = pointer.x * 0.28;
    points.position.y = pointer.y * 0.16;
  }

  function frame(now) {
    if (!running) return;
    if (!onScreen || document.hidden) { running = false; return; }
    const dt = Math.min(0.033, (now - last) / 1000 || 0.016);
    last = now;
    tick(dt);
    renderer.render(scene, camera);
    requestAnimationFrame(frame);
  }

  function play() {
    if (running || !onScreen || document.hidden) return;
    running = true;
    last = performance.now();
    requestAnimationFrame(frame);
  }

  window.addEventListener("pointermove", (event) => {
    const rect = field.getBoundingClientRect();
    if (!rect.width || !rect.height) return;
    pointer.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    pointer.y = -(((event.clientY - rect.top) / rect.height) * 2 - 1);
  }, { passive: true });

  const io = new IntersectionObserver(([entry]) => {
    onScreen = Boolean(entry && entry.isIntersecting && entry.intersectionRatio > 0.02);
    if (onScreen) play();
  }, { threshold: [0, 0.02, 0.2] });
  io.observe(field);
  document.addEventListener("visibilitychange", () => { if (!document.hidden) play(); });
  window.addEventListener("resize", resize, { passive: true });
  resize();
  play();
}
