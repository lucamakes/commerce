const reviews = [
  {
    quote:
      "De House Espresso is verreweg de beste koffie die ik thuis heb gezet. Rijk, vol en nooit bitter.",
    author: "Sophie V.",
    product: "House Espresso",
    rating: 5,
  },
  {
    quote:
      "Eindelijk een specialty roaster die ook echt vers brandt. Je proeft het verschil met supermarktkoffie meteen.",
    author: "Mark de B.",
    product: "Ethiopia Yirgacheffe",
    rating: 5,
  },
  {
    quote:
      "Snelle levering, mooie verpakking en de Sunday Blend is perfect voor lazy weekenden.",
    author: "Lisa K.",
    product: "Sunday Blend",
    rating: 5,
  },
];

function Stars({ count }: { count: number }) {
  return (
    <span className="text-accent" aria-label={`${count} van 5 sterren`}>
      {"★".repeat(count)}
    </span>
  );
}

export function SocialProof() {
  return (
    <section className="bg-neutral-100 dark:bg-neutral-900">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="mb-10 text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-neutral-500">
            Wat klanten zeggen
          </p>
          <h2 className="mt-2 text-4xl font-light md:text-5xl">
            Geliefd bij koffieliefhebbers
          </h2>
          <p className="mt-3 font-sans text-neutral-600 dark:text-neutral-400">
            Gemiddeld 4,9/5 op basis van 200+ reviews
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {reviews.map((review) => (
            <blockquote
              key={review.author}
              className="flex flex-col bg-white p-6 dark:bg-neutral-950"
            >
              <Stars count={review.rating} />
              <p className="mt-4 flex-1 font-sans leading-relaxed text-neutral-700 dark:text-neutral-300">
                &ldquo;{review.quote}&rdquo;
              </p>
              <footer className="mt-6 border-t border-neutral-100 pt-4 dark:border-neutral-800">
                <cite className="not-italic font-medium">{review.author}</cite>
                <p className="font-sans text-sm text-neutral-500">
                  {review.product}
                </p>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
