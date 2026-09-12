"use client";

import { ChevronDownIcon } from "@heroicons/react/24/outline";
import type { SortFilterItem } from "lib/constants";
import { createUrl } from "lib/utils";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export function CollectionSortSelect({ list }: { list: SortFilterItem[] }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const active =
    list.find(
      (item) =>
        searchParams.get("sort") === item.slug ||
        (!searchParams.get("sort") && item.slug === null),
    ) ?? list[0]!;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    window.addEventListener("click", handleClickOutside);
    return () => window.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex min-w-[160px] items-center justify-between gap-3 border border-neutral-300 bg-white px-4 py-2 text-sm text-black dark:border-neutral-600 dark:bg-black dark:text-white"
      >
        <span>{active.title}</span>
        <ChevronDownIcon className="h-4 w-4 shrink-0" />
      </button>
      {open ? (
        <div className="absolute right-0 z-40 mt-1 min-w-full border border-neutral-200 bg-white py-1 shadow-sm dark:border-neutral-700 dark:bg-black">
          {list.map((item) => {
            const href = createUrl(
              pathname,
              new URLSearchParams({
                ...(item.slug && { sort: item.slug }),
              }),
            );
            const isActive =
              searchParams.get("sort") === item.slug ||
              (!searchParams.get("sort") && item.slug === null);

            return (
              <Link
                key={item.title}
                href={href}
                onClick={() => setOpen(false)}
                className={`block px-3 py-2 text-sm hover:bg-neutral-50 dark:hover:bg-neutral-900 ${
                  isActive ? "font-medium text-accent" : "text-neutral-600 dark:text-neutral-400"
                }`}
              >
                {item.title}
              </Link>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}
