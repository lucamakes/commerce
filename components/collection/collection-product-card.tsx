import { getProductSubtitle } from "lib/local/products";
import type { Product } from "lib/shopify/types";
import Image from "next/image";
import Link from "next/link";
import { CollectionPrice } from "./collection-price";

export function CollectionProductCard({ product }: { product: Product }) {
  const subtitle = getProductSubtitle(product.handle);

  return (
    <li>
      <Link
        href={`/product/${product.handle}`}
        prefetch={true}
        className="group block"
      >
        <Image
          src={product.featuredImage.url}
          alt={product.title}
          width={product.featuredImage.width}
          height={product.featuredImage.height}
          sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
          className="h-auto w-full"
        />
        <div className="mt-4 space-y-0.5">
          <h3 className="text-lg font-medium leading-snug text-black dark:text-white">
            {product.title}
          </h3>
          {subtitle ? (
            <p className="font-sans text-sm font-normal text-neutral-500 dark:text-neutral-400">
              {subtitle}
            </p>
          ) : null}
          <div className="pt-1.5 font-sans">
            <CollectionPrice
              amount={product.priceRange.maxVariantPrice.amount}
              currencyCode={product.priceRange.maxVariantPrice.currencyCode}
            />
          </div>
        </div>
      </Link>
    </li>
  );
}
