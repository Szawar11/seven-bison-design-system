---
name: seven-bison-design
description: Use this skill to generate well-branded interfaces and assets for Seven Bison, either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the `README.md` file within this skill, and explore the other available files.

The Seven Bison brand operates with **two controlled visual modes** sharing one set of foundations:

- **Light Corporate Mode** (default) — page chrome, body, sector pages, About, Contact, decks, client documents.
- **Dark Cinematic Mode** (scoped) — showreels, portfolio heroes, case study openings, motion graphics, video embeds.

Read order for any UI work:

1. `DESIGN.md` — entry point + mode-selection rules
2. `DESIGN.master.md` — shared foundations (logo, type, voice, motion, components)
3. `DESIGN.light.md` *or* `DESIGN.dark.md` — the mode for the surface you are building
4. `colors_and_type.css` — lift CSS tokens; never hard-code values

Hard rules (these come up constantly):

- The logo is a fixed asset under `assets/logos/`. Never redraw, trace, regenerate, or recolour it.
- Pink (`#E80787`) is **signal, not surface**. ~10% of pixels per layout in Light Mode, ~half that in Dark Mode.
- Type system is **Raleway + Inter only**. Do not introduce Oswald, Cormorant, or any other display face. "Ailerons" is the logo wordmark — it is NOT a CSS font.
- No gradients, glassmorphism, glows, drop shadows. The single allowed gradient is the bottom-aligned black-to-transparent overlay inside a Dark Mode reel frame.
- No emoji. The only allowed Unicode glyphs are `→ + × ·`.
- Default corner radius is 0. Buttons are 4 px. Inputs and tags are 2 px.
- Section headers carry a pink index numeral (`01`, `02`, `03`) + UPPERCASE eyebrow + 1 px hairline rule. This is the brand signature.

If creating visual artifacts (slides, mocks, throwaway prototypes), copy assets out of `assets/logos/` and create static HTML files for the user to view. Reference `colors_and_type.css` and the UI kit components under `ui_kits/marketing-site/`.

If working on production code, copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask a few questions (which surface? Light or Dark? what content?), and act as an expert designer who outputs HTML artifacts or production code, depending on the need.
