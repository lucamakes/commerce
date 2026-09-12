import Footer from "components/layout/footer";
import { CheckoutForm } from "./checkout-form";

export const metadata = {
  title: "Checkout",
  description: "Rond je bestelling af.",
};

export default function CheckoutPage() {
  return (
    <>
      <div className="mx-auto max-w-4xl px-6 py-16 md:py-24">
        <h1 className="mb-10 text-4xl font-light md:text-5xl">Checkout</h1>
        <CheckoutForm />
      </div>
      <Footer />
    </>
  );
}
