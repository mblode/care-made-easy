import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site-url";

/**
 * The deck root is the only indexable URL here.
 *
 * The `/<n>` slide routes are `noindex` and canonicalise to the root, so
 * listing them would contradict the pages themselves — Search Console reports
 * that as "Submitted URL marked noindex" rather than treating it as a hint.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      changeFrequency: "monthly",
      lastModified: new Date(),
      priority: 1,
      url: SITE_URL,
    },
  ];
}
