import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";

export default function OpenCart({
  className,
  inverted,
  quantity,
}: {
  className?: string;
  inverted?: boolean;
  quantity?: number;
}) {
  return (
    <div
      className={clsx(
        "relative flex h-11 w-11 items-center justify-center transition-colors",
        inverted ? "text-white" : "text-black dark:text-white",
        className,
      )}
    >
      <ShoppingCartIcon
        className={clsx(
          "h-4 transition-all ease-in-out hover:scale-110",
          className,
        )}
      />

      {quantity ? (
        <div className="absolute right-0 top-0 -mr-2 -mt-2 flex h-4 w-4 items-center justify-center bg-black text-[11px] font-medium text-white">
          {quantity}
        </div>
      ) : null}
    </div>
  );
}
