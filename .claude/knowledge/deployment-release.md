# Deployment & Release

How code gets to production. Release processes, environment promotion, rollback procedures, gotchas.

## Vercel project

- Linked to `blode/ai-usage-for-engineers` (project id `prj_xLFTZrwkcIs2YRvVA8krWVGmGFJf`).
- Canonical production URL: `https://blode.co/ai-usage/1`.
- The app is mounted below `/ai-usage`; do not publish a `vercel.app` URL or a subdomain as its canonical URL.

## CLI deploys must use --prebuilt

`package.json` has `"prepare": "lefthook install"`. On `vercel deploy` the CLI uploads the working tree without `.git`, so when Vercel CI runs `npm install` the `prepare` script aborts (`fatal: not a git repository`) and the build fails with `Command "npm install" exited with 1`.

Workaround:

```bash
vercel build --prod --yes
vercel deploy --prebuilt --prod --yes
```

`vercel build` runs everything locally (where `.git` exists) and `--prebuilt` ships only `.vercel/output`, skipping the broken `npm install` on CI.

## Canonical metadata

Site metadata (`metadataBase`, canonical, sitemap, and OG image URLs) uses the fixed public URL in `lib/site-url.ts`. Preview and zone-origin hostnames must never leak into metadata.

## OG image verification

After any deploy that touches metadata or `app/og/**`:

```bash
curl -sI https://blode.co/ai-usage/opengraph-image | grep -E "HTTP|content-type"
curl -sL https://blode.co/ai-usage/1 | grep -oE 'og:image"[^>]*content="[^"]+"'
```

Expect `HTTP/2 200`, `content-type: image/png`, and an `og:image` URL on `blode.co`.
