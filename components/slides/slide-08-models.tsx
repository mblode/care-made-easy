import { Block } from "@/components/slides/primitives/block";
import { Display } from "@/components/slides/primitives/display";
import { Mark } from "@/components/slides/primitives/mark";
import { SlideContainer } from "@/components/slides/slide-container";

const TOOLS = [
  {
    name: "Devin",
    role: "Research",
    variant: "solid" as const,
    bullets: ["Explore unknown codebases", "Long-running spikes", "Async, unblocks you"],
  },
  {
    name: "Claude Code",
    role: "Plan",
    variant: "plain" as const,
    bullets: ["Plan mode → phased todos", "Architecture & design", "All UI work"],
  },
  {
    name: "Codex",
    role: "Execute",
    variant: "solid" as const,
    bullets: ["Hand off the plan", "Heavy backend lifts", "Cheap parallelism"],
  },
  {
    name: "Claude Code",
    role: "Review",
    variant: "plain" as const,
    bullets: [
      "Skills: review-pr, security-review",
      "Audits the diff before merge",
      "Catches what humans miss",
    ],
  },
];

export function Slide08Models() {
  return (
    <SlideContainer className="justify-between" palette="d">
      <header className="flex flex-col gap-[var(--slide-space-4)]">
        <Mark>Three-tool loop</Mark>
        <Display size="xl">Research · Plan · Execute · Review</Display>
      </header>

      <div className="grid grid-cols-1 gap-0 md:grid-cols-4">
        {TOOLS.map((tool) => (
          <Block key={tool.role} tone={tool.variant === "solid" ? "solid" : "plain"}>
            <div className="flex flex-col gap-[var(--slide-space-5)] p-[var(--slide-space-6)]">
              <Mark variant={tool.variant === "solid" ? "solid" : undefined}>{tool.role}</Mark>
              <h3 className="font-heading slide-text-3xl leading-tight">{tool.name}</h3>
              <ul className="honk-stagger flex flex-col gap-[var(--slide-space-3)]">
                {tool.bullets.map((b, j) => (
                  <li
                    className="slide-text-lg"
                    key={b}
                    style={{ "--stagger-i": j } as React.CSSProperties}
                  >
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </Block>
        ))}
      </div>

      <p
        className="italic slide-text-base border-t border-[var(--hairline)] pt-[var(--slide-space-4)]"
        style={{ color: "var(--fg-soft)" }}
      >
        Codex is horrible at frontend UI. Keep that in Claude.
      </p>
    </SlideContainer>
  );
}
