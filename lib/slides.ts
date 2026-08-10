export type Palette =
  | "a"
  | "b"
  | "c"
  | "d"
  | "e"
  | "glide"
  | "stratasync"
  | "blodeui"
  | "stylecapture"
  | "allmd"
  | "blodemd"
  | "diffhub";

export const SLIDES = [
  { slug: "intro", title: "Care made easy", palette: "e" },
  { slug: "about", title: "Matthew Blode", palette: "d" },
  { slug: "carelessness", title: "You can sense carelessness", palette: "e" },
  { slug: "done-bear", title: "Every layer built on open source", palette: "c" },
  { slug: "not-a-list", title: "The list is the smallest part", palette: "c" },
  { slug: "thesis", title: "The bottleneck has changed", palette: "e" },
  { slug: "stack-map", title: "Introducing the Blode Stack", palette: "b" },
  {
    slug: "strata-sync",
    title: "With the right abstractions, you get a lot for free",
    palette: "stratasync",
  },
  { slug: "sync-demo", title: "Apps that just work", palette: "stratasync" },
  { slug: "glide", title: "Your own typeface", palette: "glide" },
  { slug: "blode-icons", title: "3,754 icons", palette: "e" },
  { slug: "blode-ui", title: "UI you own", palette: "blodeui" },
  { slug: "style-capture", title: "Point at any UI", palette: "stylecapture" },
  { slug: "agent-skills", title: "23 skills", palette: "b" },
  { slug: "allmd", title: "Turn the whole universe into markdown", palette: "allmd" },
  { slug: "blodemd", title: "The knowledge layer your AI runs on", palette: "blodemd" },
  { slug: "diffhub", title: "Review your branch in cmux", palette: "diffhub" },
  { slug: "spotlight-testing", title: "See changes without rebuilding", palette: "a" },
  { slug: "more-tools", title: "The rest of the toolkit", palette: "b" },
  { slug: "solve-your-own", title: "Build to solve your own problems", palette: "d" },
  { slug: "questions", title: "Questions?", palette: "e" },
] as const satisfies readonly {
  slug: string;
  title: string;
  palette: Palette;
}[];

export const TOTAL_SLIDES = SLIDES.length;

/** Deck-level copy, shared by the root metadata and the slide outline. */
export const DECK_TITLE = "Care made easy";
export const DECK_SUMMARY =
  "Agents made code cheap, so taste is the bottleneck now. A 22-slide deck on the open-source stack (Strata Sync, Blode UI, Agent Skills) behind Done Bear.";
