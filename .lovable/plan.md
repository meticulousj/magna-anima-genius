## Add Core Values Section

Create a new section displaying the seven Core Values of The Magna Anima Genius Project, placed between the Pillars and Essays sections, styled to match the site's midnight navy + antique gold aesthetic.

### Files

**Create `src/components/Values.tsx`**
- Section with `id="values"`, matching the typography rhythm of `Pillars.tsx` and `Manifesto.tsx`.
- Eyebrow: smallcaps gold "Core Values".
- Heading: display serif — "What we stand on." with a gold-gradient italic accent.
- Gold rule divider (matching other sections).
- Grid of 7 value cards (responsive: 1 / 2 / 3 / 4 columns) with:
  - Roman numeral or gold dot marker
  - Value name in display serif
  - One-line essence/tagline beneath each
- Subtle hover: gold underline sweep (mirroring `Pillars.tsx`).

Values + taglines (concise, on-brand):
1. Empowerment — Authority sourced from within.
2. Compassion — Strength tempered by tenderness.
3. Purpose-Driven Action — Aim before motion.
4. Holistic Brilliance — Mind, heart, body, spirit — one signal.
5. Integrity — Aligned in private and public.
6. Innovation — Ancient wisdom, modern instruments.
7. Global Unity — One soul, many tongues.

**Edit `src/routes/index.tsx`**
- Import `Values` and place `<Values />` after `<Pillars />` and before `<Essays />`.

**Edit `src/components/SiteNav.tsx`**
- Add `{ href: "#values", label: "Values" }` between Pillars and Dispatches.

### Notes
- No new dependencies.
- Pure presentational; no data/server work.
- Anchor scroll already enabled via `html { scroll-behavior: smooth }`.