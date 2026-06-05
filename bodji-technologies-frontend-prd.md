# Bodji Technologies Frontend PRD

Created: 2026-06-03

Target production domain: `https://bodjitechnologies.com`

## 1. Product Summary

Build a new Bodji Technologies frontend that replaces the current static consulting page at `bodjitechnologies.com`.

The new site should present Bodji Technologies as the umbrella company for:

- **Bodji Beacon:** AI visibility and AI-readable/action-ready business infrastructure.
- **Bodji Scout:** opportunity discovery and market intelligence.
- **Bodji Consulting:** workflow mapping, AI-readiness, blueprinting, pilots, and implementation.

The new frontend should use the Google Studio design direction as the visual base, reconcile its content with the Bodji Technologies master plan, and preserve working paths into the real Beacon course and AI Visibility Checker.

## 2. Source Inputs

Planning inputs:

- `/Users/calebwilliams/bodji/bodji-technologies/bodji-technologies-frontend-master-plan.md`
- `/Users/calebwilliams/bodji/bodji-technologies/bodji-consulting-page-plan.md`
- `/Users/calebwilliams/bodji/bodji-technologies/bodji-technologies-messaging-notes.md`
- `/Users/calebwilliams/bodji/bodji-technologies/bodji-technologies-frontend-notes.md`
- `/Users/calebwilliams/bodji/bodji-technologies/bodji-technologies-visual-assets-audit.md`
- `/Users/calebwilliams/bodji/beacon frontend notes.md`

Design source:

- `/Users/calebwilliams/bodji/bodji-technologies/google-studio-design/bodji-technologies`

Canonical Beacon frontend/tool sources:

- `/Users/calebwilliams/bodji/cw-beacon-frontend`
- `https://landing.beacon.zacharycompanies.ai`
- `https://landing.beacon.zacharycompanies.ai/check`
- `https://landing.beacon.zacharycompanies.ai/course`

## 3. Problem

The current Bodji Technologies site is polished but outdated for the current company direction.

It currently reads as a boutique AI workflow consulting page for high-stakes service operations. It does not clearly explain:

- Bodji Technologies as an umbrella company.
- Beacon as the AI visibility/MCP product.
- Scout as the opportunity intelligence product.
- Consulting as the implementation/workflow arm.
- The connection between AI discovery, AI-readable business infrastructure, and operational workflows.

The Google Studio design moves the visual language in the right direction, especially in the hero, navigation, and three-product carousel. However, it contains generated/inaccurate product behavior that must not ship as-is:

- The in-page AI Visibility Checker is simulated and should be removed or converted to a link.
- The embedded primer/course is not canonical and should be replaced with a button to the real course.
- The placeholder favicon/header icon must be replaced with the real Bodji brand mark.
- Some generated copy overpromises or drifts from the consulting plan.
- Mobile hero typography currently clips at narrow widths.

## 4. Goals

### Primary Goals

1. Make Bodji Technologies immediately understandable as the umbrella for Beacon, Scout, and Consulting.
2. Preserve the strongest Google Studio visual direction: hero, nav, palette, typography, and product carousel.
3. Link reliably to the real Beacon AI Visibility Checker.
4. Link reliably to the real Beacon course as a visible button CTA.
5. Add enough consulting content to support the revised consulting offer.
6. Deploy successfully to `bodjitechnologies.com`.
7. Avoid fake proof, fake product claims, and simulated tools that could confuse users.

### Secondary Goals

1. Establish the real Bodji logo/favicon as the shared brand source.
2. Improve SEO/social metadata versus the current page.
3. Keep the site maintainable as a Vite/React/TypeScript frontend.
4. Make the page robust on desktop, tablet, and mobile.

## 5. Non-Goals

This project does not include:

- Rebuilding the Beacon AI Visibility Checker inside Bodji Technologies.
- Rebuilding or rewriting the Beacon course.
- Adding a backend.
- Adding auth, CRM, analytics, newsletter infrastructure, or payment flows.
- Claiming customer proof, case studies, or enterprise metrics that do not exist.
- Launching Scout as a public app from this page.
- Migrating Beacon itself.

