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
  return (
    <p className={className} style={{ color: "var(--fg-soft)" }}>
      {children}
    </p>
  );
}

function LogoTile({ body, name, src }: { body?: string; name: string; src?: string }) {
  return (
    <div className="honk-fade-up flex min-h-[11rem] flex-col justify-between gap-[var(--slide-space-5)] border-t border-[var(--hairline)] py-[var(--slide-space-5)] md:border-l md:border-t-0 md:px-[var(--slide-space-5)] md:first:border-l-0 md:first:pl-0">
      {src ? (
        <Image
          alt=""
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
      <div className="flex flex-col gap-2">
        <h3 className="font-heading slide-text-2xl leading-[0.98]">{name}</h3>
        {body ? <SoftText className="slide-text-base">{body}</SoftText> : null}
      </div>
    </div>
  );
}

function WordTile({ children }: { children: React.ReactNode }) {
  return (
    <div className="honk-fade-up flex min-h-[7.5rem] items-end border-t border-[var(--hairline)] py-[var(--slide-space-4)]">
      <p className="font-heading slide-text-3xl leading-[0.95]">{children}</p>
    </div>
  );
}

function Screenshot({
  alt,
  className = "",
  objectPosition = "object-center",
  src,
}: {
  alt: string;
  className?: string;
  objectPosition?: string;
  src: string;
}) {
  return (
    <div
      className={`relative min-h-[18rem] overflow-hidden rounded-[var(--slide-radius-xl)] outline outline-1 -outline-offset-1 outline-[var(--hairline)] ${className}`}
    >
      <Image
        alt={alt}
        className={`object-cover ${objectPosition}`}
        fill
        priority={false}
        sizes="50vw"
        src={src}
      />
    </div>
  );
}

export function Slide01Title() {
  return (
    <SlideContainer className="justify-between" palette="e">
      <header className="flex flex-col gap-[var(--slide-space-4)]">
        <Mark>Claude Code for Developers | Melbourne</Mark>
        <Display className="max-w-[12ch]" size="huge">
          Blode Stack
        </Display>
        <SoftText className="max-w-[34ch] slide-text-2xl">
          How to build a to-do list app in 2026.
        </SoftText>
      </header>

      <footer className="honk-fade-up flex flex-wrap items-end justify-between gap-[var(--slide-space-5)] border-t border-[var(--hairline)] pt-[var(--slide-space-5)]">
        <p className="font-heading slide-text-2xl leading-none">Matthew Blode</p>
        <SoftText className="slide-text-base">AI at Linktree | OpenAI Codex Ambassador</SoftText>
      </footer>
    </SlideContainer>
  );
}

export function Slide02About() {
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

export function Slide03DoneBear() {
  return (
    <SlideContainer className="justify-between" palette="c">
      <div className="grid min-h-[calc(100dvh-var(--slide-space-16))] gap-[var(--slide-space-8)] md:grid-cols-[4fr_5fr] md:items-center">
        <header className="flex flex-col gap-[var(--slide-space-5)]">
          <Image
            alt=""
            className="size-24 rounded-[var(--slide-radius-xl)] bg-white object-contain p-3"
            height={96}
            priority
            src="/donebear/icon.png"
            width={96}
          />
          <Mark>Proof app</Mark>
          <Display className="max-w-[11ch]" size="2xl">
            Done Bear is the demo.
          </Display>
          <SoftText className="max-w-[32ch] slide-text-xl">
            Calm. Local-first. Agent-native.
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
            className="w-fit underline-offset-4 slide-text-xl hover:underline"
            href="https://donebear.com/playground"
            rel="noopener"
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

export function Slide04NotAList() {
  return (
    <SlideContainer className="justify-between" palette="a">
      <header className="flex flex-col gap-[var(--slide-space-4)]">
        <Mark>The catch</Mark>
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

export function Slide05Thesis() {
  return (
    <SlideContainer className="items-center justify-center text-center" palette="e">
      <Mark>Thesis</Mark>
      <Display className="mx-auto max-w-[13ch]" size="2xl">
        The bottleneck has changed.
      </Display>
      <SoftText className="mx-auto mt-[var(--slide-space-4)] max-w-[34ch] slide-text-xl">
        Now it's encapsulating taste and parallelising work.
      </SoftText>
    </SlideContainer>
  );
}

export function Slide06StackMap() {
  return (
    <SlideContainer className="justify-between" palette="d">
      <header className="flex flex-col gap-[var(--slide-space-4)]">
        <Mark>The system</Mark>
        <Display className="max-w-[14ch]" size="xl">
          The stack is four rails.
        </Display>
      </header>

      <div className="grid gap-[var(--slide-space-5)] md:grid-cols-4">
        {[
          ["01", "Infrastructure", "Sync and surfaces make it shippable."],
          ["02", "Defaults", "Type, icons, components, pixels."],
          ["03", "Context", "Skills, markdown, docs."],
          ["04", "Feedback", "Parallel runs, diffs, worktrees."],
        ].map(([number, title, body]) => (
          <div
            className="honk-fade-up flex min-h-[15rem] flex-col justify-between border-t border-[var(--hairline)] py-[var(--slide-space-5)] md:border-l md:border-t-0 md:px-[var(--slide-space-5)] md:first:border-l-0 md:first:pl-0"
            key={title}
          >
            <Numeral value={number} />
            <div className="flex flex-col gap-3">
              <h3 className="font-heading slide-text-2xl leading-[0.98]">{title}</h3>
              <SoftText className="slide-text-base">{body}</SoftText>
            </div>
          </div>
        ))}
      </div>
    </SlideContainer>
  );
}

export function Slide14StrataSync() {
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
          alt=""
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

export function Slide15Surfaces() {
  return (
    <SlideContainer className="justify-between" palette="c">
      <header className="flex flex-col gap-[var(--slide-space-4)]">
        <Mark>Done Bear</Mark>
        <Display className="max-w-[12ch]" size="xl">
          Done Bear lives on every surface.
        </Display>
      </header>

      <div className="grid gap-[var(--slide-space-6)] md:grid-cols-[1.2fr_4fr] md:items-center">
        <div className="honk-fade-up flex flex-col gap-[var(--slide-space-4)] border-t border-[var(--hairline)] pt-[var(--slide-space-5)]">
          <Image
            alt=""
            className="size-28 rounded-[var(--slide-radius-xl)] bg-white object-contain p-3"
            height={112}
            src="/donebear/icon.png"
            width={112}
          />
          <SoftText className="slide-text-xl">One model. Many ways in.</SoftText>
        </div>
        <div className="grid grid-cols-2 gap-[var(--slide-space-4)] md:grid-cols-4">
          {SURFACES.map((surface) => (
            <div
              className="honk-fade-up flex aspect-[5/3] items-end rounded-[var(--slide-radius-xl)] border border-[var(--hairline)] p-[var(--slide-space-4)]"
              key={surface}
            >
              <p className="font-heading slide-text-3xl leading-[0.95]">{surface}</p>
            </div>
          ))}
        </div>
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

      <div className="grid gap-0">
        {SPECIMEN_WEIGHTS.map(({ weight, label }) => (
          <div
            className="honk-fade-up flex items-baseline justify-between border-t border-[var(--hairline)] py-[var(--slide-space-3)]"
            key={weight}
          >
            <p className="font-heading slide-text-4xl leading-[1.1]" style={{ fontWeight: weight }}>
              Glide
            </p>
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
        <SoftText className="max-w-[32ch] slide-text-xl">Drop-in Lucide replacement.</SoftText>
      </header>

      <div className="grid grid-cols-4 gap-[var(--slide-space-4)] md:grid-cols-8">
        {ICON_GRID.map(({ Icon, name }) => (
          <div
            className="honk-fade-up flex aspect-square flex-col items-center justify-center gap-2 rounded-[var(--slide-radius-lg)] border border-[var(--hairline)]"
            key={name}
          >
            <Icon size={32} />
          </div>
        ))}
      </div>
    </SlideContainer>
  );
}

export function Slide08BlodeUi() {
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

export function Slide09StyleCapture() {
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
            alt=""
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

export function Slide10AgentSkills() {
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
          alt=""
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

export function Slide11MarkdownLayer() {
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

      <div className="grid gap-[var(--slide-space-5)] md:grid-cols-3">
        {[
          ["01", "spotlight-testing on", "Sync changes in."],
          ["02", "Run tests in root", "Same Docker, same DB."],
          ["03", "spotlight-testing off", "Restore cleanly."],
        ].map(([number, title, body]) => (
          <div
            className="honk-fade-up flex min-h-[11rem] flex-col justify-between border-t border-[var(--hairline)] py-[var(--slide-space-5)] md:border-l md:border-t-0 md:px-[var(--slide-space-5)] md:first:border-l-0 md:first:pl-0"
            key={title}
          >
            <Numeral value={number} />
            <div className="flex flex-col gap-2">
              <h3 className="font-heading slide-text-2xl leading-[0.98]">{title}</h3>
              <SoftText className="slide-text-base">{body}</SoftText>
            </div>
          </div>
        ))}
      </div>
    </SlideContainer>
  );
}

export function Slide16BuildOrder() {
  const steps = [
    ["1", "Model the work"],
    ["2", "Sync the truth"],
    ["3", "Choose the surfaces"],
    ["4", "Teach the agent"],
    ["5", "Close the loop"],
  ] as const;

  return (
    <SlideContainer className="justify-between" palette="d">
      <header className="flex flex-col gap-[var(--slide-space-4)]">
        <Mark>Build order</Mark>
        <Display className="max-w-[18ch]" size="lg">
          Build the primitives before the screens.
        </Display>
      </header>

      <ol className="grid grid-cols-2 gap-[var(--slide-space-4)] md:grid-cols-5" role="list">
        {steps.map(([number, title]) => (
          <li
            className="honk-fade-up flex min-h-[8rem] flex-col justify-between border-t border-[var(--hairline)] py-[var(--slide-space-4)]"
            key={title}
          >
            <Numeral className="!text-[clamp(48px,6vw,96px)]" value={number} />
            <h3 className="font-heading slide-text-2xl leading-[0.96]">{title}</h3>
          </li>
        ))}
      </ol>
    </SlideContainer>
  );
}

export function Slide17FullStack() {
  return (
    <SlideContainer className="justify-between" palette="b">
      <div className="grid gap-[var(--slide-space-8)] md:grid-cols-[4fr_5fr] md:items-center">
        <header className="flex flex-col gap-[var(--slide-space-4)]">
          <Mark>The Blode Stack</Mark>
          <Display className="max-w-[12ch]" size="xl">
            Small tools became a stack.
          </Display>
          <SoftText className="max-w-[34ch] slide-text-xl">
            Building blocks I use every day, packaged to scratch my own itch.
          </SoftText>
        </header>

        <Screenshot
          alt="Matthew Blode all projects screenshot"
          className="min-h-[32rem]"
          objectPosition="object-top"
          src="/research/matthewblode-all.png"
        />
      </div>
    </SlideContainer>
  );
}

export function Slide18Takeaways() {
  return (
    <SlideContainer className="justify-between" palette="e">
      <header className="flex flex-col gap-[var(--slide-space-4)]">
        <Mark>Takeaways</Mark>
        <Display className="max-w-[12ch]" size="2xl">
          Better rails make better agents.
        </Display>
      </header>

      <div className="grid gap-[var(--slide-space-6)] md:grid-cols-4">
        <WordTile>Sync</WordTile>
        <WordTile>Defaults</WordTile>
        <WordTile>Context</WordTile>
        <WordTile>Feedback</WordTile>
      </div>
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
              className="underline-offset-4 hover:underline"
              href="https://donebear.com"
              rel="noopener"
              target="_blank"
            >
              donebear.com
            </a>
            <a
              className="underline-offset-4 hover:underline"
              href="https://matthewblode.com/stack"
              rel="noopener"
              target="_blank"
            >
              matthewblode.com/stack
            </a>
            <a
              className="underline-offset-4 hover:underline"
              href="https://github.com/mblode"
              rel="noopener"
              target="_blank"
            >
              github.com/mblode
            </a>
          </div>
        </div>
        <QRCode className="hidden size-40 md:block" data="https://matthewblode.com/stack" />
      </div>
    </SlideContainer>
  );
}
