import { DeckOutline } from "@/components/slides/deck-outline";
import SlidePage from "./[slide]/page";

const FIRST_SLIDE_PARAMS = Promise.resolve({ slide: "1" });

/**
 * No `generateMetadata` here on purpose.
 *
 * This used to delegate to `[slide]/page.tsx` with slide 1, which gave the deck
 * root a title card's title, a "Slide 1 of N" description, and — now that the
 * slide routes are `noindex` — would inherit that too. Falling through to the
 * layout instead gives the root the deck-level title, description, canonical,
 * and `index: true` that `layout.tsx` already defines.
 */
export default function Home() {
  return (
    <>
      <SlidePage params={FIRST_SLIDE_PARAMS} />
      <DeckOutline />
    </>
  );
}
