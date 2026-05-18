import { Display } from "@/components/slides/primitives/display";
import { Mark } from "@/components/slides/primitives/mark";
import { Numeral } from "@/components/slides/primitives/numeral";
import { SlideContainer } from "@/components/slides/slide-container";

const STEPS = [
  {
    body: "MCPs, Slack, design docs, the right repos.",
    n: "1",
    title: "Gather context",
  },
  {
    body: "Phases and todos you tick off.",
    n: "2",
    title: "Plan mode",
  },
  {
    body: "Break into independent, parallel tracks.",
    n: "3",
    title: "Decompose",
  },
  {
    body: "Worktrees + agents. Run a swarm.",
    n: "4",
    title: "Parallelize",
  },
  {
    body: "Poll PRs, triage comments, ship.",
    n: "5",
    title: "Babysit & merge",
  },
];

export function Slide06Frameworks() {
  return (
    <SlideContainer className="justify-between" palette="c">
      <header className="flex flex-col gap-[var(--slide-space-4)]">
        <Mark>Framework</Mark>
        <Display size="xl">How we break down a problem.</Display>
      </header>

      <ol className="flex flex-col">
        {STEPS.map((step, i) => (
          <li
            className="honk-fade-up grid grid-cols-1 items-baseline gap-x-[var(--slide-space-8)] gap-y-3 border-t border-[var(--hairline)] py-[var(--slide-space-6)] last:border-b md:grid-cols-[8rem_1fr_2fr]"
            key={step.n}
            style={{ animationDelay: `${i * 80 + 80}ms` }}
          >
            <Numeral className="leading-none" value={step.n} />
            <h3 className="font-heading slide-text-2xl leading-tight">{step.title}</h3>
            <p className="slide-text-base" style={{ color: "var(--fg-soft)" }}>
              {step.body}
            </p>
          </li>
        ))}
      </ol>
    </SlideContainer>
  );
}
