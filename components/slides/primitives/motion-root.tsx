"use client";

import { AnimatePresence, motion } from "motion/react";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

interface MotionRootProps {
  slideKey: string | number;
  children: React.ReactNode;
}

/**
 * Wraps a slide. Crossfade with a small directional translate based on
 * whether we're moving forward or backward through the deck. Honors
 * `prefers-reduced-motion`.
 */
export function MotionRoot({ slideKey, children }: MotionRootProps) {
  const pathname = usePathname();
  const prevSlide = useRef<number>(typeof slideKey === "number" ? slideKey : 1);

  const current = typeof slideKey === "number" ? slideKey : Number.parseInt(String(slideKey), 10);
  const direction = current >= prevSlide.current ? 1 : -1;

  useEffect(() => {
    prevSlide.current = current;
  }, [current]);

  return (
    <AnimatePresence initial={false} mode="sync">
      <motion.div
        animate={{ opacity: 1, x: 0 }}
        className="min-h-dvh"
        exit={{ opacity: 0, x: -direction * 32 }}
        initial={{ opacity: 0, x: direction * 32 }}
        key={pathname}
        transition={{ duration: 0.36, ease: [0.6, 0, 0, 1] }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