## 6. Core Narrative

Bodji Technologies helps businesses become easier for AI to find, understand, trust, and work with.

Use this mental model:

- **Beacon explains the front-door problem:** customers and software are starting with AI, so businesses need to be findable, understandable, and actionable inside AI systems.
- **Scout supports the opportunity/discovery side:** finding and organizing the businesses, markets, and opportunities worth pursuing.
- **Consulting explains the back-office problem:** once interest shows up, messy workflows still need to be mapped, structured, measured, and improved.

The page is not "Beacon plus consulting smashed together." It is:

> Bodji Technologies is the umbrella. Beacon is the visibility product. Scout is the opportunity product. Consulting is how Bodji helps companies apply the thinking to real workflows.

## 7. Target Audience

Primary visitors:

- Business owners/operators hearing that customers are starting to use AI search and assistants.
- Small and mid-market companies that may benefit from Beacon or consulting.
- Prospects who need a plain-English explanation before they care about MCP.
- Internal/outbound sales targets who land on the company site after seeing a Beacon one-pager, email, or demo.

Secondary visitors:

- Technical evaluators curious about AI-readable/MCP infrastructure.
- Potential partners.
- Future Scout prospects.

## 8. Success Criteria

The new frontend is successful if:

- A first-time visitor can understand Bodji Technologies in under 10 seconds.
- Beacon, Scout, and Consulting are all visible without feeling disconnected.
- The real AI Visibility Checker is reachable from hero, nav, relevant section, and final CTA.
- The real course is reachable from hero/nav/final CTA as a visible button.
- The page contains a clear consulting pathway: opportunity review, blueprint, pilot, implementation.
- The production deploy preserves `bodjitechnologies.com` and the custom domain configuration.
- Mobile layout has no clipped hero text, horizontal overflow, or unusable CTA buttons.
- Build, typecheck, link checks, visual smoke tests, and production smoke tests pass.

## 9. Recommended Frontend Stack

Use a Beacon-style TypeScript frontend in the existing `bodji-technologies` repo root.

Recommended stack:

- React 19
- TypeScript
- Vite
- Tailwind CSS v4
- Lucide React icons
- Motion for carousel/hero animation if kept

Use the Google Studio app as the visual/design base, but clean it before production.

Important cleanup:

- Remove unused Google AI/Gemini dependencies unless there is an explicit feature requiring them.
- Remove Express/dotenv/server dependencies unless there is an explicit backend, which is not currently planned.
- Remove generated AI Studio comments and metadata that do not belong in production.
- Do not ship the generated simulated checker as a real diagnostic.
- Do not ship the generated embedded primer as the canonical course.

Expected repo shape:

```text
bodji-technologies/
  package.json
  package-lock.json
  vite.config.ts
  tsconfig.json
  index.html
  src/
    main.tsx
    App.tsx
    components/
    data/
    assets/
    index.css
  public/
    CNAME
    favicon.png
    robots.txt
    sitemap.xml
```

## 10. Routing And Link Requirements

Initial routes:

- `/`: Bodji Technologies homepage.

Do not add local `/check` or `/course` routes in the first production version unless explicitly chosen later.

Use canonical external links:

- AI Visibility Checker: `https://landing.beacon.zacharycompanies.ai/check`
- AI visibility mini-course: `https://landing.beacon.zacharycompanies.ai/course`

Implementation requirement:

- Store these URLs in one shared config file, such as `src/config/links.ts`.
- Use real anchor links for external CTAs, not fragile simulated tab state.
- Link text must remain clear and consistent:
  - `Check your AI visibility`
  - `AI visibility mini-course`
  - `Talk to Bodji`

The course must be a visible button in the hero or nav, matching the Beacon frontend behavior. It must not be buried as a footer-only text link.

## 11. Information Architecture

### Section 1: Header / Nav

Use the Google Studio header layout as the base.

Required items:

