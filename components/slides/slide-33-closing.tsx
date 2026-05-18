import Image from "next/image";
import { Display } from "@/components/slides/primitives/display";
import { Mark } from "@/components/slides/primitives/mark";
import { SlideContainer } from "@/components/slides/slide-container";
import { placeholderShimmer } from "@/lib/shimmer";

export function Slide33Closing() {
  return (
    <SlideContainer className="justify-between" palette="e">
      <Mark>Wrap</Mark>

      <div className="flex flex-col gap-[var(--slide-space-6)]">
        <Display size="2xl">Questions?</Display>

        <div className="flex items-center gap-3">
          <div className="-space-x-3 flex">
            <Image
              alt="Matthew Blode"
              className="h-10 w-10 rounded-full ring-2 ring-[var(--bg)]"
              height={40}
              placeholder={placeholderShimmer(40, 40)}
              quality={80}
              src="/profile.jpg"
              width={40}
            />
            <Image
              alt="Mrudula Vysyaraju"
              className="h-10 w-10 rounded-full ring-2 ring-[var(--bg)]"
              height={40}
              placeholder={placeholderShimmer(40, 40)}
              quality={80}
              src="/mru.jpg"
              width={40}
            />
          </div>
          <p className="font-medium">Matthew Blode + Mrudula Vysyaraju</p>
        </div>
      </div>
    </SlideContainer>
  );
}
