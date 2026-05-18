import { Display } from "@/components/slides/primitives/display";
import { Mark } from "@/components/slides/primitives/mark";
import { Numeral } from "@/components/slides/primitives/numeral";
import { SlideContainer } from "@/components/slides/slide-container";

const STEPS = [
  { n: 7, text: "Hourly Claude routine opens guardrailed PRs; Devin handles comments" },
  { n: 8, text: "Stamp workflow from the dev platform" },
  { n: 9, text: "Local → QA → prod, with auto-generated manual-QA walkthroughs" },
  { n: 10, text: "Instrumentation feeds signals agents can consume" },
  { n: 11, text: "Onboarding docs, design diagrams, and meeting notes as it goes" },
  { n: 12, text: "Dashboards and weekly Linear updates for stakeholders" },
];

export function Slide19WorkflowMru2() {
  return (
    <SlideContainer className="justify-between" palette="c">
      <header className="flex flex-col gap-[var(--slide-space-4)]">
        <Mark>A recommendations platform</Mark>
        <Display size="xl">Routines and metrics in the loop.</Display>
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