- Bodji logo/wordmark using the real Bodji mark.
- `Products`
- `AI Visibility Checker`
- `AI visibility mini-course`
- `Common questions` or `FAQ`
- Header CTA: `Check your AI visibility`

Changes from Google Studio:

- Replace placeholder `Network` icon with real Bodji logo.
- Replace "7-Min Primer" with `AI visibility mini-course` unless the shorter label is intentionally kept for space.
- Checker nav should link to the real checker or to a CTA section that links to the real checker. It must not trigger a simulated checker.
- Course nav should link to the real Beacon course.

### Section 2: Hero

Use the Google Studio hero as the visual base.

Keep:

- Large editorial headline.
- Warm paper background.
- Subtle network/agentic visual language.
- Strong serif headline.
- CTA button styling.

Recommended headline:

> Your business is about to get a new kind of customer.

Recommended support copy:

> AI systems like ChatGPT, Claude, Gemini, and Siri are starting to search, compare, and act on behalf of customers. Bodji Technologies helps businesses become findable, understandable, and action-ready for that shift.

Required hero CTAs:

- Primary: `Check your AI visibility` -> `https://landing.beacon.zacharycompanies.ai/check`
- Secondary: `AI visibility mini-course` -> `https://landing.beacon.zacharycompanies.ai/course`
- Optional tertiary: `Talk to Bodji` -> contact CTA section or mailto/calendar destination.

Hero content notes:

- Avoid "automated agents" if it feels too abstract for a first-time visitor.
- Avoid leading with MCP in the headline.
- Keep the "new kind of customer" idea. It is strong.

### Section 3: The Shift

Purpose:

Explain the Beacon/course thesis in plain language.

Content:

- Businesses once needed websites so humans could find them online.
- Now businesses need AI-readable information so AI systems can find, understand, and recommend them.
- A normal website can look great to people while still being confusing to AI systems.

This section may be short, but it should bridge the hero into the product system.

### Section 4: AI Visibility CTA

Do not ship the generated simulated checker as a real product.

Replace the Google Studio checker section with a lighter CTA section.

Recommended section headline:

> See what AI systems understand about your business today.

Recommended body:

> Beacon's AI Visibility Checker gives you a quick read on whether AI systems can find, summarize, and act on your business information.

Required button:

- `Check your AI visibility` -> `https://landing.beacon.zacharycompanies.ai/check`

Optional secondary button:

- `AI visibility mini-course` -> `https://landing.beacon.zacharycompanies.ai/course`

### Section 5: Product Carousel

Keep the Google Studio horizontal product carousel. This is the strongest visual bridge into the umbrella story.

Required slides:

1. Beacon
2. Scout
3. Consulting

Carousel requirements:

- Manual next/previous controls.
- Dot controls.
- Auto-advance may remain, but must pause on user interaction or hover/focus if practical.
- Buttons must be accessible.
- Motion must not cause layout jumps.
- Honor reduced-motion preferences if possible.

Content changes:

Beacon should say:

> Make your business AI-readable and action-ready.

But avoid overpromising live transactions unless Beacon currently supports that exact workflow.

Scout should say:

> Find and organize the businesses, markets, and opportunities worth pursuing.

Use language grounded in the actual Scout product: discovery, enrichment, classification, search/list/map/export, opportunity intelligence.

Consulting should say:

> Find where work gets stuck. Fix one workflow. Measure the result.

Replace generated "AI wrappers automate safely" language with the revised consulting plan:

- Follow the work.
- Map the workflow.
- Measure time/frequency/cost/rework.
- Score opportunities.
- Blueprint or pilot the first workflow.

### Section 6: Consulting Method

Add a section after the carousel.

Headline:

> Start with the workflow, not the model.

Key points:

- Follow the work, not the org chart.
- Time is the first unit of ROI.
- Do not automate the mess. Map it first.
- The first win earns trust for the next workflow.

### Section 7: Consulting Offer Ladder

Add four cards:

1. **Workflow Opportunity Review**
   - Find where AI might actually help.
   - Output: workflow inventory, rough time/cost map, bottleneck list, initial opportunity matrix.

