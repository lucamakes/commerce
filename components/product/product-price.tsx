"use client";

import { CollectionPrice } from "components/collection/collection-price";
import { Product, ProductVariant } from "lib/shopify/types";
import { useSearchParams } from "next/navigation";

export function ProductPrice({ product }: { product: Product }) {
  const searchParams = useSearchParams();

  const variant = product.variants.find((item: ProductVariant) =>
    item.selectedOptions.every(
      (option) =>
        option.value === searchParams.get(option.name.toLowerCase()),
    ),
  );
  const defaultVariant =
    product.variants.length === 1 ? product.variants[0] : undefined;
  const selected = variant || defaultVariant;

  return (
    <CollectionPrice
      amount={
        selected?.price.amount ?? product.priceRange.maxVariantPrice.amount
      }
      currencyCode={
        selected?.price.currencyCode ??
        product.priceRange.maxVariantPrice.currencyCode
      }
      className="text-base"
    />
  );
}
