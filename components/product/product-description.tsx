import { AddToCart } from "components/cart/add-to-cart";
import { getProductSubtitle } from "lib/local/products";
import { Product } from "lib/shopify/types";
import { Suspense } from "react";
import { ProductPrice } from "./product-price";
import { VariantSelector } from "./variant-selector";

export function ProductDescription({ product }: { product: Product }) {
  const subtitle = getProductSubtitle(product.handle);

  return (
    <div className="flex flex-col justify-center">
      {subtitle ? (
        <p className="font-sans text-sm text-neutral-500 dark:text-neutral-400">
          {subtitle}
        </p>
      ) : null}
      <h1 className="mt-1 text-4xl font-light leading-tight md:text-5xl">
        {product.title}
      </h1>
      <div className="mt-4 font-sans">
        <Suspense fallback={null}>
          <ProductPrice product={product} />
        </Suspense>
      </div>
      {product.description ? (
        <p className="mt-6 font-sans text-base leading-relaxed text-neutral-600 dark:text-neutral-300">
          {product.description}
        </p>
      ) : null}
      <div className="mt-8">
        <VariantSelector options={product.options} variants={product.variants} />
      </div>
      <div className="mt-8">
        <AddToCart product={product} />
      </div>
    </div>
  );
}
