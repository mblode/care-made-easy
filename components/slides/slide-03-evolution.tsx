import { Display } from "@/components/slides/primitives/display";
import { Mark } from "@/components/slides/primitives/mark";
import { SlideContainer } from "@/components/slides/slide-container";

const ERAS = [
  {
    label: "2022",
    title: "Chat",
    body: "ChatGPT (Nov '22), GPT-4 (Mar '23). Copy-paste. Context in your head.",
  },
  {
    label: "2024",
    title: "IDE assistants",
    body: "Cursor (Mar '23), Copilot Chat (Jul '23). Single-file edits.",
  },
  {
    label: "Early 2025",
    title: "Agents",
    body: "Devin (Mar '24), Claude Code (Feb '25). Real PRs.",
  },
  {
    label: "Late 2025",
    title: "Routines & MCPs",
    body: "MCP (Nov '24). Always-on agents. PRs while you sleep.",
  },
  {
    label: "2026",
    title: "Multi-agent swarms",
    body: "cmux, worktrees. 20 branches in parallel.",
  },
];

export function Slide03Evolution() {
  return (
    <SlideContainer className="justify-between" palette="b">
      <header className="flex flex-col gap-[var(--slide-space-4)]">
        <Mark>Three years, fast-forwarded</Mark>
        <Display size="xl">From copy-paste to swarms.</Display>
      </header>

      <div className="flex flex-col gap-[var(--slide-space-6)]">
        {/* Year row */}
        <div className="hidden grid-cols-5 md:grid">
          {ERAS.map((era, i) => (
            <span
              className="honk-fade-up slide-text-xs tracking-[0.18em] uppercase"
              key={era.label}
              style={
                {
                  color: "var(--fg-soft)",
                  animationDelay: `${i * 70 + 80}ms`,
                } as React.CSSProperties
              }
            >
              {era.label}
            </span>
          ))}
        </div>

        {/* Track row — horizontal hairline with dots */}
        <div className="relative hidden h-[10px] md:block">
          <div
            className="absolute inset-x-0 top-1/2 h-px origin-left"
            style={{
              background: "var(--hairline)",
              animation: "timeline-draw 720ms cubic-bezier(0.6, 0, 0, 1) both",
              animationDelay: "120ms",
            }}
          />
          <div className="grid grid-cols-5">
            {ERAS.map((era, i) => (
              <div className="relative flex h-[10px] items-center" key={era.label}>
                <span
                  className="honk-fade-up block h-[10px] w-[10px] rounded-full"
                  style={{
                    background: "var(--fg)",
                    boxShadow: "0 0 0 4px var(--bg)",
                    animationDelay: `${i * 70 + 200}ms`,
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Content row */}
        <div className="grid grid-cols-1 md:grid-cols-5">
          {ERAS.map((era, i) => (
            <div
              className="honk-fade-up flex flex-col gap-[var(--slide-space-3)] border-t border-[var(--hairline)] py-[var(--slide-space-5)] md:border-t-0 md:py-0 md:pr-[var(--slide-space-4)]"
              key={era.label}
              style={{ animationDelay: `${i * 70 + 260}ms` }}
            >
              {/* Mobile-only year label, since the timeline goes vertical */}
              <span
                className="slide-text-xs tracking-[0.18em] uppercase md:hidden"
                style={{ color: "var(--fg-soft)" }}
              >
                {era.label}
              </span>
              <h3 className="font-heading slide-text-2xl leading-tight">{era.title}</h3>
              <p className="slide-text-sm" style={{ color: "var(--fg-soft)" }}>
                {era.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </SlideContainer>
  );
}
