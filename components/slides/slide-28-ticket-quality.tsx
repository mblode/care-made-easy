import { Display } from "@/components/slides/primitives/display";
import { Mark } from "@/components/slides/primitives/mark";
import { SlideContainer } from "@/components/slides/slide-container";

const RULES = [
  {
    headline: "Own the code",
    body: "Every line ships with your name. The agent typed it; you signed it.",
  },
  {
    headline: "Focus on the plan",
    body: "Understand what's being built before you let it run.",
  },
  {
    headline: "Focus on the tests",
    body: "Tests are how you prove you understood the problem.",
  },
  {
    headline: "Don't offload your reasoning",
    body: "Review with intent. If you can't defend it, don't ship it.",
  },
];

export function Slide28TicketQuality() {
  return (
    <SlideContainer className="justify-between" palette="d">
      <header className="flex flex-col gap-[var(--slide-space-4)]">
        <Mark>Ownership</Mark>
        <Display size="xl">Garbage in, garbage out.</Display>
      </header>

      <ul className="flex flex-col">
        {RULES.map((rule, i) => (
          <li
            className="honk-fade-up grid grid-cols-1 items-baseline gap-x-[var(--slide-space-8)] gap-y-2 border-t border-[var(--hairline)] py-[var(--slide-space-5)] last:border-b md:grid-cols-[6rem_3fr_5fr]"
            key={rule.headline}
            style={{ animationDelay: `${i * 70 + 80}ms` }}
          >
            <span className="slide-text-sm tabular-nums" style={{ color: "var(--fg-soft)" }}>
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="font-heading slide-text-2xl leading-tight">{rule.headline}</h3>
            <p className="slide-text-base" style={{ color: "var(--fg-soft)" }}>
              {rule.body}
            </p>
          </li>
        ))}
      </ul>
    </SlideContainer>
  );
}
