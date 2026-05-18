import { Display } from "@/components/slides/primitives/display";
import { Mark } from "@/components/slides/primitives/mark";
import { SlideContainer } from "@/components/slides/slide-container";

export function Slide07Prompt() {
  return (
    <SlideContainer className="justify-between" palette="e">
      <Mark>Default prompt</Mark>

      <blockquote>
        <Display as="p" size="xl" className="max-w-[22ch]">
          &ldquo;Do extensive research. Make a plan with phases and todos you can tick off. Use a
          swarm of parallel subagents and teams.&rdquo;
        </Display>
      </blockquote>

      <p className="slide-text-base" style={{ color: "var(--fg-soft)" }}>
        Matthew
      </p>
    </SlideContainer>
  );
}
