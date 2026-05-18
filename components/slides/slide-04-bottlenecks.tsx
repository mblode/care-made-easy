import { Display } from "@/components/slides/primitives/display";
import { Mark } from "@/components/slides/primitives/mark";
import { Split } from "@/components/slides/primitives/split";
import { SlideContainer } from "@/components/slides/slide-container";

const OLD_BOTTLENECKS = [
  "Writing the code",
  "Boilerplate",
  "Looking up syntax",
  "Wiring scaffolding",
];

const NEW_BOTTLENECKS = [
  "Gathering context",
  "Writing & decomposing tickets",
  "Parallelizing the work",
  "Reviewing & merging",
];

export function Slide04Bottlenecks() {
  return (
    <SlideContainer className="justify-between" palette="e">
      <header className="flex flex-col gap-[var(--slide-space-4)]">
        <Mark>The work has changed</Mark>
        <Display size="xl">Coding isn't the bottleneck anymore.</Display>
      </header>

      <Split
        left={
          <div className="flex flex-col gap-[var(--slide-space-5)]">
            <Mark>Old bottleneck</Mark>
            <ul className="honk-stagger flex flex-col gap-[var(--slide-space-3)]">
              {OLD_BOTTLENECKS.map((item, i) => (
                <li
                  className="slide-text-xl line-through opacity-60"
                  key={item}
                  style={
                    {
                      "--stagger-i": i,
                      color: "var(--fg-soft)",
                    } as React.CSSProperties
                  }
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        }
        ratio="50/50"
        right={
          <div className="flex flex-col gap-[var(--slide-space-5)]">
            <Mark>New bottleneck</Mark>
            <ul className="honk-stagger flex flex-col gap-[var(--slide-space-3)]">
              {NEW_BOTTLENECKS.map((item, i) => (
                <li
                  className="slide-text-xl"
                  key={item}
                  style={{ "--stagger-i": i } as React.CSSProperties}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        }
      />
    </SlideContainer>
  );
}
