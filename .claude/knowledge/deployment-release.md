# Deployment & Release

How code gets to production. Release processes, environment promotion, rollback procedures, gotchas.

## Vercel project

- Linked to `blode/ai-usage-for-engineers` (project id `prj_xLFTZrwkcIs2YRvVA8krWVGmGFJf`).
- Production alias: `https://ai-usage-for-engineers.vercel.app`.
- The custom canonical `nextjs-preso.blode.co` is **NOT** attached to this project. It points at a different Vercel project under a different team that this account can't manage. Do not rely on it for production validation; treat the `vercel.app` URL as the source of truth.

## CLI deploys must use --prebuilt

`package.json` has `"prepare": "lefthook install"`. On `vercel deploy` the CLI uploads the working tree without `.git`, so when Vercel CI runs `npm install` the `prepare` script aborts (`fatal: not a git repository`) and the build fails with `Command "npm install" exited with 1`.

Workaround:

```bash
VERCEL_PROJECT_PRODUCTION_URL=ai-usage-for-engineers.vercel.app vercel build --prod --yes
vercel deploy --prebuilt --prod --yes
```

`vercel build` runs everything locally (where `.git` exists) and `--prebuilt` ships only `.vercel/output`, skipping the broken `npm install` on CI.

## VERCEL_PROJECT_PRODUCTION_URL must be exported for local builds

Site metadata (`metadataBase`, canonical, sitemap, OG image URLs) is computed from `process.env.VERCEL_PROJECT_PRODUCTION_URL` in `lib/site-url.ts`. Vercel's build infra sets this automatically, but `vercel build` run locally does **not** — `vercel pull` only writes a stub `VERCEL_URL=""`. Always prefix `vercel build` with `VERCEL_PROJECT_PRODUCTION_URL=ai-usage-for-engineers.vercel.app` or all OG meta tags will resolve to `http://localhost:3000`.

## OG image verification

After any deploy that touches metadata or `app/og/**`:

```bash
curl -sI https://ai-usage-for-engineers.vercel.app/opengraph-image | grep -E "HTTP|content-type"
curl -sL https://ai-usage-for-engineers.vercel.app/ | grep -oE 'og:image"[^>]*content="[^"]+"'
```

Expect `HTTP/2 200`, `content-type: image/png`, and an `og:image` URL on the `vercel.app` host (not `localhost:3000` or `nextjs-preso.blode.co`).
