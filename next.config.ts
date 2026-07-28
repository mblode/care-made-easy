import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /**
   * Keep the non-canonical hostnames out of the index.
   *
   * This app canonicalises to blode.co/care, but it also answers on the
   * origin blode.co proxies to and on its *.vercel.app aliases. Those sit
   * inside the sc-domain:blode.co Search Console property, so left alone they
   * are a crawlable duplicate of the whole site.
   *
   * The discriminator is x-forwarded-host, NOT host: the multi-zone rewrite
   * proxies to the origin, so `host` is the origin for real blode.co traffic
   * too. x-forwarded-host keeps the hostname the client actually asked for,
   * which is blode.co when proxied. Matching on `host` would noindex the
   * live site.
   */
  headers() {
    return Promise.resolve([
      {
        headers: [{ key: "X-Robots-Tag", value: "noindex" }],
        has: [
          {
            key: "x-forwarded-host",
            type: "header" as const,
            value: String.raw`.*\.zone\.blode\.co|.*\.vercel\.app`,
          },
        ],
        source: "/:path*",
      },
    ]);
  },
  assetPrefix: "/care",
  basePath: "/care",
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60 * 60 * 24 * 30,
    remotePatterns: [
      {
        hostname: "images.unsplash.com",
        protocol: "https",
      },
    ],
  },
  reactCompiler: true,
  redirects() {
    return Promise.resolve([
      ...["care.blode.co", "stack.blode.co"].flatMap((host) => [
        {
          basePath: false as const,
          destination: "https://blode.co/care",
          has: [{ type: "host" as const, value: host }],
          permanent: true as const,
          source: "/",
        },
        {
          basePath: false as const,
          destination: "https://blode.co/care/:path*",
          has: [{ type: "host" as const, value: host }],
          permanent: true as const,
          source: "/:path*",
        },
      ]),
      {
        destination: "/",
        permanent: true,
        source: "/1",
      },
    ]);
  },
  // Next's inline type checker cannot load TypeScript 7's relocated compiler
  // API. `npm run check-types` remains the authoritative type gate.
  typescript: { ignoreBuildErrors: true },
};

export default nextConfig;
