import { Display } from "@/components/slides/primitives/display";
import { Mark } from "@/components/slides/primitives/mark";
import { SlideContainer } from "@/components/slides/slide-container";

export function Slide25Whoopsies2() {
  return (
    <SlideContainer className="justify-between" palette="d">
      <Mark>Whoopsies · Humans haven&rsquo;t caught up</Mark>

      <blockquote>
        <Display as="p" className="max-w-[16ch]" size="2xl">
          &ldquo;I think my code chops have plummeted and there&rsquo;s no going back.&rdquo;
        </Display>
      </blockquote>

      <div className="honk-hairline" />
    </SlideContainer>
  );
}