2. **Workflow Blueprint**
   - Turn one workflow into a build-ready plan.
   - Output: current-state map, future-state workflow, data/system map, metrics, implementation roadmap.

3. **Workflow Pilot**
   - Build a narrow, non-production proof.
   - Output: prototype or pilot workspace, demo script, feedback, measurement plan.

4. **Implementation Partner**
   - Build, deploy, measure, and improve production workflows when the pilot proves value.
   - Output: scoped build cycles, adoption support, measurement/reporting cadence.

### Section 8: Right Fit / Not Right Fit

Add a practical fit section.

Right fit:

- You have a workflow people complain about.
- Work is stuck in email, spreadsheets, PDFs, portals, or manual handoffs.
- You can name the workflow owner.
- You want a practical plan before a big build.
- You care about time saved, throughput, errors, and adoption.

Not right fit:

- You want a vague AI brainstorm.
- You want to automate everything at once.
- You want a chatbot without fixing the underlying process.
- Nobody owns the workflow.
- You cannot measure whether the work improved.

### Section 9: Honest Proof

Purpose:

Show that Bodji is early but real.

Include:

- Working Beacon frontend.
- Real AI Visibility Checker.
- Real Beacon course.
- Scout product work.
- Clear consulting framework.

Avoid:

- Fake customer logos.
- Fake case studies.
- Fake ROI metrics.
- Overstated "battle-tested" language.

### Section 10: FAQ

Keep the Google Studio FAQ accordion design, but revise the content.

Required FAQ topics:

- What is AI visibility?
- How is this different from SEO?
- What is MCP, in plain English?
- Do I need to change my current website?
- What does consulting produce?
- Do you start by building AI agents?
- How do you measure success?
- Can the first pilot stay non-production?

### Section 11: Footer / Final CTA

Footer should not pretend there is a working newsletter unless there is real subscription infrastructure.

If no newsletter backend exists:

- Remove the simulated newsletter form.
- Replace it with a direct final CTA block.

Final CTA paths:

- `Check your AI visibility`
- `AI visibility mini-course`
- `Talk to Bodji`

Footer brand should say Bodji Technologies, not Bodji Beacon only.

## 12. Visual Requirements

Use the Google Studio design direction as the base:

- Warm sand/paper background.
- Editorial serif headline.
- Clean sans body type.
- Rust/sage/dark accent system.
- Soft border cards.
- High-quality motion where useful.
- Product carousel as centerpiece.

Must fix:

- Mobile hero headline clipping at 375px.
- Any horizontal overflow on mobile.
- Buttons that overflow their containers.
- Text that becomes too faint after animation.
- Placeholder network icon/favicons.

Logo/favicons:

- Retire the inline `BT` badge and the Google Studio `Network` placeholder icon.
- Use the real Bodji logo assets from Beacon.
- Use Beacon's `public/favicon.png` or create a Technologies-specific favicon from the same Bodji mark.

Source assets:

- `/Users/calebwilliams/bodji/cw-beacon-frontend/public/favicon.png`
- `/Users/calebwilliams/bodji/cw-beacon-frontend/src/assets/bodji-logo.png`
- `/Users/calebwilliams/bodji/cw-beacon-frontend/src/assets/bodji-logo-amber-faceted.png`
- `/Users/calebwilliams/bodji/cw-beacon-frontend/src/assets/bodji-logo-amber.png`
- `/Users/calebwilliams/bodji/cw-beacon-frontend/src/assets/bodji-logo-dark.png`
- `/Users/calebwilliams/bodji/cw-beacon-frontend/src/assets/bodji-logo-white.png`

## 13. SEO And Metadata Requirements

`index.html` should include:

- Title.
- Meta description.
- Canonical URL: `https://bodjitechnologies.com/`
- Theme color.
- Favicon.
- Open Graph title.
- Open Graph description.
- Open Graph URL.
- Open Graph image if an asset exists.
- Twitter card metadata.

Recommended title:

