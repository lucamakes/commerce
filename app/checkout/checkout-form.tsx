"use client";

import Price from "components/price";
import { useCart } from "components/cart/cart-context";
import Link from "next/link";
import { useState } from "react";

export function CheckoutForm() {
  const { cart } = useCart();
  const [submitted, setSubmitted] = useState(false);

  if (!cart || cart.lines.length === 0) {
    return (
      <div className="text-center">
        <h1 className="text-4xl font-light">Je winkelwagen is leeg</h1>
        <Link
          href="/search"
          className="mt-6 inline-block bg-black px-6 py-3 text-sm font-medium text-white transition hover:bg-accent"
        >
          Verder winkelen
        </Link>
      </div>
    );
  }

  if (submitted) {
    return (
      <div className="text-center">
        <h1 className="text-4xl font-light">Bedankt voor je bestelling!</h1>
        <p className="mt-4 text-neutral-600 dark:text-neutral-300">
          Dit is een demo-checkout. In productie wordt je doorgestuurd naar
          Shopify Checkout.
        </p>
        <Link
          href="/"
          className="mt-6 inline-block bg-black px-6 py-3 text-sm font-medium text-white transition hover:bg-accent"
        >
          Terug naar home
        </Link>
      </div>
    );
  }

  return (
    <div className="grid gap-10 md:grid-cols-2">
      <form
        className="space-y-4"
        onSubmit={(event) => {
          event.preventDefault();
          setSubmitted(true);
        }}
      >
        <h2 className="text-2xl font-light">Bezorggegevens</h2>
        <input
          required
          placeholder="Naam"
          className="w-full border border-neutral-300 bg-white px-5 py-3 font-sans text-sm outline-none focus:border-accent dark:border-neutral-700 dark:bg-neutral-950"
        />
        <input
          required
          type="email"
          placeholder="E-mail"
          className="w-full border border-neutral-300 bg-white px-5 py-3 font-sans text-sm outline-none focus:border-accent dark:border-neutral-700 dark:bg-neutral-950"
        />
        <input
          required
          placeholder="Adres"
          className="w-full border border-neutral-300 bg-white px-5 py-3 font-sans text-sm outline-none focus:border-accent dark:border-neutral-700 dark:bg-neutral-950"
        />
        <button
          type="submit"
          className="w-full bg-black py-3 text-sm font-medium text-white transition hover:bg-accent"
        >
          Bestelling plaatsen
        </button>
      </form>

      <div className="border border-neutral-200 p-6 font-sans dark:border-neutral-700">
        <h2 className="text-2xl font-light">Overzicht</h2>
        <ul className="mt-4 space-y-3">
          {cart.lines.map((line) => (
            <li key={line.id} className="flex justify-between gap-4 text-sm">
              <span>
                {line.merchandise.product.title} × {line.quantity}
              </span>
              <Price
                amount={line.cost.totalAmount.amount}
                currencyCode={line.cost.totalAmount.currencyCode}
              />
            </li>
          ))}
        </ul>
        <div className="mt-6 flex justify-between border-t border-neutral-200 pt-4 dark:border-neutral-700">
          <span className="font-medium">Totaal</span>
          <Price
            amount={cart.cost.totalAmount.amount}
            currencyCode={cart.cost.totalAmount.currencyCode}
            className="font-medium"
          />
        </div>
      </div>
    </div>
  );
}
