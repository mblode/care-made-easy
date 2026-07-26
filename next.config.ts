import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
    return Promise.resolve(
      ["care.blode.co", "stack.blode.co"].flatMap((host) => [
        {
          basePath: false,
          destination: "https://blode.co/care/1",
          has: [{ type: "host" as const, value: host }],
          permanent: true,
          source: "/",
        },
        {
          basePath: false,
          destination: "https://blode.co/care/:path*",
          has: [{ type: "host" as const, value: host }],
          permanent: true,
          source: "/:path*",
        },
      ]),
    );
  },
  // Next's inline type checker cannot load TypeScript 7's relocated compiler
  // API. `npm run check-types` remains the authoritative type gate.
  typescript: { ignoreBuildErrors: true },
};

export default nextConfig;
