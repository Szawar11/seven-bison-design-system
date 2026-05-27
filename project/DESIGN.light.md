# Seven Bison — DESIGN.light.md

> **Light Corporate Mode.** The default brand system. Used everywhere visitors *read, navigate, or act*: page chrome, body sections, sector pages, Studio Access, About, Contact, case study bodies, decks, client documents.

Pair with `DESIGN.master.md` (shared rules) and `colors_and_type.css` (tokens).

---

## 1. Surface and ink

| Token | Value | Use |
|---|---|---|
| `--surface-canvas` | `#F7F5F2` (Off White) | Page background |
| `--surface-raised` | `#FFFFFF` | Cards, callout boxes |
| `--surface-sunken` | `#EEEAE4` | Subtle wells (rare) |
| `--text-primary` | `#111111` | Headings, primary copy |
| `--text-secondary` | `#2A2A2A` | Body copy |
| `--text-tertiary` | `#8A8A8A` | Meta, captions, eyebrows-when-secondary |

The light canvas is **warm off-white** (`#F7F5F2`), not pure white. Pure white is reserved for **raised cards inside the canvas** — it gives subtle layering without any shadow.

---

## 2. Logo on light surfaces

- **Primary lockup:** `seven-bison-logo-pink.png` (full colour) — preferred everywhere on light.
- **Monochrome fallback:** `seven-bison-logo-black.png` — single-colour print, low-contrast contexts, partner co-brand strips.
- Never use the white logo on light.

---

## 3. Color ratios (light)

From brandbook p.04: **60 / 20 / 10 / 5 / 3 / 2**

| Share | Token | Where |
|---|---|---|
| 60% | Pink (when used) | Targeted: indices, CTAs, line icons, callout marks |
| 20% | Ink Black | Headings, primary text |
| 10% | Graphite | Body copy, strong rules |
| 5% | Medium Gray | Meta, captions |
| 3% | Soft Gray | Hairline rules, input borders |
| 2% | Off White | Canvas |

Interpretation: the 60% pink figure is the **logo's own internal balance**; in a real page layout pink is closer to ~10% of pixels — used for indices, CTAs, and accent marks. Do not paint a page pink.

---

## 4. Components (light paint)

### Primary button
```
bg:      var(--sb-pink)
fg:      #FFFFFF
border:  none
height:  40px
padding: 12px 24px
radius:  4px
font:    Inter SemiBold 14, UPPERCASE, 0.14em tracking
hover:   bg #C0066F
press:   bg #9A0558
focus:   outline 2px var(--sb-pink), outline-offset 2px
```

### Secondary button
```
bg:      transparent
fg:      var(--sb-pink)
border:  1px solid var(--sb-pink)
```

### Tertiary / text link
```
bg:      transparent
fg:      var(--sb-pink)
border:  none
trailing glyph: → (right arrow, 16px, 8px gap)
```

### Tag — filled
Pink fill, white label, 2 px radius, `Inter SemiBold 12 UPPERCASE 0.1em`, padding `4px 10px`. Optional trailing `×` glyph for dismissibles.

### Tag — outline
Transparent fill, 1 px `--border-strong` border, graphite label. Same dimensions.

### Add-tag ghost
Transparent fill, 1 px **dashed** pink border, pink label, trailing `+`. Used for empty-state affordances.

### Callout — Info
```
bg:      var(--surface-raised) (#FFFFFF)
border:  1px solid var(--border-hairline)
padding: 16px 24px
leading icon: pink line icon, 20px
title:   Inter SemiBold 14
body:    Inter Regular 14, --text-secondary
```

### Callout — Success
Same shell with a pink check glyph.

### Form input
```
bg:      #FFFFFF
border:  1px solid var(--border-hairline)
height:  44px
padding: 0 14px
radius:  2px
font:    Inter Regular 14
focus:   border var(--sb-pink), 0 0 0 3px rgba(232,7,135,0.12)
```

Inputs never use rounded pill shapes. Labels sit above the field in `Inter SemiBold 12 UPPERCASE`.

### Section header pattern

This is the brand signature.

```
[01]  SECTOR EXPERTISE
─────────────────────────────────────
```

- Pink `01` numeral, `Inter SemiBold 14`.
- Black eyebrow label, `Inter SemiBold 14 UPPERCASE 0.14em`.
- Hairline rule fills the row to the column edge.
- 16 px gap between numeral, label, and rule.

### Reel container (Light page hosting Dark cinematic)

When a Dark cinematic block sits inside a Light page (e.g. homepage hero reel, sector page reel container), the boundary is a **clean edge** — never a fade or gradient. The Dark block is exactly `#000000` against the Light `#F7F5F2`; it has no border, no shadow, no glow.

---

## 5. Imagery on light surfaces

- Polished industry environments, elegant product visuals, abstract tech textures, premium UI/dashboard framing, restrained motion graphics.
- Light grading, neutral-to-cool, with natural highlights. No saturation crank.
- **Never** stock-photo clichés (handshake meetings, fake server rooms, oversaturated city skylines), meme energy, heavy lens flares, AI-obvious composites.
- Subjects often have **negative space** that the page typography can occupy.

---

## 6. Where Light is used

From the project brief — Light is the default for:

- Global header / nav
- Global footer
- Homepage hero (left column) and trust strip
- Homepage end-to-end partner block, sector cards, how-we-work, testimonials, final CTA
- Sector pages (body)
- Studio Access page
- About, Contact
- Case study pages (body)

Where Light is **not** used:
- Homepage hero right-column reel container → Dark
- Homepage selected work mosaic → Dark
- Portfolio page hero → Dark
- Case study page hero → Dark
- Video embed frames inside case studies → Dark (within the frame)
