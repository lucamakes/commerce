import clsx from "clsx";

export function CollectionPrice({
  amount,
  currencyCode = "EUR",
  className,
}: {
  amount: string;
  currencyCode?: string;
  className?: string;
}) {
  const formatted = amount.replace(".", ",");

  return (
    <p
      className={clsx(
        "font-sans text-sm font-semibold text-black dark:text-white",
        className,
      )}
    >
      {currencyCode} {formatted}
    </p>
  );
}
