import { Display } from "@/components/slides/primitives/display";
import { Mark } from "@/components/slides/primitives/mark";
import { Numeral } from "@/components/slides/primitives/numeral";
import { SlideContainer } from "@/components/slides/slide-container";

const STEPS = [
  { n: 1, text: "Wrote the design doc" },
  { n: 2, text: "Fed it into Claude Code" },
  { n: 3, text: "Iterated the plan until every task ran autonomously" },
  { n: 4, text: "Loaded the right context, every time" },
  { n: 5, text: "MCPs: Buildkite, Linear, Slack, RFC doc" },
  { n: 6, text: "Right model per task. Opus 4.7 (1M) for big lifts, Sonnet for migrations" },
];

export function Slide18WorkflowMru1() {
  return (
    <SlideContainer className="justify-between" palette="c">
      <header className="flex flex-col gap-[var(--slide-space-4)]">
        <Mark>A recommendations platform</Mark>
        <Display size="xl">From POC to production.</Display>
      </header>

      <ol className="flex flex-col">
        {STEPS.map((step, i) => (
          <li
            className="honk-fade-up grid grid-cols-[8rem_1fr] items-baseline gap-x-[var(--slide-space-6)] border-t border-[var(--hairline)] py-[var(--slide-space-3)] last:border-b"
            key={String(step.n)}
            style={{ animationDelay: `${i * 70 + 80}ms` }}
          >
            <Numeral className="leading-none" value={step.n} />
            <p className="slide-text-xl leading-snug">{step.text}</p>
          </li>
        ))}
      </ol>
    </SlideContainer>
  );
}
