# Repairing the bodjitechnologies.com deployment

This runbook documents how to intentionally reactivate the legacy site. It is
not an instruction to deploy during routine repository maintenance.

## Current state — verified 2026-07-23

- The repository is preserved and builds successfully with Vite.
- All dependencies are public and `package-lock.json` resolves through
  `registry.npmjs.org`; AWS or CodeArtifact authentication is not required.
- `.github/workflows/deploy-pages.yml` is manual-only.
- GitHub Pages is still configured externally as legacy source `main:/`.
- The legacy publisher currently serves the self-contained temporary Coming Soon
  page from the repository-root `index.html`.
- `bodjitechnologies.com` points to GitHub Pages, but HTTPS certificate
  validation failed because the served certificate did not match the domain.
- A separate manual AWS path exists in [`aws.md`](aws.md). Do not operate both
  hosting paths as competing production owners.

## 1. Confirm the repository build

If the full React application is being revived, first replace the temporary
page with the preserved Vite entry shell:

```sh
cp src/full-site-index.template.html index.html
```

Commit that deliberate product change before deploying the full application.

From the repository root:

```sh
npm ci --registry=https://registry.npmjs.org/
npm run lint
npm run build
```

The generated `dist/index.html` should reference hashed `/assets/` files. It
must not reference `/src/main.tsx`.

## 2. Switch GitHub Pages to Actions

A repository administrator must open:

`Settings` → `Pages` → `Build and deployment` → `Source` → `GitHub Actions`

The current API/CLI token can read the Pages configuration but cannot change it;
an attempted administrative API update returned `404`. Do not interpret that as
the Pages site being absent.

After switching, confirm that Pages no longer reports `main:/` as its source.
With an appropriately privileged token, the equivalent API operation is:

```sh
gh api --method PUT repos/Zachary-Companies/bodji-technologies/pages \
  -f build_type=workflow
```

## 3. Run the deployment deliberately

In GitHub, open `Actions` → `Deploy Bodji Technologies` → `Run workflow` on
`main`. The workflow should:

1. install from the public npm registry;
2. typecheck and build the Vite application;
3. upload `dist/` as the Pages artifact;
4. deploy that artifact.

Keep the workflow manual-only while the site is maintenance-only. If continuous
deployment is intentionally restored later, add the `push` trigger back in a
separate reviewed change.

## 4. Repair the custom domain and TLS

In `Settings` → `Pages`:

1. confirm the custom domain is `bodjitechnologies.com`;
2. complete GitHub's domain verification if requested;
3. wait for GitHub to issue a matching certificate;
4. enable `Enforce HTTPS` only after the certificate is ready.

Expected GitHub Pages DNS records at the time of this audit were:

```text
bodjitechnologies.com  A      185.199.108.153
bodjitechnologies.com  A      185.199.109.153
bodjitechnologies.com  A      185.199.110.153
bodjitechnologies.com  A      185.199.111.153
www                    CNAME  zachary-companies.github.io.
```

Verify these against GitHub's current Pages documentation before editing DNS.

## 5. Verify the repaired site

```sh
curl -sSI https://bodjitechnologies.com/
curl -sS https://bodjitechnologies.com/ | grep '/assets/'
```

Required checks:

- HTTPS validates without `-k`.
- The response is `200`.
- HTML references hashed `/assets/` files, not `/src/main.tsx`.
- The favicon, checker, course, MCP primer, navigation, and contact links work.
- The deployed commit matches the intended `main` commit.

## If the site should remain retired

Do not run the workflow. A repository administrator can instead disable GitHub
Pages and remove the stale custom-domain DNS records after confirming that no
other service depends on them. Preserve this repository and runbook as the
recovery path.
