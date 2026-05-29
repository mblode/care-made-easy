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
  PlayFilledIcon,
  UserIcon,
  ZapIcon,
} from "blode-icons-react";
import { cn } from "@/lib/utils";
import { Display } from "@/components/slides/primitives/display";
import { GlidePlayground } from "@/components/slides/glide-playground";
import { StyleCaptureDemo } from "@/components/slides/style-capture-demo";
import { SyncDemo } from "@/components/slides/sync-demo";
import { Mark } from "@/components/slides/primitives/mark";
import { QRCode } from "@/components/slides/qr-code";
import { SlideContainer } from "@/components/slides/slide-container";

const STACK_SECTIONS = [
  {
    label: "Design",
    tools: [
      { name: "Glide", logo: "/stack/glide.png", href: "https://glide.blode.co" },
      { name: "Blode Icons", logo: "/stack/blode-icons.png", href: "https://icons.blode.co" },
      { name: "Blode UI", logo: "/stack/blode-ui.png", href: "https://ui.blode.co" },
      {
        name: "Style Capture",
        logo: "/stack/style-capture.png",
        href: "https://github.com/mblode/style-capture",
      },
    ],
  },
  {
    label: "Developer Tools",
    tools: [
      {
        name: "Agent Skills",
        logo: "/stack/agent-skills.png",
        href: "https://github.com/mblode/agent-skills",
      },
      { name: "AllMD", logo: "/stack/allmd.png", href: "https://allmd.blode.co" },
      {
        name: "Commandment",
        logo: "/stack/commandment.png",
        href: "https://github.com/mblode/commandment",
      },
      { name: "DiffHub", logo: "/stack/diffhub.png", href: "https://diffhub.blode.co" },
      { name: "Reel", logo: "/stack/reel.png", href: "https://github.com/mblode/reel" },
      {
        name: "Rubber Duck",
        logo: "/stack/rubber-duck.png",
        href: "https://github.com/mblode/rubber-duck",
      },
    ],
  },
  {
    label: "Platform",
    tools: [
      { name: "Blode.md", logo: "/stack/blode-md.png", href: "https://blode.md" },
      { name: "Convene", logo: "/stack/convene.png", href: "https://github.com/mblode/convene" },
      { name: "Strata Sync", logo: "/stack/strata-sync.png", href: "https://stratasync.dev" },
    ],
  },
] as const;

const SKILL_EXAMPLES = [
  "/ui-animation",
  "/pr-babysitter",
  "/ui-design",
  "/autoship",
  "/typography-audit",
  "and 20 more…",
];

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

function WordTile({ children }: { children: React.ReactNode }) {
  return (
    <div className="honk-fade-up flex min-h-[5rem] items-end overflow-hidden border-t border-[var(--hairline)] py-[var(--slide-space-4)] md:min-h-[7.5rem]">
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
        "relative min-h-[12rem] overflow-hidden rounded-[var(--slide-radius-xl)] outline outline-1 -outline-offset-1 outline-[var(--hairline)] md:min-h-[18rem]",
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
    <SlideContainer className="justify-center" palette="e">
      <header className="flex flex-col gap-[var(--slide-space-4)]">
        <Display size="huge">Care made easy.</Display>
        <SoftText className="max-w-none slide-text-2xl">Encoding taste into code.</SoftText>
        <a
          className="w-fit text-[var(--fg-soft)] underline-offset-4 slide-text-lg hover:underline focus-visible:underline"
          href="https://matthewblode.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          by Matthew Blode
        </a>
      </header>
    </SlideContainer>
  );
}

export function SlideAbout() {
  return (
    <SlideContainer className="justify-between" palette="d">
      <div className="flex items-start justify-between">
        <Mark>About me</Mark>
        <a
          className="text-[var(--fg-soft)] underline-offset-4 slide-text-lg hover:underline focus-visible:underline"
          href="https://matthewblode.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          matthewblode.com
        </a>
      </div>
      <header className="flex flex-col gap-[var(--slide-space-4)]">
        <Display size="huge">
          <a
            className="underline-offset-[0.15em] hover:underline focus-visible:underline"
            href="https://matthewblode.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            Matthew Blode
          </a>
        </Display>
      </header>

      <footer className="flex flex-col gap-[var(--slide-space-6)]">
        <div className="grid gap-[var(--slide-space-6)] md:grid-cols-3">
          <WordTile>AI at Linktree</WordTile>
          <WordTile>Two startups, two exits</WordTile>
          <WordTile>Codex Ambassador</WordTile>
        </div>
      </footer>
    </SlideContainer>
  );
}

