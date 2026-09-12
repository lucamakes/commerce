import { getCollectionProducts } from "lib/shopify";
import { ProductCard } from "./product-card";

export async function FeaturedProducts() {
  const products = await getCollectionProducts({
    collection: "koffie",
  });

  if (!products.length) return null;

  return (
    <section className="mx-auto max-w-7xl px-6 py-16 md:py-24">
      <div className="mb-10 flex items-end justify-between gap-4">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-neutral-500">
            Nieuw & populair
          </p>
          <h2 className="mt-2 text-4xl font-light md:text-5xl">
            Uitgelichte producten
          </h2>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.handle} product={product} />
        ))}
      </div>
    </section>
  );
}
