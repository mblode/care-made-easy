import type { CSSProperties } from "react";
import Image from "next/image";
import {
  BellIcon,
  CalendarIcon,
  CodeIcon,
  FolderIcon,
  GlobeIcon,
  HeartIcon,
  LayersTwoIcon,
  MailIcon,
  PlusIcon,
  SearchIcon,
  SettingsIcon,
  ShieldIcon,
  SparklesIcon,
  StarIcon,
  UserIcon,
  ZapIcon,
} from "blode-icons-react";
import { cn } from "@/lib/utils";
import { Display } from "@/components/slides/primitives/display";
import { Mark } from "@/components/slides/primitives/mark";
import { Numeral } from "@/components/slides/primitives/numeral";
import { QRCode } from "@/components/slides/qr-code";
import { SlideContainer } from "@/components/slides/slide-container";

const SURFACES = ["Web", "Desktop", "iOS", "Raycast", "CLI", "GraphQL", "MCP", "Skills"];

const SPECIMEN_WEIGHTS = [
  { weight: 400, label: "Regular" },
  { weight: 500, label: "Medium" },
  { weight: 600, label: "Semibold" },
  { weight: 700, label: "Bold" },
  { weight: 800, label: "Extrabold" },
  { weight: 900, label: "Black" },
] as const;

const ICON_GRID = [
  { Icon: SearchIcon, name: "Search" },
  { Icon: PlusIcon, name: "Plus" },
  { Icon: HeartIcon, name: "Heart" },
  { Icon: SettingsIcon, name: "Settings" },
  { Icon: BellIcon, name: "Bell" },
  { Icon: UserIcon, name: "User" },
  { Icon: MailIcon, name: "Mail" },
  { Icon: CalendarIcon, name: "Calendar" },
  { Icon: FolderIcon, name: "Folder" },
  { Icon: StarIcon, name: "Star" },
  { Icon: LayersTwoIcon, name: "Layers" },
  { Icon: ZapIcon, name: "Zap" },
  { Icon: ShieldIcon, name: "Shield" },
  { Icon: GlobeIcon, name: "Globe" },
  { Icon: CodeIcon, name: "Code" },
  { Icon: SparklesIcon, name: "Sparkles" },
] as const;

function SoftText({ children, className }: { children: React.ReactNode; className?: string }) {
  return <p className={cn("max-w-[34ch] text-[var(--fg-soft)]", className)}>{children}</p>;
}

function LogoTile({ body, name, src }: { body?: string; name: string; src?: string }) {
  return (
    <div className="honk-fade-up flex min-h-[11rem] flex-col justify-between gap-[var(--slide-space-5)] border-t border-[var(--hairline)] py-[var(--slide-space-5)] md:border-l md:border-t-0 md:px-[var(--slide-space-5)] md:first:border-l-0 md:first:pl-0">
      {src ? (
        <Image
          alt={name}
          className="size-14 rounded-[var(--slide-radius-md)] object-contain"
          height={72}
          src={src}
          width={72}
        />
      ) : (
        <span className="flex size-14 items-center justify-center rounded-[var(--slide-radius-md)] border border-[var(--hairline)] font-heading slide-text-lg">
          {name.slice(0, 1)}
        </span>
      )}
      <div className="flex flex-col gap-[var(--slide-space-2)]">
        <h2 className="font-heading slide-text-2xl leading-[1.05]">{name}</h2>
        {body ? <SoftText className="slide-text-base">{body}</SoftText> : null}
      </div>
    </div>
  );
}

function WordTile({ children }: { children: React.ReactNode }) {
  return (
    <div className="honk-fade-up flex min-h-[7.5rem] items-end overflow-hidden border-t border-[var(--hairline)] py-[var(--slide-space-4)]">
      <p className="font-heading slide-text-3xl leading-[1.05]">{children}</p>
    </div>
  );
}

