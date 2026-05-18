import type { CSSProperties } from "react";
import { cn } from "@/lib/utils";

interface KineticListProps {
  children: React.ReactNode;
  className?: string;
  /** Starting stagger index — useful when stitching multiple lists together. */
  startIndex?: number;
}

interface KineticItemProps {
  children: React.ReactNode;
  index: number;
  className?: string;
}

/** Wrapper that staggers its direct children with `kinetic-rise`. */
export function KineticList({ children, className, startIndex = 0 }: KineticListProps) {
  const items = Array.isArray(children) ? children : [children];
  return (
    <ul className={cn("honk-stagger", className)}>
      {items.map((child, i) => (
        // biome-ignore lint/suspicious/noArrayIndexKey: stagger index is the identity here
        <li
          className="font-sans"
          key={i}
          style={{ "--stagger-i": startIndex + i } as CSSProperties}
        >
          {child}
        </li>
      ))}
    </ul>
  );
}

/** Used when the parent isn't a `<ul>` (e.g. grid items). */
export function KineticItem({ children, index, className }: KineticItemProps) {
  return (
    <div
      className={cn("honk-fade-up", className)}
      style={{ animationDelay: `${index * 50 + 80}ms` }}
    >
      {children}
    </div>
  );
}
