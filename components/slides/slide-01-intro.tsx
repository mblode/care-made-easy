import { Display } from "@/components/slides/primitives/display";
import { Mark } from "@/components/slides/primitives/mark";
import { SlideContainer } from "@/components/slides/slide-container";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function Slide01Intro() {
  return (
    <SlideContainer className="justify-between" palette="e">
      <header className="slide-mt-6 flex flex-col gap-[var(--slide-space-4)]">
        <Mark>Unblocking yourself · 2026</Mark>
        <Display className="max-w-[18ch]" size="2xl">
          Unblocking yourself
          <br />
          with AI.
        </Display>
        <p className="max-w-[40ch] slide-text-lg" style={{ color: "var(--fg-soft)" }}>
          How we use Claude Code, Codex, and Devin.
        </p>
      </header>

      <div className="honk-fade-up flex items-end justify-between gap-8">
        <div className="flex flex-wrap items-center gap-x-6 gap-y-3 slide-text-base">
          <span className="flex items-center gap-2">
            <Avatar className="size-8">
              <AvatarImage alt="Matthew Blode" src="/profile.jpg" />
              <AvatarFallback>M</AvatarFallback>
            </Avatar>
            <a
              className="font-medium underline-offset-4 hover:underline"
              href="https://matthewblode.com"
              rel="noopener"
              target="_blank"
            >
              Matthew Blode
            </a>
          </span>
          <span style={{ color: "var(--fg-soft)" }}>+</span>
          <span className="flex items-center gap-2">
            <Avatar className="size-8">
              <AvatarImage alt="Mrudula Vysyaraju" src="/mru.jpg" />
              <AvatarFallback>M</AvatarFallback>
            </Avatar>
            <a
              className="font-medium underline-offset-4 hover:underline"
              href="https://www.linkedin.com/in/mrudulavysyaraju/"
              rel="noopener"
              target="_blank"
            >
              Mrudula Vysyaraju
            </a>
          </span>
        </div>
      </div>
    </SlideContainer>
  );
}
