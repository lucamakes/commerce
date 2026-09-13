import { HIDDEN_PRODUCT_TAG } from "lib/constants";
import type { Collection, Menu, Product } from "lib/shopify/types";

const CURRENCY = "EUR";

const PRODUCT_IMAGE_URL =
  "https://broadcast-theme-airwave.myshopify.com/cdn/shop/files/Diaspora-Blend-Single_1296x_e54f682b-cd30-42fb-b05e-41472af22089.png?v=1749575745&width=3000";

const TEA_IMAGE_URL =
  "https://thee.be/wp-content/uploads/2025/09/Lapachothee.jpg";

type LocalProduct = {
  handle: string;
  title: string;
  subtitle: string;
  description: string;
  collection: string;
  price: number;
  image: string;
  tags?: string[];
  options?: { name: string; values: string[] }[];
};

const LOCAL_PRODUCTS: LocalProduct[] = [
  {
    handle: "house-espresso",
    title: "House Espresso",
    subtitle: "Panisto",
    description:
      "Onze huisblend — rijk, chocoladeachtig en perfect als basis voor espresso en cappuccino.",
    collection: "koffie",
    price: 12.5,
    image: PRODUCT_IMAGE_URL,
    options: [{ name: "Gewicht", values: ["250g", "500g", "1kg"] }],
  },
  {
    handle: "ethiopia",
    title: "Ethiopia Yirgacheffe",
    subtitle: "Single Origin",
    description:
      "Heldere filterkoffie met bloemige tonen, citrus en een zachte thee-achtige afdronk.",
    collection: "koffie",
    price: 14.0,
    image: PRODUCT_IMAGE_URL,
    options: [{ name: "Gewicht", values: ["250g", "500g"] }],
  },
  {
    handle: "sunday-blend",
    title: "Sunday Blend",
    subtitle: "Panisto Blend",
    description:
      "Een zachte, gebalanceerde blend voor rustige zondagochtenden en langzaam genieten.",
    collection: "koffie",
    price: 11.0,
    image: PRODUCT_IMAGE_URL,
    options: [{ name: "Gewicht", values: ["250g", "500g", "1kg"] }],
  },
  {
    handle: "colombia-huila",
    title: "Colombia Huila",
    subtitle: "Single Origin",
    description:
      "Zachte body met tonen van karamel, rode appel en een lichte cacao-afdronk.",
    collection: "koffie",
    price: 13.5,
    image: PRODUCT_IMAGE_URL,
    options: [{ name: "Gewicht", values: ["250g", "500g"] }],
  },
  {
    handle: "guatemala-antigua",
    title: "Guatemala Antigua",
    subtitle: "Single Origin",
    description:
      "Volle espresso met noten van donkere chocolade, specerijen en een romige body.",
    collection: "koffie",
    price: 14.5,
    image: PRODUCT_IMAGE_URL,
    options: [{ name: "Gewicht", values: ["250g", "500g"] }],
  },
  {
    handle: "morning-blend",
    title: "Morning Blend",
    subtitle: "Panisto Blend",
    description:
      "Licht gebrande dagelijkse blend — helder, fris en perfect voor de filterkoffie.",
    collection: "koffie",
    price: 10.5,
    image: PRODUCT_IMAGE_URL,
    options: [{ name: "Gewicht", values: ["250g", "500g", "1kg"] }],
  },
  {
    handle: "decaf-swiss-water",
    title: "Decaf Swiss Water",
    subtitle: "Decaf",
    description:
      "Cafeïnevrij zonder chemicaliën — behoudt de volle smaak van onze huisblend.",
    collection: "koffie",
    price: 12.0,
    image: PRODUCT_IMAGE_URL,
    options: [{ name: "Gewicht", values: ["250g", "500g"] }],
  },
  {
    handle: "cold-brew-blend",
    title: "Cold Brew Blend",
    subtitle: "Panisto Blend",
    description:
      "Speciaal samengesteld voor cold brew — zoet, laag in zuur en verrassend zacht.",
    collection: "koffie",
    price: 13.0,
    image: PRODUCT_IMAGE_URL,
    options: [{ name: "Gewicht", values: ["250g", "500g", "1kg"] }],
  },
  {
    handle: "earl-grey",
    title: "Earl Grey",
    subtitle: "Classic Black",
    description:
      "Klassieke zwarte thee met bergamot — elegant, aromatisch en perfect met een koekje.",
    collection: "thee",
    price: 8.5,
    image: TEA_IMAGE_URL,
    options: [{ name: "Gewicht", values: ["100g", "250g"] }],
  },
  {
    handle: "jasmine",
    title: "Jasmine Green Tea",
    subtitle: "Green Tea",
    description:
      "Groene thee met jasmijn — licht, bloemig en verfrissend, warm of koud.",
    collection: "thee",
    price: 9.0,
    image: TEA_IMAGE_URL,
    options: [{ name: "Gewicht", values: ["100g", "250g"] }],
  },
  {
    handle: "sencha",
    title: "Sencha",
    subtitle: "Green Tea",
    description:
      "Japanse groene thee met een frisse, grassige smaak en een heldere afdronk.",
    collection: "thee",
    price: 8.0,
    image: TEA_IMAGE_URL,
    options: [{ name: "Gewicht", values: ["100g", "250g"] }],
  },
  {
    handle: "chamomile",
    title: "Kamille",
    subtitle: "Herbal",
    description:
      "Kalmerende kruidenthee met honingachtige tonen — ideaal voor de avond.",
    collection: "thee",
    price: 7.5,
    image: TEA_IMAGE_URL,
    options: [{ name: "Gewicht", values: ["100g", "250g"] }],
  },
  {
    handle: "rooibos",
    title: "Rooibos",
    subtitle: "Herbal",
    description:
      "Zuid-Afrikaanse rooibos — natuurlijk zoet, cafeïnevrij en vol van smaak.",
    collection: "thee",
    price: 7.5,
    image: TEA_IMAGE_URL,
    options: [{ name: "Gewicht", values: ["100g", "250g"] }],
  },
  {
    handle: "peppermint",
    title: "Pepermunt",
    subtitle: "Herbal",
    description:
      "Verfrissende muntinfusie — helder, koel en perfect na de maaltijd.",
    collection: "thee",
    price: 7.0,
    image: TEA_IMAGE_URL,
    options: [{ name: "Gewicht", values: ["100g", "250g"] }],
  },
];

