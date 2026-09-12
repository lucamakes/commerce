export type SortFilterItem = {
  title: string;
  slug: string | null;
  sortKey: "RELEVANCE" | "BEST_SELLING" | "CREATED_AT" | "PRICE";
  reverse: boolean;
};

export const defaultSort: SortFilterItem = {
  title: "Relevantie",
  slug: null,
  sortKey: "RELEVANCE",
  reverse: false,
};

export const catalogDefaultSort: SortFilterItem = {
  title: "Meest verkocht",
  slug: null,
  sortKey: "BEST_SELLING",
  reverse: false,
};

export const catalogSorting: SortFilterItem[] = [
  catalogDefaultSort,
  {
    title: "Nieuwste",
    slug: "latest-desc",
    sortKey: "CREATED_AT",
    reverse: true,
  },
  {
    title: "Prijs: laag naar hoog",
    slug: "price-asc",
    sortKey: "PRICE",
    reverse: false,
  },
  {
    title: "Prijs: hoog naar laag",
    slug: "price-desc",
    sortKey: "PRICE",
    reverse: true,
  },
];

export const sorting: SortFilterItem[] = [
  defaultSort,
  {
    title: "Populair",
    slug: "trending-desc",
    sortKey: "BEST_SELLING",
    reverse: false,
  },
  {
    title: "Nieuwste",
    slug: "latest-desc",
    sortKey: "CREATED_AT",
    reverse: true,
  },
  {
    title: "Prijs: laag naar hoog",
    slug: "price-asc",
    sortKey: "PRICE",
    reverse: false,
  },
  {
    title: "Prijs: hoog naar laag",
    slug: "price-desc",
    sortKey: "PRICE",
    reverse: true,
  },
];

export const TAGS = {
  collections: "collections",
  products: "products",
  cart: "cart",
};

export const HIDDEN_PRODUCT_TAG = "nextjs-frontend-hidden";
export const DEFAULT_OPTION = "Default Title";
export const SHOPIFY_GRAPHQL_API_ENDPOINT = "/api/2023-01/graphql.json";