function Screenshot({
  alt,
  className,
  objectPosition = "object-center",
  sizes = "(min-width: 768px) 50vw, 100vw",
  src,
}: {
  alt: string;
  className?: string;
  objectPosition?: string;
  sizes?: string;
  src: string;
}) {
  return (
    <div
      className={cn(
        "relative min-h-[18rem] overflow-hidden rounded-[var(--slide-radius-xl)] outline outline-1 -outline-offset-1 outline-[var(--hairline)]",
        className,
      )}
    >
      <Image
        alt={alt}
        className={cn("object-cover", objectPosition)}
        fill
        priority={false}
        sizes={sizes}
        src={src}
      />
    </div>
  );
}

export function SlideTitle() {
  return (
    <SlideContainer className="justify-between" palette="e">
      <header className="flex flex-col gap-[var(--slide-space-4)]">
        <Mark>Claude Code for Developers | Melbourne</Mark>
        <Display className="max-w-[12ch]" size="huge">
          Care made easy.
        </Display>
        <SoftText className="max-w-[34ch] slide-text-2xl">
          How to build a to-do list app in 2026.
        </SoftText>
      </header>

      <footer className="honk-fade-up flex flex-wrap items-end justify-between gap-[var(--slide-space-5)] border-t border-[var(--hairline)] pt-[var(--slide-space-5)]">
        <p className="font-heading slide-text-2xl leading-[1.05]">Matthew Blode</p>
        <SoftText className="slide-text-base">AI at Linktree | OpenAI Codex Ambassador</SoftText>
      </footer>
    </SlideContainer>
  );
}

export function SlideAbout() {
  return (
    <SlideContainer className="justify-between" palette="b">
      <header className="flex flex-col gap-[var(--slide-space-4)]">
        <Mark>About me</Mark>
        <Display className="max-w-[13ch]" size="2xl">
          Build for an audience of one.
        </Display>
      </header>

      <div className="grid gap-[var(--slide-space-6)] md:grid-cols-3">
        <WordTile>AI at Linktree</WordTile>
        <WordTile>Codex Ambassador</WordTile>
        <WordTile>Two startups, two exits</WordTile>
      </div>
    </SlideContainer>
  );
}

export function SlideCarelessness() {
  return (
    <SlideContainer className="items-center justify-center text-center" palette="e">
      <Mark>Philosophy</Mark>
      <blockquote className="mx-auto flex max-w-[22ch] flex-col gap-[var(--slide-space-4)]">
        <Display className="font-editorial-new italic" size="xl">
          You can sense carelessness.
        </Display>
        <SoftText className="slide-text-xl">— Jony Ive</SoftText>
      </blockquote>
    </SlideContainer>
  );
}

export function SlideDoneBear() {
  return (
    <SlideContainer className="justify-between" palette="c">
      <div className="grid min-h-[calc(100dvh-var(--slide-space-16))] gap-[var(--slide-space-8)] md:grid-cols-[4fr_5fr] md:items-center">
        <header className="flex flex-col gap-[var(--slide-space-5)]">
          <Image
            alt="Done Bear app icon"
            className="size-24 rounded-[var(--slide-radius-xl)] bg-white object-contain p-3"
            height={96}
            priority
            src="/donebear/icon.png"
            width={96}
          />
          <Mark>Proof app</Mark>
          <Display className="max-w-[14ch]" size="2xl">
            You won't use this app.
          </Display>
          <SoftText className="max-w-[34ch] slide-text-xl">
            But everything that built it is open source.
          </SoftText>
        </header>

        <Screenshot
          alt="Done Bear playground screenshot"
          className="min-h-[28rem]"
          objectPosition="object-top"
          src="/research/donebear-playground.png"
        />
      </div>
    </SlideContainer>
  );
}

