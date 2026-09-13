import { StorySection } from "components/home/story-section";
import Footer from "components/layout/footer";

export const metadata = {
  title: "Over ons",
  description: "Leer meer over Panisto — onze passie voor koffie en thee.",
};

export default function AboutPage() {
  return (
    <>
      <StorySection showCta={false} headingAs="h1" />
      <Footer />
    </>
  );
}
