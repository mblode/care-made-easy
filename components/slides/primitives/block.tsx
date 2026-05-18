import { cn } from "@/lib/utils";

type Tone = "outline" | "plain" | "solid";

interface BlockProps {
  children: React.ReactNode;
  tone?: Tone;
  className?: string;
}

/** Bordered region — replaces the shadcn Card on slides. */
export function Block({ children, tone = "outline", className }: BlockProps) {
  return (
    <div className={cn("honk-block", className)} data-tone={tone}>
      {children}
    </div>
  );
}
