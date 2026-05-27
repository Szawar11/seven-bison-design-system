# Seven Bison — DESIGN.master.md

> **Shared foundations.** These rules are identical between Light Corporate Mode and Dark Cinematic Mode. Mode-specific overrides live in `DESIGN.light.md` and `DESIGN.dark.md`.

---

## 1. Brand essence

Seven Bison turns complexity into clarity through premium video and motion design. The brand should always feel **premium, calm, credible, and built for serious B2B communication**. We move forward with strength, precision, and integrity.

Brand attributes: **Confident · Sober · Specific · Helpful · Precise · Modern · Scalable**

Brand keywords: **Premium · Sober · Modern · Enterprise-Ready**

The single line that anchors everything:

> **AI-native production. Human craft.**

---

## 2. Logo

The logo is a **fixed PNG image asset**. Never redraw, trace, regenerate, recolour, or reinterpret the bison mark or the SEVENBISON wordmark. Never replace the wordmark with editable text.

| File | Use |
|---|---|
| `assets/logos/seven-bison-logo-pink.png` | Primary, on light surfaces and as the brand-defining state on dark |
| `assets/logos/seven-bison-logo-black.png` | Monochrome fallback on light surfaces |
| `assets/logos/seven-bison-logo-white.png` | Dark surfaces, monochrome |

Rules:
- **Clear space:** at least the height of the `S` in the wordmark on every side.
- **Minimum size:** 25 mm print / 120 px digital for the lockup; 16 mm / 64 px for the symbol-only mark.
- **Approved backgrounds:** flat light or flat black only. Never on photography, gradients, busy textures, or saturated colour.
- **Never:** stretch, distort, rotate, recolour, add a drop shadow or glow, alter the wordmark, replace the wordmark with editable text, or rearrange the components.

The "AILERONS" wordmark is a **logo wordmark reference only**. It is NOT a CSS font and must NOT be loaded as one.

> **TODO — pink in PNGs.** The supplied PNG logo files may have been exported from an older pink (`#C01677` / `#E01677` appear in the brandbook drafts). The final brand pink is `#E80787`. Re-export the master PNG files to match `#E80787` at the next brand asset refresh.

---

## 3. Typography

Seven Bison uses **two** typefaces, self-hosted from `/fonts`. **Both Light Corporate Mode and Dark Cinematic Mode share the same typography system** — Dark Mode does not introduce a separate typographic identity.

| Role | Family | Notes |
|---|---|---|
| Primary — display / headlines / navigation / system | **Raleway** | Variable 100–900. Default headline weight is 600/700. |
| Secondary — body / UI labels / captions / forms / tables / technical | **Inter** | Variable 100–900. Default body weight is 400. |

**Ailerons** is a *reference* for the fixed logo wordmark only. It is **not** a CSS font, must not be loaded as one, and the wordmark itself must never be replaced with editable text. The logo is a fixed PNG asset.

### Scale (from brandbook page 05)

| Token | Family / weight | Size / line-height |
|---|---|---|
| `H1 / Display` | Raleway Bold | 72 / 80 |
| `H2 / Section` | Raleway SemiBold | 36 / 44 |
| `H3 / Subsection` | Raleway Medium | 24 / 32 |
| `H4 / Label` | Raleway SemiBold, uppercase, 0.14em tracking | 16 / 24 |
| `Body / Large` | Inter Regular | 16 / 26 |
| `Body / Base` | Inter Regular | 14 / 22 |
| `Body / Small` | Inter Regular | 12 / 18 |

### Typesetting rules

- **Case:** Title Case for H1/H2/H3. **UPPERCASE with 0.14em tracking** for eyebrows, nav, tags, and section indices.
- **Tracking:** Tight (-0.01em) on display sizes; normal on body.
- **Indices:** Section numbers (`01 02 03`) sit in pink as numerals before the eyebrow label. This is a brand signature — use it on section headers.
- **No italics in UI.** If italic emphasis is genuinely required, use Inter Italic at the body weight — sparingly.
- **No drop caps. No tracked-out word art.**
- **Same type in both modes.** Do not introduce additional display or editorial faces (no Oswald, no Cormorant Garamond, no Aileros / Ailerons as CSS) for Dark Mode or any other reason.

---

## 4. Color foundations

Pink is **signal, not surface**.

| Token | Hex | Use |
|---|---|---|
| `--sb-pink` | `#E80787` | Accents, indices, CTA fill, focus, underline marks. Targeted ratio: ~10% of pixels on any layout. |
| `--sb-ink-black` | `#111111` | Light-mode primary text |
| `--sb-graphite` | `#2A2A2A` | Light-mode secondary text, strong rules |
| `--sb-medium-gray` | `#8A8A8A` | Tertiary text, meta |
| `--sb-soft-gray` | `#E8E8E8` | Default hairline rules |
| `--sb-off-white` | `#F7F5F2` | Light canvas |
| `--sb-true-black` | `#000000` | Dark canvas |
| `--sb-white` | `#FFFFFF` | Dark-mode text |

Pink dosage targets: **60% canvas / 20% black / 10% graphite / 5% medium / 3% soft / 2% off-white** in Light Mode; **70% black-or-graphite / 20% white-or-gray / 10% pink** in Dark Mode.

**Forbidden:**
- Gradients of any kind (pink-to-purple, black-to-blue, hero washes, button gradients).
- Glassmorphism, frosted blurs as decoration, neon glows.
- Drop shadows on anything — including the logo, buttons, cards.
- Recolouring the logo to anything other than the three approved colours.
- "Sci-fi" colour (electric cyan, neon green, ultraviolet) as accent.

---

## 5. Layout & spacing

