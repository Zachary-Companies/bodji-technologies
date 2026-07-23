# Bodji Technologies Frontend

> **Status (verified 2026-07-23): legacy and largely inactive.** This repository
> still owns the independently deployed `bodjitechnologies.com` marketing site,
> but it is not the canonical source for `bodji.ai` or `hello.bodji.ai`; those
> live in the sibling `bodji-frontend` repository. Treat this site as
> maintenance-only unless it is deliberately revived.

The repository root currently serves a self-contained temporary “Coming Soon”
page. The full React application remains in `src/`, and its original Vite entry
shell is preserved at `src/full-site-index.template.html` for a future revival.

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

## Deployment state

The repository contains a Vite-to-Pages workflow at
`.github/workflows/deploy-pages.yml`, but the GitHub Pages repository setting is
currently configured for the legacy `main:/` source instead of GitHub Actions.
The workflow is deliberately **manual-only** (`workflow_dispatch`) while the site
is inactive, so ordinary source pushes do not attempt a production deployment.

Before this cleanup, a push to `main` triggered both behaviors:

- The Vite workflow had been failing during `npm ci` because the lockfile
  referenced a private CodeArtifact registry without runner authentication.
  All dependencies are public, so the lockfile is now pinned to
  `registry.npmjs.org`; a clean unauthenticated install and build pass.
- The legacy Pages setting publishes the raw repository root on pushes. The root
  is therefore intentionally a self-contained temporary page with no build-time
  dependency.

The custom domain also failed HTTPS certificate validation when checked because
the served certificate did not match `bodjitechnologies.com`. The site should be
treated as an unhealthy legacy deployment until someone deliberately repairs
the Pages source setting and certificate configuration. The Pages setting needs
to be changed from legacy `main:/` to GitHub Actions by a repository administrator.

No deployment repair is performed by this repository cleanup. When the site is
needed again, follow
[`docs/deployment/github-pages-repair.md`](docs/deployment/github-pages-repair.md).

Production domain:

```text
https://bodjitechnologies.com/
```

Required public build files are in `public/`:

- `CNAME`
- `favicon.png`
- `robots.txt`
- `sitemap.xml`

A secondary manual AWS deployment path is documented in
[`docs/deployment/aws.md`](docs/deployment/aws.md).

## Repository map

| Area | Purpose |
| --- | --- |
| `src/`, `public/` | Canonical build inputs for the legacy site. |
| `index.html` | Temporary self-contained Coming Soon page. |
| `src/full-site-index.template.html` | Preserved Vite entry shell for the full React application. |
| `docs/deployment/` | GitHub Pages repair runbook and the secondary AWS deployment reference. |
| `docs/archive/` | Historical PRDs, plans, audits, and messaging notes. |
| `design/archive/google-studio/` | Preserved alternate Google AI Studio implementation; not a build input. |

`CNAME`, `robots.txt`, and `sitemap.xml` remain at both the repository root and
in `public/` while the legacy Pages source and intended Vite artifact deployment
coexist. Remove the root copies only after switching Pages to GitHub Actions.

## External Tools

The production page links to the live Beacon tools:

- AI Visibility Checker: `https://landing.beacon.zacharycompanies.ai/check`
- AI visibility mini-course: `https://landing.beacon.zacharycompanies.ai/course`

Those are intentionally external links. The Bodji Technologies site does not ship a simulated checker or generated course.

## Contact

The current contact CTA creates a mailto draft to `sales@bodjisales.com`. Replace it with a calendar or form backend when the production intake destination is selected.
