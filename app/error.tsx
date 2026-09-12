"use client";

export default function Error({ reset }: { reset: () => void }) {
  return (
    <div className="mx-auto max-w-xl px-6 py-16 text-center md:py-24">
      <p className="text-sm uppercase tracking-[0.2em] text-neutral-500">
        Er ging iets mis
      </p>
      <h2 className="mt-2 text-4xl font-light md:text-5xl">
        Probeer het opnieuw
      </h2>
      <p className="mt-4 font-sans text-neutral-600 dark:text-neutral-300">
        Er is een probleem opgetreden. Dit kan tijdelijk zijn — probeer je
        actie nogmaals.
      </p>
      <button
        className="mt-8 bg-black px-8 py-3 text-sm font-medium text-white transition hover:bg-accent"
        onClick={() => reset()}
      >
        Opnieuw proberen
      </button>
    </div>
  );
}
