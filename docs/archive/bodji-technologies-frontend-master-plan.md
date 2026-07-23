# Bodji Technologies Frontend Master Plan

Created 2026-06-03.

## Purpose

This is the working plan for replacing the current `bodjitechnologies.com` static consulting page with a fuller Bodji Technologies frontend.

The new page should combine:

- Beacon's AI visibility framing.
- Beacon's existing course and AI Visibility Checker CTAs.
- The revised Bodji Consulting plan.
- The broader Bodji Technologies product story: Beacon, Scout, and consulting under one umbrella.

The page should not feel like a generic AI consulting site. It should feel like a real product-and-services company helping businesses become discoverable, trustworthy, and actionable in AI-driven markets.

## Source Inputs

- `/Users/calebwilliams/bodji/beacon frontend notes.md`
- `/Users/calebwilliams/bodji/bodji-technologies/docs/archive/bodji-consulting-page-plan.md`
- `/Users/calebwilliams/bodji/bodji-technologies/docs/archive/bodji-technologies-messaging-notes.md`
- `/Users/calebwilliams/bodji/bodji-technologies/docs/archive/bodji-technologies-frontend-notes.md`
- `/Users/calebwilliams/bodji/bodji-technologies/docs/archive/bodji-technologies-visual-assets-audit.md`
- Existing Beacon frontend: `/Users/calebwilliams/bodji/cw-beacon-frontend`
- Existing Bodji Technologies repo: `/Users/calebwilliams/bodji/bodji-technologies`

## Core Thesis

Bodji Technologies helps businesses get ready for the way customers and software are starting to use AI.

Plain-English version:

> We help businesses become easier for AI to find, understand, trust, and work with.

More complete version:

> Bodji Technologies builds products and consulting systems that help businesses become discoverable, trustworthy, and actionable in AI-driven markets.

## Simple Narrative

The larger Bodji Technologies page should become the umbrella page that connects AI visibility, Beacon, Scout, and consulting into one coherent story.

Use this mental model:

- **Beacon explains the front-door problem:** customers and software are starting with AI, so businesses need to be findable, understandable, and actionable inside AI systems.
- **Consulting explains the back-office problem:** once interest shows up, messy workflows still need to be mapped, structured, measured, and improved.
- **Scout supports the opportunity/discovery side:** finding and organizing the businesses, markets, and opportunities worth pursuing.

The page is not "Beacon plus consulting smashed together." It is:

> Bodji Technologies is the umbrella. Beacon is the visibility product. Scout is the opportunity product. Consulting is how Bodji helps companies apply the thinking to real workflows.

## What The Page Needs To Explain

The new homepage needs to make three ideas feel connected:

- **AI visibility:** Customers and software increasingly begin with AI systems, not just Google search or human website browsing.
- **Product infrastructure:** Beacon and Scout are product work, not just marketing language.
- **Workflow consulting:** Once a business becomes visible to AI, the real work still needs clear data, intake, handoffs, review, and action paths.

The page should avoid starting with MCP jargon. MCP, structured data, agents, and workflow infrastructure can appear after the visitor understands the plain-English problem.

## Recommended Page Flow

### 1. Hero

Goal: Make the company understandable in the first viewport.

Working headline direction:

> Help AI find your business, understand it, and turn interest into action.

Alternative:

> Make your business easier for AI to find, trust, and work with.

Support copy should explain that Bodji builds products and consulting systems for AI-readable business profiles, opportunity intelligence, trust signals, and workflows that turn interest into action.

Required hero CTAs:

- `Check your AI visibility`
- `AI visibility mini-course`
- `Talk to Bodji`

Important: the course should be a real button, just like it is on the Beacon frontend. It should not be buried as a plain text link.

### 2. The Shift

Borrow from the Beacon course.

Explain the "1998 website moment":

- Businesses once needed websites so humans could find them online.
- Now businesses need AI-readable information so AI systems can find, understand, and recommend them.
- A normal website may not be enough if AI cannot extract the right services, hours, location, evidence, trust signals, or next steps.

Keep this section educational and plain.

