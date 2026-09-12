import { CollectionProductCard } from "components/collection/collection-product-card";
import { CollectionSortBar } from "components/collection/collection-sort-bar";
import { defaultSort, sorting } from "lib/constants";
import { getProducts } from "lib/shopify";
import { Suspense } from "react";
import ChildrenWrapper from "./children-wrapper";

export const metadata = {
  title: "Zoeken",
  description: "Zoek producten in de Panisto webshop.",
};

export default async function SearchPage(props: {
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const searchParams = await props.searchParams;
  const { sort, q: searchValue } = searchParams as { [key: string]: string };
  const { sortKey, reverse } =
    sorting.find((item) => item.slug === sort) || defaultSort;

  const products = await getProducts({ sortKey, reverse, query: searchValue });

  return (
    <section className="mx-auto max-w-7xl px-6 py-10 md:py-14">
      <div className="mb-10">
        <div className="flex items-center justify-between gap-4">
          {searchValue ? (
            <h1 className="text-4xl font-light md:text-5xl">
              Zoekresultaten voor &ldquo;{searchValue}&rdquo;
            </h1>
          ) : (
            <h1 className="text-4xl font-light md:text-5xl">Alle producten</h1>
          )}
          <Suspense fallback={null}>
            <ChildrenWrapper>
              <CollectionSortBar list={sorting} className="shrink-0" />
            </ChildrenWrapper>
          </Suspense>
        </div>
        <p className="mt-3 font-sans text-neutral-600 dark:text-neutral-400">
          {products.length === 0
            ? "Geen producten gevonden."
            : `${products.length} ${products.length === 1 ? "product" : "producten"}`}
        </p>
      </div>

      <Suspense fallback={null}>
        <ChildrenWrapper>
          {products.length > 0 ? (
            <ul className="grid grid-cols-2 gap-x-5 gap-y-12 md:grid-cols-3 lg:grid-cols-4 lg:gap-x-6">
              {products.map((product) => (
                <CollectionProductCard key={product.handle} product={product} />
              ))}
            </ul>
          ) : null}
        </ChildrenWrapper>
      </Suspense>
    </section>
  );
}
