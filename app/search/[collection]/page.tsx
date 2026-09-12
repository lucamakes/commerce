import { CatalogCollectionSection } from "components/collection/catalog-collection-section";
import { getCollection } from "lib/shopify";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export async function generateMetadata(props: {
  params: Promise<{ collection: string }>;
}): Promise<Metadata> {
  const params = await props.params;
  const collection = await getCollection(params.collection);

  if (!collection) return notFound();

  return {
    title: collection.seo?.title || collection.title,
    description:
      collection.seo?.description ||
      collection.description ||
      `${collection.title} producten`,
  };
}

export default async function CategoryPage(props: {
  params: Promise<{ collection: string }>;
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const searchParams = await props.searchParams;
  const params = await props.params;
  const { sort } = searchParams as { [key: string]: string };
  const collection = await getCollection(params.collection);

  if (!collection) return notFound();

  return (
    <CatalogCollectionSection
      collection={params.collection}
      sort={sort}
      title={collection.title}
      description={collection.description}
    />
  );
}