### 3. AI Visibility Checker

This is the primary utility/proof asset.

Section goal:

> See what AI systems understand about your business today.

The first implementation can route to the existing Beacon checker rather than embedding it into the Bodji Technologies app.

CTA:

- `Check your AI visibility`

Current Beacon route:

- `https://landing.beacon.zacharycompanies.ai/check`

### 4. The Bodji System

Show the product-and-services umbrella clearly.

Use three core cards:

- **Bodji Beacon:** Helps AI systems understand who a business is, what it offers, and what a customer can do next.
- **Bodji Scout:** Helps identify businesses, markets, and opportunities worth pursuing.
- **Bodji Consulting:** Helps teams redesign one important workflow so it becomes clearer, measurable, and easier for AI to support.

Do not present Scout as an afterthought. The user has clarified that Bodji Scout is technically the third product.

### 5. Consulting Section

Use the revised consulting plan's strongest framing:

> Find where work gets stuck. Fix one workflow. Measure the result.

The consulting message:

> Bodji Consulting helps teams find where work gets stuck, map the workflow behind it, and improve one high-value process at a time with safe AI support.

Key principles to include:

- Follow the work, not the org chart.
- Start with the workflow, not the model.
- Time is the first unit of ROI.
- Do not automate the mess. Map it first.
- Progressive deployment beats big-bang transformation.

### 6. Consulting Offer Ladder

Use four cards:

- **Workflow Opportunity Review:** Find where AI might actually help.
- **Workflow Blueprint:** Turn one workflow into a build-ready plan.
- **Workflow Pilot:** Build a narrow, non-production proof of the workflow.
- **Implementation Partner:** Build, deploy, measure, and improve production workflows if the pilot proves value.

Each card should answer:

- What it is.
- Who it is for.
- What the customer leaves with.

### 7. Right Fit / Not Right Fit

This should make the consulting arm feel honest and practical.

Right fit:

- You have a workflow people complain about.
- Work is stuck in email, spreadsheets, PDFs, portals, or manual handoffs.
- You can name the owner of the workflow.
- You want a practical plan before a big build.
- You care about time saved, throughput, errors, and adoption.

Not right fit:

- You want a vague AI brainstorm.
- You want to automate everything at once.
- You want a chatbot without fixing the underlying process.
- Nobody owns the workflow.
- You cannot measure whether the work improved.

### 8. Learn / Course Section

The Beacon course should remain a visible, button-driven path.

Section purpose:

> Learn why AI visibility is becoming the new website moment.

CTA:

- `AI visibility mini-course`

Current Beacon route:

- `https://landing.beacon.zacharycompanies.ai/course`

### 9. Honest Proof

Do not invent enterprise proof, logos, or metrics.

Use honest proof:

- Working Beacon frontend.
- AI Visibility Checker.
- Beacon course and outreach materials.
- Scout product and opportunity-intelligence work.
- Prototype platform work.
- Clear consulting framework.

Tone:

> We are early, so we will not pretend to have a wall of enterprise case studies. What we do have is working product infrastructure, a clear point of view, and a practical process for finding the first workflow worth improving.

### 10. Final CTA

End with two or three clean paths:

- `Check your AI visibility`
- `AI visibility mini-course`
- `Talk to Bodji`

The final CTA should reinforce that visitors can start with a diagnostic, education, or a direct conversation.

## Visual And Brand Asset Plan

Source audit:

- `/Users/calebwilliams/bodji/bodji-technologies/docs/archive/bodji-technologies-visual-assets-audit.md`

### Current Bodji Technologies Assets

The current Bodji Technologies repo has a minimal, disconnected asset system:

- `favicon.svg`: dark rounded square with a white `B` and pale-cyan accent.
- Header mark: inline `BT` text badge, not an image.
- `assets/hero-lab-workflow.jpg`: current hero image, used.
- `assets/hero-lab-workflow.png`: same-size PNG, apparently unused and much larger.

The existing visual language fits the old "regulated lab workflow consulting" page, but it does not naturally explain the new umbrella: Beacon, Scout, MCP/product infrastructure, and consulting.

