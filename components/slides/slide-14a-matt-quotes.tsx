import { Display } from "@/components/slides/primitives/display";
import { Mark } from "@/components/slides/primitives/mark";
import { SlideContainer } from "@/components/slides/slide-container";

export function Slide14aMattQuotes() {
  return (
    <SlideContainer className="justify-center gap-[var(--slide-space-6)]" palette="b">
      <Mark>How it actually runs</Mark>

      <blockquote className="honk-fade-up">
        <Display as="p" className="max-w-[28ch]" size="md">
          &ldquo;Codex runs through the night. Claude Code plans and reviews. I triage the PRs over
          coffee.&rdquo;
        </Display>
      </blockquote>

      <p className="slide-text-base" style={{ color: "var(--fg-soft)" }}>
        Matthew
      </p>
    </SlideContainer>
  );
}
