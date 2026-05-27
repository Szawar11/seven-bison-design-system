# Seven Bison — Design System

A complete brand + UI system for **Seven Bison**, a premium B2B video, motion design and animation studio for brands in complex, regulated, and visually-challenged industries.

> *AI-native production. Human craft.*

---

## Company context

**Who they are.** Seven Bison turns complexity into clarity through premium video and motion design. They partner with B2B brands in highly technical, regulated, and visuality-challenged industries to explain, persuade, and inspire with confidence.

**Who they serve.**

- **Tech** — cybersecurity, fintech, software, SaaS, AI/ML.
- **Heavy Industry** — manufacturing, energy, infrastructure, logistics.
- **Healthcare & Pharma** — medtech, biotech, pharma, health systems.

**Audience.** Marketing, communications, and product leaders in mid-to-large enterprises ("Direct clients"), and creative / digital / PR agencies ("Agencies") looking for a trusted execution partner.

**Brand promise.** *Launch-ready video in 48 hours.* Remote production, brand-safe, enterprise-ready, end-to-end.

**Differentiators.** Sector expertise · premium craft · long-term partnership · enterprise-ready delivery · founder-led credibility.

---

## How the system is organised

Seven Bison operates with **two controlled visual modes** that share one set of foundations:

```
Design System (this folder)
├── README.md                  ← you are here (manifest + content + visual foundations + iconography)
├── DESIGN.md                  ← entry point + read order rules (provided)
├── DESIGN.master.md           ← shared foundations (logo, type, voice, spacing, motion, components)
├── DESIGN.light.md            ← Light Corporate Mode (default — chrome, body, decks)
├── DESIGN.dark.md             ← Dark Cinematic Mode (scoped — reels, case study heroes)
├── colors_and_type.css        ← CSS tokens (raw palette, semantic vars, type, spacing, motion)
├── SKILL.md                   ← Claude Code / Agent Skills entry point
├── assets/
│   ├── logos/                 ← Approved logo files (pink, black, white — PNG only for now)
│   └── brandbook/             ← Reference brandbook pages (light 01–09, dark 01–09)
├── preview/                   ← Design-system tab cards (foundations, components)
└── ui_kits/
    └── marketing-site/        ← Hi-fi recreation of the Seven Bison marketing site
        ├── index.html         ← Click-thru: home → portfolio → case study
        ├── components/        ← Header, Footer, Hero, ReelCard, SectorCard, etc.
        └── README.md
```

**Read order for any UI work:**

1. `DESIGN.md` (entry point — provided)
2. `DESIGN.master.md` (shared rules)
3. The mode-specific file (`DESIGN.light.md` or `DESIGN.dark.md`) for the surface you are working on.
4. `colors_and_type.css` to lift tokens — never hard-code values.

---

## Sources used to build this system

| Source | Where | Notes |
|---|---|---|
| Brandbook — Light Corporate (9 pages) | `assets/brandbook/light-01.png` … `light-09.png` | Canonical for chrome, body, voice, motion, governance |
| Brandbook — Dark Cinematic (9 pages) | `assets/brandbook/dark-01.png` … `dark-09.png` | Canonical for cinematic surfaces — same Raleway + Inter type system as Light |
| Brand fonts (self-hosted) | `fonts/` | Raleway + Inter only, variable TTFs |
| Logo masters (PNG) | `assets/logos/` | Three approved files: pink, black, white. PNG only. Fixed assets — never redrawn. |
| Project brief (`DESIGN.md`) | repo root | Source of truth for mode-selection rules and the canonical pink (`#E80787`). |

> **Reconciliation notes.**
> 1. **Final brand pink is `#E80787`.** TODO: the supplied PNG logo files may have been exported from older pink values (`#C01677` and `#E01677` both appear in the brandbook drafts) and should be re-exported to match `#E80787` at the next asset refresh.
> 2. **Typography is fixed.** Raleway for display / headlines / navigation / system. Inter for body / UI / forms / tables / technical. Both Light and Dark modes share the same type system — no Dark-only exceptions. Oswald and Cormorant Garamond are **not** part of the system.
> 3. **Ailerons** is the wordmark in the logo. It is a reference only — **not** a CSS font, must not be loaded as one, and the wordmark must never be replaced with editable text.

---

## CONTENT FUNDAMENTALS

How Seven Bison writes.

### Tone

