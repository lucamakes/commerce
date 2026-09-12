import type { Cart, CartItem } from "lib/shopify/types";
import { cookies } from "next/headers";
import { getLocalVariantById } from "./products";

const CART_COOKIE = "localCart";
const CART_ID_COOKIE = "cartId";

function emptyCart(): Cart {
  return {
    id: "local",
    checkoutUrl: "/checkout",
    totalQuantity: 0,
    cost: {
      subtotalAmount: { amount: "0.00", currencyCode: "EUR" },
      totalAmount: { amount: "0.00", currencyCode: "EUR" },
      totalTaxAmount: { amount: "0.00", currencyCode: "EUR" },
    },
    lines: [],
  };
}

function recalculateCart(lines: CartItem[]): Cart {
  const subtotal = lines.reduce(
    (sum, line) => sum + Number(line.cost.totalAmount.amount),
    0,
  );
  const currencyCode =
    lines[0]?.cost.totalAmount.currencyCode ?? "EUR";
  const totalQuantity = lines.reduce((sum, line) => sum + line.quantity, 0);

  return {
    id: "local",
    checkoutUrl: "/checkout",
    totalQuantity,
    cost: {
      subtotalAmount: {
        amount: subtotal.toFixed(2),
        currencyCode,
      },
      totalAmount: {
        amount: subtotal.toFixed(2),
        currencyCode,
      },
      totalTaxAmount: {
        amount: "0.00",
        currencyCode,
      },
    },
    lines,
  };
}

async function readCart(): Promise<Cart> {
  const cookieStore = await cookies();
  const raw = cookieStore.get(CART_COOKIE)?.value;

  if (!raw) {
    return emptyCart();
  }

  try {
    return JSON.parse(raw) as Cart;
  } catch {
    return emptyCart();
  }
}

async function writeCart(cart: Cart) {
  const cookieStore = await cookies();
  cookieStore.set(CART_COOKIE, JSON.stringify(cart), {
    httpOnly: true,
    sameSite: "lax",
    path: "/",
  });
  cookieStore.set(CART_ID_COOKIE, "local", {
    httpOnly: true,
    sameSite: "lax",
    path: "/",
  });
}

export async function getLocalCart(): Promise<Cart | undefined> {
  const cookieStore = await cookies();
  if (!cookieStore.get(CART_ID_COOKIE)?.value) {
    return undefined;
  }

  return readCart();
}

export async function createLocalCart(): Promise<Cart> {
  const cart = emptyCart();
  await writeCart(cart);
  return cart;
}

export async function addToLocalCart(
  lines: { merchandiseId: string; quantity: number }[],
): Promise<Cart> {
  const cart = await readCart();
  const nextLines = [...cart.lines];

  for (const line of lines) {
    const match = getLocalVariantById(line.merchandiseId);
    if (!match) continue;

    const { product, variant } = match;
    const existing = nextLines.find(
      (item) => item.merchandise.id === variant.id,
    );
    const quantity = (existing?.quantity ?? 0) + line.quantity;
    const lineTotal = Number(variant.price.amount) * quantity;

    const cartItem: CartItem = {
      id: `line-${variant.id}`,
      quantity,
      cost: {
        totalAmount: {
          amount: lineTotal.toFixed(2),
          currencyCode: variant.price.currencyCode,
        },
      },
      merchandise: {
        id: variant.id,
        title: variant.title,
        selectedOptions: variant.selectedOptions,
        product: {
          id: product.id,
          handle: product.handle,
          title: product.title,
          featuredImage: product.featuredImage,
        },
      },
    };

    if (existing) {
      const index = nextLines.indexOf(existing);
      nextLines[index] = cartItem;
    } else {
      nextLines.push(cartItem);
    }
  }

  const updated = recalculateCart(nextLines);
  await writeCart(updated);
  return updated;
}

export async function removeFromLocalCart(lineIds: string[]): Promise<Cart> {
  const cart = await readCart();
  const updated = recalculateCart(
    cart.lines.filter((line) => line.id && !lineIds.includes(line.id)),
  );
  await writeCart(updated);
  return updated;
}

export async function updateLocalCart(
  lines: { id: string; merchandiseId: string; quantity: number }[],
): Promise<Cart> {
  const cart = await readCart();
  let nextLines = [...cart.lines];

  for (const line of lines) {
    const match = getLocalVariantById(line.merchandiseId);
    if (!match) continue;

    const { product, variant } = match;
    const lineTotal = Number(variant.price.amount) * line.quantity;

    nextLines = nextLines.map((item) =>
      item.id === line.id
        ? {
            ...item,
            quantity: line.quantity,
            cost: {
              totalAmount: {
                amount: lineTotal.toFixed(2),
                currencyCode: variant.price.currencyCode,
              },
            },
            merchandise: {
              id: variant.id,
              title: variant.title,
              selectedOptions: variant.selectedOptions,
              product: {
                id: product.id,
                handle: product.handle,
                title: product.title,
                featuredImage: product.featuredImage,
              },
            },
          }
        : item,
    );
  }

  const updated = recalculateCart(nextLines);
  await writeCart(updated);
  return updated;
}