const LOCAL_COLLECTIONS: Collection[] = [
  {
    handle: "koffie",
    title: "Koffie",
    description: "Single origin en blends, vers gebrand.",
    seo: {
      title: "Koffie",
      description: "Single origin en blends, vers gebrand.",
    },
    path: "/search/koffie",
    updatedAt: new Date().toISOString(),
  },
  {
    handle: "thee",
    title: "Thee",
    description: "Losse thee en infusies van hoge kwaliteit.",
    seo: {
      title: "Thee",
      description: "Losse thee en infusies van hoge kwaliteit.",
    },
    path: "/search/thee",
    updatedAt: new Date().toISOString(),
  },
  {
    handle: "hidden-homepage-featured-items",
    title: "Featured",
    description: "Homepage featured items",
    seo: { title: "Featured", description: "Homepage featured items" },
    path: "/search/hidden-homepage-featured-items",
    updatedAt: new Date().toISOString(),
  },
  {
    handle: "hidden-homepage-carousel",
    title: "Carousel",
    description: "Homepage carousel",
    seo: { title: "Carousel", description: "Homepage carousel" },
    path: "/search/hidden-homepage-carousel",
    updatedAt: new Date().toISOString(),
  },
];

export const LOCAL_MENUS: Record<string, Menu[]> = {
  "next-js-frontend-header-menu": [
    { title: "Koffie", path: "/search/koffie" },
    { title: "Thee", path: "/search/thee" },
    { title: "Over ons", path: "/about" },
    { title: "Contact", path: "/contact" },
  ],
  "next-js-frontend-footer-menu": [
    { title: "Koffie", path: "/search/koffie" },
    { title: "Thee", path: "/search/thee" },
    { title: "Over ons", path: "/about" },
  ],
};

function toMoney(amount: number) {
  return { amount: amount.toFixed(2), currencyCode: CURRENCY };
}

function buildProduct(local: LocalProduct): Product {
  const options = local.options ?? [{ name: "Title", values: ["Default"] }];
  const variants = options[0]!.values.map((value, index) => ({
    id: `local-${local.handle}-${index}`,
    title: value,
    availableForSale: true,
    selectedOptions: [{ name: options[0]!.name, value }],
    price: toMoney(local.price),
  }));

  const image = {
    url: local.image,
    altText: local.title,
    width: 1296,
    height: 1296,
  };

  return {
    id: `local-${local.handle}`,
    handle: local.handle,
    availableForSale: true,
    title: local.title,
    description: local.description,
    descriptionHtml: `<p>${local.description}</p>`,
    options: options.map((option, index) => ({
      id: `local-option-${local.handle}-${index}`,
      name: option.name,
      values: option.values,
    })),
    priceRange: {
      minVariantPrice: toMoney(local.price),
      maxVariantPrice: toMoney(local.price),
    },
    variants,
    featuredImage: image,
    images: [image],
    seo: {
      title: local.title,
      description: local.description,
    },
    tags: local.tags ?? [],
    updatedAt: new Date().toISOString(),
  };
}

