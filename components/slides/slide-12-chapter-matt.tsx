import { Display } from "@/components/slides/primitives/display";
import { Mark } from "@/components/slides/primitives/mark";
import { Numeral } from "@/components/slides/primitives/numeral";
import { SlideContainer } from "@/components/slides/slide-container";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function Slide12ChapterMatt() {
  return (
    <SlideContainer className="justify-between" palette="b">
      <div className="flex items-start justify-between gap-12">
        <Mark>Chapter 01</Mark>
        <Numeral className="opacity-60" value="01" />
      </div>

      <div className="flex flex-col gap-[var(--slide-space-6)]">
        <Display size="huge">Matt&rsquo;s workflow.</Display>
        <p className="max-w-[40ch] slide-text-xl" style={{ color: "var(--fg-soft)" }}>
          20 hours in parallel.
        </p>
      </div>

      <div className="flex items-center gap-3 slide-text-base">
        <Avatar className="size-10">
          <AvatarImage alt="Matthew Blode" src="/profile.jpg" />
          <AvatarFallback>M</AvatarFallback>
        </Avatar>
        <span className="font-medium">Matthew Blode</span>
      </div>
    </SlideContainer>
  );
}
