import Link from "next/link";

import FooterMenu from "components/layout/footer-menu";
import PanistoLogo from "components/panisto-logo";
import { getMenu } from "lib/shopify";
import { Suspense } from "react";

const { COMPANY_NAME, SITE_NAME } = process.env;

const policyLinks = [
  { title: "Verzending", href: "/about" },
  { title: "Retourneren", href: "/about" },
  { title: "Contact", href: "/about" },
];

const socialLinks = [
  { title: "Instagram", href: "https://instagram.com" },
  { title: "Facebook", href: "https://facebook.com" },
];

export default async function Footer() {
  const currentYear = new Date().getFullYear();
  const copyrightDate = 2023 + (currentYear > 2023 ? `-${currentYear}` : "");
  const skeleton =
    "w-full h-6 animate-pulse rounded-sm bg-neutral-200 dark:bg-neutral-700";
  const menu = await getMenu("next-js-frontend-footer-menu");
  const copyrightName = COMPANY_NAME || SITE_NAME || "";

  return (
    <footer className="text-sm text-neutral-500 dark:text-neutral-400">
      <div className="mx-auto w-full max-w-7xl px-6 py-12 md:px-4 min-[1320px]:px-0">
        <div className="grid gap-10 border-t border-neutral-200 pt-12 md:grid-cols-4 dark:border-neutral-700">
          <div>
            <PanistoLogo size="footer" />
            <p className="mt-4 max-w-xs font-sans leading-relaxed">
              Specialty koffie en thee — met aandacht voor herkomst en smaak.
            </p>
            <div className="mt-4 flex gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.title}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline-offset-4 hover:underline"
                >
                  {link.title}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-3 text-xs font-medium uppercase tracking-wider text-neutral-400">
              Shop
            </h3>
            <Suspense
              fallback={
                <div className="flex flex-col gap-2">
                  <div className={skeleton} />
                  <div className={skeleton} />
                  <div className={skeleton} />
                </div>
              }
            >
              <FooterMenu menu={menu} />
            </Suspense>
          </div>

          <div>
            <h3 className="mb-3 text-xs font-medium uppercase tracking-wider text-neutral-400">
              Klantenservice
            </h3>
            <ul>
              {policyLinks.map((link) => (
                <li key={link.title}>
                  <Link
                    href={link.href}
                    className="block p-2 underline-offset-4 hover:text-accent hover:underline md:inline-block md:p-0 md:py-1.5"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-xs font-medium uppercase tracking-wider text-neutral-400">
              Contact
            </h3>
            <ul className="font-sans leading-relaxed">
              <li>
                <a
                  href="mailto:hallo@panisto.nl"
                  className="underline-offset-4 hover:underline"
                >
                  hallo@panisto.nl
                </a>
              </li>
              <li className="mt-1">Amsterdam, NL</li>
              <li className="mt-1">Ma–Za 08:00–18:00</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-neutral-200 py-6 text-sm dark:border-neutral-700">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-1 px-4 md:flex-row md:gap-0 md:px-4 min-[1320px]:px-0">
          <p>
            &copy; {copyrightDate} {copyrightName}
            {copyrightName.length && !copyrightName.endsWith(".")
              ? "."
              : ""}{" "}
            Alle rechten voorbehouden.
          </p>
        </div>
      </div>
    </footer>
  );
}