export function SlideLiveDemo() {
  return (
    <SlideContainer className="justify-between" palette="c">
      <div className="grid gap-[var(--slide-space-8)] md:grid-cols-[3fr_5fr] md:items-center">
        <header className="flex flex-col gap-[var(--slide-space-4)]">
          <Mark>Live demo</Mark>
          <Display className="max-w-[10ch]" size="2xl">
            Open Done Bear.
          </Display>
          <a
            className="w-fit underline-offset-4 slide-text-xl hover:underline focus-visible:underline"
            href="https://donebear.com/playground"
            rel="noopener noreferrer"
            target="_blank"
          >
            donebear.com/playground
          </a>
        </header>

        <Screenshot
          alt="Done Bear playground screenshot"
          className="min-h-[30rem]"
          objectPosition="object-top"
          src="/research/donebear-playground.png"
        />
      </div>
    </SlideContainer>
  );
}

export function SlideNotAList() {
  return (
    <SlideContainer className="justify-between" palette="a">
      <header className="flex flex-col gap-[var(--slide-space-4)]">
        <Mark>Beyond the list</Mark>
        <Display className="max-w-[12ch]" size="2xl">
          The list is the smallest part.
        </Display>
      </header>

      <div className="grid gap-[var(--slide-space-6)] md:grid-cols-4">
        <WordTile>Sync</WordTile>
        <WordTile>Surfaces</WordTile>
        <WordTile>Agents</WordTile>
        <WordTile>Polish</WordTile>
      </div>
    </SlideContainer>
  );
}

export function SlideSimple() {
  return (
    <SlideContainer className="items-center justify-center text-center" palette="b">
      <Mark>Principle</Mark>
      <Display className="mx-auto max-w-[14ch]" size="2xl">
        Easy is nearby. Simple is one fold.
      </Display>
      <SoftText className="mx-auto mt-[var(--slide-space-4)] max-w-[28ch] slide-text-xl">
        Easy is relative. Simple is objective.
      </SoftText>
    </SlideContainer>
  );
}

export function SlideThesis() {
  return (
    <SlideContainer className="items-center justify-center text-center" palette="e">
      <Mark>Thesis</Mark>
      <Display className="mx-auto max-w-[13ch]" size="2xl">
        The bottleneck has changed.
      </Display>
      <SoftText className="mx-auto mt-[var(--slide-space-4)] max-w-[34ch] slide-text-xl">
        Code got cheap. Taste didn't. Build the defaults that close the gap.
      </SoftText>
    </SlideContainer>
  );
}

export function SlideStackMap() {
  return (
    <SlideContainer className="justify-between" palette="d">
      <header className="flex flex-col gap-[var(--slide-space-4)]">
        <Mark>The system</Mark>
        <Display className="max-w-[14ch]" size="xl">
          The stack is four rails.
        </Display>
      </header>

      <div className="honk-stagger grid gap-[var(--slide-space-5)] md:grid-cols-4">
        {[
          ["01", "Infrastructure", "Sync and surfaces make it shippable."],
          ["02", "Defaults", "Type, icons, components, pixels."],
          ["03", "Context", "Skills, markdown, docs."],
          ["04", "Feedback", "Parallel runs, diffs, worktrees."],
        ].map(([number, title, body], i) => (
          <div
            className="flex min-h-[15rem] flex-col justify-between border-t border-[var(--hairline)] py-[var(--slide-space-5)] md:border-l md:border-t-0 md:px-[var(--slide-space-5)] md:first:border-l-0 md:first:pl-0"
            key={title}
            style={{ "--stagger-i": i } as CSSProperties}
          >
            <Numeral value={number} />
            <div className="flex flex-col gap-[var(--slide-space-3)]">
              <h2 className="font-heading slide-text-2xl leading-[1.05]">{title}</h2>
              <SoftText className="slide-text-base">{body}</SoftText>
            </div>
          </div>
        ))}
      </div>
    </SlideContainer>
  );
}

