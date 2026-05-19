import { ImageResponse } from "next/og";
import type { Palette } from "@/lib/slides";

export const ogImageAlt = "Care made easy";
export const ogImageContentType = "image/png";
export const ogImageSize = {
  height: 630,
  width: 1200,
} as const;

const DEFAULT_TITLE = "Care made easy";
const DEFAULT_PALETTE: Palette = "e";

interface FontAsset {
  data: Buffer;
  name: string;
  style: "normal";
  weight: 700;
}

interface PaletteColors {
  bg: string;
  fg: string;
  fgSoft: string;
}

const PALETTES: Record<Palette, PaletteColors> = {
  a: { bg: "#e54f11", fg: "#ffffc2", fgSoft: "rgba(255, 255, 194, 0.78)" },
  b: { bg: "#f6ebd9", fg: "#514733", fgSoft: "rgba(81, 71, 51, 0.72)" },
  c: { bg: "#0c90d2", fg: "#aeffff", fgSoft: "rgba(174, 255, 255, 0.78)" },
  d: { bg: "#211f1e", fg: "#f6ebd9", fgSoft: "rgba(246, 235, 217, 0.7)" },
  e: { bg: "#211f1e", fg: "#f6ebd9", fgSoft: "rgba(246, 235, 217, 0.7)" },
  glide: { bg: "#fbb6cd", fg: "#e8391c", fgSoft: "rgba(232, 57, 28, 0.7)" },
  stratasync: { bg: "#2e6f40", fg: "#ffffff", fgSoft: "rgba(255, 255, 255, 0.75)" },
  blodeui: { bg: "#000000", fg: "#ffffff", fgSoft: "rgba(255, 255, 255, 0.6)" },
  stylecapture: { bg: "#ffffff", fg: "#171717", fgSoft: "rgba(23, 23, 23, 0.65)" },
  allmd: { bg: "#e84c87", fg: "#ffffff", fgSoft: "rgba(255, 255, 255, 0.8)" },
  blodemd: { bg: "#efee77", fg: "#000000", fgSoft: "rgba(0, 0, 0, 0.65)" },
  diffhub: { bg: "#f2f1ed", fg: "#26251e", fgSoft: "rgba(38, 37, 30, 0.65)" },
};

export interface OgImageOptions {
  palette?: Palette;
  title?: string;
}

function getTitleSize(title: string) {
  if (title.length > 60) {
    return 76;
  }
  if (title.length > 40) {
    return 96;
  }
  if (title.length > 24) {
    return 120;
  }
  return 148;
}

async function loadFonts(): Promise<FontAsset[]> {
  const fontModule = await import("./glide-variable-ttf.json", { with: { type: "json" } });
  const { base64Font } = fontModule.default;
  return [
    {
      data: Buffer.from(base64Font, "base64"),
      name: "Glide",
      style: "normal" as const,
      weight: 700 as const,
    },
  ];
}

export async function createOgImage(options: OgImageOptions = {}) {
  const title = options.title?.trim() || DEFAULT_TITLE;
  const palette = options.palette ?? DEFAULT_PALETTE;
  const colors = PALETTES[palette];
  const fonts = await loadFonts();
  const titleSize = getTitleSize(title);

  return new ImageResponse(
    <div
      style={{
        backgroundColor: colors.bg,
        color: colors.fg,
        fontFamily: "Glide, system-ui, sans-serif",
      }}
      tw="flex flex-col w-full h-full p-[72px] justify-end"
    >
      <div
        style={{
          color: colors.fg,
          fontSize: titleSize,
          letterSpacing: "-0.03em",
          lineHeight: 0.94,
        }}
        tw="flex max-w-[1056px] font-semibold"
      >
        {title}
      </div>

      <div style={{ color: colors.fgSoft }} tw="flex text-[22px] mt-6">
        Matthew Blode
      </div>
    </div>,
    {
      fonts,
      height: ogImageSize.height,
      width: ogImageSize.width,
    },
  );
}
