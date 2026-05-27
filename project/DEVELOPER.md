# Seven Bison — Developer Handoff

This is a **static HTML/CSS prototype** of the Seven Bison marketing site, built on the Seven Bison Design System. No framework build step required — every file runs as-is on any web server.

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

> **Important:** You must serve from a local server. Opening `index.html` directly via `file://` will not work because the browser blocks cross-origin script loading.

---

## Project structure

```
project/
├── ui_kits/
│   └── marketing-site/
│       ├── index.html          ← Entry point — open this in the browser
│       ├── styles.css          ← All site-level CSS (imports design tokens)
│       └── components/
│           ├── atoms.jsx       ← Shared building blocks (Button, Tag, ReelFrame, icons…)
│           ├── Header.jsx      ← Top navigation bar
│           ├── Footer.jsx      ← Global footer
│           ├── Home.jsx        ← Homepage (all sections)
│           ├── Sector.jsx      ← Sector page (Tech)
│           ├── Portfolio.jsx   ← Portfolio page
│           └── CaseStudy.jsx   ← Case study page
│
├── colors_and_type.css         ← Design tokens (colours, type scale, spacing, motion)
├── assets/
│   └── logos/                  ← Approved logo PNGs (pink / black / white)
├── fonts/                      ← Self-hosted Raleway + Inter (variable TTF)
├── preview/                    ← Design-system reference cards
│
├── DESIGN.master.md            ← Brand rules shared by both modes
├── DESIGN.light.md             ← Light Corporate Mode rules
├── DESIGN.dark.md              ← Dark Cinematic Mode rules
└── README.md                   ← Full design system documentation
```

---

## How to make common edits

### Edit copy (headlines, body text, CTAs)

Open the relevant `components/*.jsx` file and change the text directly.

| Section | File |
|---|---|
| Homepage hero, sections, final CTA | `components/Home.jsx` |
| Navigation labels | `components/Header.jsx` |
| Footer links, tagline, copyright | `components/Footer.jsx` |
| Sector page | `components/Sector.jsx` |
| Portfolio page | `components/Portfolio.jsx` |
| Case study | `components/CaseStudy.jsx` |

### Change colours or type sizes

All design tokens live in `colors_and_type.css`. Do **not** hardcode values — change the token, and the update propagates everywhere.

```css
/* Example: change the accent pink */
--sb-pink: #E80787;

/* Example: adjust the display font size */
--type-display-size: 72px;
```

### Edit component styles

Site-level CSS is in `ui_kits/marketing-site/styles.css`. Classes are named `.sb-*` (Seven Bison). Find the block for the component you want to change — they're grouped and commented.

### Add a new page

1. Create `components/NewPage.jsx` — copy the structure from `Sector.jsx` as a starting point.
2. In `index.html`, add a `<script type="text/babel" src="components/NewPage.jsx"></script>` tag.
3. In the `App` function in `index.html`, add `if (page === "newpage") Body = NewPage;`.
4. In `Header.jsx`, add `{ id: "newpage", label: "New Page" }` to the `nav` array.

---

## Deployment

### Option 1 — Drag & drop (Netlify / Vercel)

1. Go to [netlify.com](https://netlify.com) or [vercel.com](https://vercel.com) and log in.
2. Drag the entire `project/` folder into the deploy area.
3. Set the **publish directory** to `project/` and the **root** to `ui_kits/marketing-site/`.
4. Done — you get a public URL instantly.

### Option 2 — GitHub Pages

1. Push the repo to GitHub (already done).
2. In the repo: **Settings → Pages → Source: Deploy from a branch**.
3. Branch: `main`, folder: `/project/ui_kits/marketing-site` (or `/project` with a redirect).

### Option 3 — FTP / cPanel (shared hosting)

1. Upload the **entire `project/` folder** to the web server (e.g. `public_html/project/`).
2. The entry point is `public_html/project/ui_kits/marketing-site/index.html`.
3. No build step needed — all files are static.

> **Note:** The prototype uses React + Babel loaded from CDN. On the first load, Babel compiles the JSX in the browser — this adds ~200–400 ms on a fast connection. For a production site with high traffic, a proper build step (Vite or similar) would be recommended. For a prototype or low-traffic site, the current setup is fine.

---

## Design rules (quick reference for developers)

Read the full rules in `DESIGN.master.md`. The most important ones:

| Rule | Detail |
|---|---|
| **No shadows** | `box-shadow` is forbidden throughout. Use hairline borders for elevation. |
| **No gradients** | Forbidden except the single bottom overlay inside a dark reel frame. |
| **Pink = signal only** | `#E80787` — use for accents, CTAs, icons. Never as a background. |
| **Corner radii** | 0 px default · 2 px tags/inputs · 4 px buttons. No card rounding. |
| **Fonts** | Raleway (headlines) · Inter (body). No other faces. Self-hosted in `fonts/`. |
| **Logos** | Fixed PNG assets in `assets/logos/`. Never redraw or substitute editable text. |
| **Dark mode** | Scoped to reels, portfolio hero, case study hero only. Not the full site. |

---

## Assets

| Asset | Path | Use |
|---|---|---|
| Logo — pink | `assets/logos/seven-bison-logo-pink.png` | Light surfaces (default) and dark surfaces |
| Logo — black | `assets/logos/seven-bison-logo-black.png` | Monochrome / print |
| Logo — white | `assets/logos/seven-bison-logo-white.png` | Logo over video stills only |
| Brandbook | `assets/brandbook/light-01.png` … `dark-09.png` | Visual reference, do not embed |

---

## Questions?

The full brand specification is in `README.md` and the `DESIGN.*.md` files. If something is unclear, check those first — they answer most questions about spacing, colour ratios, voice, and component behaviour.
