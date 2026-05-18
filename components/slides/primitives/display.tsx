import { cn } from "@/lib/utils";

type Size = "md" | "lg" | "xl" | "2xl" | "huge";

interface DisplayProps {
  children: React.ReactNode;
  as?: "h1" | "h2" | "p" | "blockquote";
  size?: Size;
  className?: string;
}

const SIZE_CLASS: Record<Size, string> = {
  md: "slide-text-4xl",
  lg: "slide-text-5xl",
  xl: "slide-text-6xl",
  "2xl": "slide-text-7xl",
  huge: "slide-text-display",
};

/**
 * Kinetic display headline. Glide variable font animates weight/tracking
 * on enter (`display-settle` keyframes). Use sparingly — one per slide.
 */
export function Display({ children, as: As = "h1", size = "lg", className }: DisplayProps) {
  return <As className={cn("honk-display", SIZE_CLASS[size], className)}>{children}</As>;
}
