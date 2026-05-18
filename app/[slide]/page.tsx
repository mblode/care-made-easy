import { notFound } from "next/navigation";
import { Slide01Intro } from "@/components/slides/slide-01-intro";
import { Slide02StateOfAi } from "@/components/slides/slide-02-state-of-ai";
import { Slide03Evolution } from "@/components/slides/slide-03-evolution";
import { Slide04Bottlenecks } from "@/components/slides/slide-04-bottlenecks";
import { Slide06Frameworks } from "@/components/slides/slide-06-frameworks";
import { Slide07Prompt } from "@/components/slides/slide-07-prompt";
import { Slide08Models } from "@/components/slides/slide-08-models";
import { Slide09Mcps } from "@/components/slides/slide-09-mcps";
import { Slide12ChapterMatt } from "@/components/slides/slide-12-chapter-matt";
import { Slide13WorkflowMatthew1 } from "@/components/slides/slide-13-workflow-matthew-1";
import { Slide14WorkflowMatthew2 } from "@/components/slides/slide-14-workflow-matthew-2";
import { Slide14aMattQuotes } from "@/components/slides/slide-14a-matt-quotes";
import { Slide15SkillsGuardrails } from "@/components/slides/slide-15-skills-guardrails";
import { Slide16UiSkills } from "@/components/slides/slide-16-ui-skills";
import { Slide17ChapterMru } from "@/components/slides/slide-17-chapter-mru";
import { Slide18WorkflowMru1 } from "@/components/slides/slide-18-workflow-mru-1";
import { Slide19WorkflowMru2 } from "@/components/slides/slide-19-workflow-mru-2";
import { Slide25Whoopsies2 } from "@/components/slides/slide-25-whoopsies-2";
import { Slide27DebuggingQa } from "@/components/slides/slide-27-debugging-qa";
import { Slide28TicketQuality } from "@/components/slides/slide-28-ticket-quality";
import { Slide29KeepUp } from "@/components/slides/slide-29-keep-up";
import { Slide31ContextEngineering } from "@/components/slides/slide-31-context-engineering";
import { Slide33Closing } from "@/components/slides/slide-33-closing";
import { MotionRoot } from "@/components/slides/primitives/motion-root";
import { SlideNavigation } from "@/components/slides/slide-navigation";
import { SlidePresenter } from "@/components/slides/slide-presenter";
import { SITE_URL } from "@/lib/site-url";
import { SLIDES, TOTAL_SLIDES } from "@/lib/slides";

const slideComponents = [
  Slide01Intro,
  Slide02StateOfAi,
  Slide03Evolution,
  Slide04Bottlenecks,
  Slide06Frameworks,
  Slide07Prompt,
  Slide08Models,
  Slide09Mcps,
  Slide12ChapterMatt,
  Slide13WorkflowMatthew1,
  Slide14WorkflowMatthew2,
  Slide14aMattQuotes,
  Slide15SkillsGuardrails,
  Slide16UiSkills,
  Slide17ChapterMru,
  Slide18WorkflowMru1,
  Slide19WorkflowMru2,
  Slide25Whoopsies2,
  Slide27DebuggingQa,
  Slide28TicketQuality,
  Slide29KeepUp,
  Slide31ContextEngineering,
  Slide33Closing,
];

export function generateStaticParams() {
  const params: { slide: string }[] = [];

  for (let i = 1; i <= TOTAL_SLIDES; i += 1) {
    params.push({ slide: String(i) });
  }

  return params;
}

const BASE_URL = SITE_URL;

export async function generateMetadata({ params }: { params: Promise<{ slide: string }> }) {
  const { slide } = await params;
  const slideNum = Number.parseInt(slide, 10);

  if (Number.isNaN(slideNum) || slideNum < 1 || slideNum > TOTAL_SLIDES) {
    return { title: "Slide Not Found" };
  }

  const slideData = SLIDES[slideNum - 1];
  const slideUrl = `${BASE_URL}/${slideNum}`;

  return {
    alternates: {
      canonical: slideUrl,
    },
    description: `Slide ${slideNum} of ${TOTAL_SLIDES}: ${slideData.title}. From the presentation "Unblocking yourself with AI" by Matthew Blode and Mrudula Vysyaraju.`,
    openGraph: {
      description: `Slide ${slideNum} of ${TOTAL_SLIDES} from "Unblocking yourself with AI"`,
      title: slideData.title,
      type: "article",
      url: slideUrl,
    },
    title: slideData.title,
  };
}

export default async function SlidePage({ params }: { params: Promise<{ slide: string }> }) {
  const { slide } = await params;
  const slideNum = Number.parseInt(slide, 10);

  if (Number.isNaN(slideNum) || slideNum < 1 || slideNum > TOTAL_SLIDES) {
    notFound();
  }

  const SlideContent = slideComponents[slideNum - 1];
  const { palette, presenter } = SLIDES[slideNum - 1];

  return (
    <SlideNavigation currentSlide={slideNum} palette={palette} totalSlides={TOTAL_SLIDES}>
      <MotionRoot slideKey={slideNum}>
        <SlideContent />
      </MotionRoot>
      <SlidePresenter palette={palette} presenter={presenter} />
    </SlideNavigation>
  );
}
