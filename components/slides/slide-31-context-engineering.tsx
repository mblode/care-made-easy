import { Display } from "@/components/slides/primitives/display";
import { Mark } from "@/components/slides/primitives/mark";
import { SlideContainer } from "@/components/slides/slide-container";

const TAKEAWAYS = [
  "Plan, execute, review. Pick the right tool for the job.",
  "Encode workflows as skills. Agents run them; you review.",
  "Spend your time on context, not code.",
];

export function Slide31ContextEngineering() {
  return (
    <SlideContainer className="justify-between" palette="d">
      <header className="flex flex-col gap-[var(--slide-space-4)]">
        <Mark>Summary</Mark>
        <Display className="max-w-[14ch]" size="2xl">
          Context beats code.
        </Display>
      </header>

      <ol className="flex flex-col">
        {TAKEAWAYS.map((text, i) => (
          <li
            className="honk-fade-up grid grid-cols-[5rem_1fr] items-baseline gap-x-[var(--slide-space-6)] border-t border-[var(--hairline)] py-[var(--slide-space-5)] last:border-b"
            key={text}
            style={{ animationDelay: `${i * 80 + 120}ms` }}
          >
            <span className="slide-text-sm tabular-nums" style={{ color: "var(--fg-soft)" }}>
              {String(i + 1).padStart(2, "0")}
            </span>
            <p className="font-heading slide-text-2xl leading-snug">{text}</p>
          </li>
        ))}
      </ol>
    </SlideContainer>
  );
}
