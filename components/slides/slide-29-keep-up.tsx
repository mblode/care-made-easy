import type React from "react";
import { Display } from "@/components/slides/primitives/display";
import { Mark } from "@/components/slides/primitives/mark";
import { SlideContainer } from "@/components/slides/slide-container";

interface Item {
  label: string;
  href?: string;
}

interface Group {
  label: string;
  items: Item[];
}

const GROUPS: Group[] = [
  {
    items: [
      { label: "X / Twitter" },
      { label: "TikTok" },
      { label: "Newsletters" },
      { label: "Hacker News" },
      { label: "WhatsApp groups" },
    ],
    label: "Channels",
  },
  {
    items: [
      { label: "Claude Code + plan mode" },
      { label: "Codex" },
      { label: "CMUX, Warp" },
      { label: "Linear, Slack, Datadog MCPs" },
    ],
    label: "Tools (daily drivers)",
  },
  {
    items: [
      {
        href: "https://github.com/mblode/agent-skills",
        label: "mblode/agent-skills",
      },
      {
        href: "https://github.com/mblode/agent-skills",
        label: "Design-system skill (UI components)",
      },
      { href: "https://allmd.blode.co/", label: "allmd.blode.co" },
      {
        href: "https://github.com/mblode/spotlight-testing",
        label: "mblode/spotlight-testing",
      },
    ],
    label: "Matt's skills & repos",
  },
];

export function Slide29KeepUp() {
  return (
    <SlideContainer className="justify-between" palette="d">
      <header className="flex flex-col gap-[var(--slide-space-4)]">
        <Mark>Keep up</Mark>
        <Display size="xl">Where we look.</Display>
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
                <li key={item.label} style={{ "--stagger-i": i } as React.CSSProperties}>
                  {item.href ? (
                    <a
                      className="underline decoration-[var(--hairline)] underline-offset-4 hover:decoration-[var(--fg)]"
                      href={item.href}
                      rel="noopener"
                      style={{ color: "var(--fg)" }}
                      target="_blank"
                    >
                      {item.label}
                    </a>
                  ) : (
                    item.label
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </SlideContainer>
  );
}
