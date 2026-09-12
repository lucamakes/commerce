import Footer from "components/layout/footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="mx-auto max-w-3xl px-6 py-16 md:py-24">{children}</div>
      <Footer />
    </>
  );
}
