# Deployment & Release

How code gets to production. Release processes, environment promotion, rollback procedures, gotchas.

## Vercel project

- Linked to `blode/ai-usage-for-engineers` (project id `prj_xLFTZrwkcIs2YRvVA8krWVGmGFJf`).
- Canonical production URL: `https://blode.co/care`.
- The app is mounted below `/care`; do not publish a `vercel.app` URL or a subdomain as its canonical URL.

## CLI deploys no longer need --prebuilt

`vercel deploy` uploads the working tree without `.git`, so a bare `"prepare": "lefthook install"` used to abort Vercel's remote `npm install` (`fatal: not a git repository`), and `vercel deploy --prebuilt --prod --yes` after a local `vercel build --prod --yes` was the workaround.

`package.json`'s `prepare` script is now `if [ -z "$VERCEL" ]; then lefthook install; fi`. Vercel's build environment always sets `VERCEL=1` (its own system environment variable, on every build regardless of how the deploy was triggered), so `npm install` on Vercel skips `lefthook install` entirely and no longer needs `.git` to exist. A plain `vercel deploy --prod` now works; there is no known case where `--prebuilt` is still required.

## Canonical metadata

Site metadata (`metadataBase`, canonical, sitemap, and OG image URLs) uses the fixed public URL in `lib/site-url.ts`. Preview and zone-origin hostnames must never leak into metadata.

## OG image verification

After any deploy that touches metadata or the OG image routes (`app/opengraph-image.tsx`, `app/[slide]/opengraph-image.tsx`):

```bash
curl -sI https://blode.co/care/opengraph-image | grep -E "HTTP|content-type"
curl -sL https://blode.co/care | grep -oE 'og:image"[^>]*content="[^"]+"'
```

Expect `HTTP/2 200`, `content-type: image/png`, and an `og:image` URL on `blode.co`.
