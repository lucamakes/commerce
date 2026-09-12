import { CollectionProductCard } from "components/collection/collection-product-card";
import Footer from "components/layout/footer";
import { Gallery } from "components/product/gallery";
import { ProductDescription } from "components/product/product-description";
import { HIDDEN_PRODUCT_TAG } from "lib/constants";
import { getProduct, getProductRecommendations } from "lib/shopify";
import type { Image } from "lib/shopify/types";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";

export async function generateMetadata(props: {
  params: Promise<{ handle: string }>;
}): Promise<Metadata> {
  const params = await props.params;
  const product = await getProduct(params.handle);

  if (!product) return notFound();

  const { url, width, height, altText: alt } = product.featuredImage || {};
  const indexable = !product.tags.includes(HIDDEN_PRODUCT_TAG);

  return {
    title: product.seo.title || product.title,
    description: product.seo.description || product.description,
    robots: {
      index: indexable,
      follow: indexable,
      googleBot: {
        index: indexable,
        follow: indexable,
      },
    },
    openGraph: url
      ? {
          images: [
            {
              url,
              width,
              height,
              alt,
            },
          ],
        }
      : null,
  };
}

export default async function ProductPage(props: {
  params: Promise<{ handle: string }>;
}) {
  const params = await props.params;
  const product = await getProduct(params.handle);

  if (!product) return notFound();

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.title,
    description: product.description,
    image: product.featuredImage.url,
    offers: {
      "@type": "AggregateOffer",
      availability: product.availableForSale
        ? "https://schema.org/InStock"
        : "https://schema.org/OutOfStock",
      priceCurrency: product.priceRange.minVariantPrice.currencyCode,
      highPrice: product.priceRange.maxVariantPrice.amount,
      lowPrice: product.priceRange.minVariantPrice.amount,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productJsonLd),
        }}
      />
      <div className="mx-auto max-w-7xl px-6 py-10 md:py-14">
        <div className="grid gap-10 md:grid-cols-2 md:gap-16 lg:gap-20">
          <Suspense fallback={<div className="w-full" />}>
            <Gallery
              images={product.images.slice(0, 5).map((image: Image) => ({
                src: image.url,
                altText: image.altText,
              }))}
            />
          </Suspense>

          <Suspense fallback={null}>
            <ProductDescription product={product} />
          </Suspense>
        </div>

        <RelatedProducts id={product.id} />
      </div>
      <Footer />
    </>
  );
}

async function RelatedProducts({ id }: { id: string }) {
  const relatedProducts = await getProductRecommendations(id);

  if (!relatedProducts.length) return null;

  return (
    <section className="mt-20 border-t border-neutral-200 pt-16 dark:border-neutral-800 md:mt-28 md:pt-20">
      <h2 className="mb-10 text-3xl font-light md:text-4xl">
        Ook interessant
      </h2>
      <ul className="grid grid-cols-2 gap-x-5 gap-y-12 md:grid-cols-3 lg:grid-cols-4 lg:gap-x-6">
        {relatedProducts.map((product) => (
          <CollectionProductCard key={product.handle} product={product} />
        ))}
      </ul>
    </section>
  );
}
