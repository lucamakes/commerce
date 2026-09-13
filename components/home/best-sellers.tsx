import { CollectionProductCard } from "components/collection/collection-product-card";
import { getCollectionProducts, getProducts } from "lib/shopify";
import type { Product } from "lib/shopify/types";
import Link from "next/link";

function takeUnique(products: Product[], limit: number) {
  const seen = new Set<string>();
  const selected: Product[] = [];

  for (const product of products) {
    if (seen.has(product.handle)) continue;
    seen.add(product.handle);
    selected.push(product);
    if (selected.length >= limit) break;
  }

  return selected;
}

export async function BestSellers() {
  const [coffee, tea, popular] = await Promise.all([
    getCollectionProducts({ collection: "koffie" }),
    getCollectionProducts({ collection: "thee" }),
    getProducts({ sortKey: "BEST_SELLING" }),
  ]);

  const products = takeUnique(
    [...coffee.slice(0, 2), ...tea.slice(0, 2), ...popular],
    4,
  );

  if (!products.length) return null;

  return (
    <section className="mx-auto max-w-7xl px-6 py-12 md:py-20">
      <div className="mb-10 flex items-end justify-between gap-4">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-neutral-500">
            Populair
          </p>
          <h2 className="mt-2 text-4xl font-light md:text-5xl">Bestsellers</h2>
        </div>
        <Link
          href="/search"
          className="shrink-0 border border-neutral-300 px-6 py-2.5 text-sm font-medium transition hover:border-accent hover:text-accent dark:border-neutral-600"
        >
          Alles bekijken
        </Link>
      </div>
      <ul className="grid grid-cols-2 gap-x-5 gap-y-12 md:grid-cols-4 lg:gap-x-6">
        {products.map((product) => (
          <CollectionProductCard key={product.handle} product={product} />
        ))}
      </ul>
    </section>
  );
}
