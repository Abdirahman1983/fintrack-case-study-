
# FinTrack — Mobile Budgeting App Redesign

A UX case-study website: a research-led onboarding rebuild for a finance app used by 40,000+ people. Built as a static site — no build step, no dependencies — so it's ready to push straight to GitHub Pages.

**Live preview:** open `index.html` in any browser, or deploy with GitHub Pages (steps below).

## What's inside

```
fintrack-case-study/
├── index.html      # all page content and structure
├── style.css        # design system (colors, type, layout)
├── script.js         # hero counter animation + before/after toggle
├── assets/            # original SVG illustrations (no external images, no licensing risk)
│   ├── logo-mark.svg        # header mark
│   ├── hero-graph.svg       # rising completion-rate chart
│   ├── funnel-diagram.svg   # six-step signup drop-off diagram
│   ├── icon-interview.svg
│   ├── icon-usability.svg
│   ├── icon-funnel.svg
│   └── icon-competitive.svg
└── README.md
```

## Run it locally

No build tools needed. Either:

- Double-click `index.html`, or
- Serve it locally so relative fonts/assets behave the same as production:

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

## Deploy to GitHub Pages (free hosting)

1. Create a new repository on GitHub (e.g. `fintrack-case-study`).
2. From this folder, run:

```bash
git init
git add .
git commit -m "Add FinTrack case study site"
git branch -M main
git remote add origin https://github.com/<your-username>/<repo-name>.git
git push -u origin main
```

3. On GitHub: go to **Settings → Pages**, set **Source** to `main` branch, `/root`, and save.
4. Your site will be live at `https://<your-username>.github.io/<repo-name>/` within a minute or two.

## Customizing for a real client pitch

- **Metrics & copy** — every number (completion rate, retention, etc.) lives directly in `index.html`; search for the ledger strip (`<section class="ledger-strip">`) and the results grid (`<section id="results">`) to update them.
- **Contact info** — update the `mailto:` link and "View more work" link in the `#contact` section with your real email and portfolio URL.
- **Colors & type** — all design tokens are declared as CSS variables at the top of `style.css` under `:root`. Change `--green`, `--rust`, `--gold`, `--ink`, or the font stacks there to re-skin the whole page.
- **Add real screenshots** — the "before/after" onboarding comparison currently uses CSS-drawn phone mockups (no images needed). To swap in real app screenshots, replace the contents of `.phone-screen` divs with `<img>` tags.
- **Add more case studies** — duplicate this folder per project (e.g. `case-study-2/`) and link them from the "View more work" button, or turn this into a multi-page portfolio site.

## Notes

- Fonts (Fraunces, IBM Plex Sans, IBM Plex Mono) load from Google Fonts via CDN — no local font files needed.
- The layout is fully responsive down to mobile and respects `prefers-reduced-motion`.
- All metrics in this case study are illustrative placeholders for a portfolio project — replace with real data before presenting to clients.
