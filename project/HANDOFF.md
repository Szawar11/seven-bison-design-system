# Seven Bison — Paczka gotowa do przekazania

> Read-me-first dla przekazania projektu web devowi. Pełna dokumentacja techniczna: **`DEVELOPER.md`**.

## Plik dla web deva

`seven-bison-handoff-2026-05.zip`

- **63 pliki · 1.1 MB compressed**
- Czysty — bez `node_modules`, duplikatów fontów, `uploads/`, `screenshots/`, brandbooka
- Bez build-stepu — statyczny HTML/CSS/JS, React + Babel z CDN
- Wszystko rozpakowuje się do folderu `seven-bison/`

## Zawartość

| Folder/Plik | Co tam jest |
|---|---|
| `ui_kits/marketing-site/` | Cała aplikacja — `index.html` (routing + motion JS), `styles.css` |
| `…/components/` (10 plików) | Home · Sector (3 sektory data-driven) · StudioAccess · About · Contact · Portfolio · CaseStudy · Header · Footer · atoms |
| `colors_and_type.css` | Design tokens — kolory, skala typografii, spacing, motion |
| `assets/logos/` (SVG + PNG) | Logo pink / black / white |
| `assets/og.png` | Social share 1200×630 (brandowy róż) |
| `fonts/` (3 pliki) | Raleway + Inter — tylko variable, faktycznie ładowane |
| `preview/` (23 karty) | Referencja design systemu do otwarcia w przeglądarce |
| `*.md` (5 plików) | **DEVELOPER.md** (świeży) · README · DESIGN.master/light/dark |
| `package.json` | Skrypt `npm start` (bez ciężkich zależności) |

---

## Trzy sposoby przekazania devowi

### 1. ZIP (najprostsze)
Wyślij `seven-bison-handoff-2026-05.zip` przez email / WeTransfer / Slack. Dev rozpakowuje i odpala lokalnie:

```bash
cd seven-bison/
npm start        # → http://localhost:8080/ui_kits/marketing-site/
# albo bez Node:
python3 -m http.server 8080
```

### 2. GitHub repo (rekomendowane)
Daj devowi link: `https://github.com/Szawar11/seven-bison-design-system`

```bash
git clone https://github.com/Szawar11/seven-bison-design-system.git
cd seven-bison-design-system
npm start
```

> Najnowszy kod jest na branchu `main` (zmergowany ze `staging`). Branch `staging` służy do dalszych eksperymentów.

### 3. Statyczny hosting (production-ready)
Drag-and-drop folderu na **Netlify/Vercel** (publish dir = `project/`, entry = `ui_kits/marketing-site/`) — albo działający podgląd na **GitHub Pages**: `https://szawar11.github.io/seven-bison-design-system/`. Bez build-stepu, deploy w sekundy.

---

## Co dev znajdzie w `DEVELOPER.md`

1. **Routing** — tabela wszystkich stron (`home/tech/industry/health/studio/portfolio/about/case/contact`)
2. **Mapa motion features** — gdzie w kodzie siedzi każdy efekt (count-up, ticker, marquee, filmstrip, scrub pipeline, drawer, parallax…)
3. **Struktura plików** — pełne drzewo z opisami
4. **Edycja copy/tokenów** — m.in. jak edytować treść sektorów przez `SECTOR_DATA`
5. **Podmiana placeholderów** — jak `ReelFrame`/`MediaFrame`/`AvatarFrame`/`BeforeAfter` zamienić na realne `<video>`/`<img>`
6. **Deploy** — Netlify / Vercel / GitHub Pages / FTP + production-migration note (Vite/Next)
7. **Dwa znane odstępstwa** — grain+washe (jak usunąć dla brand-purity) oraz logo `#E70289` vs `#E80787`

---

## Co dev powinien zrobić w pierwszej kolejności

1. `npm start` (lub `python3 -m http.server`) → otwórz `localhost:8080/ui_kits/marketing-site/` (sanity check)
2. Przeczytać `DEVELOPER.md` — sekcje „Routing" i „Interactive / motion features"
3. Skonfigurować hosting (Netlify/Vercel/Pages)
4. Czekać na realne materiały (wideo, zdjęcia) → podmienić placeholdery 1:1 wg instrukcji w DEVELOPER.md
5. Przy skali produkcyjnej — rozważyć port na Vite/Next (Babel-in-browser to prototyp)
