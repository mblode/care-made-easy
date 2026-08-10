import { renderZoneOgImage } from "@/app/og-image-shared";

export { OG_CONTENT_TYPE as contentType, OG_SIZE as size } from "@/app/og-image-shared";

export const alt = "Care made easy";

/**
 * The house card (Rule 12), replacing the palette-based OG generator this
 * deck shipped since May. Converting to the shared route also locks in Rule
 * 11: `metadataBase` is the zone URL, and a generated route is not
 * `basePath`-prefixed, so the two cannot stack into `/care/care/...`.
 *
 * The matching `twitter-image.tsx` is gone rather than converted: Next reuses
 * this route for `twitter:image`.
 */
export default function OpengraphImage() {
  return renderZoneOgImage({
    badge: "CARE",
    eyebrow: "blode.co/care",
    // Shorter than the meta description, which runs long for the SERP. A card
    // is read in a feed, at a glance.
    subtitle: "Agents made code cheap, so taste is the bottleneck now.",
    title: "Care made easy",
  });
}
