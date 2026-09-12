import { CollectionProductCard } from "components/collection/collection-product-card";
import { getCollectionProducts } from "lib/shopify";
import Link from "next/link";

export async function FeaturedCoffee() {
  const products = await getCollectionProducts({ collection: "koffie" });

  if (!products.length) return null;

  const featured = products.slice(0, 4);

  return (
    <section className="mx-auto max-w-7xl px-6 py-10 md:py-14">
      <div className="mb-10">
        <div className="flex items-center justify-between gap-4">
          <h2 className="text-4xl font-light md:text-5xl">Koffie</h2>
          <Link
            href="/search/koffie"
            className="shrink-0 border border-neutral-300 px-6 py-2.5 text-sm font-medium transition hover:border-accent hover:text-accent dark:border-neutral-600"
          >
            Meer koffie bekijken
          </Link>
        </div>
        <p className="mt-3 max-w-xl font-sans text-neutral-600 dark:text-neutral-400">
          Single origin en huisblends — vers gebrand, klaar om te bestellen.
        </p>
      </div>

      <ul className="grid grid-cols-2 gap-x-5 gap-y-12 md:grid-cols-4 lg:gap-x-6">
        {featured.map((product) => (
          <CollectionProductCard key={product.handle} product={product} />
        ))}
      </ul>
    </section>
  );
}
