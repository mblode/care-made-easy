import { ImageResponse } from "next/og";
import { TOTAL_SLIDES } from "@/lib/slides";
import type { Palette } from "@/lib/slides";

export const ogImageAlt = "Care Made Easy";
export const ogImageContentType = "image/png";
export const ogImageSize = {
  height: 630,
  width: 1200,
} as const;

const DEFAULT_TITLE = "Care Made Easy";
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
  hairline: string;
}

const PALETTES: Record<Palette, PaletteColors> = {
  a: {
    bg: "#e54f11",
    fg: "#ffffc2",
    fgSoft: "rgba(255, 255, 194, 0.78)",
    hairline: "rgba(255, 255, 194, 0.32)",
  },
  b: {
    bg: "#f6ebd9",
    fg: "#514733",
    fgSoft: "rgba(81, 71, 51, 0.72)",
    hairline: "rgba(81, 71, 51, 0.24)",
  },
  c: {
    bg: "#0c90d2",
    fg: "#aeffff",
    fgSoft: "rgba(174, 255, 255, 0.78)",
    hairline: "rgba(174, 255, 255, 0.3)",
  },
  d: {
    bg: "#53f399",
    fg: "#004d00",
    fgSoft: "rgba(0, 77, 0, 0.7)",
    hairline: "rgba(0, 77, 0, 0.25)",
  },
  e: {
    bg: "#211f1e",
    fg: "#f6ebd9",
    fgSoft: "rgba(246, 235, 217, 0.7)",
    hairline: "rgba(246, 235, 217, 0.18)",
  },
};

export interface OgImageOptions {
  eyebrow?: string;
  palette?: Palette;
  slideNumber?: number;
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

  const eyebrow = options.eyebrow ?? "How to build a to-do list app in 2026";
  const counter =
    options.slideNumber === undefined
      ? "Care Made Easy"
      : `${String(options.slideNumber).padStart(2, "0")} / ${String(TOTAL_SLIDES).padStart(2, "0")}`;

  return new ImageResponse(
    <div
      style={{
        backgroundColor: colors.bg,
        color: colors.fg,
        fontFamily: "Glide, system-ui, sans-serif",
      }}
      tw="flex flex-col w-full h-full p-[72px] justify-between"
    >
      <div tw="flex w-full justify-between items-center">
        <div
          style={{
            border: `1.5px solid ${colors.fg}`,
            color: colors.fg,
            letterSpacing: "0.18em",
          }}
          tw="flex items-center text-[16px] font-semibold uppercase rounded-full px-5 py-[10px]"
        >
          {eyebrow}
        </div>
        <div
          style={{ color: colors.fgSoft, letterSpacing: "0.18em" }}
          tw="flex text-[16px] font-semibold uppercase"
        >
          {counter}
        </div>
      </div>

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

      <div
        style={{
          borderTop: `1px solid ${colors.hairline}`,
          color: colors.fgSoft,
        }}
        tw="flex w-full items-end justify-between text-[22px] pt-6"
      >
        <div style={{ color: colors.fg }} tw="flex font-semibold">
          Matthew Blode
        </div>
        <div tw="flex">
          {options.slideNumber === undefined
            ? "Strata Sync, Blode UI, Agent Skills, and the rest of the stack."
            : "Care Made Easy"}
        </div>
      </div>
    </div>,
    {
      fonts,
      height: ogImageSize.height,
      width: ogImageSize.width,
    },
  );
}
