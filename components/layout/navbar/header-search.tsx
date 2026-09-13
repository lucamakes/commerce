"use client";

import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import { CollectionPrice } from "components/collection/collection-price";
import Form from "next/form";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";

type LiveSearchProduct = {
  handle: string;
  title: string;
  subtitle?: string;
  image?: {
    url: string;
    altText: string;
    width: number;
    height: number;
  };
  price: {
    amount: string;
    currencyCode: string;
  };
};

export default function HeaderSearch({ inverted }: { inverted?: boolean }) {
  const router = useRouter();
  const listId = useId();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<LiveSearchProduct[]>([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const abortRef = useRef<AbortController | null>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  useEffect(() => {
    if (!open) {
      abortRef.current?.abort();
      setQuery("");
      setResults([]);
      setTotal(0);
      setLoading(false);
      setActiveIndex(-1);
    }
  }, [open]);

  useEffect(() => {
    const trimmed = query.trim();

    abortRef.current?.abort();

    if (!open || !trimmed) {
      setResults([]);
      setTotal(0);
      setLoading(false);
      setActiveIndex(-1);
      return;
    }

    const controller = new AbortController();
    abortRef.current = controller;
    setLoading(true);

    const timeout = window.setTimeout(async () => {
      try {
        const response = await fetch(
          `/api/search?q=${encodeURIComponent(trimmed)}`,
          { signal: controller.signal },
        );
        if (!response.ok) throw new Error("Search failed");
        const data = (await response.json()) as {
          products: LiveSearchProduct[];
          total: number;
        };
        setResults(data.products);
        setTotal(data.total);
        setActiveIndex(-1);
      } catch (error) {
        if ((error as { name?: string }).name === "AbortError") return;
        setResults([]);
        setTotal(0);
      } finally {
        if (!controller.signal.aborted) setLoading(false);
      }
    }, 180);

    return () => {
      window.clearTimeout(timeout);
      controller.abort();
    };
  }, [open, query]);

  const close = () => setOpen(false);
  const trimmedQuery = query.trim();
  const showPanel = Boolean(trimmedQuery);
  const goToSearch = () => {
    close();
    router.push(
      trimmedQuery
        ? `/search?q=${encodeURIComponent(trimmedQuery)}`
        : "/search",
    );
  };

  return (
    <>
      <button
        type="button"
        aria-label="Zoeken"
        onClick={() => setOpen(true)}
        className={clsx(
          "flex h-11 w-11 items-center justify-center transition-colors",
          inverted
            ? "text-white hover:bg-white/10"
            : "text-black hover:bg-neutral-50 dark:text-white dark:hover:bg-neutral-900",
        )}
      >
        <MagnifyingGlassIcon className="h-4 w-4" />
      </button>
      {open ? (
        <div
          className="fixed inset-0 z-50 flex items-start justify-center overflow-x-hidden bg-white/95 px-4 pt-28 text-black backdrop-blur-md dark:bg-neutral-950/95 dark:text-white"
          onClick={close}
        >
          <button
            type="button"
            aria-label="Zoeken sluiten"
            onClick={close}
            className="absolute right-6 top-6"
          >
            <XMarkIcon className="h-7 w-7" />
          </button>
          <div
            className="w-full min-w-0 max-w-xl overflow-x-hidden"
            onClick={(event) => event.stopPropagation()}
          >
            <Form
              action="/search"
              onSubmit={(event) => {
                event.preventDefault();
                goToSearch();
              }}
            >
              <input
                autoFocus
                type="text"
                name="q"
                value={query}
                placeholder="Zoek producten..."
                autoComplete="off"
                role="combobox"
                aria-expanded={showPanel}
                aria-controls={listId}
                aria-autocomplete="list"
                aria-activedescendant={
                  activeIndex >= 0 ? `${listId}-${activeIndex}` : undefined
                }
                onChange={(event) => setQuery(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === "ArrowDown") {
                    event.preventDefault();
                    if (!results.length) return;
                    setActiveIndex((index) =>
                      index < results.length - 1 ? index + 1 : 0,
                    );
                  } else if (event.key === "ArrowUp") {
                    event.preventDefault();
                    if (!results.length) return;
                    setActiveIndex((index) =>
                      index > 0 ? index - 1 : results.length - 1,
                    );
                  } else if (event.key === "Enter") {
                    event.preventDefault();
                    goToSearch();
                  }
                }}
                className="w-full border-b border-neutral-300 bg-transparent pb-3 font-heading text-3xl outline-none placeholder:text-neutral-400 focus:ring-0! focus:ring-offset-0! focus-visible:ring-0! focus-visible:ring-offset-0! dark:border-neutral-700 dark:placeholder:text-neutral-500"
              />
            </Form>

            {showPanel ? (
              <div className="mt-6 max-h-[min(28rem,calc(100vh-12rem))] overflow-x-hidden overflow-y-auto overscroll-x-none">
                {loading && results.length === 0 ? (
                  <p className="font-sans text-sm text-neutral-500">
                    Zoeken...
                  </p>
                ) : results.length === 0 ? (
                  <p className="font-sans text-sm text-neutral-500">
                    Geen producten gevonden.
                  </p>
                ) : (
                  <>
                    <ul
                      id={listId}
                      role="listbox"
                      className="min-w-0 divide-y divide-neutral-200 dark:divide-neutral-800"
                    >
                      {results.map((product, index) => (
                        <li
                          key={product.handle}
                          id={`${listId}-${index}`}
                          role="option"
                          aria-selected={index === activeIndex}
                          className="min-w-0"
                        >
                          <Link
                            href={`/product/${product.handle}`}
                            prefetch={true}
                            onClick={close}
                            onMouseEnter={() => setActiveIndex(index)}
                            className={clsx(
                              "flex min-w-0 items-center gap-4 overflow-hidden py-3 transition-colors focus-visible:ring-offset-0!",
                              index === activeIndex
                                ? "bg-neutral-50 dark:bg-neutral-900"
                                : "hover:bg-neutral-50 dark:hover:bg-neutral-900",
                            )}
                          >
                            <div className="relative h-16 w-16 shrink-0 overflow-hidden bg-white dark:bg-black">
                              {product.image?.url ? (
                                <Image
                                  src={product.image.url}
                                  alt={product.image.altText}
                                  fill
                                  sizes="64px"
                                  className="object-contain"
                                />
                              ) : null}
                            </div>
                            <div className="min-w-0 flex-1 overflow-hidden">
                              <p className="truncate font-heading text-lg font-medium leading-snug">
                                {product.title}
                              </p>
                              {product.subtitle ? (
                                <p className="truncate font-sans text-sm text-neutral-500 dark:text-neutral-400">
                                  {product.subtitle}
                                </p>
                              ) : null}
                            </div>
                            <CollectionPrice
                              amount={product.price.amount}
                              currencyCode={product.price.currencyCode}
                              className="shrink-0"
                            />
                          </Link>
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={`/search?q=${encodeURIComponent(trimmedQuery)}`}
                      onClick={close}
                      className="mt-4 inline-flex font-sans text-sm text-accent hover:text-accent-hover"
                    >
                      {total > results.length
                        ? `Bekijk alle ${total} resultaten`
                        : "Bekijk alle resultaten"}
                    </Link>
                  </>
                )}
              </div>
            ) : null}
          </div>
        </div>
      ) : null}
    </>
  );
}
