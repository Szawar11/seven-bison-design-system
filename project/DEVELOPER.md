# Seven Bison — Developer Handoff

A **static HTML/CSS/JS prototype** of the Seven Bison marketing site, built on the Seven Bison Design System. No framework build step — every file runs as-is on any static web server. React + Babel are loaded from CDN and the JSX is compiled in the browser.

_Last updated: May 2026 — includes all sector pages, Studio Access / About / Contact, and the full motion layer (Phases 1–3)._

---

## Quick start (local)

**Option A — Node.js (recommended)**
```bash
cd project/
npm install
npm start
# opens http://localhost:8080/ui_kits/marketing-site/
```

**Option B — Python (no install needed)**
```bash
cd project/
python3 -m http.server 8080
# open http://localhost:8080/ui_kits/marketing-site/
```

> **Important:** serve from a local server. Opening `index.html` via `file://` will not work — the browser blocks cross-origin script loading.

---

## Project structure

```
project/
├── ui_kits/
│   └── marketing-site/
│       ├── index.html          ← Entry point. Routing + all motion JS lives here.
│       ├── styles.css          ← All site-level CSS (imports design tokens)
│       └── components/
│           ├── atoms.jsx       ← Building blocks: Button, Tag, SectionHeader,
│           │                      ReelFrame, MediaFrame, AvatarFrame, BeforeAfter,
│           │                      SectorMark, Icon (inline SVG set), Logo
│           ├── Header.jsx      ← Nav + frosted-on-scroll + mobile drawer
│           ├── Footer.jsx      ← Global footer
│           ├── Home.jsx        ← Homepage (hero, ticker, sectors, mosaic,
│           │                      scroll-scrubbed AI pipeline, steps, testimonial, CTA)
│           ├── Sector.jsx      ← ONE data-driven component → Tech / Heavy Industry /
│           │                      Healthcare & Pharma (content in SECTOR_DATA)
│           ├── StudioAccess.jsx← Ongoing-offer page (no pricing)
│           ├── About.jsx       ← Studio + founder block + team + location
│           ├── Contact.jsx     ← Book-a-call + message form + email
│           ├── Portfolio.jsx   ← Dark hero + horizontal pinned filmstrip + grid
│           └── CaseStudy.jsx   ← Dark hero, editorial body, before/after slider, stats
│
├── colors_and_type.css         ← Design tokens (colour, type scale, spacing, motion)
├── assets/
│   ├── logos/                  ← Logo SVG (primary) + PNG fallback (pink/black/white)
│   └── og.png                  ← 1200×630 social share image
├── fonts/                      ← Self-hosted Raleway + Inter (variable TTF)
├── preview/                    ← Design-system reference cards (open in browser)
│
├── DESIGN.master.md            ← Brand rules shared by both modes
├── DESIGN.light.md             ← Light Corporate Mode rules
├── DESIGN.dark.md              ← Dark Cinematic Mode rules
├── README.md                   ← Full design system documentation
└── DEVELOPER.md                ← This file
```

---

## Routing

Single-page app. `index.html` holds an `App` component with a `page` string in state. `navigate(id)` switches pages (wrapped in the **View Transitions API** for a native cross-fade where supported).

| `page` value | Renders | In nav |
|---|---|---|
| `home` | `Home` | yes |
| `tech` / `industry` / `health` | `Sector` (with `sector` prop) | yes |
| `studio` | `StudioAccess` | yes |
| `portfolio` | `Portfolio` | yes |
| `about` | `About` | drawer + footer |
| `case` | `CaseStudy` | reached from work items |
| `contact` | `Contact` | CTA buttons |

---

## How to make common edits

### Copy (headlines, body, CTAs)
Edit the relevant `components/*.jsx` file directly.

| Section | File |
|---|---|
| Homepage | `Home.jsx` |
| **Sector copy (all 3 sectors)** | `Sector.jsx` → the `SECTOR_DATA` object (one block per sector: headline, lead, partners, capabilities, work, CTA) |
| Studio Access / About / Contact | `StudioAccess.jsx` / `About.jsx` / `Contact.jsx` |
| Nav labels | `Header.jsx` (`nav` array) |
| Footer | `Footer.jsx` |
| Case study | `CaseStudy.jsx` |

### Colours / type sizes
All tokens are in `colors_and_type.css`. Change the token, not hardcoded values.
```css
--sb-pink: #E80787;          /* accent */
--type-display-size: 72px;   /* H1 */
```
Headings also use fluid `clamp()` overrides in `styles.css` (search `clamp(`).

### Component styles
`ui_kits/marketing-site/styles.css`. Classes are `.sb-*`, grouped and commented.

