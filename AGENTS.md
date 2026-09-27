# care-made-easy

The slide deck for Matthew Blode's talk "Care made easy": taste became the bottleneck once agents made code cheap, told through the open-source stack behind Done Bear, with live demos inside the deck. A Next.js 16 app served as a zone at <https://blode.co/care>: `basePath` and `assetPrefix` are `/care`, and each slide is its own URL (`/care/7`). The npm package name is still `blode-stack-preso`.

## Commands

Node 24 (`.nvmrc`), npm 12. Run from the repo root.

```bash
npm ci                # install; `prepare` installs the lefthook hooks
npm run dev           # dev server through portless (prints the https *.localhost URL)
npm run lint          # oxlint .
npm run format:check  # oxfmt --check . (markdown is ignored)
npm run check-types   # tsc --noEmit
npm run build         # production build
npm run check         # ultracite check: lint and format together
npm run fix           # ultracite fix
```

There are no tests. CI (`.github/workflows/ci.yml`) runs lint, format check, types and build. The pre-commit hook runs `oxfmt --write` and `oxlint --fix` on staged files.

## Layout

- `lib/slides.ts`: the slide list (slug, title, palette). The deck outline, metadata, sitemap and OG images all read from it.
- `app/[slide]/page.tsx`: maps the slide number to a component; `slideComponents` must stay in the same order as `SLIDES`.
- `components/slides/blode-stack-slides.tsx`: every slide component. The live demos have their own folders: `sync-demo/` (Strata Sync, simulated in memory), `style-capture-demo/` and `glide-playground.tsx`.
- `docs/blode-stack-speaker-notes.md`: speaker notes.

To add a slide: add an entry to `SLIDES`, write the component, and add it to `slideComponents` at the same index. Left and right arrows move between slides (`components/slides/slide-navigation.tsx`).

## Conventions

- Icons come from `blode-icons-react` (Lucide-compatible names such as `Loader2Icon`). `lucide-react` imports fail lint. `components.json` sets `iconLibrary` so shadcn adds use it too.
- UI components come from the `@blode` registry (`components.json`) and wrap Base UI.
- `next.config.ts` owns the zone's response headers, including the CSP. An embed from a new origin needs a `frame-src` entry (the stack slide embeds the Done Bear playground this way).
- Canonical URLs, `metadataBase`, sitemap and OG image URLs use the fixed `SITE_URL` in `lib/site-url.ts`. Preview and zone-origin hostnames must never reach metadata.
- Deploys, the `--prebuilt` workaround for the lefthook `prepare` script, and the OG image check after a deploy: `docs/deployment.md`.

## Verification

A change is proven by `npm run lint && npm run format:check && npm run check-types && npm run build`, then by opening the changed slide in `npm run dev`. There are no tests, and no doctor, verify script or feature map: that is a gap, so visual changes and the live demos (sync, Style Capture, Glide playground) need a look in the browser.
