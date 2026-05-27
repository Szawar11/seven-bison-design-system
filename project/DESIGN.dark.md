# Seven Bison — DESIGN.dark.md

> **Dark Cinematic Mode.** Scoped to surfaces that *show the work*: showreels, portfolio heroes, case study openings, motion graphics, video embeds, social teasers, selected high-impact case-study moments. Never the default chrome of a page.

**Typography is identical to Light Mode.** Dark Mode does **not** introduce a separate typographic identity — same Raleway + Inter system, same scale, same casing rules. The difference between modes is paint, not type. (See `DESIGN.master.md §3`.)

Pair with `DESIGN.master.md` (shared rules) and `colors_and_type.css` (tokens).

---

## 1. Surface and ink

| Token | Value | Use |
|---|---|---|
| `--surface-canvas` | `#000000` (True Black) | Page / block background |
| `--surface-raised` | `#0A0A0A` | Subtle module elevation (rare) |
| `--surface-sunken` | `#000000` | Same as canvas — depth comes from spacing |
| `--text-primary` | `#FFFFFF` | Headings, primary copy |
| `--text-secondary` | `#D9D9D9` | Body |
| `--text-tertiary` | `#8A8A8A` | Meta, captions, time-stamps |

**Dark Mode is true black.** Charcoal or near-black greys are reserved for the rare case where a divider needs to be invisible but still occupy space; they are never the page surface. The point of Dark Mode is **cinema** — the work pops because the surrounding goes away.

---

## 2. Logo on dark surfaces

- **Primary:** `seven-bison-logo-pink.png` (full colour pink on black — the brand-defining state).
- **Monochrome:** `seven-bison-logo-white.png` — when pink would compete with on-screen colour, e.g. logo over a video still.
- Never the black logo on dark.
- PNG only — do not redraw, regenerate, or substitute editable text for the wordmark.

---

## 3. Color ratios (dark)

From brandbook (dark) p.04: **70 / 20 / 10**

| Share | Token | Where |
|---|---|---|
| 70% | Black / near-black | Canvas, video letterbox, negative space |
| 20% | White / soft gray | Type, hairlines, time-codes |
| 10% | Pink | Indices, glyphs, hover marks, focus rings |

Dark Mode amplifies the **sparse colour rule**. Pink is louder against black than against off-white; use roughly **half** the pink dosage you'd use in Light.

---

## 4. Components (dark paint)

Most components inherit shape from `DESIGN.master.md`. Only the paint changes. **Type is identical to Light Mode** — same Raleway + Inter system, same scale.

### Primary button (dark)
```
bg:      var(--sb-pink)
fg:      #FFFFFF
border:  none
hover:   bg #C0066F
```

### Secondary button (dark)
```
bg:      transparent
fg:      #FFFFFF
border:  1px solid #FFFFFF
hover:   bg rgba(255,255,255,0.06)
```
The pink-outline variant from Light is replaced by a white-outline variant on Dark, because a 1 px pink line on black competes too hard with the pink fill of the primary CTA.

### Tertiary / text link (dark)
```
fg:      #FFFFFF (default)
fg:      var(--sb-pink) on hover
trailing glyph: →
```

### Tag — filled
Pink fill, white label. Same as Light.

### Tag — outline
1 px white border, white label.

### Reel / video frame

The defining Dark Mode component.

```
frame:    1px solid rgba(255,255,255,0.06)   /* whisper of border */
radius:   0
bg:       #000000
overlay:  bottom-aligned 64px gradient        /* FORBIDDEN in master, ALLOWED here only as black-to-transparent over a video still — for legibility, not decoration */
controls: pink play glyph (#E80787), white scrubber, white time-code (Inter Medium 12)
```

The black-to-transparent overlay is the **single allowed gradient** in the entire system, and only over a video still, only at the bottom, only for legibility of the title and time-code. Never on a static layout.

### Time-code / metadata strip

`Inter Medium 12 UPPERCASE 0.14em` in white at 80% opacity, sitting in the bottom-left of the video frame. e.g. `02:14  ·  CASE STUDY  ·  TECH`.

### Selected-work mosaic

A 2- or 3-column grid of thumbnails. Each thumbnail is:
- 16:9 video still
- 1 px `rgba(255,255,255,0.06)` border
- Title in `Raleway SemiBold 24` white below the still
- Sector + length meta in `Inter Regular 12` gray
- Hover: nothing visual on the still itself; the title shifts from white → pink in 200ms

No zoom-on-hover, no scale, no parallax.

### Hero (Portfolio / Case Study)

A full-bleed video or still, with logo in the top-left, nav in the top-right, and a left-aligned title + eyebrow at the bottom-left. The title uses `Raleway Bold 72` white. Below the title sits the project meta in `Inter Medium 12` gray.

---

## 5. Imagery on dark surfaces

- Cinematic and composed. Deliberate camera movement, real environments, natural performances.
- **Color grading:** neutral-to-cool base, deep blacks, controlled highlights. Magenta is reserved for accent and emphasis — it can colour-grade a single highlight or a fine line, but it does **not** wash the frame.
- **Allowed on dark:** product close-ups, factory floors, engineered hardware, UI close-ups against black, abstract motion graphics.
- **Avoid:** the same list as Light — plus oversaturated neon city, "cyber" gradients, glitch effects, fake holograms.

---

## 6. Crossing the boundary

A Dark block inside a Light page (and vice-versa) is a **clean rectangular edge**. There is never a gradient, fade, vignette, or feathered transition between modes — the contrast is the design.

| Pattern | Outer | Inner |
|---|---|---|
| Homepage hero | Light page chrome | Dark reel container in the right column |
| Sector page hero | Light page chrome | Dark reel container |
| Case study page | Dark hero at the top, then a clean break to a Light body |
| Selected work mosaic on a Light page | Light page chrome | Full-bleed Dark mosaic band, then back to Light |

The boundary is always a horizontal or vertical straight edge that aligns to the 12-col grid.

---

## 7. Where Dark is used

- Homepage hero right-column reel container
- Homepage selected work mosaic
- Portfolio page hero
- Case study page hero
- Video embed frames (within the embed)
- Sector page reel containers (inside the Light hero)

Where Dark is **not** used:
- Page chrome (header, nav, footer)
- Page bodies
- Decks (decks live in Light Mode unless the deck is a portfolio showreel cover)
- Forms, settings, account-style screens