### Add a new page
1. Create `components/NewPage.jsx` (copy `StudioAccess.jsx` as a template), end with `Object.assign(window, { NewPage });`.
2. In `index.html`: add `<script type="text/babel" src="components/NewPage.jsx"></script>`.
3. In `App`: add `else if (page === "newpage") Body = NewPage;`.
4. In `Header.jsx`: add `{ id: "newpage", label: "…" }` to `nav`.

### Swap placeholders for real media
`ReelFrame` (video), `MediaFrame` (image/graphic), `AvatarFrame` (portrait) and `BeforeAfter` are placeholders in `atoms.jsx`. Replace their internals with `<video>` / `<img>` when assets are ready — keep the outer class names so the styling and motion hooks still apply.

---

## Interactive / motion features

All implemented in the `<script>` IIFE at the bottom of `index.html`, plus CSS. **Everything degrades gracefully** under `prefers-reduced-motion` and on touch / mobile.

| Feature | Where |
|---|---|
| Scroll entrance reveals (IntersectionObserver) | `initAnims` + `.anim-ready` |
| Hero load reveal (staggered) | CSS `.sb-hero-left > *` |
| Count-up stats | `[data-count]` attribute + `initCounts` |
| Scroll-progress bar | `.sb-progress` (CSS `scroll-timeline`, JS fallback) |
| Capabilities ticker / logo marquee | `.sb-ticker` / `.sb-marquee` (CSS-only) |
| Variable font-weight morph | `initMorph` + `.wght-morph` |
| Magnetic primary CTA | `initMagnetic` |
| 2.5D tilt on cards/reels | `onTiltMove` |
| Reel cursor spotlight | `updateSpotlight` + `--mouse-x/y` |
| Page cross-fade | View Transitions API in `navigate()` |
| Horizontal pinned filmstrip | `.sb-pin` (Portfolio) + scroll handler |
| Scroll-scrubbed AI pipeline | `.sb-scrub` (Home) + scroll handler |
| Mobile drawer (focus-trap + Esc + scroll-lock) | `Header.jsx` |

---

## Deployment

### Netlify / Vercel (drag & drop)
Drag the `project/` folder in; publish dir `project/`, entry `ui_kits/marketing-site/`.

### GitHub Pages
Settings → Pages → Deploy from branch. Point to `/project/ui_kits/marketing-site` (or `/project` with the root `index.html` redirect).

### FTP / cPanel
Upload `project/`; entry point `…/project/ui_kits/marketing-site/index.html`. No build step.

> **Production note:** the prototype compiles JSX in the browser via Babel (≈200–400 ms first-load cost). For production, port the components to a real build (Vite or Next.js). When you do, the following prototype-only items become first-class: `next/image` (we use CSS/SVG placeholders here), `sitemap.xml` + `robots.txt`, a server 404, and route-based code-splitting. JSON-LD and OG/Twitter meta are already in `<head>`.

---

## Design rules (quick reference)

Full rules in `DESIGN.master.md`. The essentials:

| Rule | Detail |
|---|---|
| **No shadows** | `box-shadow` forbidden. Use hairline borders / sunken surfaces. |
| **Pink = signal only** | `#E80787` — accents, CTAs, icons, focus. Never a large fill. |
| **Corner radii** | 0 default · 2 px tags/inputs · 4 px buttons. No card rounding. |
| **Fonts** | Raleway (display) · Inter (body). Self-hosted variable TTF in `fonts/`. |
| **Logos** | Fixed assets in `assets/logos/`. Never redraw or set as editable text. |
| **Dark mode** | Scoped to reels, portfolio/case heroes, the AI-pipeline band — not the whole site. |

### ⚠️ Two known deviations / open items
1. **Gradients.** The brand book forbids gradients. Two **intentional, subtle** exceptions were added for a cinematic feel: a sitewide film-grain overlay (`.sb-grain`) and ultra-faint pink-cream washes (`.sb-bg-washes`), both in `styles.css`. To return to strict brand purity, delete those two elements (in `index.html`) and their CSS.
2. **Logo colour.** The supplied logo SVGs use `#E70289`; the canonical brand pink is `#E80787`. Re-export the masters to `#E80787` at the next asset refresh (the OG image is already generated at the correct pink).

---

## Assets

| Asset | Path | Use |
|---|---|---|
| Logo — pink | `assets/logos/seven-bison-logo-pink.svg` (+ `.png`) | Light + dark surfaces |
| Logo — black | `assets/logos/seven-bison-logo-black.svg` (+ `.png`) | Monochrome / print |
| Logo — white | `assets/logos/seven-bison-logo-white.svg` (+ `.png`) | Over video stills |
| OG share image | `assets/og.png` | 1200×630, wired into `<head>` |
| Fonts | `fonts/*-VARIABLEFONT_*.TTF` | Raleway + Inter variable (only these 3 are loaded) |

---

## Questions?
The full brand spec is in `README.md` and the `DESIGN.*.md` files — they cover spacing, colour ratios, voice, and component behaviour.
