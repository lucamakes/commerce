"use client";

import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import Form from "next/form";
import { useEffect, useState } from "react";

export default function HeaderSearch({ inverted }: { inverted?: boolean }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <button
        type="button"
        aria-label="Zoeken"
        onClick={() => setOpen(true)}
        className={clsx(
          "flex h-11 w-11 items-center justify-center border transition-colors",
          inverted
            ? "border-white/30 text-white hover:bg-white/10"
            : "border-neutral-200 text-black hover:bg-neutral-50 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-900",
        )}
      >
        <MagnifyingGlassIcon className="h-4 w-4" />
      </button>
      {open ? (
        <div className="fixed inset-0 z-50 flex items-start justify-center bg-white/95 px-4 pt-28 text-black backdrop-blur-md dark:bg-neutral-950/95 dark:text-white">
          <button
            type="button"
            aria-label="Zoeken sluiten"
            onClick={() => setOpen(false)}
            className="absolute right-6 top-6"
          >
            <XMarkIcon className="h-7 w-7" />
          </button>
          <Form action="/search" className="w-full max-w-xl">
            <input
              autoFocus
              type="text"
              name="q"
              placeholder="Zoek producten..."
              className="w-full border-b border-neutral-300 bg-transparent pb-3 font-heading text-3xl outline-none placeholder:text-neutral-400 dark:border-neutral-700 dark:placeholder:text-neutral-500"
            />
          </Form>
        </div>
      ) : null}
    </>
  );
}
