import { getProductSubtitle } from "lib/local/products";
import { getProducts } from "lib/shopify";
import { NextRequest, NextResponse } from "next/server";

const MAX_RESULTS = 6;

export async function GET(request: NextRequest) {
  const query = request.nextUrl.searchParams.get("q")?.trim() ?? "";

  if (!query) {
    return NextResponse.json({ products: [], total: 0 });
  }

  const products = await getProducts({ query });

  return NextResponse.json({
    total: products.length,
    products: products.slice(0, MAX_RESULTS).map((product) => ({
      handle: product.handle,
      title: product.title,
      subtitle: getProductSubtitle(product.handle),
      image: product.featuredImage?.url
        ? {
            url: product.featuredImage.url,
            altText: product.featuredImage.altText || product.title,
            width: product.featuredImage.width,
            height: product.featuredImage.height,
          }
        : undefined,
      price: product.priceRange.maxVariantPrice,
    })),
  });
}