### Beacon Brand Assets

Beacon has the stronger existing Bodji brand source:

- `/Users/calebwilliams/bodji/cw-beacon-frontend/public/favicon.png`
- `/Users/calebwilliams/bodji/cw-beacon-frontend/src/assets/bodji-logo.png`
- `/Users/calebwilliams/bodji/cw-beacon-frontend/src/assets/bodji-logo-amber-faceted.png`
- `/Users/calebwilliams/bodji/cw-beacon-frontend/src/assets/bodji-logo-amber.png`
- `/Users/calebwilliams/bodji/cw-beacon-frontend/src/assets/bodji-logo-dark.png`
- `/Users/calebwilliams/bodji/cw-beacon-frontend/src/assets/bodji-logo-white.png`

### Recommendation

Retire the inline `BT` badge and one-off favicon direction.

Use the real Bodji mark from Beacon as the source of truth:

- Use `bodji-logo-dark.png` for light headers.
- Use `bodji-logo-amber-faceted.png` if the new page stays warm and Beacon-adjacent.
- Use `bodji-logo.png` if the umbrella brand should feel broader and less Beacon-specific.
- Use Beacon's `public/favicon.png`, or create a Technologies-specific favicon from the same Bodji mark.

The guiding rule:

> Use the Bodji mark, not `BT`, so Bodji Technologies, Beacon, and Scout feel like one family.

### Hero Image Direction

The current lab hero image is polished but too narrow for the new umbrella if the page leads with Beacon, Scout, and AI-driven business discovery.

Use it only if consulting remains the dominant first impression.

Otherwise, replace it or reduce its role. Better hero directions may include:

- Product-family interface collage.
- AI visibility/checker mockup.
- Beacon/Scout/Bodji system diagram.
- A more abstract but still concrete business-discovery/workflow visual.

If the PNG is not used in the rework, delete `assets/hero-lab-workflow.png` later.

## Frontend Stack Plan

The user wants the same general setup as the Beacon frontend: a full TypeScript landing page, not a plain static one-file page.

Use a Vite/React setup in the existing Bodji Technologies repo root:

```text
bodji-technologies/
  package.json
  vite.config.ts
  tsconfig.json
  index.html
  src/
    main.tsx
    App.tsx
    LandingPage.tsx
    styles.css
    assets/
      ...
  public/
    CNAME
    favicon.png
    robots.txt
    sitemap.xml
```

Do not use a subfolder for the app. The `bodji-technologies` repo itself becomes the Vite frontend.

### Routing

Recommended initial routing:

- `/`: Bodji Technologies homepage.

For the first version, route CTAs to the existing Beacon tools:

- `https://landing.beacon.zacharycompanies.ai/check`
- `https://landing.beacon.zacharycompanies.ai/course`

Later, Bodji Technologies can decide whether to host equivalent routes itself:

- `/check`
- `/course`

### Deployment Implication

The current site is GitHub Pages serving static files from the repo root.

Moving to Vite means GitHub Pages should serve the built `dist/` output, likely through a GitHub Actions workflow.

Keep these public files copied into the Vite build:

- `CNAME`
- `robots.txt`
- `sitemap.xml`
- favicon file

## Content Rules

Use:

- Plain language.
- Clear product names.
- Concrete workflow examples.
- Button CTAs for checker and course.
- Honest early-stage proof.
- Warm but credible tone.

Avoid:

- Generic "AI transformation" copy.
- Dense MCP jargon in the hero.
- Fake enterprise case studies.
- Customer logos or metrics we do not have.
- Making consulting sound like a Fortune 500 transformation deck.
- Making Beacon, Scout, and consulting feel like disconnected experiments.

## Open Decisions

- Whether the hero should be product-first, consulting-first, or balanced.
- Whether Signal should be mentioned now or kept out until more real.
- Whether the Bodji site should eventually host its own `/check` and `/course`, or keep routing to Beacon.
- Whether the final favicon is Beacon's existing favicon or a new Bodji Technologies variant using the same mark.
- Whether the current lab hero image stays anywhere on the page.
