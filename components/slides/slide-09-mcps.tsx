import type { CSSProperties } from "react";
import { Display } from "@/components/slides/primitives/display";
import { Mark } from "@/components/slides/primitives/mark";
import { Split } from "@/components/slides/primitives/split";
import { SlideContainer } from "@/components/slides/slide-container";

const COLUMNS = [
  {
    label: "CLIs",
    items: [
      { name: "gh", purpose: "git, PRs" },
      { name: "bk", purpose: "CI, Buildkite" },
      { name: "aws", purpose: "AWS resources" },
      { name: "allmd", purpose: "markdown converter" },
    ],
  },
  {
    label: "MCPs",
    items: [
      { name: "Linear", purpose: "tickets" },
      { name: "Datadog", purpose: "logs, metrics" },
      { name: "Slack", purpose: "threads" },
      { name: "Figma", purpose: "designs → code" },
      { name: "Notion", purpose: "docs, wiki" },
    ],
  },
];

export function Slide09Mcps() {
  const [clis, mcps] = COLUMNS;

  return (
    <SlideContainer className="justify-between" palette="b">
      <header className="flex flex-col gap-[var(--slide-space-4)]">
        <Mark>Tooling</Mark>
        <Display size="xl">Pick by job.</Display>
      </header>

      <Split
        left={
          <div className="flex flex-col gap-[var(--slide-space-5)]">
            <Mark>{clis.label}</Mark>
            <ul className="honk-stagger flex flex-col gap-[var(--slide-space-3)]">
              {clis.items.map((item, i) => (
                <li
                  className="slide-text-lg"
                  key={item.name}
                  style={{ "--stagger-i": i } as CSSProperties}
                >
                  <span className="font-heading">{item.name}</span>
                  <span style={{ color: "var(--fg-soft)" }}> · {item.purpose}</span>
                </li>
              ))}
            </ul>
          </div>
        }
        ratio="50/50"
        right={
          <div className="flex flex-col gap-[var(--slide-space-5)]">
            <Mark>{mcps.label}</Mark>
            <ul className="honk-stagger flex flex-col gap-[var(--slide-space-3)]">
              {mcps.items.map((item, i) => (
                <li
                  className="slide-text-lg"
                  key={item.name}
                  style={{ "--stagger-i": i } as CSSProperties}
                >
                  <span className="font-heading">{item.name}</span>
                  <span style={{ color: "var(--fg-soft)" }}> · {item.purpose}</span>
                </li>
              ))}
            </ul>
          </div>
        }
      />
    </SlideContainer>
  );
}
