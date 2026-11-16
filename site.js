/* Shared behavior for every page: nav, transitions, lightbox, renderers. */

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function setMeta(attr, key, value) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", value);
}

function applyAbsoluteUrls() {
  const base = String((window.SITE && SITE.url) || "").replace(/\/$/, "");
  if (!base) return;
  const file = (location.pathname.split("/").pop() || "index.html");
  const path = file === "index.html" || file === "" ? "/" : `/${file}`;
  const href = base + path + (location.search || "");
  let link = document.head.querySelector('link[rel="canonical"]');
  if (!link) {
    link = document.createElement("link");
    link.rel = "canonical";
    document.head.appendChild(link);
  }
  link.href = href;
  setMeta("property", "og:url", href);
  setMeta("property", "og:image", `${base}/assets/og-image.png`);
  setMeta("name", "twitter:image", `${base}/assets/og-image.png`);
}

function initYear() {
  document.querySelectorAll("[data-year]").forEach((el) => {
    el.textContent = String(new Date().getFullYear());
  });
}

function initNav() {
  const nav = document.querySelector(".mast__nav");
  const toggle = document.querySelector(".mast__toggle");
  if (!nav || !toggle) return;
  const links = [...nav.querySelectorAll(".mast__list a")];
  const close = () => {
    nav.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Open menu");
    document.body.style.overflow = "";
  };
  toggle.addEventListener("click", () => {
    const open = !nav.classList.contains("is-open");
    nav.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    document.body.style.overflow = open ? "hidden" : "";
    if (open) links[0]?.focus();
  });
  links.forEach((a) => a.addEventListener("click", close));
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && nav.classList.contains("is-open")) close();
  });
}

function initTransitions() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  document.addEventListener("click", (event) => {
    const a = event.target.closest("a");
    if (!a || a.target === "_blank" || a.hasAttribute("download")) return;
    const href = a.getAttribute("href");
    if (!href || href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("tel:")) return;
    let url;
    try { url = new URL(a.href, location.href); } catch { return; }
    if (url.origin !== location.origin) return;
    if (url.pathname === location.pathname && url.hash) return;
    event.preventDefault();
    document.documentElement.classList.add("is-leaving");
    setTimeout(() => { location.href = url.href; }, 180);
  });
}

function initReveal() {
  const nodes = document.querySelectorAll(".reveal");
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    nodes.forEach((n) => n.classList.add("is-visible"));
    return;
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });
  nodes.forEach((node, i) => {
    node.style.transitionDelay = `${(i % 8) * 40}ms`;
    observer.observe(node);
  });
}

function pieceMarkup(item, extra = "") {
  const href = `project.html?id=${encodeURIComponent(item.id)}`;
  const note = item.confidential ? `<p class="piece__note">Confidential</p>` : "";
  const wide = item.wide ? " piece--wide" : "";
  const dir = item.dir || WORK_DIR;
  const pos = item.thumbPos ? ` style="--thumb-pos: ${item.thumbPos};"` : "";
  return `
    <a class="piece reveal ${extra}${wide}" href="${href}" data-open="${item.id}">
      <div class="piece__frame"${pos}>
        ${pictureTag(dir, item)}
      </div>
      <div class="piece__label">
        ${note}
        <h3>${escapeHtml(item.title)}</h3>
        <p>${escapeHtml(item.meta || "")}</p>
      </div>
    </a>
  `;
}

const lightbox = {
  el: null, dialog: null, media: null, setEl: null, title: null, desc: null,
  lastFocus: null, list: [], index: 0, open: false
};

function currentList() {
  return lightbox.list.length ? lightbox.list : (window.WORK || []);
}

