# Bodji Technologies Frontend Notes

Reviewed 2026-06-03.

## Summary

The current Bodji Technologies site is a polished static consulting landing page. It is credible and visually mature, but it does not yet express the newer umbrella clearly: Bodji Technologies now contains the MCP product work, Bodji Scout, and a consulting/implementation arm.

The page currently reads as a boutique AI workflow consulting site for high-stakes service operations. It does not meaningfully introduce Bodji Beacon, Bodji Scout, MCP infrastructure, agentic commerce, or the product family.

## Current Technical Shape

- Repo: `/Users/calebwilliams/bodji/bodji-technologies`
- Main page: `index.html`
- Deployment: GitHub Pages
- Domain: `bodjitechnologies.com`, configured by `CNAME`
- Contact: mailto-only to `sales@bodjisales.com`
- Assets:
  - `assets/hero-lab-workflow.jpg` is used by the hero.
  - `assets/hero-lab-workflow.png` appears unused.
  - `favicon.svg` is used.
- SEO basics:
  - `robots.txt`
  - `sitemap.xml`
  - canonical URL in the document head

There is no backend, build system, analytics, API call, CMS, package.json, Calendly, HubSpot, Formspree, Stripe, auth, or product integration.

## Page Structure

The page currently contains:

- Sticky header with brand, nav links, and "Book a discovery call."
- Hero: "AI-ready workflows for high-stakes service operations."
- Position section: messy expert-driven workflows into structured, evidence-aware systems.
- Workflow model: Request -> Guided Intake -> Evidence Pack -> Technical Review -> Decision -> Roadmap.
- Problem section: generic forms/chatbots/PDFs are insufficient.
- What Bodji does: workflow catalogs, guided intake, evidence packs, governed AI assistance.
- Why Bodji: senior engineers, enterprise platforms, telemetry, automation, architecture.
- Boundaries: not replacing LIMS/QMS/ERP/case-management systems.
- Who we help: scientific, quality, engineering, risk, security, enterprise service teams.
- Example pilot: diagnostic partnership intake.
- Pilot process: Select, Map, Structure, Prototype, Decide.
- Pilot options: Opportunity Sprint, Workflow Blueprint, Workflow Pilot.
- Contact section with mailto form.

## Aesthetic Notes

The design is strong, serious, and enterprise-oriented. It feels restrained, technical, and credible.

Strengths:

- The hero image gives immediate lab/workflow/operations context.
- The dark ink and teal palette feels mature.
- Typography is bold, readable, and confident.
- Cards and workflow nodes are consistent.
- The sticky nav makes the long page easier to move through.
- The visual tone can support a premium consulting engagement.

Weaknesses:

- It feels more like a generic AI workflow consultancy than a distinctive Bodji Technologies umbrella.
- There is no visual representation of the product family.
- There are no product screenshots, product diagrams, demos, dashboards, or proof assets.
- The hero image supports "high-stakes service operations," but not the broader Bodji Technologies story.
- The visual system does not distinguish Beacon, Scout, and consulting.

## Information Notes

The page is clear about consulting mechanics:

- Start with one workflow.
- Prove value.
- Keep humans in control.
- Build around existing systems of record.
- Treat production deployment, validation, regulated data handling, and integrations as separate scopes.

Strong existing messages:

- "Start with one workflow. Prove the value. Then scale."
- "Humans stay in control."
- "Evidence-aware review."
- "Bodji is not a replacement for your LIMS, QMS, ERP..."
- "Pilot engagements are non-production unless otherwise specified..."

Weaknesses:

- It does not say what Bodji has already built.
- It does not explain the product architecture.
- It does not mention Bodji Beacon.
- It does not mention Bodji Scout.
- It does not mention MCPs or AI-readable business infrastructure.
- It does not explain the relationship between software/product and consulting.
- The company story is missing.
- "AI-ready workflows" is useful but abstract without product proof.

## Utility Notes

Current visitor actions:

- Read the positioning.
- Jump to sections through the sticky nav.
- View pilot packages.
- Open a prefilled email draft.

Missing utility:

- No real lead capture.
- No calendar booking.
- No analytics.
- No product demos.
- No links into Beacon or Scout.
- No case studies or sample outputs.
- No sample report.
- No downloadable one-pager.
- No route for "I need the MCP product" versus "I need Scout" versus "I need consulting."

## Conversion Notes

The primary CTA is consistent but operationally weak because it is mailto-only. If the visitor's mail client is not configured, the form may feel broken or clunky.

The pilot pricing section shows `$18,000` for the Opportunity Sprint. Upper-tier pricing is hidden, which creates a premium feel, but the other cards may feel incomplete because they do not have "custom," "starting at," or card-level CTA language.

The page currently converts toward consulting discovery, not toward product interest, demo requests, or platform evaluation.

## Mobile Notes

Responsive behavior is mostly clean:

- Cards stack well.
- The hero CTA remains in the hero.
- Text remains readable.

Issues:

- Mobile header only shows "BT Bodji Technologies."
- Mobile nav disappears completely.
- The top "Book a discovery call" CTA disappears in the header.
- There is no hamburger/menu or sticky mobile CTA.
- Long headings become dense blocks.
- On desktop, the sticky header can visually cover the top of section headings at some scroll positions.

## Strategic Fit

For the older Bodji Technologies positioning as an AI workflow consulting page, this site is coherent.

For the current positioning, it is incomplete. The page should become the umbrella site for:

- Bodji Beacon: MCP/product infrastructure for AI-readable businesses and agent workflows.
- Bodji Scout: lead and opportunity discovery intelligence.
- Consulting/implementation: services around adopting AI-ready workflows, likely powered by the product work and internal IP.

## Recommendation

Keep the static simplicity unless there is a clear reason to add a framework. A single HTML page is enough for now.

Reuse selected language from the current page around workflow, evidence, approval, and humans staying in control. Rework the top-level story so visitors understand Bodji Technologies as a product-and-services company, not only a consulting shop.

Likely rewrite direction:

- Lead with "Bodji Technologies builds AI-readable business infrastructure and the consulting systems around it."
- Introduce the three tracks clearly:
  - Beacon for MCP/agent-ready business infrastructure.
  - Scout for business discovery and opportunity intelligence.
  - Consulting for workflow implementation and AI-readiness projects.
- Add a simple product-family diagram or three-column product system.
- Replace generic consulting proof with concrete product proof where possible.
- Upgrade contact from mailto-only when the intake destination is decided.
