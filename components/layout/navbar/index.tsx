import { getMenu } from "lib/shopify";
import { Suspense } from "react";
import NavbarClient from "./navbar-client";

export async function Navbar() {
  const menu = await getMenu("next-js-frontend-header-menu");

  return (
    <Suspense fallback={null}>
      <NavbarClient menu={menu} />
    </Suspense>
  );
}
