import { createOgImage, ogImageAlt, ogImageContentType, ogImageSize } from "./og/image";

export const runtime = "nodejs";
export const alt = ogImageAlt;
export const contentType = ogImageContentType;
export const size = ogImageSize;

export default function Image() {
  return createOgImage();
}
