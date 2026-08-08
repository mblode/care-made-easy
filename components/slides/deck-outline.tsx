import Link from "next/link";
import { DECK_SUMMARY, DECK_TITLE, SLIDES } from "@/lib/slides";

/**
 * Slide outline, rendered on the deck root only.
 *
 * The root is the one URL in this deck that search engines index: every
 * `/<n>` slide route is `noindex` because a single slide is thin and
 * near-duplicate of its neighbours. That leaves the root's own indexable
 * content to whatever slide 1 happens to be — a title card. This outline
 * gives the root a real summary of the talk and a keyboard-free way to jump
 * into it.
 *
 * Deliberately visible rather than `sr-only`: a hidden block of slide titles
 * is a cloaking signal, and the outline is useful to a reader on its own.
 */
export function DeckOutline() {
  return (
    <section
      aria-label="Slide outline"
      // Opacity off the foreground rather than --border/--muted-foreground, so
      // the rule and the secondary text stay in the deck's warm cream rather
      // than the neutral grey the shared chrome ramp uses.
      className="border-foreground/15 border-t bg-background px-6 py-12 text-foreground"
    >
      <div className="mx-auto flex w-full max-w-2xl flex-col gap-6">
        <div className="flex flex-col gap-2">
          <h2 className="font-semibold text-2xl">{DECK_TITLE}</h2>
          <p className="text-foreground/65">{DECK_SUMMARY}</p>
        </div>
        <ol className="flex flex-col gap-1">
          {SLIDES.map((slide, index) => (
            <li key={slide.slug}>
              {/* next/link, not a raw anchor: only Link prefixes the
                  `/care` basePath, so a raw href would escape the zone. */}
              <Link
                className="flex gap-3 rounded py-1 underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2"
                href={index === 0 ? "/" : `/${index + 1}`}
              >
                <span className="text-foreground/65 tabular-nums">{index + 1}</span>
                <span>{slide.title}</span>
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
