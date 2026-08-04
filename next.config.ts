import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  assetPrefix: "/care",
  basePath: "/care",
  experimental: { turbopackRustReactCompiler: true },
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
