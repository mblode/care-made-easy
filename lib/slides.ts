export type Palette = "a" | "b" | "c" | "d" | "e";
export type Presenter = "matt" | "mru" | "both";

export const SLIDES = [
  { slug: "intro", title: "Unblocking yourself with AI", palette: "e", presenter: "both" },
  {
    slug: "state-of-ai",
    title: "90% of Claude Code's code is written by Claude Code",
    palette: "a",
    presenter: "mru",
  },
  {
    slug: "evolution",
    title: "Three years of AI tooling, fast-forwarded",
    palette: "b",
    presenter: "mru",
  },
  {
    slug: "bottlenecks",
    title: "Coding isn't the bottleneck anymore",
    palette: "e",
    presenter: "matt",
  },
  {
    slug: "frameworks",
    title: "How we break down a problem",
    palette: "c",
    presenter: "matt",
  },
  { slug: "prompt", title: "Default prompt", palette: "e", presenter: "matt" },
  {
    slug: "models",
    title: "Plan in Claude. Execute in Codex.",
    palette: "d",
    presenter: "matt",
  },
  { slug: "tooling", title: "CLI or MCP, by job", palette: "b", presenter: "matt" },
  {
    slug: "chapter-matt",
    title: "Chapter 1: Matt's workflow",
    palette: "b",
    presenter: "matt",
  },
  {
    slug: "workflow-matthew-1",
    title: "20 Slack bugs: capture context",
    palette: "b",
    presenter: "matt",
  },
  {
    slug: "workflow-matthew-2",
    title: "20 Slack bugs: ship in parallel",
    palette: "b",
    presenter: "matt",
  },
  {
    slug: "matt-quotes",
    title: "Overnight runs and agents reviewing agents",
    palette: "b",
    presenter: "matt",
  },
  {
    slug: "skills-guardrails",
    title: "Skills, role sets, and guardrails",
    palette: "b",
    presenter: "matt",
  },
  { slug: "ui-skills", title: "How I do frontend", palette: "b", presenter: "matt" },
  {
    slug: "chapter-mru",
    title: "Chapter 2: Mru's workflow",
    palette: "c",
    presenter: "mru",
  },
  {
    slug: "workflow-mru-1",
    title: "A recommendations platform: from POC to production",
    palette: "c",
    presenter: "mru",
  },
  {
    slug: "workflow-mru-2",
    title: "A recommendations platform: routines and metrics in the loop",
    palette: "c",
    presenter: "mru",
  },
  {
    slug: "whoopsies-2",
    title: "Whoopsies: humans haven't caught up",
    palette: "d",
    presenter: "matt",
  },
  { slug: "debugging-qa", title: "Put on the QA hat", palette: "d", presenter: "mru" },
  {
    slug: "ticket-quality",
    title: "Ownership: garbage in, garbage out",
    palette: "d",
    presenter: "matt",
  },
  { slug: "keep-up", title: "Where we look", palette: "d", presenter: "both" },
  {
    slug: "context-engineering",
    title: "Summary: Context beats code",
    palette: "d",
    presenter: "matt",
  },
  { slug: "closing", title: "Questions?", palette: "e", presenter: "both" },
] as const satisfies readonly {
  slug: string;
  title: string;
  palette: Palette;
  presenter: Presenter;
}[];

export const TOTAL_SLIDES = SLIDES.length;