export function SlideCarelessness() {
  return (
    <SlideContainer className="items-center justify-center text-center" palette="e">
      <blockquote className="mx-auto flex w-full flex-col gap-[var(--slide-space-4)] md:max-w-[80%]">
        <Mark className="!self-center">Philosophy</Mark>
        <Display className="font-editorial-new" size="xl">
          You can sense carelessness.
        </Display>
        <SoftText className="mx-auto slide-text-xl">— Jony Ive</SoftText>
      </blockquote>
    </SlideContainer>
  );
}

export function SlideDoneBear() {
  return (
    <SlideContainer
      className="relative gap-[var(--slide-space-5)] !pb-[72px] !pt-[var(--slide-space-10)]"
      palette="c"
    >
      <div className="flex flex-col gap-[var(--slide-space-4)] md:flex-row md:items-start md:justify-between">
        <div className="flex flex-col gap-[var(--slide-space-2)]">
          <Mark>Done Bear</Mark>
          <Display size="xl">Every layer built on open source.</Display>
        </div>
        <a
          className="shrink-0 underline-offset-4 slide-text-lg hover:underline focus-visible:underline"
          href="https://donebear.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          donebear.com
        </a>
      </div>

      <div className="relative flex-1 overflow-hidden rounded-[var(--slide-radius-xl)] outline outline-1 -outline-offset-1 outline-[var(--hairline)]">
        <iframe
          className="absolute inset-0 h-full w-full border-0"
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
          sandbox="allow-scripts allow-same-origin"
          src="https://donebear.com/playground"
          title="Done Bear interactive demo"
        />
      </div>
    </SlideContainer>
  );
}

export function SlideNotAList() {
  return (
    <SlideContainer className="justify-between" palette="c">
      <header className="flex flex-col gap-[var(--slide-space-4)]">
        <Mark>Beyond the list</Mark>
        <Display className="max-w-[12ch]" size="2xl">
          The list is the smallest part.
        </Display>
      </header>

      <div className="grid gap-[var(--slide-space-6)] md:grid-cols-3">
        <WordTile>Design foundations</WordTile>
        <WordTile>Developer tools</WordTile>
        <WordTile>Platform</WordTile>
      </div>
    </SlideContainer>
  );
}

export function SlideThesis() {
  return (
    <SlideContainer className="items-center justify-center text-center" palette="e">
      <Mark className="!self-center">Thesis</Mark>
      <Display className="mx-auto max-w-[13ch]" size="2xl">
        The bottleneck has changed.
      </Display>
    </SlideContainer>
  );
}

