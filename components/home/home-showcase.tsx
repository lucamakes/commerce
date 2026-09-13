import Footer from "components/layout/footer";
import { Suspense } from "react";
import { BestSellers } from "./best-sellers";
import { CollectionCards } from "./collection-cards";
import { FinalCta } from "./final-cta";
import { Hero } from "./hero";
import { StorySection } from "./story-section";
import { WhyUs } from "./why-us";

export function HomeShowcase() {
  return (
    <>
      <Hero />
      <CollectionCards />
      <Suspense fallback={null}>
        <BestSellers />
      </Suspense>
      <WhyUs />
      <StorySection showCta={false} />
      <FinalCta />
      <Footer />
    </>
  );
}
