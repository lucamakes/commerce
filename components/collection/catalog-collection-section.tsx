import { CollectionProductCard } from "components/collection/collection-product-card";
import { CollectionSortBar } from "components/collection/collection-sort-bar";
import {
  catalogDefaultSort,
  catalogSorting,
  type SortFilterItem,
} from "lib/constants";
import { getCollectionProducts } from "lib/shopify";

export async function CatalogCollectionSection({
  collection,
  sort,
  title,
  description,
  sortList = catalogSorting,
  defaultSort = catalogDefaultSort,
}: {
  collection: string;
  sort?: string;
  title?: string;
  description?: string;
  sortList?: SortFilterItem[];
  defaultSort?: SortFilterItem;
}) {
  const activeSort =
    sortList.find((item) => item.slug === sort) || defaultSort;
  const { reverse } = activeSort;

  const products = await getCollectionProducts({
    collection,
    sortKey: activeSort.sortKey,
    reverse,
  });

  return (
    <section className="mx-auto max-w-7xl px-6 py-10 md:py-14">
      <div className="mb-10">
        {title ? (
          <div className="flex items-center justify-between gap-4">
            <h1 className="text-4xl font-light md:text-5xl">{title}</h1>
            <CollectionSortBar list={sortList} className="shrink-0" />
          </div>
        ) : (
          <CollectionSortBar list={sortList} className="mb-0" />
        )}
        {description ? (
          <p className="mt-3 max-w-xl font-sans text-neutral-600 dark:text-neutral-400">
            {description}
          </p>
        ) : null}
      </div>
      {products.length === 0 ? (
        <p className="py-3 font-sans text-lg text-neutral-600 dark:text-neutral-400">
          Geen producten gevonden in deze collectie.
        </p>
      ) : (
        <ul className="grid grid-cols-2 gap-x-5 gap-y-12 md:grid-cols-3 lg:grid-cols-4 lg:gap-x-6">
          {products.map((product) => (
            <CollectionProductCard key={product.handle} product={product} />
          ))}
        </ul>
      )}
    </section>
  );
}
