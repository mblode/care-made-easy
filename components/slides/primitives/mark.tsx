import { cn } from "@/lib/utils";

type Variant = "outline" | "solid";

interface MarkProps {
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
}

/** Pill label inspired by Honk's avatar rings. */
export function Mark({ children, variant = "outline", className }: MarkProps) {
  return (
    <span className={cn("honk-mark", className)} data-variant={variant}>
      {children}
    </span>
  );
}