function renderLightbox() {
  const item = currentList()[lightbox.index];
  if (!item || !lightbox.el) return;
  const kind = item.kind || "";
  const isPhoto = kind === "photo";
  const isBrand = kind === "brand" || kind === "brand-logo";
  const isSketch = kind === "sketch";
  const dir = isPhoto ? PHOTO_DIR : isBrand ? (window.BRAND_DIR || "assets/images/branding/") : isSketch ? (window.SKETCH_DIR || "assets/images/sketchbook/") : WORK_DIR;
  const setLabel = isPhoto
    ? "Photography"
    : isBrand
      ? (item.projectTitle || "Logo and branding")
      : isSketch
        ? "Sketchbook"
        : ((window.SET_LABEL && SET_LABEL[item.set]) || item.set || "");
  const caption = lightbox.el.querySelector(".lightbox__caption");
  if (isPhoto) {
    lightbox.setEl.textContent = "";
    lightbox.title.textContent = "";
    lightbox.desc.textContent = "";
    if (caption) caption.hidden = true;
  } else {
    lightbox.setEl.textContent = setLabel + (item.confidential ? " · Confidential" : "");
    lightbox.title.textContent = item.title || item.caption || "";
    lightbox.desc.textContent = item.pageCaption || ((item.caption && item.caption !== item.title) ? item.caption : (item.meta || ""));
    if (caption) caption.hidden = false;
  }
  const img = document.createElement("img");
  img.src = dir + item.file;
  img.alt = item.alt || item.title || "";
  lightbox.media.classList.toggle("lightbox__media--light", kind === "brand-logo");
  if (item.webp) {
    const pic = document.createElement("picture");
    const source = document.createElement("source");
    source.type = "image/webp";
    source.srcset = dir + item.webp;
    pic.append(source, img);
    lightbox.media.replaceChildren(pic);
  } else {
    lightbox.media.replaceChildren(img);
  }
}

function workLightboxItems() {
  const items = [];
  for (const item of (window.WORK || [])) {
    const pages = item.pages && item.pages.length ? item.pages : [null];
    pages.forEach((page, i) => {
      const entry = { ...item, sourceId: item.id };
      if (page) {
        entry.file = page.file || item.file;
        entry.webp = page.webp || item.webp;
        entry.alt = page.alt || item.alt;
        entry.pageCaption = page.caption || "";
        if (pages.length > 1 && !(pages.length === 1 && pages[0] === null)) {
          entry.id = page.id || `${item.id}--${i}`;
        }
      }
      items.push(entry);
    });
  }
  return items;
}

function openLightboxFromList(list, id) {
  lightbox.list = list;
  const index = list.findIndex((item) => item.id === id || item.sourceId === id);
  if (index < 0) return;
  lightbox.index = index;
  lightbox.lastFocus = document.activeElement;
  lightbox.el.hidden = false;
  lightbox.open = true;
  document.body.classList.add("lightbox-open");
  renderLightbox();
  lightbox.dialog.focus();
}

function closeLightbox() {
  if (!lightbox.open) return;
  lightbox.el.hidden = true;
  lightbox.open = false;
  document.body.classList.remove("lightbox-open");
  if (lightbox.lastFocus && lightbox.lastFocus.focus) lightbox.lastFocus.focus();
}

function stepLightbox(delta) {
  const list = currentList();
  if (!list.length) return;
  lightbox.index = (lightbox.index + delta + list.length) % list.length;
  renderLightbox();
}

function initLightbox() {
  lightbox.el = document.getElementById("lightbox");
  if (!lightbox.el) return;
  lightbox.dialog = lightbox.el.querySelector(".lightbox__dialog");
  lightbox.media = document.getElementById("lightbox-media");
  lightbox.setEl = document.getElementById("lightbox-set");
  lightbox.title = document.getElementById("lightbox-title");
  lightbox.desc = document.getElementById("lightbox-desc");

  document.addEventListener("click", (event) => {
    const open = event.target.closest("[data-open]");
    if (open) {
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const kind = open.dataset.kind;
      const list = kind === "photo"
        ? (window.PHOTOGRAPHY || [])
        : (kind === "brand" || kind === "brand-logo")
          ? brandingAssets()
          : kind === "sketch"
            ? (window.SKETCHBOOK || [])
            : workLightboxItems();
      event.preventDefault();
      openLightboxFromList(list, open.dataset.open);
      return;
    }
    if (event.target.closest("[data-close]")) closeLightbox();
    if (event.target.closest(".lightbox__prev")) stepLightbox(-1);
    if (event.target.closest(".lightbox__next")) stepLightbox(1);
  });

  document.addEventListener("keydown", (event) => {
    if (!lightbox.open) return;
    if (event.key === "Escape") { event.preventDefault(); closeLightbox(); }
    else if (event.key === "ArrowLeft") { event.preventDefault(); stepLightbox(-1); }
    else if (event.key === "ArrowRight") { event.preventDefault(); stepLightbox(1); }
    else if (event.key === "Tab") {
      const focusable = [...lightbox.dialog.querySelectorAll("button")];
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && (document.activeElement === first || document.activeElement === lightbox.dialog)) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }
  });
}

