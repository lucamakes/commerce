import Image from "next/image";
import Link from "next/link";

const collections = [
  {
    title: "Koffie",
    handle: "koffie",
    image: "/collections/koffie.jpg",
    description: "Single origin & huisblends",
  },
  {
    title: "Thee",
    handle: "thee",
    image: "/collections/thee.jpg",
    description: "Losse thee & infusies",
  },
];

export function CollectionCards() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-12 md:py-16">
      <div className="mb-8 flex items-end justify-between gap-4">
        <h2 className="text-3xl font-light md:text-4xl">Shop per categorie</h2>
      </div>
      <div className="grid gap-4 md:grid-cols-2 md:gap-5">
        {collections.map((collection) => (
          <CollectionCard key={collection.handle} collection={collection} />
        ))}
      </div>
    </section>
  );
}

function CollectionCard({
  collection,
}: {
  collection: (typeof collections)[number];
}) {
  return (
    <Link
      href={`/search/${collection.handle}`}
      className="group relative aspect-[4/3] overflow-hidden md:aspect-[4/5] md:min-h-[420px]"
    >
      <Image
        src={collection.image}
        alt={collection.title}
        fill
        sizes="(min-width: 768px) 50vw, 100vw"
        className="object-cover transition duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
      <div className="absolute bottom-0 p-5 md:p-8">
        <h3 className="text-3xl font-light text-white md:text-4xl">
          {collection.title}
        </h3>
        <p className="mt-1 text-sm text-neutral-200">
          {collection.description}
        </p>
        <span className="mt-3 inline-block text-sm text-white underline-offset-4 group-hover:underline">
          Bekijk collectie →
        </span>
      </div>
    </Link>
  );
}
