import { DeckOutline } from "@/components/slides/deck-outline";
import { ZoneBreadcrumb } from "@/components/zone-breadcrumb";
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

      {/*
        A real `contentinfo` landmark, on the root only.

        The credit and the /projects link both existed already, but they lived
        in slide content: the credit on the title card, /projects on the "About
        me" slide, which the root does not render. Slide chrome is not a
        landmark, and a link the root never paints is not an edge.

        blode.co and blode.co/projects are this same origin behind a rewrite, so
        both are internal links: same tab, and no rel="noopener noreferrer",
        which only means something cross-origin. See
        blode-co/apps/web/.claude/knowledge/zone-conventions.md.
      */}
      <div className="border-foreground/15 border-t bg-background px-6 py-8 text-foreground">
        <div className="mx-auto flex w-full max-w-2xl flex-col gap-4">
          {/* `product` matches the third crumb in layout.tsx word for word:
              Google reads a mismatch between the visible trail and the markup
              as an error. */}
          <ZoneBreadcrumb product="Care made easy" />
          <footer className="flex flex-wrap items-center gap-x-3 gap-y-1 text-foreground/65 text-sm">
            <span>
              Crafted by{" "}
              <a
                className="underline underline-offset-2 hover:text-foreground"
                href="https://blode.co"
                rel="author"
              >
                Matthew Blode
              </a>
            </span>
          </footer>
        </div>
      </div>
    </>
  );
}
