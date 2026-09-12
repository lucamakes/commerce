import clsx from "clsx";
import { catalogSorting, type SortFilterItem } from "lib/constants";
import { Suspense } from "react";
import { CollectionSortSelect } from "./collection-sort-select";

export function CollectionSortBar({
  list = catalogSorting,
  className,
}: {
  list?: SortFilterItem[];
  className?: string;
}) {
  return (
    <div
      className={clsx(
        "flex items-center justify-end gap-2 font-sans text-sm text-neutral-600 dark:text-neutral-400",
        className,
      )}
    >
      <span>Sorteer op:</span>
      <Suspense fallback={<div className="h-9 w-[140px] animate-pulse bg-neutral-200 dark:bg-neutral-800" />}>
        <CollectionSortSelect list={list} />
      </Suspense>
    </div>
  );
}
