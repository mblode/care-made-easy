"use client";

import type { CSSProperties } from "react";
import { useState } from "react";
import { Slider as SliderPrimitive } from "@base-ui/react/slider";

const PRESETS = [
  { weight: 400, label: "Regular" },
  { weight: 500, label: "Medium" },
  { weight: 700, label: "Bold" },
  { weight: 900, label: "Black" },
] as const;

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
              getAriaValueText={(_, value) => {
                const preset = PRESETS.find((p) => p.weight === value);
                return preset ? `${value} ${preset.label}` : String(value);
              }}
            />
          </SliderPrimitive.Control>
        </SliderPrimitive.Root>

        <div className="grid grid-cols-2 gap-[var(--slide-space-2)] md:grid-cols-4">
          {PRESETS.map(({ weight: w, label }) => (
            <button
              aria-pressed={weight === w}
              className="rounded-[var(--slide-radius-md)] border border-[var(--hairline)] px-[var(--slide-space-3)] py-[var(--slide-space-2)] slide-text-sm transition-colors"
              key={w}
              onClick={() => setWeight(w)}
              style={
                weight === w
                  ? ({ background: "var(--fg)", color: "var(--bg)" } as CSSProperties)
                  : undefined
              }
              type="button"
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      <div className="border-t border-[var(--hairline)] pt-[var(--slide-space-5)]">
        <p
          className="font-heading slide-text-6xl leading-[1.05] tracking-[-0.03em]"
          style={{ fontWeight: weight }}
        >
          Glide variable font
        </p>
        <p
          className="mt-[var(--slide-space-3)] max-w-[40ch] font-heading text-[var(--fg-soft)] slide-text-2xl leading-[1.3]"
          style={{ fontWeight: weight }}
        >
          The quick brown fox jumps over the lazy dog. 0123456789.
        </p>
      </div>
    </div>
  );
}