> Bodji Technologies | AI visibility, opportunity intelligence, and workflow consulting

Recommended description:

> Bodji Technologies builds products and consulting systems that help businesses become discoverable, trustworthy, and actionable in AI-driven markets.

Update `sitemap.xml` if the final route shape changes.

Keep `robots.txt` pointing to the sitemap.

## 14. Deployment Requirements

Current production:

- `bodjitechnologies.com` is hosted through GitHub Pages.
- `CNAME` controls the custom domain.

New deployment:

- Build Vite app into `dist/`.
- Configure GitHub Pages to serve the built artifact.
- Prefer GitHub Actions Pages deployment from `main`.
- Ensure `public/CNAME` is copied into `dist/CNAME`.
- Ensure `public/robots.txt`, `public/sitemap.xml`, and favicon are copied into `dist/`.

Pre-deploy requirements:

- `npm run lint`
- `npm run build`
- Local preview smoke test.
- Link validation for checker/course.
- Mobile/desktop screenshots.

Post-deploy requirements:

- Verify `https://bodjitechnologies.com/` loads.
- Verify favicon loads.
- Verify checker CTA reaches `https://landing.beacon.zacharycompanies.ai/check`.
- Verify course CTA reaches `https://landing.beacon.zacharycompanies.ai/course`.
- Verify custom domain still works without GitHub Pages 404.

## 15. Harsh Testing Plan

This section is intentionally strict. The site should not ship if these fail.

### 15.1 Build And Type Safety

Required commands:

```bash
npm install
npm run lint
npm run build
```

Acceptance:

- No TypeScript errors.
- Production build completes.
- No missing imports.
- No unused simulated backend/API dependency required for runtime.

### 15.2 Local Preview Smoke Test

Run:

```bash
npm run dev
```

or:

```bash
npm run preview
```

Acceptance:

- Page loads with no blank screen.
- Browser console has no red runtime errors.
- Header/nav visible.
- Hero visible.
- Product carousel visible.
- Final CTA visible.

### 15.3 Critical Link Tests

These are launch blockers.

Every instance of `Check your AI visibility` must resolve to:

```text
https://landing.beacon.zacharycompanies.ai/check
```

Every instance of `AI visibility mini-course` or course/primer CTA must resolve to:

```text
https://landing.beacon.zacharycompanies.ai/course
```

Test methods:

- Inspect DOM hrefs.
- Click each CTA in browser.
- Use `curl -I -L` for both canonical URLs.

Acceptance:

- Links return HTTP 200.
- No button points to the removed simulated checker.
- No button points to the generated embedded primer.
- No route accidentally sends users to `/#checker` unless that section itself contains the external checker link.
- Course and checker remain usable after deploy.

### 15.4 CTA Inventory Test

Inventory all major CTAs:

- Header checker CTA.
- Hero checker CTA.
- Hero course CTA.
- AI visibility CTA section button.
- Carousel Beacon CTA if present.
- Final CTA checker button.
- Final CTA course button.
- Contact/Talk to Bodji CTA.

Acceptance:

- Each CTA has a clear destination.
- Checker/course buttons are real anchors or equivalent accessible links.
- No CTA triggers a dead simulated state.
- Contact CTA goes to an intentional mailto/calendar/contact destination.

### 15.5 Responsive Visual Tests

Required viewport widths:

- 320 x 800
- 375 x 900
- 390 x 844
- 768 x 1024
- 1024 x 900
- 1440 x 1200

Acceptance:

- No horizontal scrolling.
- Hero text does not clip.
- Header does not overlap hero content.
- CTA text fits inside buttons.
- Product carousel content fits.
- FAQ accordion is usable.
- Footer content does not overflow.
- Long words like `bodjitechnologies.com`, `Model Context Protocol`, and `AI visibility mini-course` do not break the layout.

### 15.6 Carousel Tests

Acceptance:

- Previous button works.
- Next button works.
- Dot controls work.
- Auto-advance does not fight manual selection.
- Active slide does not jump partially offscreen.
- Carousel remains readable on mobile.
- Reduced-motion users are not forced through aggressive animation.
- Beacon, Scout, and Consulting all appear and are readable.

