"use client";

import CartModal from "components/cart/modal";
import { Menu } from "lib/shopify/types";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Suspense } from "react";
import HeaderSearch from "./header-search";
import MobileMenu from "./mobile-menu";

export default function NavbarClient({ menu }: { menu: Menu[] }) {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <>
      <div className="fixed inset-x-0 top-0 z-50 bg-white text-black dark:bg-white dark:text-black">
        <header className="border-b border-neutral-200 bg-white">
          <div className="mx-auto grid max-w-7xl grid-cols-[1fr_auto_1fr] items-center gap-4 px-4 py-4 md:py-5 lg:px-6">
            <div className="flex min-w-0 items-center gap-2">
              <Suspense fallback={null}>
                <MobileMenu menu={menu} />
              </Suspense>
              {menu.length ? (
                <ul className="hidden min-w-0 items-center gap-5 text-sm lg:flex">
                  {menu.map((item) => (
                    <li key={item.title} className="shrink-0">
                      <Link
                        href={item.path}
                        prefetch={true}
                        className={clsx(
                          "text-neutral-600 transition-colors hover:text-accent",
                          pathname === item.path && "text-accent",
                        )}
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>

            <Link
              href="/"
              prefetch={true}
              className="flex shrink-0 items-center justify-center"
              aria-label="Panisto home"
            >
              <Image
                src="/panisto-logo.png"
                alt="Panisto"
                width={280}
                height={80}
                className="h-16 w-auto md:h-[4.5rem]"
                priority
              />
            </Link>

            <div className="flex items-center justify-end gap-2">
              <HeaderSearch />
              <CartModal />
            </div>
          </div>
        </header>
      </div>
      {isHome ? null : <div className="h-24 md:h-28" aria-hidden="true" />}
    </>
  );
}
