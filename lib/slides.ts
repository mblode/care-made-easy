export type Palette = "a" | "b" | "c" | "d" | "e";

export const SLIDES = [
  { slug: "intro", title: "Blode Stack", palette: "e" },
  { slug: "about", title: "Build for an audience of one", palette: "b" },
  { slug: "full-stack", title: "Small tools became a stack", palette: "b" },
  { slug: "done-bear", title: "Done Bear is the demo", palette: "c" },
  { slug: "live-demo", title: "Open Done Bear", palette: "c" },
  { slug: "not-a-list", title: "The list is the smallest part", palette: "a" },
  { slug: "thesis", title: "The bottleneck has changed", palette: "e" },
  { slug: "stack-map", title: "The stack is four rails", palette: "d" },
  { slug: "strata-sync", title: "Sync is where demos become products", palette: "d" },
  { slug: "surfaces", title: "Done Bear lives on every surface", palette: "c" },
  { slug: "glide", title: "Your own typeface", palette: "b" },
  { slug: "blode-icons", title: "3,754 icons", palette: "e" },
  { slug: "blode-ui", title: "69 components", palette: "a" },
  { slug: "style-capture", title: "Give the agent evidence", palette: "c" },
  { slug: "agent-skills", title: "Package the way you work", palette: "b" },
  { slug: "markdown-layer", title: "Context starts as markdown", palette: "d" },
  { slug: "diffhub", title: "See every diff", palette: "e" },
  { slug: "spotlight-testing", title: "Test without rebuilding", palette: "a" },
  { slug: "build-order", title: "Build the primitives before the screens", palette: "d" },
  { slug: "takeaways", title: "Better rails make better agents", palette: "e" },
  { slug: "questions", title: "Questions?", palette: "e" },
] as const satisfies readonly {
  slug: string;
  title: string;
  palette: Palette;
}[];

export const TOTAL_SLIDES = SLIDES.length;
