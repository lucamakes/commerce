"use client";

import clsx from "clsx";
import { addItem } from "components/cart/actions";
import type { Product } from "lib/shopify/types";
import { useActionState } from "react";
import { useCart } from "./cart-context";

function formatPrice(amount: string, currencyCode: string) {
  return new Intl.NumberFormat(undefined, {
    style: "currency",
    currency: currencyCode,
    currencyDisplay: "narrowSymbol",
  }).format(parseFloat(amount));
}

export function QuickAddToCart({ product }: { product: Product }) {
  const { addCartItem } = useCart();
  const defaultVariant = product.variants[0];
  const [message, formAction] = useActionState(addItem, null);
  const addItemAction = formAction.bind(null, defaultVariant?.id);

  if (!product.availableForSale || !defaultVariant) {
    return (
      <button
        disabled
        className="w-full bg-neutral-200 px-4 py-2.5 text-sm font-medium text-neutral-500"
      >
        Niet op voorraad
      </button>
    );
  }

  return (
    <form
      action={async () => {
        addCartItem(defaultVariant, product);
        addItemAction();
      }}
    >
      <button
        type="submit"
        className={clsx(
          "flex w-full items-center justify-center gap-2 bg-black px-4 py-2.5 text-sm font-medium text-white transition hover:bg-accent",
        )}
      >
        <span>In winkelwagen</span>
        <span className="text-neutral-300 dark:text-neutral-600">·</span>
        <span>
          {formatPrice(
            defaultVariant.price.amount,
            defaultVariant.price.currencyCode,
          )}
        </span>
      </button>
      <p aria-live="polite" className="sr-only" role="status">
        {message}
      </p>
    </form>
  );
}
