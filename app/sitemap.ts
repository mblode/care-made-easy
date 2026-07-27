import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site-url";
import { SLIDES } from "@/lib/slides";

const BASE_URL = SITE_URL;

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      changeFrequency: "monthly",
      lastModified: new Date(),
      priority: 1,
      url: BASE_URL,
    },
  ];

  const slideRoutes: MetadataRoute.Sitemap = SLIDES.slice(1).map((_slide, index) => ({
    changeFrequency: "monthly" as const,
    lastModified: new Date(),
    priority: 0.8,
    url: `${BASE_URL}/${index + 2}`,
  }));

  return [...staticRoutes, ...slideRoutes];
}