function toolName(t) {
  return typeof t === "string" ? t : (t && t.name) || "";
}

function toolItemHtml(t) {
  const name = escapeHtml(toolName(t));
  const icon = t && typeof t === "object" ? t.icon : null;
  if (icon) {
    return `<span class="apps-item"><img class="apps-item__icon" src="assets/icons/${encodeURIComponent(icon)}.svg" alt="" width="20" height="20"><span class="apps-item__name">${name}</span></span>`;
  }
  const badge = escapeHtml(toolName(t).slice(0, 2));
  return `<span class="apps-item apps-item--wordmark"><span class="apps-item__badge" aria-hidden="true">${badge}</span><span class="apps-item__name">${name}</span></span>`;
}

function pictureTag(dir, item) {
  const jpg = dir + encodeURIComponent(item.file);
  const alt = escapeHtml(item.alt || item.title || "");
  const img = `<img src="${jpg}" alt="${alt}" loading="lazy">`;
  if (!item.webp) return img;
  return `<picture><source type="image/webp" srcset="${dir}${encodeURIComponent(item.webp)}">${img}</picture>`;
}

function renderTextTicker(id, items, label) {
  const root = document.getElementById(id);
  if (!root || !items || !items.length) return;
  const bits = items.map((s) => `<span class="ticker__item">${escapeHtml(s)}</span><span class="ticker__dot" aria-hidden="true">·</span>`).join("");
  root.innerHTML = `
    ${label ? `<p class="ticker__label">${escapeHtml(label)}</p>` : ""}
    <div class="ticker__viewport">
      <div class="ticker__track">
        <div class="ticker__set">${bits}</div>
        <div class="ticker__set" aria-hidden="true">${bits}</div>
      </div>
    </div>
  `;
}

function renderHomeTickers() {
  const services = window.SERVICES || [];
  renderTextTicker("services-marquee", services, "What I do");
  renderTextTicker("place-marquee", [
    "Design",
    "Photo",
    "Video",
    "Story",
    "Made with intention",
    "Behind the screen"
  ]);
  renderTextTicker("outline-marquee", services);
}

function renderAppsMarquee() {
  const root = document.getElementById("apps-marquee");
  if (!root) return;
  const items = (window.TOOLS || []).map(toolItemHtml).join("");
  root.innerHTML = `
    <div class="apps-marquee__inner">
      <p class="apps-marquee__label">What I work in</p>
      <div class="apps-marquee__viewport">
        <div class="apps-marquee__track">
          <div class="apps-marquee__set">${items}</div>
          <div class="apps-marquee__set" aria-hidden="true">${items}</div>
        </div>
      </div>
    </div>
  `;
}

function renderHomePhotos() {
  const root = document.getElementById("home-photos-root");
  if (!root) return;
  const items = (window.PHOTOGRAPHY || []).filter((item) => item.home);
  root.innerHTML = items.map((item) => `
    <button class="piece reveal" type="button" data-open="${item.id}" data-kind="photo" aria-label="${escapeHtml(item.alt || "Open photograph")}">
      <div class="piece__frame">
        ${pictureTag(PHOTO_DIR, item)}
      </div>
    </button>
  `).join("");
}

function renderFeatured() {
  const root = document.getElementById("featured-root");
  if (!root) return;
  const items = (window.WORK || []).filter((item) => item.home)
    .sort((a, b) => (a.homeOrder || 99) - (b.homeOrder || 99));
  root.innerHTML = items.map((item) => pieceMarkup(item)).join("");
}

