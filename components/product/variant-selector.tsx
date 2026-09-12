"use client";

import clsx from "clsx";
import { ProductOption, ProductVariant } from "lib/shopify/types";
import { useRouter, useSearchParams } from "next/navigation";

type Combination = {
  id: string;
  availableForSale: boolean;
  [key: string]: string | boolean;
};

export function VariantSelector({
  options,
  variants,
}: {
  options: ProductOption[];
  variants: ProductVariant[];
}) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const hasNoOptionsOrJustOneOption =
    !options.length ||
    (options.length === 1 && options[0]?.values.length === 1);

  if (hasNoOptionsOrJustOneOption) {
    return null;
  }

  const combinations: Combination[] = variants.map((variant) => ({
    id: variant.id,
    availableForSale: variant.availableForSale,
    ...variant.selectedOptions.reduce(
      (accumulator, option) => ({
        ...accumulator,
        [option.name.toLowerCase()]: option.value,
      }),
      {},
    ),
  }));

  const updateOption = (name: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set(name, value);
    router.replace(`?${params.toString()}`, { scroll: false });
  };

  return options.map((option) => (
    <div key={option.id} className="mb-6 last:mb-0">
      <p className="mb-3 text-xs uppercase tracking-[0.15em] text-neutral-500">
        {option.name}
      </p>
      <div className="flex flex-wrap gap-2">
        {option.values.map((value) => {
          const optionNameLowerCase = option.name.toLowerCase();

          const optionParams: Record<string, string> = {};
          searchParams.forEach((v, k) => (optionParams[k] = v));
          optionParams[optionNameLowerCase] = value;

          const filtered = Object.entries(optionParams).filter(
            ([key, value]) =>
              options.find(
                (option) =>
                  option.name.toLowerCase() === key &&
                  option.values.includes(value),
              ),
          );
          const isAvailableForSale = combinations.find((combination) =>
            filtered.every(
              ([key, value]) =>
                combination[key] === value && combination.availableForSale,
            ),
          );

          const isActive = searchParams.get(optionNameLowerCase) === value;

          return (
            <button
              type="button"
              onClick={() => updateOption(optionNameLowerCase, value)}
              key={value}
              aria-disabled={!isAvailableForSale}
              disabled={!isAvailableForSale}
              title={`${option.name} ${value}${!isAvailableForSale ? " (niet op voorraad)" : ""}`}
              className={clsx(
                "min-w-[3rem] border px-4 py-2 font-sans text-sm transition",
                {
                  "border-black bg-black text-white hover:bg-accent hover:border-accent":
                    isActive,
                  "border-neutral-300 text-black hover:border-accent dark:border-neutral-600 dark:text-white dark:hover:border-accent-light":
                    !isActive && isAvailableForSale,
                  "cursor-not-allowed border-neutral-200 text-neutral-400 line-through dark:border-neutral-700 dark:text-neutral-500":
                    !isAvailableForSale,
                },
              )}
            >
              {value}
            </button>
          );
        })}
      </div>
    </div>
  ));
}
