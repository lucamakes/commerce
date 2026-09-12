import { AddToCart } from "components/cart/add-to-cart";
import Price from "components/price";
import { VariantSelector } from "components/product/variant-selector";
import { getProduct } from "lib/shopify";
import Image from "next/image";
import Link from "next/link";

export async function FeaturedBuyBox() {
  const product = await getProduct("house-espresso");

  if (!product) return null;

  return (
    <section className="bg-neutral-100 dark:bg-neutral-900">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-16 md:grid-cols-2 md:py-24">
        <Image
          src={product.featuredImage.url}
          alt={product.title}
          width={product.featuredImage.width}
          height={product.featuredImage.height}
          sizes="(min-width: 768px) 50vw, 100vw"
          className="h-auto w-full"
          priority
        />
        <div className="flex flex-col justify-center">
          <p className="text-sm uppercase tracking-[0.2em] text-neutral-500">
            Featured
          </p>
          <h2 className="mt-2 text-4xl font-light md:text-5xl">
            {product.title}
          </h2>
          <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-300">
            {product.description}
          </p>
          <div className="mt-4">
            <Price
              amount={product.priceRange.maxVariantPrice.amount}
              currencyCode={product.priceRange.maxVariantPrice.currencyCode}
              className="text-xl"
            />
          </div>
          <div className="mt-6">
            <VariantSelector options={product.options} variants={product.variants} />
          </div>
          <div className="mt-6 flex flex-wrap gap-4">
            <AddToCart product={product} />
            <Link
              href={`/product/${product.handle}`}
              className="border border-neutral-300 px-6 py-3 text-sm font-medium transition hover:border-accent hover:text-accent dark:border-neutral-600"
            >
              Bekijk product
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