function activeSetFromUrl() {
  const params = new URLSearchParams(location.search);
  const raw = params.get("set") || (location.hash || "").replace(/^#/, "");
  const known = (window.CATEGORIES || []).some((c) => c.id === raw);
  return known ? raw : "all";
}

function renderWork() {
  const root = document.getElementById("work-root");
  const filters = document.getElementById("work-filters");
  const blurb = document.getElementById("work-blurb");
  if (!root || !filters) return;

  const cats = window.CATEGORIES || [];
  filters.innerHTML = [
    `<button class="filter" type="button" data-set="all">All</button>`,
    ...cats.map((c) => `<button class="filter" type="button" data-set="${c.id}">${escapeHtml(c.label)}</button>`)
  ].join("");

  function apply(set) {
    const items = (window.WORK || []).filter((item) => set === "all" || item.set === set);
    root.dataset.set = set;
    root.innerHTML = items.map((item) => pieceMarkup(item)).join("");
    filters.querySelectorAll(".filter").forEach((btn) => {
      btn.classList.toggle("is-active", btn.dataset.set === set);
    });
    if (blurb) {
      const cat = cats.find((c) => c.id === set);
      blurb.textContent = cat ? cat.blurb : "A mix of signs, campaigns, and proposal work. Use the filters if you want to narrow it down.";
    }
    const url = new URL(location.href);
    if (set === "all") url.searchParams.delete("set");
    else url.searchParams.set("set", set);
    history.replaceState({}, "", url);
    initReveal();
  }

  filters.addEventListener("click", (event) => {
    const btn = event.target.closest("[data-set]");
    if (btn) apply(btn.dataset.set);
  });

  apply(activeSetFromUrl());
}


function brandingAssets() {
  return (window.BRANDING || []).flatMap((project) =>
    (project.assets || []).map((asset) => ({
      ...asset,
      projectTitle: project.title,
      title: asset.caption || asset.title || project.title
    }))
  );
}

function renderBranding() {
  const root = document.getElementById("branding-root");
  if (!root) return;
  const projects = window.BRANDING || [];
  if (!projects.length) {
    root.innerHTML = `
      <div class="photo-empty">
        <h2>Brand work is on the way.</h2>
        <p>I will be adding logos and campaign pieces here.</p>
      </div>`;
    return;
  }
  const dir = window.BRAND_DIR || "assets/images/branding/";
  root.innerHTML = projects.map((project) => {
    const assets = project.assets || [];
    const logo = assets.find((a) => a.kind === "brand-logo");
    const others = assets.filter((a) => a !== logo);
    const logoHtml = logo ? `
      <figure class="brand-logo-panel reveal">
        <button class="brand-logo-panel__btn" type="button" data-open="${escapeHtml(logo.id)}" data-kind="brand-logo" aria-label="Open ${escapeHtml(logo.caption || logo.title || "logo")}">
          ${pictureTag(dir, logo)}
        </button>
        <figcaption>${escapeHtml(logo.caption || "Logo")}</figcaption>
      </figure>` : "";
    const artHtml = others.map((item) => `
      <button class="piece reveal" type="button" data-open="${escapeHtml(item.id)}" data-kind="brand" aria-label="Open ${escapeHtml(item.caption || item.title || "artwork")}">
        <div class="piece__frame">
          ${pictureTag(dir, item)}
        </div>
        <div class="piece__label">
          <h3>${escapeHtml(item.caption || item.title || "")}</h3>
        </div>
      </button>
    `).join("");
    return `
      <article class="brand-case" id="${escapeHtml(project.id)}">
        <header class="brand-case__head reveal">
          <p class="kicker">Brand project</p>
          <h2>${escapeHtml(project.title)}</h2>
          <p class="lede">${escapeHtml(project.description || "")}</p>
        </header>
        ${logoHtml}
        ${artHtml ? `<div class="brand-case__art">${artHtml}</div>` : ""}
      </article>
    `;
  }).join("");
}

function renderSketchbook() {
  const root = document.getElementById("sketch-root");
  const empty = document.getElementById("sketch-empty");
  if (!root && !empty) return;
  const items = window.SKETCHBOOK || [];
  if (!items.length) {
    if (root) root.hidden = true;
    if (empty) empty.hidden = false;
    return;
  }
  if (empty) empty.hidden = true;
  if (!root) return;
  root.hidden = false;
  const dir = window.SKETCH_DIR || "assets/images/sketchbook/";
  root.innerHTML = items.map((item) => `
    <button class="piece reveal" type="button" data-open="${escapeHtml(item.id)}" data-kind="sketch" aria-label="Open ${escapeHtml(item.title || "drawing")}">
      <div class="piece__frame">
        ${pictureTag(dir, item)}
      </div>
      <div class="piece__label">
        <h3>${escapeHtml(item.title || "")}</h3>
        <p>${escapeHtml(item.caption || "")}</p>
      </div>
    </button>
  `).join("");
}

function renderPhotography() {
  const root = document.getElementById("photo-root");
  const empty = document.getElementById("photo-empty");
  if (!root) return;
  const items = window.PHOTOGRAPHY || [];
  if (!items.length) {
    root.hidden = true;
    if (empty) empty.hidden = false;
    return;
  }
  if (empty) empty.hidden = true;
  root.hidden = false;
  root.innerHTML = items.map((item) => {
    const span = item.span ? ` piece--span-${escapeHtml(String(item.span))}` : "";
    return `
      <button class="piece reveal${span}" type="button" data-open="${item.id}" data-kind="photo" aria-label="${escapeHtml(item.alt || "Open photograph")}">
        <div class="piece__frame">
          ${pictureTag(PHOTO_DIR, item)}
        </div>
      </button>
    `;
  }).join("");
}

function renderProject() {
  const root = document.getElementById("project-root");
  if (!root) return;
  const id = new URLSearchParams(location.search).get("id");
  const list = window.WORK || [];
  const index = list.findIndex((item) => item.id === id);
  if (index < 0) {
    root.innerHTML = `
      <div class="wrap project__missing">
        <p class="kicker">Work</p>
        <h1>That piece isn’t here.</h1>
        <p class="lede">I may have renamed it. You can find everything in Work.</p>
        <p style="margin-top:1.5rem"><a class="btn btn--solid" href="work.html">Back to work</a></p>
      </div>`;
    document.title = "Work · Geoff Fox";
    return;
  }
  const item = list[index];
  const prev = list[(index - 1 + list.length) % list.length];
  const next = list[(index + 1) % list.length];
  const set = (window.SET_LABEL && SET_LABEL[item.set]) || item.set;
  document.title = `${item.title} · Geoff Fox`;
  setMeta("property", "og:title", `${item.title} · Geoff Fox`);
  setMeta("name", "twitter:title", `${item.title} · Geoff Fox`);
  if (item.caption) {
    setMeta("name", "description", item.caption);
    setMeta("property", "og:description", item.caption);
  }
  const pages = item.pages && item.pages.length
    ? item.pages
    : [{ file: item.file, webp: item.webp, alt: item.alt }];
  const stacked = item.stage === "stack" || pages.length > 2;
  const stageClass = [
    "project__stage",
    pages.length > 1 ? "project__stage--pages" : "",
    stacked ? "project__stage--pages-stack" : "",
    item.wide ? "project__stage--wide" : ""
  ].filter(Boolean).join(" ");

  const stage = pages.map((page) => {
    const pic = pictureTag(WORK_DIR, { ...item, file: page.file, webp: page.webp, alt: page.alt || item.alt });
    const cap = page.caption ? `<figcaption>${escapeHtml(page.caption)}</figcaption>` : "";
    return `<figure>${pic}${cap}</figure>`;
  }).join("");
  root.innerHTML = `
    <div class="wrap project">
      <a class="project__back" href="work.html?set=${encodeURIComponent(item.set)}">← ${escapeHtml(set)}</a>
      <div class="${stageClass}">
        ${stage}
      </div>
      <div class="project__meta">
        <p class="kicker">${escapeHtml(set)}${item.confidential ? " · Confidential" : ""}</p>
        <h1>${escapeHtml(item.title)}</h1>
        <p class="lede">${escapeHtml(item.caption || item.meta || "")}</p>
      </div>
      <div class="project__nav">
        <a href="project.html?id=${encodeURIComponent(prev.id)}">← ${escapeHtml(prev.title)}</a>
        <a href="project.html?id=${encodeURIComponent(next.id)}">${escapeHtml(next.title)} →</a>
      </div>
    </div>
  `;
}

function renderAbout() {
  const exp = document.getElementById("experience-root");
  if (exp) {
    exp.innerHTML = (window.EXPERIENCE || []).map((job) => `
      <li>
        <p class="when">${escapeHtml(job.dates)}</p>
        <h3>${escapeHtml(job.role)}</h3>
        <p class="org">${escapeHtml(job.org)} · ${escapeHtml(job.place)}</p>
        <ul>${(job.points || []).map((p) => `<li>${escapeHtml(p)}</li>`).join("")}</ul>
      </li>
    `).join("");
  }
  const edu = document.getElementById("education-root");
  if (edu) {
    edu.innerHTML = (window.EDUCATION || []).map((e) => `
      <li>
        <h3>${escapeHtml(e.school)}</h3>
        <p>${escapeHtml(e.credential)}${e.dates ? " · " + escapeHtml(e.dates) : ""}</p>
        ${e.note ? `<p>${escapeHtml(e.note)}</p>` : ""}
      </li>
    `).join("");
  }
  const awards = document.getElementById("awards-root");
  if (awards) {
    awards.innerHTML = (window.AWARDS || []).map((a) => `
      <li>
        <h3>${escapeHtml(a.title)}</h3>
        <p>${escapeHtml(a.detail)}</p>
      </li>
    `).join("");
  }
  const tools = document.getElementById("tools-root");
  if (tools) {
    tools.innerHTML = `
      <h3>The apps I reach for</h3>
      <ul class="tools__pills tools__pills--icons">${(window.TOOLS || []).map((tool) => `<li>${toolItemHtml(tool)}</li>`).join("")}</ul>
    `;
  }
  const skills = document.getElementById("skills-root");
  if (skills) {
    skills.innerHTML = `
      <h3>The kind of work I do</h3>
      <ul class="skills__pills">${(window.SKILLS || []).map((t) => `<li>${escapeHtml(t)}</li>`).join("")}</ul>
    `;
  }
}

function lightboxTemplate() {
  if (document.getElementById("lightbox")) return;
  const el = document.createElement("div");
  el.className = "lightbox";
  el.id = "lightbox";
  el.hidden = true;
  el.innerHTML = `
    <div class="lightbox__backdrop" data-close="true"></div>
    <div class="lightbox__dialog" role="dialog" aria-modal="true" aria-labelledby="lightbox-title" tabindex="-1">
      <button class="lightbox__close" type="button" data-close="true" aria-label="Close">×</button>
      <button class="lightbox__prev" type="button" aria-label="Previous">‹</button>
      <figure class="lightbox__figure">
        <div class="lightbox__media" id="lightbox-media"></div>
        <figcaption class="lightbox__caption">
          <p class="lightbox__set" id="lightbox-set"></p>
          <h3 class="lightbox__title" id="lightbox-title"></h3>
          <p class="lightbox__desc" id="lightbox-desc"></p>
        </figcaption>
      </figure>
      <button class="lightbox__next" type="button" aria-label="Next">›</button>
    </div>
  `;
  document.body.appendChild(el);
}

function init() {
  applyAbsoluteUrls();
  initYear();
  initNav();
  initTransitions();
  lightboxTemplate();
  initLightbox();
  renderAppsMarquee();
  renderHomeTickers();
  renderFeatured();
  renderHomePhotos();
  renderWork();
  renderPhotography();
  renderBranding();
  renderSketchbook();
  renderProject();
  renderAbout();
  initReveal();
}

if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
else init();
