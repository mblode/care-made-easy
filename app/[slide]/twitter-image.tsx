import { createOgImage, ogImageAlt, ogImageContentType, ogImageSize } from "../og/image";
import { SLIDES, TOTAL_SLIDES } from "@/lib/slides";

export const runtime = "nodejs";
export const alt = ogImageAlt;
export const contentType = ogImageContentType;
export const size = ogImageSize;

export function generateStaticParams() {
  return Array.from({ length: TOTAL_SLIDES }, (_, i) => ({ slide: String(i + 1) }));
}

export default async function Image({ params }: { params: Promise<{ slide: string }> }) {
  const { slide } = await params;
  const slideNum = Number.parseInt(slide, 10);
  const slideIndex = Number.isFinite(slideNum) ? slideNum - 1 : 0;
  const data = SLIDES[slideIndex] ?? SLIDES[0];

  return createOgImage({
    palette: data.palette,
    slideNumber: slideIndex + 1,
    title: data.title,
  });
}
