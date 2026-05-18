import { Display } from "@/components/slides/primitives/display";
import { Mark } from "@/components/slides/primitives/mark";
import { Numeral } from "@/components/slides/primitives/numeral";
import { SlideContainer } from "@/components/slides/slide-container";

const STEPS = [
  {
    body: "Pull comments via Slack MCP.",
    n: "1",
    title: "Slack MCP",
  },
  {
    body: "Linear MCP → 20 tickets, context attached.",
    n: "2",
    title: "Linear tickets",
  },
  {
    body: "20 isolated branches off main.",
    n: "3",
    title: "linear-worktree",
  },
  {
    body: "20 workspaces, one per ticket.",
    n: "4",
    title: "cmux × 20",
  },
];

export function Slide13WorkflowMatthew1() {
  return (
    <SlideContainer className="justify-between" palette="b">
      <header className="flex flex-col gap-[var(--slide-space-4)]">
        <Mark>Capture context</Mark>
        <Display size="xl">20 Slack bugs.</Display>
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
