# Geoff Fox portfolio

A static, multi-page marketing portfolio. Open any HTML file in a browser, or deploy the folder as-is to GitHub Pages or Netlify. There is no build step.

## Pages

| File | Purpose |
| --- | --- |
| `index.html` | Home: portrait hero, tools marquee, short intro, featured work, a couple of photographs |
| `work.html` | Work index, with category filters |
| `project.html?id=…` | A single piece (shareable; linked from Work) |
| `photography.html` | Photography gallery |
| `about.html` | Bio, skills, tools, experience, education, awards, résumé |
| `contact.html` | Email and LinkedIn |

Shared look and navigation live in `styles.css` plus the header/footer on each page. Content is driven by `data.js`.

## Set the live URL (one place)

In `data.js`, inside the `SITE` object, set `url` once the site is hosted, with no trailing slash:

```js
url: "https://username.github.io/repo"
```

Until then, leave it as `""`. Open Graph images use a relative path (`assets/og-image.png`). When `url` is set, the site fills in absolute canonical, `og:url`, and `og:image` addresses at load time.

Use relative links only (`work.html`, `assets/…`) so the site still works in a subfolder or when opened as files.

## How to add work

1. Put the image in `assets/images/work/` (`.jpg`, `.png`, `.webp` all fine).
2. Add one object to the `WORK` array in `data.js`:

```js
{
  id: "a-unique-slug",
  title: "Title on the site",
  meta: "Short label, e.g. Event poster",
  set: "floor",            // "floor" | "circulation" | "shortlist"
  file: "your-file.jpg",
  alt: "Describe the image.",
  caption: "A sentence for the project page and lightbox.",
  // featured: true,       // optional, used by older orbit code
  // home: true,           // optional, shows on the home page (keep this to about 6)
  // confidential: true    // optional, adds a Confidential note
}
```

The work index, filters, lightbox, home featured row, and `project.html?id=a-unique-slug` all pick it up. To start a new category later, add it to `CATEGORIES` in `data.js` (and use the same `set` id on the work). You can also add a dedicated page such as `work-signage-events.html` and copy the structure of `work.html` if a category outgrows the filter view.

## How to add photographs

1. Add an optimized web image to `assets/images/photography/` (about 2000px on the long edge, JPEG plus WebP). Do not commit huge camera originals.
2. Add one object to the `PHOTOGRAPHY` array in `data.js`:

```js
{
  id: "jobsite-01",
  kind: "photo",
  title: "Optional title",
  file: "jobsite-01.jpg",
  webp: "jobsite-01.webp",
  alt: "Describe the photograph.",
  caption: "Optional caption.",
  span: "6",               // "4" | "6" | "8" | "12" for the gallery grid
  // home: true            // optional, shows in the small Home photography row
}
```

If the array is empty, the photography page shows a short ready state instead of a broken grid.

## How to add a new page

1. Copy an existing page (for example `about.html`).
2. Change the title, description, `aria-current` on the nav, and the main content.
3. Add a nav link in the header of **every** page (and in this README).
4. Keep using `data.js` for anything that might grow later.

## Résumé

`assets/Geoff-Fox-Resume.pdf` is a one-page résumé for download from the About page. It lists email, LinkedIn, Philadelphia, PA, and relocation. It does **not** include a phone number. If you replace this file, keep the phone off the public PDF.

## Tools list

The applications in `TOOLS` (in `data.js`) are an editable array of `{ name, icon }` objects. Icons are Simple Icons SVGs in `assets/icons/`. Leave `icon` empty for a typographic badge (used for Fresco). The Home page shows a full scrolling marquee of these tools; the About page shows the same list as a static wrap. The current list is Lightroom, Photoshop, InDesign, Illustrator, Fresco, After Effects, Premiere Pro, Canva, Figma, GitHub, Excel, and PowerPoint.

## 3D hero

The home hero is a magazine-cover stack: a dark field with a soft cobalt glow, giant Syne typography behind the figure (a “GEOFF FOX” wordmark plus a slow “MARKETING / STRATEGY / CREATIVE” marquee), and a cut-out portrait in front. A light Three.js particle field sits in the mid-ground, and pointer movement shifts the type, particles, and figure at different depths. Three.js r0.170.0 loads from jsDelivr (needs a network connection the first time). If WebGL is missing, or the visitor prefers reduced motion, the typography stays still, the marquees do not scroll, and the effect is skipped. The About page uses a photo of Geoff behind the camera alongside the environmental portrait.

## Accessibility and constraints

- No phone number on any page, asset, or the public résumé.
- Keyboard lightbox (Esc, arrows, focus trap) on work and photography.
- `prefers-reduced-motion` disables page transitions, reveals, scrolling marquees, and the hero effect.
- Relative links throughout, for static hosting.
