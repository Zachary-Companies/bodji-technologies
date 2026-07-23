# Bodji Technologies Frontend

> **Status (verified 2026-07-23): legacy and largely inactive.** This repository
> still owns the independently deployed `bodjitechnologies.com` marketing site,
> but it is not the canonical source for `bodji.ai` or `hello.bodji.ai`; those
> live in the sibling `bodji-frontend` repository. Treat this site as
> maintenance-only unless it is deliberately revived.

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

**A push to `main` automatically rebuilds and redeploys this legacy site.** Do
not treat repository-only cleanup as deployment-neutral.

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

An older, secondary AWS deployment path is documented in
[`docs/deployment/aws.md`](docs/deployment/aws.md). GitHub Pages is the configured
automatic path.

When checked on 2026-07-23, the custom domain resolved to GitHub Pages and
returned content, but HTTPS certificate validation failed because the served
certificate did not match `bodjitechnologies.com`. Recheck the Pages custom-domain
configuration before treating the public endpoint as healthy.

## Repository map

| Area | Purpose |
| --- | --- |
| `src/`, `public/` | Canonical build inputs for the legacy site. |
| `docs/deployment/` | Deployment documentation. |
| `docs/archive/` | Historical PRDs, plans, audits, and messaging notes. |
| `design/archive/google-studio/` | Preserved alternate Google AI Studio implementation; not a build input. |

Duplicate root copies of `CNAME`, `robots.txt`, and `sitemap.xml` were removed;
the deployed canonical copies remain in `public/`.

## External Tools

The production page links to the live Beacon tools:

- AI Visibility Checker: `https://landing.beacon.zacharycompanies.ai/check`
- AI visibility mini-course: `https://landing.beacon.zacharycompanies.ai/course`

Those are intentionally external links. The Bodji Technologies site does not ship a simulated checker or generated course.

## Contact

The current contact CTA creates a mailto draft to `sales@bodjisales.com`. Replace it with a calendar or form backend when the production intake destination is selected.
