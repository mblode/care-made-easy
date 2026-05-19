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
import { GlidePlayground } from "@/components/slides/glide-playground";
import { SyncDemo } from "@/components/slides/sync-demo";
import { Mark } from "@/components/slides/primitives/mark";
import { QRCode } from "@/components/slides/qr-code";
import { SlideContainer } from "@/components/slides/slide-container";

const STACK_SECTIONS = [
  {
    label: "Design",
    tools: [
      { name: "Glide", logo: "/stack/glide.png" },
      { name: "Blode Icons", logo: "/stack/blode-icons.png" },
      { name: "Blode UI", logo: "/stack/blode-ui.png" },
      { name: "Style Capture", logo: "/stack/style-capture.png" },
    ],
  },
  {
    label: "Developer Tools",
    tools: [
      { name: "Agent Skills", logo: "/stack/agent-skills.png" },
      { name: "AllMD", logo: "/stack/allmd.png" },
      { name: "Commandment", logo: "/stack/commandment.png" },
      { name: "DiffHub", logo: "/stack/diffhub.png" },
      { name: "Rubber Duck", logo: "/stack/rubber-duck.png" },
    ],
  },
  {
    label: "Platform",
    tools: [
      { name: "Blode.md", logo: "/stack/blode-md.png" },
      { name: "Strata Sync", logo: "/stack/strata-sync.png" },
    ],
  },
] as const;

const SKILL_PHASES = ["Project start", "Design", "Writing", "Pre-ship", "Pre-merge", "Release"];

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
        <Display size="huge">Care made easy.</Display>
        <SoftText className="max-w-none slide-text-2xl">Encoding taste into code.</SoftText>
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
        <Display size="huge">Matthew Blode</Display>
      </header>

      <footer className="flex flex-col gap-[var(--slide-space-6)]">
        <div className="grid gap-[var(--slide-space-6)] md:grid-cols-4">
          <WordTile>AI at Linktree</WordTile>
          <WordTile>Two startups, two exits</WordTile>
          <WordTile>Codex Ambassador</WordTile>
          <WordTile>Forbes 30 Under 30</WordTile>
        </div>
        <a
          className="honk-fade-up w-fit underline-offset-4 slide-text-lg hover:underline focus-visible:underline"
          href="https://matthewblode.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          matthewblode.com
        </a>
      </footer>
    </SlideContainer>
  );
}

