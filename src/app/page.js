import Link from "next/link";
import Hero from "../../components/Hero";
import Highlights from "../../components/Highlights";
import ProductCard from "../../components/ProductCard";

async function getProducts() {
  const res = await fetch("http://localhost:3000/api/products", {
    cache: "no-store",
  });
  return res.json();
}

export default async function Home() {
  const products = await getProducts();
  return (
    <>
      <Hero />
      <div className="p-10">
        <h1 className="text-4xl font-bold mb-6 text-blue-600 text-center">
          Products
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.slice(0, 6).map((p) => (
            <ProductCard key={p._id} product={p} />
          ))}
        </div>
        <div className="flex justify-center mt-6">
          <Link href={`/products`}>
            <button className="px-6 py-2 text-lg bg-blue-600 text-white font-bold rounded-md cursor-pointer">
              Show More Products
            </button>
          </Link>
        </div>
      </div>
      <Highlights />
    </>
  );
}
