# Seven Bison — Marketing Site UI Kit

A hi-fi recreation of the Seven Bison marketing site, built strictly against the brand guidelines in `DESIGN.master.md`, `DESIGN.light.md`, and `DESIGN.dark.md`.

## What's in here

| File | Purpose |
|---|---|
| `index.html` | Click-through entry point — Home → Sector page → Portfolio → Case study |
| `styles.css` | Site-level paint that builds on `../../colors_and_type.css` |
| `components/atoms.jsx` | Shared atoms: `Button`, `Tag`, `SectionHeader`, `EyebrowIndex`, `Rule`, `Icon` |
| `components/Header.jsx` | Top nav — Light by default, Dark variant for portfolio + case study heroes |
| `components/Footer.jsx` | Global footer (Light only) |
| `components/Home.jsx` | Homepage: Light chrome with Dark reel container, sector cards, Dark mosaic, testimonials, CTA |
| `components/Sector.jsx` | Sector page (Tech): Light hero with Dark reel, body sections |
| `components/Portfolio.jsx` | Portfolio: Dark full-bleed hero + Light body grid |
| `components/CaseStudy.jsx` | Case study: Dark hero + Light long-form body |

## How to read it

The kit is **paint and structure**, not production code. Components are intentionally thin React functions with no state machines, no router, no fetching. Clicking the top nav switches between four pages via a single `useState` in `index.html`.

## Mode boundaries

This UI kit demonstrates the **clean rectangular edge** between Light and Dark modes that `DESIGN.dark.md §6` requires:

- **Homepage hero** — the right-column reel sits in a pure `#000000` rectangle inside the `#F7F5F2` page. Hard edge.
- **Selected work mosaic** — full-bleed Dark band between two Light sections. Hard edges top and bottom.
- **Portfolio + Case study heroes** — Dark hero band, then a hard edge into the Light body.
- **Sector page hero** — Light chrome with a Dark reel container inside the right column.

## Iconography

The kit uses **Lucide** via CDN at `stroke-width: 1.5` in pink for all utility icons. The three sector marks (Tech, Heavy Industry, Healthcare & Pharma) are bespoke inline SVGs (matched stroke weight) defined in `components/atoms.jsx → SectorMark`.

## Caveats

- The "videos" in reel frames are simulated black canvases with a play glyph — there is no real video embedded.
- Logos in trust strips are placeholder grey wordmarks. Real partner logos would be supplied by the brand team.
- Hero imagery is simulated with `background-color` + subtle radial gradients to evoke the cinematic frame; no stock photography is bundled.
- Copy is lifted/synthesised from the brandbook's approved phrases — production copy should be reviewed by the brand team.