export function SlideStrataSync() {
  return (
    <SlideContainer className="justify-between" palette="d">
      <header className="flex flex-col gap-[var(--slide-space-4)]">
        <Mark>Strata Sync</Mark>
        <Display className="max-w-[13ch]" size="2xl">
          Sync is where demos become products.
        </Display>
      </header>

      <div className="grid gap-[var(--slide-space-6)] md:grid-cols-[2fr_3fr] md:items-end">
        <Image
          alt="Strata Sync logo"
          className="size-36 rounded-[var(--slide-radius-xl)] object-contain"
          height={180}
          src="/stack/strata-sync.png"
          width={180}
        />
        <div className="grid gap-[var(--slide-space-5)] md:grid-cols-3">
          <WordTile>Offline</WordTile>
          <WordTile>Server order</WordTile>
          <WordTile>Realtime</WordTile>
        </div>
      </div>
    </SlideContainer>
  );
}

export function SlideSurfaces() {
  return (
    <SlideContainer className="justify-between" palette="c">
      <header className="flex flex-col gap-[var(--slide-space-4)]">
        <Mark>Surfaces</Mark>
        <Display className="max-w-[12ch]" size="xl">
          One model. Many ways in.
        </Display>
      </header>

      <div className="honk-stagger grid grid-cols-2 gap-[var(--slide-space-4)] md:grid-cols-4">
        {SURFACES.map((surface, i) => (
          <div
            className="flex aspect-[5/3] items-end rounded-[var(--slide-radius-xl)] border border-[var(--hairline)] p-[var(--slide-space-4)]"
            key={surface}
            style={{ "--stagger-i": i } as CSSProperties}
          >
            <p className="font-heading slide-text-3xl leading-[1.05]">{surface}</p>
          </div>
        ))}
      </div>
    </SlideContainer>
  );
}

export function SlideGlide() {
  return (
    <SlideContainer className="justify-between" palette="b">
      <header className="flex flex-col gap-[var(--slide-space-4)]">
        <Mark>Glide</Mark>
        <Display className="max-w-[12ch]" size="2xl">
          Your own typeface.
        </Display>
        <SoftText className="max-w-[32ch] slide-text-xl">
          Variable. 400–900. Roman and italic.
        </SoftText>
      </header>

      <div className="honk-stagger grid gap-0">
        {SPECIMEN_WEIGHTS.map(({ weight, label }, i) => (
          <div
            className="flex items-baseline justify-between border-t border-[var(--hairline)] py-[var(--slide-space-3)]"
            key={weight}
            style={{ "--stagger-i": i, fontWeight: weight } as CSSProperties}
          >
            <p className="font-heading slide-text-4xl leading-[1.1]">Glide</p>
            <SoftText className="slide-text-base">
              {label} {weight}
            </SoftText>
          </div>
        ))}
      </div>
    </SlideContainer>
  );
}

export function SlideBlodeIcons() {
  return (
    <SlideContainer className="justify-between" palette="e">
      <header className="flex flex-col gap-[var(--slide-space-4)]">
        <Mark>Blode Icons</Mark>
        <Display className="max-w-[12ch]" size="2xl">
          3,754 icons.
        </Display>
        <SoftText className="max-w-[32ch] slide-text-xl">
          Same API as Lucide. Agents reach for yours instead.
        </SoftText>
      </header>

      <div
        aria-hidden="true"
        className="honk-stagger grid grid-cols-4 gap-[var(--slide-space-4)] md:grid-cols-8"
      >
        {ICON_GRID.map(({ Icon, name }, i) => (
          <div
            className="flex aspect-square flex-col items-center justify-center gap-[var(--slide-space-2)] rounded-[var(--slide-radius-lg)] border border-[var(--hairline)]"
            key={name}
            style={{ "--stagger-i": i } as CSSProperties}
          >
            <Icon size={32} />
          </div>
        ))}
      </div>
    </SlideContainer>
  );
}

