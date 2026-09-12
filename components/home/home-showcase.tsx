import Footer from "components/layout/footer";
import { Suspense } from "react";
import { CollectionCards } from "./collection-cards";
import { FeaturedCoffee } from "./featured-coffee";
import { FeaturedTea } from "./featured-tea";
import { Hero } from "./hero";
import { NewsletterSignup } from "./newsletter-signup";
import { SocialProof } from "./social-proof";
import { StorySection } from "./story-section";

export function HomeShowcase() {
  return (
    <>
      <Hero />
      <CollectionCards />
      <Suspense fallback={null}>
        <FeaturedCoffee />
      </Suspense>
      <StorySection />
      <Suspense fallback={null}>
        <FeaturedTea />
      </Suspense>
      <SocialProof />
      <NewsletterSignup />
      <Footer />
    </>
  );
}