const products = LOCAL_PRODUCTS.map(buildProduct);

export function getLocalProducts(): Product[] {
  return products.filter(
    (product) => !product.tags.includes(HIDDEN_PRODUCT_TAG),
  );
}

export function getLocalProduct(handle: string): Product | undefined {
  return products.find((product) => product.handle === handle);
}

export function getLocalCollection(handle: string): Collection | undefined {
  return LOCAL_COLLECTIONS.find((collection) => collection.handle === handle);
}

export function getLocalCollections(): Collection[] {
  return [
    {
      handle: "",
      title: "Alles",
      description: "Alle producten",
      seo: { title: "Alles", description: "Alle producten" },
      path: "/search",
      updatedAt: new Date().toISOString(),
    },
    ...LOCAL_COLLECTIONS.filter(
      (collection) => !collection.handle.startsWith("hidden"),
    ),
  ];
}

export function getLocalCollectionProducts({
  collection,
  query,
  reverse,
  sortKey,
}: {
  collection: string;
  query?: string;
  reverse?: boolean;
  sortKey?: string;
}): Product[] {
  let result = products.filter(
    (product) => !product.tags.includes(HIDDEN_PRODUCT_TAG),
  );

  if (collection === "hidden-homepage-featured-items") {
    result = result.slice(0, 3);
  } else if (collection === "hidden-homepage-carousel") {
    result = products.slice(0, 6);
  } else if (collection) {
    const local = LOCAL_PRODUCTS.find((item) => item.collection === collection);
    if (
      !local &&
      !LOCAL_COLLECTIONS.some((item) => item.handle === collection)
    ) {
      return [];
    }
    result = products.filter((product) => {
      const source = LOCAL_PRODUCTS.find(
        (item) => item.handle === product.handle,
      );
      return source?.collection === collection;
    });
  }

  if (query) {
    const normalized = query.toLowerCase();
    result = result.filter((product) => {
      const source = LOCAL_PRODUCTS.find(
        (item) => item.handle === product.handle,
      );
      return (
        product.title.toLowerCase().includes(normalized) ||
        product.description.toLowerCase().includes(normalized) ||
        product.handle.toLowerCase().includes(normalized) ||
        source?.subtitle.toLowerCase().includes(normalized) ||
        source?.collection.toLowerCase().includes(normalized)
      );
    });
  }

  if (sortKey === "PRICE") {
    result = [...result].sort((a, b) => {
      const priceA = Number(a.priceRange.minVariantPrice.amount);
      const priceB = Number(b.priceRange.minVariantPrice.amount);
      return reverse ? priceB - priceA : priceA - priceB;
    });
  } else if (sortKey === "CREATED_AT") {
    result = [...result].sort((a, b) => {
      const dateA = new Date(a.updatedAt).getTime();
      const dateB = new Date(b.updatedAt).getTime();
      return reverse ? dateA - dateB : dateB - dateA;
    });
  } else if (reverse) {
    result = [...result].reverse();
  }

  return result;
}

export function getLocalProductRecommendations(productId: string): Product[] {
  const source = products.find((product) => product.id === productId);
  if (!source) return [];

  const sourceCollection = LOCAL_PRODUCTS.find(
    (item) => item.handle === source.handle,
  )?.collection;

  return products
    .filter((product) => {
      if (product.id === productId) return false;
      const collection = LOCAL_PRODUCTS.find(
        (item) => item.handle === product.handle,
      )?.collection;
      return collection === sourceCollection;
    })
    .slice(0, 4);
}

export function getLocalMenu(handle: string): Menu[] {
  return LOCAL_MENUS[handle] ?? [];
}

export function getProductSubtitle(handle: string): string | undefined {
  return LOCAL_PRODUCTS.find((product) => product.handle === handle)?.subtitle;
}

export function getLocalVariantById(variantId: string) {
  for (const product of products) {
    const variant = product.variants.find((item) => item.id === variantId);
    if (variant) {
      return { product, variant };
    }
  }
  return undefined;
}
