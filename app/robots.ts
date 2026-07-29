import type { MetadataRoute } from "next";
import { BASE_PATH, SITE_URL } from "@/lib/site-url";
import { TOTAL_SLIDES } from "@/lib/slides";

const BASE_URL = SITE_URL;

/**
 * The `/<n>` slide routes stay `noindex` and canonicalise to the deck root (see
 * `app/[slide]/page.tsx`), and `app/sitemap.ts` deliberately leaves them out.
 * Keep crawlers off them entirely so they stop enumerating pages that can only
 * ever report back as unindexable.
 *
 * Paths carry the zone prefix because robots.txt paths resolve from the domain
 * root and this deck is served under `BASE_PATH`. Next does not prefix these
 * with `basePath` for us: it only prefixes the robots.txt route itself.
 */
const slideDisallow = Array.from(
  { length: TOTAL_SLIDES },
  (_value, index) => `${BASE_PATH}/${index + 1}`,
);

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      allow: "/",
      disallow: slideDisallow,
      userAgent: "*",
    },
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
