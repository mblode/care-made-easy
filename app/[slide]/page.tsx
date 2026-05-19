import { notFound } from "next/navigation";
import {
  SlideAbout,
  SlideAgentSkills,
  SlideAllMd,
  SlideBlodeIcons,
  SlideBlodeMd,
  SlideBlodeUi,
  SlideCarelessness,
  SlideDiffHub,
  SlideDoneBear,
  SlideGlide,
  SlideMoreTools,
  SlideNotAList,
  SlideQuestions,
  SlideSolveYourOwn,
  SlideSpotlightTesting,
  SlideStackMap,
  SlideStrataSync,
  SlideStyleCapture,
  SlideSyncDemo,
  SlideThesis,
  SlideTitle,
} from "@/components/slides/blode-stack-slides";
import { MotionRoot } from "@/components/slides/primitives/motion-root";
import { SlideNavigation } from "@/components/slides/slide-navigation";
import { SITE_URL } from "@/lib/site-url";
import { SLIDES, TOTAL_SLIDES } from "@/lib/slides";

const slideComponents = [
  SlideTitle,
  SlideAbout,
  SlideCarelessness,
  SlideDoneBear,
  SlideNotAList,
  SlideThesis,
  SlideStackMap,
  SlideStrataSync,
  SlideSyncDemo,
  SlideGlide,
  SlideBlodeIcons,
  SlideBlodeUi,
  SlideStyleCapture,
  SlideAgentSkills,
  SlideAllMd,
  SlideBlodeMd,
  SlideDiffHub,
  SlideSpotlightTesting,
  SlideMoreTools,
  SlideSolveYourOwn,
  SlideQuestions,
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
    description: `${slideData.title}. Slide ${slideNum} of ${TOTAL_SLIDES} from Care made easy — a talk on the open-source stack behind Done Bear.`,
    openGraph: {
      description: `${slideData.title} — slide ${slideNum} of ${TOTAL_SLIDES}. The open-source stack behind Done Bear.`,
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
  const { palette } = SLIDES[slideNum - 1];

  return (
    <SlideNavigation currentSlide={slideNum} palette={palette} totalSlides={TOTAL_SLIDES}>
      <MotionRoot slideKey={slideNum}>
        <SlideContent />
      </MotionRoot>
    </SlideNavigation>
  );
}
