import Footer from "components/layout/footer";

export const metadata = {
  title: "Over ons",
  description: "Leer meer over Panisto — onze passie voor koffie en thee.",
};

export default function AboutPage() {
  return (
    <>
      <div className="mx-auto max-w-3xl px-6 py-16 md:py-24">
        <p className="text-sm uppercase tracking-[0.2em] text-neutral-500">
          Ons verhaal
        </p>
        <h1 className="mt-2 text-5xl font-light md:text-6xl">Over Panisto</h1>
        <p className="mt-6 text-lg leading-relaxed text-neutral-600 dark:text-neutral-300">
          Panisto is een specialty coffee shop waar kwaliteit, herkomst en
          vakmanschap centraal staan. We branden onze koffie in kleine batches
          en selecteren thee met zorg.
        </p>
        <p className="mt-4 text-lg leading-relaxed text-neutral-600 dark:text-neutral-300">
          Of je nu op zoek bent naar een rijke espresso of een bloemige
          filterkoffie — bij Panisto vind je producten om van te genieten, thuis
          of in onze winkel.
        </p>
      </div>
      <Footer />
    </>
  );
}
