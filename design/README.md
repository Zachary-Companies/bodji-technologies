# Design archive

`archive/google-studio/` preserves an alternate Google AI Studio implementation
that informed the site. It is not imported by the root Vite application and is
not included in the production build.

Its local `node_modules/` and `dist/` directories are generated and intentionally
ignored. Install and build within the archived package only when reviewing that
historical implementation.
