## Attach the Workbook PDF to "Get the Sprint"

Make the gold "Get the Sprint" CTA actually deliver the workbook the user just uploaded, while keeping the email-capture flow as a secondary path.

### Files

**Copy `user-uploads://The_90-Day_Sovereign_Sprint_Workbook-1.pdf` → `public/sovereign-sprint-workbook.pdf`**
- Served directly at `/sovereign-sprint-workbook.pdf` (no bundling, no import).
- Renamed to a clean, slug-style filename so the download lands as `sovereign-sprint-workbook.pdf`.

**Edit `src/components/Sprint.tsx`**
- Change the primary CTA (`Get the Sprint`) from an in-page anchor + custom event into a real download link:
  - `href="/sovereign-sprint-workbook.pdf"`
  - `download` attribute (forces a download / "Save as" instead of in-tab preview)
  - `target="_blank"` + `rel="noopener"` as a graceful fallback for browsers that ignore `download` on cross-origin previews.
  - Drop the `onClick` that scrolled to `#subscribe` and dispatched `subscribe:intent` — clicking the button now hands over the PDF immediately.
- Add a new secondary text link directly under the CTA row: smallcaps "Get updates when v2 ships →" that performs the old `#subscribe` scroll + `subscribe:intent` dispatch, so the email capture path is preserved (just demoted).
- Keep the existing "See a sample page →" link unchanged.

### Notes
- No changes to `Subscribe.tsx` — the `subscribe:intent` listener still works for the demoted secondary link.
- Pure static asset; no Cloud / server function / Worker work needed.
- Filename in `public/` is intentionally lowercase-hyphenated so the URL stays clean and the saved file looks intentional.
