# Bodji Technologies Visual Assets Audit

Created 2026-06-03.

## Current Bodji Technologies Assets

Repo: `/Users/calebwilliams/bodji/bodji-technologies`

### Files

- `index.html`
- `favicon.svg`
- `assets/hero-lab-workflow.jpg`
- `assets/hero-lab-workflow.png`

### Current Favicon

File: `favicon.svg`

Shape:

- Dark rounded square.
- White stylized `B`.
- Small pale-cyan vertical accent.

SVG colors:

- Background: `#07141a`
- Main mark: `#ffffff`
- Accent: `#b9eee6`

Notes:

- This is not the same brand mark as the Beacon frontend.
- It looks like a custom one-off "BT/B" mark.
- It fits the current dark consulting page, but it does not connect strongly to Bodji Beacon or the wider product family.

### Current Header Mark

The header does not use an image. It uses inline HTML:

```html
<span class="mark" aria-hidden="true">BT</span>
```

The mark is a dark rounded square with text `BT`.

Notes:

- This feels placeholder-like.
- It does not reuse the Bodji logo.
- It makes the Technologies site feel visually separate from Beacon.

### Current Hero Image

Files:

- `assets/hero-lab-workflow.jpg`: used by `index.html`.
- `assets/hero-lab-workflow.png`: appears unused.

Specs:

- Both are `1672 x 941`.
- JPG is about `188K`.
- PNG is about `1.5M`.

Visual:

- Lab/regulated-workflow scene.
- Laptop/tablet showing workflow UI.
- Vials/documents in foreground.
- Dark, serious, scientific-services feel.

Notes:

- Good fit for the old "high-stakes service operations" consulting positioning.
- Narrow fit for the new umbrella positioning.
- Does not naturally explain Beacon, Scout, MCP, opportunity discovery, or AI-readable business infrastructure.
- JPG is the correct one to keep if this image stays; the PNG is much larger and unused.

## Beacon Frontend Assets

Repo: `/Users/calebwilliams/bodji/cw-beacon-frontend`

Live reference: `https://landing.beacon.zacharycompanies.ai/`

### Brand Files

Source files:

- `public/favicon.png`
- `src/assets/bodji-logo.png`
- `src/assets/bodji-logo-amber-faceted.png`
- `src/assets/bodji-logo-amber.png`
- `src/assets/bodji-logo-dark.png`
- `src/assets/bodji-logo-white.png`

Build output:

- `dist/favicon.png`
- `dist/assets/bodji-logo-amber-faceted-CT8yHwW8.png`

### Beacon Favicon

File: `cw-beacon-frontend/public/favicon.png`

Specs:

- `256 x 256`
- PNG with alpha.
- Blue circular background.
- White Bodji mark.

Notes:

- This is the clearest existing product favicon.
- Live Beacon does not explicitly link it in the HTML head, but `/favicon.png` exists and is served by the deployed site.
- This should be the starting point for a Bodji Technologies favicon refresh.

### Bodji Logo Variants

Files:

- `bodji-logo.png`: blue/cyan faceted mark.
- `bodji-logo-amber-faceted.png`: amber faceted mark.
- `bodji-logo-amber.png`: flat amber mark.
- `bodji-logo-dark.png`: dark mark.
- `bodji-logo-white.png`: white mark.

Notes:

- These are actual Bodji brand marks, unlike the current Technologies `BT` square.
- The amber faceted variant is used in the Beacon landing page nav.
- The dark or amber mark would likely work best for Bodji Technologies depending on the new design direction.

## Recommendation

### 1. Replace The `BT` Mark

Use the real Bodji mark from the Beacon frontend instead of the inline `BT` badge.

Best likely choices:

- `bodji-logo-dark.png` for light headers.
- `bodji-logo-amber-faceted.png` if the Technologies page keeps a warmer Beacon-adjacent palette.
- `bodji-logo.png` if the umbrella brand wants to feel broader and less Beacon-specific.

### 2. Replace Or Rework The Favicon

The current `favicon.svg` should probably be retired or redesigned.

Options:

- Use Beacon's `public/favicon.png` directly for brand continuity.
- Create a Technologies-specific favicon using the Bodji mark but a neutral/dark background.
- Use the blue Bodji favicon for all Bodji properties until a broader identity system exists.

My recommendation:

> Use the Bodji mark, not `BT`. Keep the product family visually connected.

### 3. Treat The Hero Image As Optional

The current lab-workflow image is polished, but it may be too narrow for the new Bodji Technologies umbrella.

Keep it only if the refreshed page still leads with consulting for operational workflows.

Replace it if the refreshed page leads with:

- Beacon.
- Scout.
- MCP product infrastructure.
- AI-driven business discovery.
- Product-plus-consulting umbrella.

### 4. Clean Up Unused PNG Later

If `assets/hero-lab-workflow.png` is not used by the reworked page, delete it. It is much larger than the JPG and currently adds no value.

## Practical Asset Direction For The Rework

Use Beacon as the brand source of truth for now:

- Copy/adapt `cw-beacon-frontend/src/assets/bodji-logo-dark.png`.
- Copy/adapt `cw-beacon-frontend/src/assets/bodji-logo-amber-faceted.png`.
- Copy/adapt `cw-beacon-frontend/public/favicon.png`.

Then decide whether Bodji Technologies needs its own generated or designed hero asset. The current hero image should not be the default unless the page remains consulting-first.

## Bottom Line

Current Bodji Technologies visual resources are minimal and mostly disconnected from Beacon:

- One custom `BT`/`B` favicon.
- One inline `BT` header mark.
- One lab/workflow hero image.

The rework should pull the main brand identity from the Beacon frontend so Bodji Technologies, Beacon, and Scout feel like one family rather than separate experiments.
