import { GridTileImage } from "components/grid/tile";
import type { Product } from "lib/shopify/types";
import Link from "next/link";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/product/${product.handle}`}
      prefetch={true}
      className="group relative block aspect-square w-full overflow-hidden"
    >
      <GridTileImage
        src={product.featuredImage.url}
        fill
        sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
        alt={product.title}
        label={{
          title: product.title,
          amount: product.priceRange.maxVariantPrice.amount,
          currencyCode: product.priceRange.maxVariantPrice.currencyCode,
        }}
      />
    </Link>
  );
}
