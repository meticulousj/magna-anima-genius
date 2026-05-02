## Add 90-Day Sovereign Sprint Section

A new product section pitching the **90-Day Sovereign Sprint** — a printable / Notion workbook with daily prompts, rituals, and a weekly reflection cadence. Styled to match the site's midnight + antique gold aesthetic and structured like `Magnara.tsx` (the closest existing "product" section).

### Files

**Create `src/components/Sprint.tsx`**
- Section `id="sprint"`, two-column layout on desktop (mirrors `Magnara`).
- **Left column** — content:
  - Eyebrow: smallcaps gold "Workbook · 90 Days"
  - Heading: display serif — *"The 90-Day"* (gold-gradient italic) + *"Sovereign Sprint."*
  - Lede paragraph (~2 lines): one focused arc, three protocols a day, one honest reflection a week.
  - Feature list (gold dash markers, hover sweep — same pattern as `Magnara`):
    - **Daily Prompts** — one question to crack the day open.
    - **Three Rituals** — morning ignition, midday recalibration, evening audit.
    - **Weekly Reflection** — five questions, fifteen minutes, zero theatre.
    - **30/60/90 Milestones** — proof you moved, not just tried.
    - **Two Formats** — print-ready PDF + Notion template (Obsidian variant included).
  - CTA row: primary gold button "Get the Sprint" → `#subscribe`; secondary smallcaps "See a sample page" → `#essays`.
- **Right column** — visual card:
  - Stacked "page mockups" using pure CSS: two layered cards (rotated slightly, gold border, shadow-gold, grain overlay) showing a faux page header ("Day 01 · Ignition"), three ritual lines, and a reflection block.
  - Soft gold blur halo behind (matches `Magnara` glow).
  - Corner badge: smallcaps "v1 · Beta drop".

**Edit `src/routes/index.tsx`**
- Import `Sprint` and place `<Sprint />` between `<Magnara />` and `<Manifesto />` (product flows together: app → workbook → manifesto).

**Edit `src/components/SiteNav.tsx`**
- Add `{ href: "#sprint", label: "Sprint" }` between Magnara and Manifesto.

### Notes
- Pure presentational — no new dependencies, no data, no checkout wiring (CTA points at `#subscribe` so the existing email capture handles interest).
- Reuses existing utilities: `text-gradient-gold`, `shadow-gold`, `gold-rule`, `smallcaps`, `grain`, `animate-float-slow`.
- Mockup is built from divs/typography only — no new images required.