import Footer from "components/layout/footer";

export default function InfoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="mx-auto max-w-3xl px-6 py-16 md:max-w-4xl md:py-24">
        {children}
      </div>
      <Footer />
    </>
  );
}