**Confident · Sober · Specific · Helpful · Enterprise-ready.**

The voice is the studio's voice, not a single founder's. We speak with authority earned through experience. We are real, grounded, and free of exaggeration. We prefer clarity over clever, and facts over filler.

> *"We don't chase attention. We earn trust. Then we deliver."* — from brandbook p.06

### Pronouns and address

- "**We**" = Seven Bison the studio.
- "**You**" / "**your team**" = the partner / decision-maker.
- Never "I" (the founder is acknowledged but does not narrate the brand).
- Never "guys", "folks", "team!" — those break the enterprise register.

### Casing

- **Sentence case** for body copy and most UI strings.
- **Title Case** for H1 / H2 / H3 (`Built for Bold Moves`).
- **UPPERCASE with 0.14em tracking** for eyebrows, nav items, tags, section indices, and button labels. This is the signature.
- Acronyms (AI, B2B, UX, SaaS) keep their cased letters in body copy — do not soften to "ai" or "b2b".

### Sentence shape

Short. Declarative. Three-clause max. Trim adjectives. Two-line headlines beat one long sentence.

**Good:**
> *"Enterprise video, faster. Safer. Better."*
> *"Seven Bison delivers launch-ready video in 48 hours with brand-safe, enterprise-ready production. AI-native. Human craft. End-to-end."*

**Bad (avoid):**
> *"Revolutionary, next-gen AI-powered video solutions that disrupt how forward-thinking enterprise teams unlock storytelling at scale."*

### Approved brand phrases (use verbatim)

- *Launch-ready video in 48 hours*
- *AI-native production, human craft*
- *Remote production*
- *Brand-safe*
- *Enterprise-ready*
- *End-to-end creative partner*
- *AI powers. People perfect.*

### CTAs

CTAs imply momentum, not pressure. Always start with a verb.

*Talk to our team · Request a custom quote · See our process · Book a discovery call · Start your project · Speak with a Producer · Review our portfolio · See sector work.*

CTAs use a trailing `→` glyph on text and tertiary links — never on primary fills.

### Avoid

- Hype, superlatives, exclamation marks.
- Buzzword overload ("synergy", "leverage", "best-in-class").
- Sci-fi or futurism language ("next-gen", "revolutionary", "the future of").
- Casual slang and internet shorthand ("vibes", "ngl", "lol", "TLDR").
- Cheapness / price-first framing ("affordable", "cheap", "budget-friendly").
- Jargon without explanation.
- **Emoji.** Across all enterprise surfaces. The only Unicode glyphs we use are `→`, `·`, `+`, `×`.

### Sample copy (extracted from the brandbook)

| Surface | Copy |
|---|---|
| Homepage hero | *Enterprise video, faster. Safer. Better.* |
| Service statement | *End-to-end creative that moves at your speed.* |
| Headline | *Enterprise video. Built for impact.* |
| Subheadline | *AI-native production. Human craft. Launch-ready in 48 hours.* |
| Tagline | *Less noise. More signal. Always.* |

---

## VISUAL FOUNDATIONS

### Colors

The full palette is in `colors_and_type.css` (raw + semantic). Headlines:

- **Pink `#E80787` is signal, not surface.** ~10% of pixels per layout in Light Mode, ~half that in Dark Mode. Used for: section indices (`01 02 03`), CTA fills, icon strokes, focus rings, underline accents on links.
- **Light Mode canvas is warm off-white `#F7F5F2`**, not pure white. Pure white is for *raised cards inside the canvas*.
- **Dark Mode canvas is true black `#000000`.** No charcoal page surfaces — depth comes from spacing, not from grey-on-grey layering.
- **Boundary between modes is a clean rectangular edge.** Never a fade or gradient.

### Type

Both modes share the same two-face system. Dark Mode does **not** introduce a separate typographic identity.

- **Raleway** — primary display, headline, navigation and system typeface. Bold for H1, SemiBold for H2 and labels, Medium for H3, Regular for support. 72/80 px display down to 16/24 px labels.
- **Inter** — body copy, UI labels, captions, forms, tables and technical descriptions. Regular 14/22 default; 16/26 for body-large; 12/18 for meta.
- **Ailerons** — fixed logo wordmark reference only. Never loaded as a CSS font. Never replaced with editable text.
- Default tracking is normal; eyebrows / nav / tags / button labels use **0.14em tracking + UPPERCASE**.
- Tight tracking (-0.01em) on display sizes only.
- **Oswald and Cormorant Garamond are not part of the system.** Do not introduce them.

