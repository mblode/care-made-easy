import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
  // Next's inline type checker cannot load TypeScript 7's relocated compiler
  // API. `npm run check-types` remains the authoritative type gate.
  typescript: { ignoreBuildErrors: true },
};

export default nextConfig;
