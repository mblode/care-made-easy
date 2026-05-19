"use client";

import { useState } from "react";
import { Slider as SliderPrimitive } from "@base-ui/react/slider";

export function GlidePlayground() {
  const [weight, setWeight] = useState(700);

  return (
    <div className="flex flex-col gap-[var(--slide-space-6)]">
      <div className="flex flex-col gap-[var(--slide-space-4)]">
        <div className="flex items-baseline justify-between">
          <span className="slide-text-base text-[var(--fg-soft)]">Weight</span>
          <span
            className="font-heading slide-text-3xl tabular-nums leading-[1.1]"
            style={{ fontWeight: weight }}
          >
            {weight}
          </span>
        </div>

        <SliderPrimitive.Root
          aria-label="Font weight"
          className="w-full"
          max={900}
          min={400}
          onValueChange={(v) => setWeight(Array.isArray(v) ? v[0] : v)}
          step={1}
          value={[weight]}
        >
          <SliderPrimitive.Control className="relative flex h-12 w-full cursor-grab touch-none select-none items-center">
            <SliderPrimitive.Track className="relative h-3 w-full grow overflow-hidden rounded-full bg-[var(--hairline)]">
              <SliderPrimitive.Indicator className="absolute h-full bg-[var(--fg)]" />
            </SliderPrimitive.Track>
            <SliderPrimitive.Thumb
              className="block size-7 rounded-full border border-[var(--hairline)] bg-[var(--bg)] shadow-lg transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--fg)]"
              getAriaValueText={(_, value) => String(value)}
            />
          </SliderPrimitive.Control>
        </SliderPrimitive.Root>
      </div>

      <div className="border-t border-[var(--hairline)] pt-[var(--slide-space-5)]">
        <p
          className="font-heading slide-text-6xl leading-[1.05] tracking-[-0.03em]"
          style={{ fontWeight: weight }}
        >
          Glide variable font
        </p>
        <p
          className="mt-[var(--slide-space-3)] font-heading text-[var(--fg-soft)] slide-text-2xl leading-[1.3]"
          style={{ fontWeight: weight }}
        >
          The quick brown fox jumps over the lazy dog. 0123456789.
        </p>
      </div>
    </div>
  );
}
