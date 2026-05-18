import { notFound } from "next/navigation";
import {
  Slide01Title,
  Slide02About,
  Slide03DoneBear,
  Slide04NotAList,
  Slide05Thesis,
  Slide06StackMap,
  Slide08BlodeUi,
  Slide09StyleCapture,
  Slide10AgentSkills,
  Slide11MarkdownLayer,
  Slide14StrataSync,
  Slide15Surfaces,
  Slide16BuildOrder,
  Slide17FullStack,
  Slide18Takeaways,
  SlideBlodeIcons,
  SlideDiffHub,
  SlideGlide,
  SlideLiveDemo,
  SlideQuestions,
  SlideSpotlightTesting,
} from "@/components/slides/blode-stack-slides";
import { MotionRoot } from "@/components/slides/primitives/motion-root";
import { SlideNavigation } from "@/components/slides/slide-navigation";
import { SITE_URL } from "@/lib/site-url";
import { SLIDES, TOTAL_SLIDES } from "@/lib/slides";

const slideComponents = [
  Slide01Title,
  Slide02About,
  Slide17FullStack,
  Slide03DoneBear,
  SlideLiveDemo,
  Slide04NotAList,
  Slide05Thesis,
  Slide06StackMap,
  Slide14StrataSync,
  Slide15Surfaces,
  SlideGlide,
  SlideBlodeIcons,
  Slide08BlodeUi,
  Slide09StyleCapture,
  Slide10AgentSkills,
  Slide11MarkdownLayer,
  SlideDiffHub,
  SlideSpotlightTesting,
  Slide16BuildOrder,
  Slide18Takeaways,
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
    description: `Slide ${slideNum} of ${TOTAL_SLIDES}: ${slideData.title}. From "Blode Stack" by Matthew Blode.`,
    openGraph: {
      description: `Slide ${slideNum} of ${TOTAL_SLIDES} from "Blode Stack"`,
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
