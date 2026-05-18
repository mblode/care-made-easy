import type { CSSProperties } from "react";
import { Display } from "@/components/slides/primitives/display";
import { Mark } from "@/components/slides/primitives/mark";
import { SlideContainer } from "@/components/slides/slide-container";

const GROUPS = [
  {
    items: ["AGENTS.md per repo", "SkillMD instructions", "team-knowledge"],
    label: "Codify your taste",
  },
  {
    items: [
      "babysit-pr",
      "linear-worktree",
      "design-system (UI library)",
      "allmd",
      "spotlight-testing",
      "/simplify",
    ],
    label: "Custom skills I use daily",
  },
  {
    items: ["Chrome extensions", "Custom CLIs", "Editor automations"],
    label: "Tools beyond MCPs",
  },
];

export function Slide15SkillsGuardrails() {
  return (
    <SlideContainer className="justify-between" palette="b">
      <header className="flex flex-col gap-[var(--slide-space-4)]">
        <Mark>Skills & guardrails</Mark>
        <Display size="xl">Codify your taste.</Display>
      </header>

      <div className="grid grid-cols-1 gap-0 md:grid-cols-3">
        {GROUPS.map((group, gi) => (
          <div
            className="honk-fade-up flex flex-col gap-[var(--slide-space-4)] border-t border-[var(--hairline)] py-[var(--slide-space-5)] md:border-t-0 md:border-l md:px-[var(--slide-space-5)] md:first:border-l-0 md:first:pl-0 md:last:pr-0"
            key={group.label}
            style={{ animationDelay: `${gi * 90 + 80}ms` }}
          >
            <Mark>{group.label}</Mark>
            <ul className="honk-stagger flex flex-col gap-[var(--slide-space-2)] slide-text-base">
              {group.items.map((item, i) => (
                <li key={item} style={{ "--stagger-i": i } as CSSProperties}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <p
        className="border-t border-[var(--hairline)] pt-[var(--slide-space-4)] slide-text-base"
        style={{ color: "var(--fg-soft)" }}
      >
        Steal them:{" "}
        <a
          className="underline"
          href="https://github.com/mblode/agent-skills"
          rel="noopener"
          style={{ color: "var(--fg)" }}
          target="_blank"
        >
          github.com/mblode/agent-skills
        </a>
      </p>
    </SlideContainer>
  );
}