- **12-column grid.** Margins 80 px desktop, gutter 24 px. (Brandbook p.05)
- **8-point spacing system.** Use the named tokens (`--space-2` through `--space-12`). Custom in-between values are a smell.
- **Breakpoints:** Desktop ≥1440 · Laptop 1024–1439 · Tablet 768–1023 · Mobile 320–767.
- **Generous whitespace** is a brand attribute — "Breathing space creates focus." Hero blocks should never feel crowded.
- **Strong negative space** between sections — large vertical rhythm (96–128 px desktop section padding).
- **Alignment:** every block aligns to the 12-col grid or a clear sub-rhythm. No floating cards.
- **No rounded panels with coloured left-border accents.** No card stacks with offset shadows.

### Radii

| Token | Value | Use |
|---|---|---|
| `--radius-0` | 0px | Default. Most surfaces, hero blocks, callout boxes. |
| `--radius-1` | 2px | Form inputs, tags. |
| `--radius-2` | 4px | Buttons, callout chips. |
| `--radius-pill` | 999px | Sector chips only. Rare. |

### Borders

- **Default border** is `1px solid var(--border-hairline)`.
- **Strong border** is `1px solid var(--border-strong)` for emphasis.
- **Ghost borders** (dashed pink) are reserved for Tertiary/Ghost CTAs and the "Add Tag +" pattern.

---

## 6. Motion principles

From brandbook p.07 — every motion choice serves the message.

1. **Purpose-Led Movement.** Every motion has intent and supports the story. No motion for motion's sake.
2. **Smooth & Controlled.** Use eased motion with natural acceleration. Default easing: `cubic-bezier(0.2, 0.6, 0.2, 1)`.
3. **Build with Hierarchy.** Guide attention with timing, scale, and space.
4. **Subtle & Refined.** Refinement comes through restraint. Micro-interactions should be barely-there.
5. **Seamless Transitions.** Cross-fades and crops, not slide-and-bounce.

Durations: `120ms` micro / `200ms` base / `400ms` slow / `800ms` cinematic crossfades. **No bounce, no spring overshoot, no parallax-on-scroll vanity.**

---

## 7. Components (shared shells)

These are the building blocks. Mode-specific paint is in the light/dark files.

### Buttons

| Variant | Surface | Border | Label |
|---|---|---|---|
| **Primary** | Pink fill | none | Inter SemiBold 14, UPPERCASE, 0.14em tracking, white |
| **Secondary** | Transparent | 1px pink | Pink label, same type |
| **Tertiary / Text link** | Transparent | none | Pink label + `→` glyph |
| **Ghost / Add** | Transparent | 1px dashed pink | Pink label + `+` glyph — used for "Add Tag" type affordances |

Sizing: height 40 px default, padding 12 px / 24 px, radius 4 px. Hover = darken pink to `#C0066F`. Press = `#9A0558`. **No shadow, no gradient, no shape morph.**

### Tags / chips

Filled tag = pink background, white label, 2 px radius, `Inter SemiBold 12 UPPERCASE`. Outline tag = 1 px medium-gray border, graphite label. Tags do not animate on hover.

### Dividers

`Default` = 1 px solid hairline. `Dashed` = 1 px dashed hairline. `Dotted` = 1 px dotted hairline. Used to separate sections within a layout — not page sections.

### Callout boxes

A callout is a 1 px hairline-bordered rectangle, 24 px padding, with a small leading icon and a label/body pair.

- **Info** — Inter Regular body, hairline border.
- **Success** — same shell, with a small pink check glyph.

No coloured fills. No left-border accents. The icon does the work.

---

## 8. Voice (cross-mode)

From brandbook p.06.

**We are:** Confident · Sober · Specific · Helpful · Enterprise-ready.

**We avoid:** hype, superlatives, buzzwords, sci-fi futurism, casual slang, cheapness or price-first framing, jargon without explanation.

**Pronouns:** "we" (the studio) speaking to "you" (the partner / decision-maker). Never "I". Never address the reader as "guys".

**Sentence shape:** short. Declarative. Two-to-three-clause max. Trim adjectives.

**Approved brand phrases** (use verbatim):
- "Launch-ready video in 48 hours"
- "AI-native production, human craft"
- "Remote production"
- "Brand-safe"
- "Enterprise-ready"
- "End-to-end creative partner"

**CTAs** are imperatives that imply momentum, not pressure: *Talk to our team · Request a custom quote · See our process · Book a discovery call · Start your project · Speak with a Producer · Review our portfolio.*

**Avoid emoji entirely** in product / website / decks. Emoji conflict with the sober, enterprise tone. Unicode arrows (`→`) are the only exception — they appear as glyphs on CTAs and list items.

---

## 9. Iconography

Icons in the brandbook are **thin-line, single-stroke, geometric** — drawn in the same line weight as the logo. They are always **pink on light surfaces** and **pink on dark surfaces** (the icon line weight, not the canvas, carries the colour). Backgrounds for icon tiles are the canvas — never a contrasting fill.

This system maps cleanly to **Lucide** (matched stroke weight 1.5 px, geometric construction). We use Lucide via CDN as the de facto icon set, with custom inline SVG only for the three sector marks (Tech, Heavy Industry, Healthcare & Pharma) that appear in the brandbook. See `README.md → ICONOGRAPHY`.

---

## 10. AI-production governance (cross-mode)

From brandbook p.09. When producing assets:

- **On-brand** — every asset follows the rules in this folder. No exceptions.
- **Accurate & ethical** — factual, respectful, legally compliant.
- **Original or licensed** — record sources and licenses.
- **Secure & confidential** — never share sensitive inputs/outputs.
- **Reviewed & approved** — every external-facing asset gets human sign-off before publish.

File naming: `SB_[Project]_[Format]_[Version]`. Example: `SB_NovaLaunch_Deck_v02`.