export function SlideBlodeUi() {
  return (
    <SlideContainer className="justify-between" palette="a">
      <header className="flex flex-col gap-[var(--slide-space-4)]">
        <Mark>Blode UI</Mark>
        <Display className="max-w-[12ch]" size="2xl">
          69 components.
        </Display>
        <SoftText className="max-w-[32ch] slide-text-xl">
          shadcn/ui registry. Agents install from it.
        </SoftText>
      </header>

      <div className="grid gap-[var(--slide-space-6)] md:grid-cols-3">
        <WordTile>Registry</WordTile>
        <WordTile>Tokens</WordTile>
        <WordTile>Skills</WordTile>
      </div>
    </SlideContainer>
  );
}

export function SlideStyleCapture() {
  return (
    <SlideContainer className="justify-between" palette="c">
      <div className="grid gap-[var(--slide-space-8)] md:grid-cols-[5fr_4fr] md:items-end">
        <header className="flex flex-col gap-[var(--slide-space-4)]">
          <Mark>Style Capture</Mark>
          <Display className="max-w-[12ch]" size="2xl">
            Give the agent evidence.
          </Display>
          <SoftText className="max-w-[34ch] slide-text-xl">Pixels beat adjectives.</SoftText>
        </header>

        <div className="grid gap-[var(--slide-space-5)] md:grid-cols-[1fr_2fr] md:items-end">
          <Image
            alt="Style Capture logo"
            className="size-32 rounded-[var(--slide-radius-xl)] object-contain"
            height={160}
            src="/stack/style-capture.png"
            width={160}
          />
          <div className="grid gap-[var(--slide-space-4)]">
            <WordTile>Capture pixels</WordTile>
            <WordTile>Prompt with evidence</WordTile>
            <WordTile>Review the match</WordTile>
          </div>
        </div>
      </div>
    </SlideContainer>
  );
}

export function SlideAgentSkills() {
  return (
    <SlideContainer className="justify-between" palette="b">
      <header className="flex flex-col gap-[var(--slide-space-4)]">
        <Mark>Agent Skills</Mark>
        <Display className="max-w-[12ch]" size="2xl">
          Package the way you work.
        </Display>
      </header>

      <div className="grid gap-[var(--slide-space-6)] md:grid-cols-[2fr_3fr] md:items-end">
        <Image
          alt="Agent Skills logo"
          className="size-32 rounded-[var(--slide-radius-xl)] object-contain"
          height={160}
          src="/stack/agent-skills.png"
          width={160}
        />
        <div className="grid gap-[var(--slide-space-5)] md:grid-cols-3">
          <WordTile>Instructions</WordTile>
          <WordTile>Examples</WordTile>
          <WordTile>Checks</WordTile>
        </div>
      </div>
    </SlideContainer>
  );
}

export function SlideMarkdownLayer() {
  return (
    <SlideContainer className="justify-between" palette="d">
      <header className="flex flex-col gap-[var(--slide-space-4)]">
        <Mark>Context</Mark>
        <Display className="max-w-[13ch]" size="2xl">
          Context starts as markdown.
        </Display>
      </header>

      <div className="grid gap-0 md:grid-cols-3">
        <LogoTile body="Links, files, notes." name="Sources" />
        <LogoTile body="Everything to markdown." name="AllMD" src="/stack/allmd.png" />
        <LogoTile body="Markdown to docs." name="Blode.md" src="/stack/blode-md.png" />
      </div>
    </SlideContainer>
  );
}

export function SlideDiffHub() {
  return (
    <SlideContainer className="justify-between" palette="e">
      <div className="grid gap-[var(--slide-space-8)] md:grid-cols-[4fr_5fr] md:items-center">
        <header className="flex flex-col gap-[var(--slide-space-4)]">
          <Mark>DiffHub</Mark>
          <Display className="max-w-[11ch]" size="2xl">
            See every diff.
          </Display>
          <SoftText className="max-w-[32ch] slide-text-xl">
            Local. Split-view. Keyboard-first.
          </SoftText>
        </header>

        <Screenshot
          alt="DiffHub split-view diff screenshot"
          className="min-h-[28rem]"
          src="/research/diffhub.png"
        />
      </div>
    </SlideContainer>
  );
}

