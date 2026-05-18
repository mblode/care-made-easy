import { Display } from "@/components/slides/primitives/display";
import { Mark } from "@/components/slides/primitives/mark";
import { SlideContainer } from "@/components/slides/slide-container";
import { Tweet } from "react-tweet";

export function Slide02StateOfAi() {
  return (
    <SlideContainer className="justify-between" palette="a">
      <header className="grid grid-cols-1 gap-[var(--slide-space-6)] md:grid-cols-[7fr_5fr]">
        <div className="flex flex-col gap-[var(--slide-space-4)]">
          <Mark>State of AI · 2026</Mark>
          <Display size="xl">
            &ldquo;Pretty much 100% of our code is written by Claude Code&rdquo;
          </Display>
        </div>
        <div className="self-end">
          <Tweet id="2015979257038831967" />
        </div>
      </header>
    </SlideContainer>
  );
}