### 15.7 Accessibility Tests

Acceptance:

- Page has exactly one clear `h1`.
- Heading order is logical.
- Buttons/links have accessible names.
- Carousel controls have `aria-label`s.
- Focus states are visible.
- Keyboard navigation can reach all CTAs.
- Color contrast passes for body text and buttons.
- Motion is respectful of `prefers-reduced-motion`.

### 15.8 SEO Tests

Acceptance:

- Page title exists.
- Meta description exists.
- Canonical URL is correct.
- Favicon loads.
- Open Graph tags exist.
- `robots.txt` loads.
- `sitemap.xml` loads.
- No `noindex`.
- No stale title from Google Studio, Beacon-only copy, or old consulting page.

### 15.9 Content Accuracy Tests

Acceptance:

- Page does not claim fake customer proof.
- Page does not say the in-page checker runs real analysis unless it actually does.
- Page does not imply Scout is only a concept.
- Page does not bury consulting.
- Page does not bury Beacon.
- Page explains MCP in plain language if mentioned.
- Page does not overload the hero with technical jargon.

### 15.10 Production Smoke Tests

After deploy, test:

```text
https://bodjitechnologies.com/
https://bodjitechnologies.com/favicon.png
https://bodjitechnologies.com/robots.txt
https://bodjitechnologies.com/sitemap.xml
https://landing.beacon.zacharycompanies.ai/check
https://landing.beacon.zacharycompanies.ai/course
```

Acceptance:

- All expected URLs return 200.
- Custom domain works.
- No GitHub Pages 404.
- Checker/course CTAs work from the production site.
- Mobile production render matches local expectations.

## 16. Implementation Phases

### Phase 1: Prepare The App Shell

- Convert `bodji-technologies` repo root into Vite/React/TypeScript app.
- Preserve/copy `CNAME`, `robots.txt`, `sitemap.xml`, favicon into `public/`.
- Bring over the Google Studio visual base.
- Remove AI Studio-only dependencies and generated runtime assumptions.

### Phase 2: Brand And Layout Reconciliation

- Replace placeholder logo/icon with real Bodji mark.
- Fix favicon.
- Keep hero/nav/carousel visual direction.
- Fix mobile hero clipping.
- Add responsive nav behavior if needed.

### Phase 3: Content Reconciliation

- Replace simulated checker with external checker CTA section.
- Replace embedded primer/course with external course button.
- Rewrite product carousel copy to match Beacon, Scout, Consulting accurately.
- Add consulting method, offer ladder, right-fit/not-right-fit, honest proof, final CTA.
- Revise FAQ.

### Phase 4: Deployment Setup

- Add GitHub Actions workflow for Vite build/deploy to GitHub Pages.
- Confirm custom domain handling.
- Confirm public assets copy to `dist/`.

### Phase 5: Harsh QA

- Run build/typecheck.
- Run browser visual tests.
- Run link tests.
- Run responsive tests.
- Run production smoke tests.
- Fix blockers before launch.

## 17. Launch Blockers

Do not deploy if:

- The real AI Visibility Checker link fails.
- The real course link fails.
- Mobile hero text clips.
- The page has horizontal overflow.
- The favicon/logo still use placeholder Google Studio/Network/BT assets.
- The page ships a simulated checker that appears real.
- The page ships generated primer content instead of linking to the real course.
- `CNAME` is missing from the build output.
- The production build fails.
- `bodjitechnologies.com` does not load from the custom domain.

## 18. Open Decisions

- Final contact destination: mailto, calendar link, or contact form.
- Whether the course/checker links open in the same tab or new tab.
- Whether to keep "7-Min Primer" as display copy or standardize on "AI visibility mini-course."
- Whether the hero should include a third `Talk to Bodji` button or keep that lower on the page.
- Whether to mention Signal anywhere or leave it out until it is more concrete.
- Whether to preserve the current lab hero image anywhere as a consulting-specific visual.

