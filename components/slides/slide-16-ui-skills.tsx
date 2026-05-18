import { Display } from "@/components/slides/primitives/display";
import { Mark } from "@/components/slides/primitives/mark";
import { SlideContainer } from "@/components/slides/slide-container";

const SKILLS = [
  {
    name: "/ui-design",
    purpose: "Lock visual direction",
    body: "Palette, type scale, layout. Before a component lands.",
  },
  {
    name: "/ui",
    purpose: "Build & iterate",
    body: "Compose. Tweak. Refine.",
  },
  {
    name: "/ui-audit",
    purpose: "Ship-ready review",
    body: "Accessibility, motion, microcopy. Pre-merge.",
  },
];

export function Slide16UiSkills() {
  return (
    <SlideContainer className="justify-between" palette="b">
      <header className="flex flex-col gap-[var(--slide-space-4)]">
        <Mark>How I do frontend</Mark>
        <Display size="xl">Three skills, one flow.</Display>
      </header>

      <div className="grid grid-cols-1 gap-0 md:grid-cols-3">
        {SKILLS.map((skill, gi) => (
          <div
            className="honk-fade-up flex flex-col gap-[var(--slide-space-4)] border-t border-[var(--hairline)] py-[var(--slide-space-5)] md:border-t-0 md:border-l md:px-[var(--slide-space-5)] md:first:border-l-0 md:first:pl-0 md:last:pr-0"
            key={skill.name}
            style={{ animationDelay: `${gi * 90 + 80}ms` }}
          >
            <Mark>{skill.purpose}</Mark>
            <h2 className="font-heading slide-text-2xl leading-tight">{skill.name}</h2>
            <div className="border-t border-[var(--hairline)]" />
            <p className="slide-text-base" style={{ color: "var(--fg-soft)" }}>
              {skill.body}
            </p>
          </div>
        ))}
      </div>
    </SlideContainer>
  );
}
