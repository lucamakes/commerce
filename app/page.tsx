import { HomeShowcase } from "components/home/home-showcase";

export const metadata = {
  description:
    "Panisto — specialty koffie en thee. Vers gebrand, zorgvuldig geselecteerd.",
  openGraph: {
    type: "website",
  },
};

export default function HomePage() {
  return <HomeShowcase />;
}
