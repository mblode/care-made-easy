import { Display } from "@/components/slides/primitives/display";
import { Mark } from "@/components/slides/primitives/mark";
import { SlideContainer } from "@/components/slides/slide-container";

const PHASES = [
  {
    body: "Dumb questions answered fast. Claude has full repo context.",
    label: "Local",
  },
  {
    body: "Datadog MCP, log MCPs, screenshots. Agents see what you see.",
    label: "QA",
  },
  {
    body: "Failures and logs in-loop. Triage from the same chat window.",
    label: "Prod",
  },
];

export function Slide27DebuggingQa() {
  return (
    <SlideContainer className="justify-between" palette="d">
      <header className="flex flex-col gap-[var(--slide-space-4)]">
        <Mark>Debugging</Mark>
        <Display size="xl">Put on the QA hat.</Display>
      </header>

      <div className="grid grid-cols-1 gap-0 md:grid-cols-3">
        {PHASES.map((phase, i) => (
          <div
            className="honk-fade-up flex flex-col gap-[var(--slide-space-3)] border-t border-[var(--hairline)] py-[var(--slide-space-5)] md:border-t-0 md:border-l md:px-[var(--slide-space-5)] md:first:border-l-0 md:first:pl-0 md:last:pr-0"
            key={phase.label}
            style={{ animationDelay: `${i * 90 + 80}ms` }}
          >
            <span
              className="slide-text-xs tabular-nums tracking-[0.18em] uppercase"
              style={{ color: "var(--fg-soft)" }}
            >
              {String(i + 1).padStart(2, "0")}
            </span>
            <Display size="md">{phase.label}</Display>
            <p className="slide-text-base" style={{ color: "var(--fg-soft)" }}>
              {phase.body}
            </p>
          </div>
        ))}
      </div>
    </SlideContainer>
  );
}
