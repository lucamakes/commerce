export default {
  experimental: {
    ppr: true,
    inlineCss: true,
    useCache: true,
  },
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.shopify.com",
        pathname: "/s/files/**",
      },
      {
        protocol: "https",
        hostname: "broadcast-theme-airwave.myshopify.com",
        pathname: "/cdn/shop/files/**",
      },
      {
        protocol: "https",
        hostname: "thee.be",
        pathname: "/wp-content/uploads/**",
      },
    ],
  },
};