### Spacing

8-point system, multiples of 4. Tokens `--space-1`…`--space-12`. Section vertical padding sits in the 96–128 px range on desktop. The brand attribute "Breathing Space" is non-negotiable — hero blocks should never feel crowded.

### Backgrounds

- Light surfaces use the warm off-white canvas with **raised white cards**. No textures, no patterns, no gradients.
- Dark surfaces use true black with **video stills, abstract motion graphics, or product close-ups**. Imagery is the texture.
- **Full-bleed imagery** is used in heroes (case study, portfolio) and Dark Mode mosaics — always at the page width with crisp edges.
- **No repeating patterns. No hand-drawn illustrations. No paper textures. No noise overlays.**

### Animation & motion

- **Easing** defaults to `cubic-bezier(0.2, 0.6, 0.2, 1)` (a controlled, slightly-decelerated curve).
- **Durations:** `120ms` micro · `200ms` base · `400ms` slow · `800ms` cinematic crossfades.
- **Fades and crossfades** are the default. Slide / push transitions are reserved for full-page video sequences.
- **No bounce, no spring overshoot, no parallax-on-scroll.** Brandbook p.07 lists "Smooth & Controlled" and "Subtle & Refined" as motion principles.
- **Hover states:** colour shift only (e.g. white → pink). No scale, no shadow, no translate.
- **Press states:** colour shift to the darker pink (`#9A0558`). No size change.

### Borders, shadows, and elevation

- **Default border is a 1 px hairline** (`#E8E8E8` light / `rgba(255,255,255,0.06)` dark).
- **Strong border** is 1 px `#2A2A2A` for emphasis on Light, 1 px `#2A2A2A` on Dark.
- **Shadows are explicitly forbidden** by the brandbook. No `box-shadow` anywhere. Elevation comes from hairlines, sunken surfaces, and whitespace.
- **No protection gradients** under copy. If a video still needs legibility help, the only allowed gradient is the bottom-aligned black-to-transparent overlay inside the dark reel frame (`DESIGN.dark.md §4`).

### Transparency and blur

- Transparency is rare. Allowed: hover overlays at `rgba(255,255,255,0.06)` on dark, `rgba(232,7,135,0.12)` for focus rings, `rgba(255,255,255,0.0→0.6)` on the dark reel overlay.
- **No frosted backdrop blur**, no glassmorphism. Brandbook p.03 lists these as "Don't".

### Imagery character

- **Light Mode:** polished industry environments, premium UI/dashboard framing, elegant product visuals, abstract tech textures, restrained motion graphics. Neutral-to-cool grading, natural highlights.
- **Dark Mode:** cinematic and composed, with deep blacks, controlled highlights, and magenta accents reserved for emphasis (never frame-wide wash).
- **Both modes avoid:** chaotic collage, oversaturated neon-city stock, flashy VFX, stock-photo clichés (handshake meetings, fake server rooms), heavy lens flares, overcrowded HUD graphics, meme energy.

### Corner radii

- **0 px is the default.** Seven Bison is a sharp brand.
- **2 px** for form inputs and tags.
- **4 px** for buttons and callout chips.
- **Pill (999 px)** for sector tags only. Rare.

### Cards

- White (`#FFFFFF`) raised on the off-white canvas.
- 1 px hairline border (`#E8E8E8`), 0 px radius, 24–32 px padding.
- **No drop shadow.** Layering reads through colour contrast (white on off-white) + hairline, not depth.

### Layout rules

- 12-column grid, 80 px desktop margins, 24 px gutters.
- **Pinned elements:** logo top-left, primary nav top-right. The pink section index (`01 02 03…`) anchors the left rail of section headers.
- The pink eyebrow + hairline-rule section header is the brand signature — reuse it everywhere.

---

## ICONOGRAPHY

### What the brandbook shows

Icons are **thin-line, single-stroke, geometric** — drawn at roughly the same line weight as the bison mark. They appear in **pink** on both Light and Dark surfaces (the *stroke* carries the colour; the *tile* is the canvas).

The brandbook hand-draws a small set:

