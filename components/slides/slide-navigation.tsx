"use client";

import { ChevronLeftIcon, ChevronRightIcon } from "blode-icons-react";
import { useRouter } from "next/navigation";
import { useCallback } from "react";
import { useHotkeys } from "react-hotkeys-hook";
import { Button } from "@/components/ui/button";
import type { Palette } from "@/lib/slides";

interface SlideNavigationProps {
  currentSlide: number;
  totalSlides: number;
  palette: Palette;
  children: React.ReactNode;
}

const getSlideUrl = (slideNum: number) => (slideNum === 1 ? "/" : `/${slideNum}`);

export function SlideNavigation({
  currentSlide,
  totalSlides,
  palette,
  children,
}: SlideNavigationProps) {
  const router = useRouter();

  const goToSlide = useCallback(
    (slideNum: number) => {
      if (slideNum >= 1 && slideNum <= totalSlides) {
        router.push(getSlideUrl(slideNum), { scroll: false });
      }
    },
    [router, totalSlides],
  );

  const goNext = useCallback(() => {
    goToSlide(currentSlide + 1);
  }, [currentSlide, goToSlide]);

  const goPrev = useCallback(() => {
    goToSlide(currentSlide - 1);
  }, [currentSlide, goToSlide]);

  useHotkeys("right", goNext, { preventDefault: true }, [goNext]);
  useHotkeys("left", goPrev, { preventDefault: true }, [goPrev]);

  return (
    <section aria-label="Slide navigation area" className="relative min-h-dvh">
      {children}
      <div
        className="-translate-x-1/2 fixed bottom-4 left-1/2 z-50 flex items-center gap-1 rounded-full p-1 font-medium shadow-[0_8px_28px_rgba(0,0,0,0.22),0_2px_6px_rgba(0,0,0,0.16)]"
        data-palette={palette}
        data-slide-nav
        style={{
          background: "var(--fg)",
          color: "var(--bg)",
        }}
      >
        <Button
          aria-label="Previous slide"
          className="cursor-pointer touch-manipulation rounded-full text-[var(--bg)] hover:bg-[color-mix(in_oklab,var(--bg)_12%,transparent)] hover:text-[var(--bg)] active:scale-[0.93]"
          disabled={currentSlide <= 1}
          onClick={goPrev}
          size="sm"
          variant="ghost"
        >
          <ChevronLeftIcon aria-hidden="true" className="size-4" />
        </Button>
        <span
          aria-live="polite"
          className="min-w-[4rem] text-center font-sans text-[var(--bg)] text-sm tabular-nums opacity-80"
        >
          <span className="sr-only">Slide </span>
          {currentSlide}
          <span className="sr-only"> of </span>
          <span aria-hidden="true"> / </span>
          {totalSlides}
        </span>
        <Button
          aria-label="Next slide"
          className="cursor-pointer touch-manipulation rounded-full text-[var(--bg)] hover:bg-[color-mix(in_oklab,var(--bg)_12%,transparent)] hover:text-[var(--bg)] active:scale-[0.93]"
          disabled={currentSlide >= totalSlides}
          onClick={goNext}
          size="sm"
          variant="ghost"
        >
          <ChevronRightIcon aria-hidden="true" className="size-4" />
        </Button>
      </div>
    </section>
  );
}
