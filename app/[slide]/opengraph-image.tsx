import { renderZoneOgImage } from "@/app/og-image-shared";
import { OgLogo } from "@/app/og-logo";

import { SLIDES, TOTAL_SLIDES } from "@/lib/slides";

export { OG_CONTENT_TYPE as contentType, OG_SIZE as size } from "@/app/og-image-shared";

export const alt = "Care made easy";

export function generateStaticParams() {
  return Array.from({ length: TOTAL_SLIDES }, (_, i) => ({ slide: String(i + 1) }));
}

/**
 * Per-slide house card. Same chrome as the root; the slide title fills the
 * hero so a shared slide still names the moment being linked.
 */
export default async function OpengraphImage({ params }: { params: Promise<{ slide: string }> }) {
  const { slide } = await params;
  const slideNum = Number.parseInt(slide, 10);
  const slideIndex = Number.isFinite(slideNum) ? slideNum - 1 : 0;
  const data = SLIDES[slideIndex] ?? SLIDES[0];

  return renderZoneOgImage({
    background: "#fff7ed",
    color: "#9a3412",
    logo: <OgLogo />,
    title: data.title,
  });
}
