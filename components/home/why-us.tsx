const points = [
  {
    title: "Kwaliteitsingrediënten",
    text: "Single origin koffie en zorgvuldig geselecteerde thee — herkomst die je kunt proeven.",
  },
  {
    title: "Vers bereid",
    text: "Kleine batches, wekelijks met de hand gebrand. Altijd vers, nooit uit de voorraad.",
  },
  {
    title: "Bezorgd tot aan de deur",
    text: "Rechtstreeks naar jou, klaar om te malen, te zetten en van te genieten.",
  },
];

export function WhyUs() {
  return (
    <section className="bg-neutral-100">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-light md:text-5xl">Waarom wij</h2>
        </div>
        <div className="grid gap-10 md:grid-cols-3 md:gap-12">
          {points.map((point, index) => (
            <div key={point.title} className="text-center">
              <p className="font-heading text-sm tracking-[0.2em] text-accent">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-3 text-2xl font-light md:text-3xl">
                {point.title}
              </h3>
              <p className="mt-3 font-sans leading-relaxed text-neutral-600">
                {point.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
