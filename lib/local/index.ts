export function isLocalMode() {
  return !process.env.SHOPIFY_STORE_DOMAIN;
}
