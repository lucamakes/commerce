"use client";

import { Dialog, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import { Menu } from "lib/shopify/types";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { Fragment, useEffect, useState } from "react";

export default function MobileMenu({
  menu,
  inverted,
}: {
  menu: Menu[];
  inverted?: boolean;
}) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isOpen, setIsOpen] = useState(false);
  const openMobileMenu = () => setIsOpen(true);
  const closeMobileMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setIsOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname, searchParams]);

  return (
    <>
      <button
        onClick={openMobileMenu}
        aria-label="Menu openen"
        className={clsx(
          "flex h-11 w-11 items-center justify-center transition-colors lg:hidden",
          inverted
            ? "text-white hover:bg-white/10"
            : "text-black hover:bg-neutral-50 dark:text-white dark:hover:bg-neutral-900",
        )}
      >
        <Bars3Icon className="h-4 w-4" />
      </button>
      <Transition show={isOpen}>
        <Dialog onClose={closeMobileMenu} className="relative z-50">
          <Transition.Child
            as={Fragment}
            enter="transition-opacity duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="transition-transform duration-300 ease-out"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition-transform duration-200 ease-in"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <Dialog.Panel className="fixed inset-y-0 left-0 flex h-full w-full max-w-sm flex-col bg-white px-6 py-6 text-black dark:bg-neutral-950 dark:text-white">
              <button
                className="mb-8 flex h-11 w-11 items-center justify-center"
                onClick={closeMobileMenu}
                aria-label="Menu sluiten"
              >
                <XMarkIcon className="h-5 w-5" />
              </button>
              <ul className="flex flex-col gap-4">
                {menu.map((item) => (
                  <li key={item.title}>
                    <Link
                      href={item.path}
                      prefetch={true}
                      onClick={closeMobileMenu}
                      className="font-heading text-3xl"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </Dialog.Panel>
          </Transition.Child>
        </Dialog>
      </Transition>
    </>
  );
}