export function SlideStackMap() {
  let toolIndex = 0;

  return (
    <SlideContainer className="justify-between" palette="b">
      <header className="flex flex-col gap-[var(--slide-space-4)]">
        <Mark>The system</Mark>
        <Display className="max-w-[14ch]" size="xl">
          Introducing the Blode Stack.
        </Display>
      </header>

      <div className="flex flex-col gap-[var(--slide-space-6)]">
        {STACK_SECTIONS.map((section) => (
          <div className="flex flex-col gap-[var(--slide-space-3)]" key={section.label}>
            <p className="font-heading uppercase tracking-widest text-[var(--fg-soft)] slide-text-sm">
              {section.label}
            </p>
            <div className="honk-stagger grid grid-cols-2 gap-[var(--slide-space-3)] md:grid-cols-4">
              {section.tools.map((tool) => {
                const i = toolIndex;
                toolIndex += 1;
                return (
                  <a
                    className="flex items-center gap-[var(--slide-space-3)] rounded-[var(--slide-radius-lg)] border border-[var(--hairline)] p-[var(--slide-space-3)] transition-colors hover:bg-[var(--fg-soft)]/5"
                    href={tool.href}
                    key={tool.name}
                    rel="noopener noreferrer"
                    style={{ "--stagger-i": i } as CSSProperties}
                    target="_blank"
                  >
                    <Image
                      alt={`${tool.name} logo`}
                      className="size-8 shrink-0 rounded-[var(--slide-radius-sm)] object-contain"
                      height={32}
                      src={tool.logo}
                      width={32}
                    />
                    <p className="font-heading leading-[1.2] slide-text-base">{tool.name}</p>
                  </a>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </SlideContainer>
  );
}

export function SlideStrataSync() {
  return (
    <SlideContainer className="justify-between" palette="stratasync">
      <header className="flex flex-col gap-[var(--slide-space-5)]">
        <Image
          alt="Strata Sync logo"
          className="size-24 rounded-[var(--slide-radius-xl)] object-contain"
          height={96}
          src="/stack/strata-sync.png"
          width={96}
        />
        <Mark>Strata Sync</Mark>
        <Display className="max-w-[16ch]" size="xl">
          With the right abstractions, you get a lot for free.
        </Display>
        <SoftText className="max-w-none slide-text-xl">
          Inspired by Linear’s sync engine. Open-source.
        </SoftText>
        <a
          className="w-fit underline-offset-4 slide-text-lg hover:underline focus-visible:underline"
          href="https://stratasync.dev"
          rel="noopener noreferrer"
          target="_blank"
        >
          stratasync.dev
        </a>
      </header>

      <div className="grid gap-[var(--slide-space-5)] md:grid-cols-3">
        <WordTile>Works offline</WordTile>
        <WordTile>No more spinners</WordTile>
        <WordTile>Always in sync</WordTile>
      </div>
    </SlideContainer>
  );
}

export function SlideSyncDemo() {
  return (
    <SlideContainer className="justify-between" palette="stratasync">
      <header className="flex flex-col gap-[var(--slide-space-4)]">
        <Mark>Strata Sync</Mark>
        <Display className="max-w-[14ch]" size="2xl">
          Apps that just work.
        </Display>
        <SoftText className="max-w-[38ch] slide-text-xl">
          Tick off items and reorder lists instantly, even in aeroplane mode.
        </SoftText>
      </header>

      <SyncDemo />
    </SlideContainer>
  );
}

export function SlideGlide() {
  return (
    <SlideContainer className="justify-between" palette="glide">
      <header className="flex flex-col gap-[var(--slide-space-4)]">
        <Mark>Glide</Mark>
        <Display className="max-w-[12ch]" size="2xl">
          Your own typeface.
        </Display>
      </header>

      <GlidePlayground />
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
    <SlideContainer className="justify-center" palette="blodeui">
      <div className="grid gap-[var(--slide-space-8)] md:grid-cols-[4fr_5fr] md:items-center">
        <header className="flex flex-col gap-[var(--slide-space-5)]">
          <Image
            alt="Blode UI logo"
            className="size-24 rounded-[var(--slide-radius-xl)] object-contain"
            height={96}
            src="/stack/blode-ui.png"
            width={96}
          />
          <Mark>Blode UI</Mark>
          <Display className="max-w-[12ch]" size="2xl">
            UI you own.
          </Display>
          <SoftText className="max-w-[42ch] slide-text-xl">
            An opinionated shadcn/ui registry with beautifully designed components you can
            customise, extend, and own.
          </SoftText>
          <a
            className="w-fit underline-offset-4 slide-text-lg hover:underline focus-visible:underline"
            href="https://ui.blode.co"
            rel="noopener noreferrer"
            target="_blank"
          >
            ui.blode.co
          </a>
        </header>

        <Screenshot
          alt="Blode UI component registry homepage"
          className="min-h-[16rem] md:min-h-[28rem]"
          objectPosition="object-top"
          src="/research/blode-ui-registry.png"
        />
      </div>
    </SlideContainer>
  );
}

export function SlideStyleCapture() {
  return (
    <SlideContainer className="justify-center" palette="stylecapture">
      <header className="flex flex-col gap-[var(--slide-space-4)]">
        <Mark>Style Capture</Mark>
        <Display className="max-w-[12ch]" size="2xl">
          Point at any UI.
        </Display>
        <SoftText className="max-w-[38ch] slide-text-xl">
          A Chrome extension that gives your agent computed styles and Tailwind mappings.
        </SoftText>
        <StyleCaptureDemo />
      </header>
    </SlideContainer>
  );
}

export function SlideAgentSkills() {
  return (
    <SlideContainer className="justify-between" palette="b">
      <header className="flex flex-col gap-[var(--slide-space-4)] mb-[var(--slide-space-4)]">
        <Mark>Agent Skills</Mark>
        <Display size="2xl">Capture what you know. Make it repeatable.</Display>
        <a
          className="w-fit underline-offset-4 slide-text-lg hover:underline focus-visible:underline"
          href="https://github.com/mblode/agent-skills"
          rel="noopener noreferrer"
          target="_blank"
        >
          github.com/mblode/agent-skills
        </a>
      </header>

      <div className="honk-stagger grid flex-1 grid-cols-1 gap-[var(--slide-space-4)] md:grid-cols-3 md:grid-rows-2">
        {SKILL_EXAMPLES.map((phase, i) => (
          <div
            className="flex min-h-0 items-end rounded-[var(--slide-radius-xl)] border border-[var(--hairline)] p-[var(--slide-space-4)]"
            key={phase}
            style={{ "--stagger-i": i } as CSSProperties}
          >
            <p className="font-heading slide-text-3xl leading-[1.05]">{phase}</p>
          </div>
        ))}
      </div>
    </SlideContainer>
  );
}

export function SlideAllMd() {
  return (
    <SlideContainer className="justify-between" palette="allmd">
      <header className="flex flex-col gap-[var(--slide-space-4)]">
        <Image
          alt="AllMD logo"
          className="size-24 rounded-[var(--slide-radius-xl)] object-contain md:size-36"
          height={180}
          src="/stack/allmd.png"
          width={180}
        />
        <Mark>AllMD</Mark>
        <Display className="max-w-[14ch]" size="2xl">
          Turn the whole universe into markdown.
        </Display>
        <SoftText className="max-w-[34ch] slide-text-xl">
          Web pages, YouTube videos, PDFs, Google Docs, video and audio, images, Word docs, EPUBs,
          CSVs, PowerPoints, tweets, and RSS feeds into markdown.
        </SoftText>
      </header>

      <div className="honk-fade-up flex flex-col gap-[var(--slide-space-3)] border-t border-[var(--hairline)] pt-[var(--slide-space-5)]">
        <a
          className="w-fit underline-offset-4 slide-text-lg hover:underline focus-visible:underline"
          href="https://allmd.blode.co/"
          rel="noopener noreferrer"
          target="_blank"
        >
          allmd.blode.co
        </a>
      </div>
    </SlideContainer>
  );
}

export function SlideBlodeMd() {
  return (
    <SlideContainer className="justify-between" palette="blodemd">
      <header className="flex flex-col gap-[var(--slide-space-5)]">
        <Image
          alt="Blode.md logo"
          className="size-24 rounded-[var(--slide-radius-xl)] object-contain"
          height={96}
          src="/stack/blode-md.png"
          width={96}
        />
        <Mark>Blode.md</Mark>
        <Display className="max-w-[14ch]" size="2xl">
          The knowledge layer your AI runs on.
        </Display>
        <SoftText className="max-w-[34ch] slide-text-xl">
          Build a Mintlify clone because why not.
        </SoftText>
        <a
          className="w-fit underline-offset-4 slide-text-lg hover:underline focus-visible:underline"
          href="https://blode.md/"
          rel="noopener noreferrer"
          target="_blank"
        >
          blode.md
        </a>
      </header>

      <div className="grid gap-[var(--slide-space-6)] md:grid-cols-3">
        <WordTile>GitHub auto-deploy</WordTile>
        <WordTile>Custom domains</WordTile>
        <WordTile>MDX components</WordTile>
      </div>
    </SlideContainer>
  );
}

export function SlideDiffHub() {
  return (
    <SlideContainer className="justify-between" palette="diffhub">
      <div className="grid gap-[var(--slide-space-8)] md:grid-cols-[4fr_5fr] md:items-center">
        <header className="flex flex-col gap-[var(--slide-space-5)]">
          <Image
            alt="DiffHub logo"
            className="size-24 rounded-[var(--slide-radius-xl)] object-contain"
            height={96}
            src="/stack/diffhub.png"
            width={96}
          />
          <Mark>DiffHub</Mark>
          <Display className="max-w-[14ch]" size="2xl">
            Review your branch in cmux.
          </Display>
          <SoftText className="max-w-[34ch] slide-text-xl">
            Compare against the detected base branch. Leave notes. Copy them as a prompt.
          </SoftText>
          <a
            className="w-fit underline-offset-4 slide-text-lg hover:underline focus-visible:underline"
            href="https://diffhub.blode.co"
            rel="noopener noreferrer"
            target="_blank"
          >
            diffhub.blode.co
          </a>
        </header>

        <Screenshot
          alt="DiffHub showing a branch diff with file sidebar and split view"
          className="min-h-[16rem] md:min-h-[28rem]"
          objectPosition="object-top"
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
        <Display className="max-w-[15ch]" size="2xl">
          See changes without rebuilding.
        </Display>
        <SoftText className="max-w-[34ch] slide-text-xl">
          Test worktree code in a running dev server. Same Docker, same DB, no second setup.
        </SoftText>
      </header>

      <a
        className="w-fit underline-offset-4 slide-text-lg hover:underline focus-visible:underline"
        href="https://github.com/mblode/spotlight-testing"
        rel="noopener noreferrer"
        target="_blank"
      >
        github.com/mblode/spotlight-testing
      </a>
    </SlideContainer>
  );
}

const MORE_TOOLS = [
  {
    name: "Commandment",
    logo: "/stack/commandment.png",
    description: "Voice to text, instantly. BYO OpenAI API key.",
    href: "https://commandment.blode.co/",
  },
  {
    name: "Rubber Duck",
    logo: "/stack/rubber-duck.png",
    description: "Talk through your code with AI. Hear answers back.",
    href: "https://rubber-duck.blode.co/",
  },
  {
    name: "Reel",
    Icon: PlayFilledIcon,
    description: "Record a loom to capture context for agents.",
    wip: true,
  },
  {
    name: "Convene",
    logo: "/stack/convene.png",
    description: "macOS meeting transcription. A Granola alternative.",
    wip: true,
  },
] as const;

export function SlideMoreTools() {
  return (
    <SlideContainer className="justify-between" palette="b">
      <header className="flex flex-col gap-[var(--slide-space-4)]">
        <Mark>And more</Mark>
        <Display className="max-w-[14ch]" size="2xl">
          The rest of the toolkit.
        </Display>
      </header>

      <div className="honk-stagger grid grid-cols-1 gap-[var(--slide-space-4)] md:grid-cols-2">
        {MORE_TOOLS.map((tool, i) => (
          <div
            className="flex gap-[var(--slide-space-4)] rounded-[var(--slide-radius-xl)] border border-[var(--hairline)] p-[var(--slide-space-5)]"
            key={tool.name}
            style={{ "--stagger-i": i } as CSSProperties}
          >
            {"logo" in tool ? (
              <Image
                alt={`${tool.name} logo`}
                className="size-12 shrink-0 rounded-[var(--slide-radius-lg)] object-contain"
                height={48}
                src={tool.logo}
                width={48}
              />
            ) : (
              <div className="flex size-12 shrink-0 items-center justify-center rounded-[var(--slide-radius-lg)] bg-black text-white">
                {"Icon" in tool ? <tool.Icon size={28} /> : null}
              </div>
            )}
            <div className="flex flex-col gap-[var(--slide-space-2)]">
              <div className="flex items-center gap-[var(--slide-space-3)]">
                <p className="font-heading leading-[1.2] slide-text-lg">{tool.name}</p>
                {"wip" in tool && tool.wip ? (
                  <span className="text-[var(--fg-soft)] opacity-70 slide-text-xs">WIP</span>
                ) : null}
              </div>
              <p className="text-[var(--fg-soft)] slide-text-sm">{tool.description}</p>
              {"href" in tool ? (
                <a
                  className="w-fit underline-offset-4 slide-text-xs hover:underline focus-visible:underline"
                  href={tool.href}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {tool.href.replace(/^https?:\/\//, "").replace(/\/$/, "")}
                </a>
              ) : null}
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
      <Mark className="!self-center mb-[var(--slide-space-4)]">Open source</Mark>
      <Display className="mx-auto max-w-[14ch]" size="2xl">
        Build to solve your own problems.
      </Display>
      <SoftText className="mx-auto mt-[var(--slide-space-4)] max-w-[28ch] slide-text-2xl">
        Give it away for free.
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
            <p>
              Slides available at{" "}
              <a
                className="underline underline-offset-4 hover:no-underline focus-visible:no-underline"
                href="https://care.blode.co"
                rel="noopener noreferrer"
                target="_blank"
              >
                care.blode.co
              </a>
            </p>
          </div>
        </div>
        <div aria-label="QR code linking to care.blode.co" className="hidden md:block" role="img">
          <QRCode className="size-40" data="https://care.blode.co" />
        </div>
      </div>
    </SlideContainer>
  );
}