export function SlideCarelessness() {
  return (
    <SlideContainer className="items-center justify-center text-center" palette="e">
      <blockquote className="mx-auto flex w-full max-w-[80%] flex-col gap-[var(--slide-space-4)]">
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
    <SlideContainer className="justify-between" palette="c">
      <div className="grid min-h-[calc(100dvh-var(--slide-space-16))] gap-[var(--slide-space-8)] md:grid-cols-[3fr_5fr] md:items-center">
        <header className="flex flex-col gap-[var(--slide-space-5)]">
          <Image
            alt="Done Bear app icon"
            className="size-24 rounded-[var(--slide-radius-xl)] bg-white object-contain p-3"
            height={96}
            priority
            src="/donebear/icon.png"
            width={96}
          />
          <Mark>Done Bear</Mark>
          <Display className="max-w-[14ch]" size="2xl">
            Scratch your own itch.
          </Display>
          <SoftText className="max-w-[34ch] slide-text-xl">
            A to-do app. Every layer that built it is open source.
          </SoftText>
          <a
            className="w-fit underline-offset-4 slide-text-lg hover:underline focus-visible:underline"
            href="https://donebear.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            donebear.com
          </a>
        </header>

        <div className="relative min-h-[20rem] overflow-hidden rounded-[var(--slide-radius-xl)] outline outline-1 -outline-offset-1 outline-[var(--hairline)] md:min-h-[28rem]">
          <iframe
            className="h-full w-full absolute inset-0 border-0"
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            sandbox="allow-scripts allow-same-origin"
            src="https://donebear.com"
            title="Done Bear interactive demo"
          />
        </div>
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

export function SlideThesis() {
  return (
    <SlideContainer className="items-center justify-center text-center" palette="e">
      <Mark className="!self-center">Thesis</Mark>
      <Display className="mx-auto max-w-[13ch]" size="2xl">
        The bottleneck has changed.
      </Display>
      <SoftText className="mx-auto mt-[var(--slide-space-4)] max-w-[34ch] slide-text-xl">
        Code got cheap. Taste didn’t. Build the defaults that close the gap.
      </SoftText>
    </SlideContainer>
  );
}

export function SlideStackMap() {
  let toolIndex = 0;

  return (
    <SlideContainer className="justify-between" palette="d">
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
                  <div
                    className="flex items-center gap-[var(--slide-space-3)] rounded-[var(--slide-radius-lg)] border border-[var(--hairline)] p-[var(--slide-space-3)]"
                    key={tool.name}
                    style={{ "--stagger-i": i } as CSSProperties}
                  >
                    <Image
                      alt={`${tool.name} logo`}
                      className="size-8 shrink-0 rounded-[var(--slide-radius-sm)] object-contain"
                      height={32}
                      src={tool.logo}
                      width={32}
                    />
                    <p className="font-heading leading-[1.2] slide-text-base">{tool.name}</p>
                  </div>
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
    <SlideContainer className="justify-between" palette="d">
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
        <SoftText className="max-w-[34ch] slide-text-xl">
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
        <WordTile>Offline</WordTile>
        <WordTile>Server order</WordTile>
        <WordTile>Realtime</WordTile>
      </div>
    </SlideContainer>
  );
}

export function SlideSyncDemo() {
  return (
    <SlideContainer className="justify-between" palette="d">
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
    <SlideContainer className="justify-between" palette="a">
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
          <SoftText className="max-w-[32ch] slide-text-xl">
            A shadcn/ui registry with taste baked in. Agents install from it.
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
          className="min-h-[28rem]"
          objectPosition="object-top"
          src="/research/blode-ui-registry.png"
        />
      </div>
    </SlideContainer>
  );
}

export function SlideStyleCapture() {
  return (
    <SlideContainer className="justify-between" palette="c">
      <header className="flex flex-col gap-[var(--slide-space-4)]">
        <Mark>Style Capture</Mark>
        <Display className="max-w-[12ch]" size="2xl">
          Point at any UI.
        </Display>
        <SoftText className="max-w-[38ch] slide-text-xl">
          A Chrome extension that gives your agent computed styles and Tailwind mappings.
        </SoftText>
      </header>

      <div className="grid gap-[var(--slide-space-6)] md:grid-cols-[2fr_3fr] md:items-end">
        <Image
          alt="Style Capture logo"
          className="size-32 rounded-[var(--slide-radius-xl)] object-contain"
          height={160}
          src="/stack/style-capture.png"
          width={160}
        />
        <div className="grid gap-[var(--slide-space-5)] md:grid-cols-3">
          <WordTile>Ground truth</WordTile>
          <WordTile>Tailwind mapping</WordTile>
          <WordTile>Agent-ready</WordTile>
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
          23 skills.
        </Display>
        <SoftText className="max-w-[34ch] slide-text-xl">
          Capture what you know. Make it repeatable.
        </SoftText>
      </header>

      <div className="honk-stagger grid grid-cols-2 gap-[var(--slide-space-4)] md:grid-cols-3">
        {SKILL_PHASES.map((phase, i) => (
          <div
            className="flex aspect-[5/3] items-end rounded-[var(--slide-radius-xl)] border border-[var(--hairline)] p-[var(--slide-space-4)]"
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
    <SlideContainer className="justify-between" palette="d">
      <header className="flex flex-col gap-[var(--slide-space-4)]">
        <Image
          alt="AllMD logo"
          className="size-36 rounded-[var(--slide-radius-xl)] object-contain"
          height={180}
          src="/stack/allmd.png"
          width={180}
        />
        <Mark>AllMD</Mark>
        <Display className="max-w-[14ch]" size="2xl">
          Turn the whole universe into markdown.
        </Display>
        <SoftText className="max-w-[34ch] slide-text-xl">
          Convert anything to markdown. Web pages, YouTube, PDFs, images, audio, and more.
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
    <SlideContainer className="justify-between" palette="c">
      <header className="flex flex-col gap-[var(--slide-space-4)]">
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
          AI agents learn your product from your docs. Blode.md keeps them in your repo, versioned
          with the code, readable by people and machines.
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
        <WordTile>Search</WordTile>
        <WordTile>Content types</WordTile>
        <WordTile>API reference</WordTile>
      </div>
    </SlideContainer>
  );
}

export function SlideDiffHub() {
  return (
    <SlideContainer className="justify-between" palette="e">
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
          <div className="flex flex-col gap-[var(--slide-space-2)]">
            <code className="font-mono slide-text-lg">npx diffhub@latest cmux</code>
            <a
              className="w-fit underline-offset-4 slide-text-lg hover:underline focus-visible:underline"
              href="https://diffhub.blode.co"
              rel="noopener noreferrer"
              target="_blank"
            >
              diffhub.blode.co
            </a>
          </div>
        </header>

        <Screenshot
          alt="DiffHub showing a branch diff with file sidebar and split view"
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

export function SlideSolveYourOwn() {
  return (
    <SlideContainer className="items-center justify-center text-center" palette="d">
      <Mark className="!self-center">Open source</Mark>
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
            <a
              className="underline-offset-4 hover:underline focus-visible:underline"
              href="https://matthewblode.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              matthewblode.com
            </a>
          </div>
        </div>
        <div
          aria-label="QR code linking to matthewblode.com"
          className="hidden md:block"
          role="img"
        >
          <QRCode className="size-40" data="https://matthewblode.com" />
        </div>
      </div>
    </SlideContainer>
  );
}
