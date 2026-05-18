import { cn } from "@/lib/utils";

interface NumeralProps {
  value: number | string;
  className?: string;
}

/** Oversized numeric set in `--fg-soft`, used as marginalia. */
export function Numeral({ value, className }: NumeralProps) {
  const formatted = typeof value === "number" ? String(value).padStart(2, "0") : value;
  return <span className={cn("honk-numeral", className)}>{formatted}</span>;
}
