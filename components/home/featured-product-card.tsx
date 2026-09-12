import { QuickAddToCart } from "components/cart/quick-add-to-cart";
import { getProductSubtitle } from "lib/local/products";
import type { Product } from "lib/shopify/types";
import Image from "next/image";
import Link from "next/link";

export function FeaturedProductCard({
  product,
  compact = false,
}: {
  product: Product;
  compact?: boolean;
}) {
  const subtitle = getProductSubtitle(product.handle);

  return (
    <article className="group flex flex-col">
      <Link
        href={`/product/${product.handle}`}
        prefetch={true}
        className="relative block overflow-hidden bg-neutral-100 dark:bg-neutral-900"
      >
        <div className={compact ? "aspect-[4/5]" : "aspect-square"}>
          <Image
            src={product.featuredImage.url}
            alt={product.title}
            fill
            sizes={
              compact
                ? "(min-width: 1024px) 20vw, 50vw"
                : "(min-width: 1024px) 25vw, 50vw"
            }
            className="object-cover transition duration-500 group-hover:scale-105"
          />
        </div>
      </Link>
      <div className={compact ? "mt-3 space-y-2" : "mt-4 space-y-3"}>
        <Link href={`/product/${product.handle}`} prefetch={true}>
          <h3
            className={
              compact
                ? "text-base font-medium leading-snug"
                : "text-lg font-medium leading-snug"
            }
          >
            {product.title}
          </h3>
          {subtitle ? (
            <p className="font-sans text-sm text-neutral-500 dark:text-neutral-400">
              {subtitle}
            </p>
          ) : null}
        </Link>
        <QuickAddToCart product={product} />
      </div>
    </article>
  );
}
