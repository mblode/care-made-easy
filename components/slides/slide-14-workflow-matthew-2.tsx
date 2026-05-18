import { Mark } from "@/components/slides/primitives/mark";
import { Numeral } from "@/components/slides/primitives/numeral";
import { SlideContainer } from "@/components/slides/slide-container";

const LANES = [
  {
    body: "Each ticket → phased todos.",
    n: "5",
    title: "Claude plan mode",
  },
  {
    body: "Execute in Claude or hand to Codex. Draft PRs.",
    n: "6",
    title: "Execute → draft PR",
  },
  {
    body: "Polls Devin/Codex/Cursor. Merges on green.",
    n: "7",
    title: "babysit-pr",
  },
];

export function Slide14WorkflowMatthew2() {
  return (
    <SlideContainer className="justify-between" palette="b">
      <Mark>Ship in parallel</Mark>

      <div className="grid grid-cols-1 gap-[var(--slide-space-6)] md:grid-cols-3 md:gap-[var(--slide-space-8)]">
        {LANES.map((lane, i) => (
          <article
            className="honk-fade-up flex flex-col gap-[var(--slide-space-4)] border-[var(--hairline)] border-l pl-[var(--slide-space-5)]"
            key={lane.n}
            style={{ animationDelay: `${i * 80 + 80}ms` }}
          >
            <Numeral className="leading-none" value={lane.n} />
            <h3 className="font-heading slide-text-3xl leading-tight">{lane.title}</h3>
            <p className="slide-text-base" style={{ color: "var(--fg-soft)" }}>
              {lane.body}
            </p>
          </article>
        ))}
      </div>
    </SlideContainer>
  );
}
