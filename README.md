# Bodji Technologies Frontend

Vite + React + TypeScript frontend for `bodjitechnologies.com`.

The site presents Bodji Technologies as the umbrella for:

- Bodji Beacon: AI visibility and AI-readable/action-ready business infrastructure.
- Bodji Scout: opportunity discovery and market intelligence.
- Bodji Consulting: workflow mapping, blueprinting, pilots, and implementation.

## Preview

Install dependencies and start the local Vite server:

```bash
npm install
npm run dev
```

Then visit `http://localhost:3000`.

Production build:

```bash
npm run lint
npm run build
```

## Deploy

The site deploys through GitHub Pages using `.github/workflows/deploy-pages.yml`.

The workflow builds `dist/` and deploys that artifact. GitHub Pages should use the GitHub Actions Pages source, not the raw repo root.

Production domain:

```text
https://bodjitechnologies.com/
```

Required public build files are in `public/`:

- `CNAME`
- `favicon.png`
- `robots.txt`
- `sitemap.xml`

## External Tools

The production page links to the live Beacon tools:

- AI Visibility Checker: `https://landing.beacon.zacharycompanies.ai/check`
- AI visibility mini-course: `https://landing.beacon.zacharycompanies.ai/course`

Those are intentionally external links. The Bodji Technologies site does not ship a simulated checker or generated course.

## Contact

The current contact CTA creates a mailto draft to `sales@bodjisales.com`. Replace it with a calendar or form backend when the production intake destination is selected.