export function SlideSpotlightTesting() {
  return (
    <SlideContainer className="justify-between" palette="a">
      <header className="flex flex-col gap-[var(--slide-space-4)]">
        <Mark>Spotlight Testing</Mark>
        <Display className="max-w-[13ch]" size="2xl">
          Test without rebuilding.
        </Display>
        <SoftText className="max-w-[34ch] slide-text-xl">
          Sync worktree changes into your repo root.
        </SoftText>
      </header>

      <div className="honk-stagger grid gap-[var(--slide-space-5)] md:grid-cols-3">
        {[
          ["01", "spotlight-testing on", "Sync changes in."],
          ["02", "Run tests in root", "Same Docker, same DB."],
          ["03", "spotlight-testing off", "Restore cleanly."],
        ].map(([number, title, body], i) => (
          <div
            className="flex min-h-[11rem] flex-col justify-between border-t border-[var(--hairline)] py-[var(--slide-space-5)] md:border-l md:border-t-0 md:px-[var(--slide-space-5)] md:first:border-l-0 md:first:pl-0"
            key={title}
            style={{ "--stagger-i": i } as CSSProperties}
          >
            <Numeral value={number} />
            <div className="flex flex-col gap-[var(--slide-space-2)]">
              <h2 className="font-heading slide-text-2xl leading-[1.05]">{title}</h2>
              <SoftText className="slide-text-base">{body}</SoftText>
            </div>
          </div>
        ))}
      </div>
    </SlideContainer>
  );
}

export function SlideSolveYourOwn() {
  return (
    <SlideContainer className="items-center justify-center text-center" palette="d">
      <Mark>Open source</Mark>
      <Display className="mx-auto max-w-[14ch]" size="2xl">
        Build to solve your own problems.
      </Display>
      <SoftText className="mx-auto mt-[var(--slide-space-4)] max-w-[28ch] slide-text-xl">
        Give it away for free.
      </SoftText>
    </SlideContainer>
  );
}

export function SlideFreedom() {
  return (
    <SlideContainer className="items-center justify-center text-center" palette="b">
      <Mark>Process</Mark>
      <Display className="mx-auto max-w-[14ch]" size="2xl">
        Find the problem that bothers you.
      </Display>
      <SoftText className="mx-auto mt-[var(--slide-space-4)] max-w-[28ch] slide-text-xl">
        Build the tool. Ship it tomorrow.
      </SoftText>
    </SlideContainer>
  );
}

export function SlideQuestions() {
  return (
    <SlideContainer className="justify-between" palette="e">
      <Mark>Wrap</Mark>

      <div className="grid gap-[var(--slide-space-6)] md:grid-cols-[1fr_auto] md:items-end">
        <div className="flex flex-col gap-[var(--slide-space-6)]">
          <Display size="2xl">Questions?</Display>
          <div className="flex flex-col gap-[var(--slide-space-3)] border-t border-[var(--hairline)] pt-[var(--slide-space-5)] slide-text-xl">
            <a
              className="underline-offset-4 hover:underline focus-visible:underline"
              href="https://donebear.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              donebear.com
            </a>
            <a
              className="underline-offset-4 hover:underline focus-visible:underline"
              href="https://matthewblode.com/stack"
              rel="noopener noreferrer"
              target="_blank"
            >
              matthewblode.com/stack
            </a>
            <a
              className="underline-offset-4 hover:underline focus-visible:underline"
              href="https://github.com/mblode"
              rel="noopener noreferrer"
              target="_blank"
            >
              github.com/mblode
            </a>
          </div>
        </div>
        <div
          aria-label="QR code linking to matthewblode.com/stack"
          className="hidden md:block"
          role="img"
        >
          <QRCode className="size-40" data="https://matthewblode.com/stack" />
        </div>
      </div>
    </SlideContainer>
  );
}
