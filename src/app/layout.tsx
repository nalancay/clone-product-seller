import { getCategories, getProducts } from "@/services";
import "./globals.css";
import { ListOfCategories } from "@/components/ListOfCategories";
import Link from "next/link";

export const metadata = {
  title: "Clone Mercado libre",
  description: "The free market store",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const products = await getProducts();
  const categories = await getCategories(products);

  return (
    <html lang="en">
      <body className="container m-auto grid min-h-screen grid-rows-[auto,1fr,auto] px-4">
        <header className="text-xl font-bold leading-[3rem]">
          <Link href="/">Clone Mercado Libre</Link>
        </header>
        <div className="grid grid-cols-[300px_1fr] gap-10">
          <aside>
            <ListOfCategories categories={categories} />
          </aside>
          <main className="py-8">{children}</main>
        </div>
        <footer className="text-center leading-[3rem] opacity-70">
          © {new Date().getFullYear()} Natalia Alancay
        </footer>
      </body>
    </html>
  );
}
