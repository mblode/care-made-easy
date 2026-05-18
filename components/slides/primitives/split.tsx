import { cn } from "@/lib/utils";

type Ratio = "50/50" | "60/40" | "70/30" | "40/60" | "30/70";

interface SplitProps {
  left: React.ReactNode;
  right: React.ReactNode;
  ratio?: Ratio;
  divider?: boolean;
  className?: string;
}

const RATIO_CLASS: Record<Ratio, string> = {
  "50/50": "md:grid-cols-[1fr_1fr]",
  "60/40": "md:grid-cols-[3fr_2fr]",
  "70/30": "md:grid-cols-[7fr_3fr]",
  "40/60": "md:grid-cols-[2fr_3fr]",
  "30/70": "md:grid-cols-[3fr_7fr]",
};

/** Asymmetric two-column layout with optional vertical hairline. */
export function Split({ left, right, ratio = "50/50", divider = true, className }: SplitProps) {
  return (
    <div className={cn("grid w-full grid-cols-1 gap-8 md:gap-12", RATIO_CLASS[ratio], className)}>
      <div className="min-w-0">{left}</div>
      <div className={cn("min-w-0", divider && "md:border-l md:border-[var(--hairline)] md:pl-8")}>
        {right}
      </div>
    </div>
  );
}
