export function NewsletterSignup() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 md:py-24">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm uppercase tracking-[0.2em] text-neutral-500">
          Blijf op de hoogte
        </p>
        <h2 className="mt-2 text-4xl font-light md:text-5xl">
          10% korting op je eerste bestelling
        </h2>
        <p className="mt-4 font-sans text-neutral-600 dark:text-neutral-400">
          Schrijf je in voor onze nieuwsbrief en ontvang exclusieve aanbiedingen,
          nieuwe roasts en tips van onze barista&apos;s.
        </p>
        <form className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <input
            type="email"
            name="email"
            placeholder="jouw@email.nl"
            required
            className="w-full border border-neutral-300 bg-white px-5 py-3 font-sans text-sm outline-none focus:border-accent dark:border-neutral-700 dark:bg-neutral-950 sm:max-w-xs"
          />
          <button
            type="submit"
            className="bg-black px-6 py-3 text-sm font-medium text-white transition hover:bg-accent"
          >
            Inschrijven
          </button>
        </form>
        <p className="mt-4 font-sans text-xs text-neutral-400">
          Geen spam. Afmelden kan altijd.
        </p>
      </div>
    </section>
  );
}
