import Image from "next/image";
import Link from "next/link";

export function StorySection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 md:py-24">
      <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src="/collections/koffie.jpg"
            alt="Koffiebranden bij Panisto"
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-neutral-500">
            Ons verhaal
          </p>
          <h2 className="mt-2 text-4xl font-light md:text-5xl">
            Van boer tot brander
          </h2>
          <p className="mt-6 font-sans text-lg leading-relaxed text-neutral-600 dark:text-neutral-300">
            We werken rechtstreeks samen met kleine boerderijen in Ethiopië,
            Colombia en Guatemala. Elke batch wordt in onze eigen roasterij
            met de hand gebrand — nooit in bulk, altijd vers.
          </p>
          <p className="mt-4 font-sans leading-relaxed text-neutral-600 dark:text-neutral-300">
            Transparante herkomst, eerlijke prijzen en een smaak die je
            rechtvaardigt. Dat is waar specialty coffee om draait.
          </p>
          <Link
            href="/about"
            className="mt-8 inline-block border border-neutral-300 px-6 py-3 text-sm font-medium transition hover:border-accent hover:text-accent dark:border-neutral-600"
          >
            Lees meer over Panisto
          </Link>
        </div>
      </div>
    </section>
  );
}
