import type { Palette } from "@/lib/slides";
import { cn } from "@/lib/utils";

interface StageProps {
  children: React.ReactNode;
  palette: Palette;
  className?: string;
}

/**
 * Full-bleed coloured screen. One palette per slide, no card-grid container.
 * Sets `--bg`, `--fg`, `--fg-soft`, `--hairline` via `data-palette`.
 */
export function Stage({ children, palette, className }: StageProps) {
  return (
    <div
      className={cn(
        "slide relative isolate flex min-h-dvh flex-col overflow-hidden",
        "bg-[var(--bg)] font-sans text-[var(--fg)]",
        className,
      )}
      data-palette={palette}
    >
      {children}
    </div>
  );
}