- **Sectors:** Tech (chip with circuit lines), Heavy Industry (factory silhouette), Healthcare & Pharma (medical cross).
- **Voice principles:** target (Confident), shield (Sober), magnifier (Specific), people (Helpful), building (Enterprise-Ready).
- **Messaging formula:** person (Audience), speech (Insight), check-circle (Solution), spark (Impact).
- **Workflow / governance:** play, megaphone, clipboard, screen, document, gauge, shield-check, lock, gear, file, signpost.

### What we ship

1. **Sector marks** — bespoke single-stroke SVGs (Tech / Heavy Industry / Healthcare & Pharma) live inline inside the UI kit. They match the brandbook stroke weight (1.5 px) and pink stroke colour.
2. **Everything else** — we use **[Lucide](https://lucide.dev/)** via CDN. Lucide matches the brand's geometric, single-stroke, even-weight aesthetic. Stroke is set to `1.5` to match the brandbook.

> **Substitution flag.** The brandbook does **not** specify a named icon library. Lucide is the closest visual match (matched stroke weight, geometric shapes, ~1000 icons) and is what this design system uses. If the brand team prefers a different system (Tabler, Phosphor Light), substitute the CDN URL in `ui_kits/marketing-site/index.html` and re-check stroke weight.

### Usage rules

- **Pink stroke on both modes.** The icon line is `#E80787`; the inside of the icon is the canvas.
- **Stroke weight:** `1.5 px` always. Never adjust per-icon.
- **No filled icons.** No duotone. No two-colour icons.
- **Size:** 16 / 20 / 24 / 32 / 48 px steps.
- **No icon backgrounds.** No coloured tiles, no rounded squares around icons. The icon sits directly on the canvas.
- **Emoji are forbidden.** See Content Fundamentals.
- **Unicode glyphs allowed:** `→` (CTA / list arrow), `+` (add affordance), `×` (close), `·` (meta separator).

---

## Fonts — self-hosted

Two brand faces ship as variable TTFs in `/fonts` and are loaded via `@font-face` declarations in `colors_and_type.css`:

- **Raleway** — `RALEWAY-VARIABLEFONT_WGHT.TTF` + italic counterpart, weight axis 100–900
- **Inter** — `INTER-VARIABLEFONT_SLNT_WGHT.TTF`, weight axis 100–900

No CDN fallback is wired. No other display, editorial, or cinematic faces are part of the system.

**Ailerons** (the logo wordmark) is **not** redistributed and is **not** loaded as a CSS font. It only ever appears as part of the fixed logo image asset. The wordmark must never be replaced with editable text — if you need to render "SEVEN BISON" in a non-logo context (e.g. an oversized wallpaper graphic), set it in Raleway and ask the brand team to approve, rather than reaching for an Ailerons substitute.

---

## Index — manifest of this folder

| Path | What it is |
|---|---|
| `DESIGN.md` | Entry point + read-order rules (provided in the brief) |
| `DESIGN.master.md` | Shared foundations (logo, type, voice, motion, components) |
| `DESIGN.light.md` | Light Corporate Mode |
| `DESIGN.dark.md` | Dark Cinematic Mode |
| `README.md` | This file — context, content, visual, iconography |
| `colors_and_type.css` | CSS tokens (palette, semantic vars, type, spacing, motion) |
| `SKILL.md` | Agent Skills entry point (Claude Code compatible) |
| `assets/logos/` | Three approved logo files (pink, black, white — PNG only for now) |
| `assets/brandbook/` | Original brandbook reference pages (light + dark, 9 each) |
| `preview/` | Design-system tab cards |
| `ui_kits/marketing-site/` | Hi-fi recreation of the Seven Bison marketing site |

---

## Caveats & open questions

- **Pink in PNG logos (TODO).** The supplied PNG logo files may have been exported from older pink values (`#C01677` / `#E01677` appear in the brandbook drafts). The final brand pink is `#E80787`. Re-export the master PNG files to match `#E80787` at the next brand asset refresh.
- **PNG-only logos.** Until the brand team supplies updated masters, only the PNG files in `assets/logos/` are approved for use. Do not redraw, regenerate, trace, or reinterpret the bison mark or wordmark.
- **No icon library is named in the brandbook.** We use Lucide (closest visual match). If the team has a preferred system, swap the CDN link.
- **Real marketing-site code was not provided.** The UI kit recreates the site from brandbook guidance only — `DESIGN.md`'s mode-selection table is the structural spec, not actual production code.
