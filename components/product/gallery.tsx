"use client";

import clsx from "clsx";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";

export function Gallery({
  images,
}: {
  images: { src: string; altText: string }[];
}) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const imageIndex = searchParams.has("image")
    ? parseInt(searchParams.get("image")!)
    : 0;

  const updateImage = (index: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("image", index);
    router.replace(`?${params.toString()}`, { scroll: false });
  };

  return (
    <div>
      {images[imageIndex] ? (
        <Image
          className="h-auto w-full"
          width={1296}
          height={1296}
          sizes="(min-width: 768px) 50vw, 100vw"
          alt={images[imageIndex].altText}
          src={images[imageIndex].src}
          priority={true}
        />
      ) : null}

      {images.length > 1 ? (
        <ul className="mt-4 flex gap-2 overflow-auto">
          {images.map((image, index) => {
            const isActive = index === imageIndex;

            return (
              <li key={image.src}>
                <button
                  type="button"
                  onClick={() => updateImage(index.toString())}
                  aria-label="Select product image"
                  className={clsx(
                    "block",
                    isActive && "ring-2 ring-accent ring-offset-2",
                  )}
                >
                  <Image
                    alt={image.altText}
                    src={image.src}
                    width={64}
                    height={64}
                    className="h-16 w-16 object-cover"
                    sizes="64px"
                  />
                </button>
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
}
