import SlidePage, { generateMetadata as generateSlideMetadata } from "./[slide]/page";

const FIRST_SLIDE_PARAMS = Promise.resolve({ slide: "1" });

export function generateMetadata() {
  return generateSlideMetadata({ params: FIRST_SLIDE_PARAMS });
}

export default function Home() {
  return <SlidePage params={FIRST_SLIDE_PARAMS} />;
}
