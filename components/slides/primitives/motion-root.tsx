"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

interface MotionRootProps {
  slideKey: string | number;
  children: React.ReactNode;
}

export function MotionRoot({ slideKey, children }: MotionRootProps) {
  const pathname = usePathname();
  const shouldReduceMotion = useReducedMotion();
  const prevSlide = useRef<number>(typeof slideKey === "number" ? slideKey : 1);

  const current = typeof slideKey === "number" ? slideKey : Number.parseInt(String(slideKey), 10);
  const direction = current >= prevSlide.current ? 1 : -1;

  useEffect(() => {
    prevSlide.current = current;
  }, [current]);

  const transition = shouldReduceMotion
    ? { duration: 0.01 }
    : { duration: 0.36, ease: [0.6, 0, 0, 1] as const };

  return (
    <AnimatePresence initial={false} mode="sync">
      <motion.div
        animate={{ opacity: 1, x: 0 }}
        className="min-h-dvh"
        exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, x: -direction * 32 }}
        initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, x: direction * 32 }}
        key={pathname}
        transition={transition}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
