import Link from "next/link";

export function Hero() {
  return (
    <section className="relative flex min-h-[75vh] items-end overflow-hidden bg-neutral-900">
      <video
        autoPlay
        loop
        muted
        playsInline
        poster="/videos/hero-poster.jpg"
        className="absolute inset-0 h-full w-full object-cover opacity-80"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />
      <div className="relative mx-auto w-full max-w-7xl px-6 pb-16 pt-32 md:pb-24 md:pt-36">
        <h1 className="max-w-2xl text-5xl font-light leading-tight text-white md:text-7xl">
          Kleine batches, wekelijks gebrand
        </h1>
        <p className="mt-4 max-w-lg text-lg text-neutral-200">
          Single origin en huisblends — vers gebrand, zorgvuldig geselecteerd
          en rechtstreeks naar jouw deur.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href="/search/koffie"
            className="bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-accent hover:text-white"
          >
            Shop koffie
          </Link>
          <Link
            href="/about"
            className="border border-white/60 px-6 py-3 text-sm font-medium text-white transition hover:border-accent-light hover:bg-white/10"
          >
            Ons verhaal
          </Link>
        </div>
      </div>
    </section>
  );
}
