import ProductCard from "../../../components/ProductCard";

async function getProducts() {
  const res = await fetch("http://localhost:3000/api/products", {
    cache: "no-store",
  });
  return res.json();
}

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold mb-6 text-blue-600 text-center">
        Products
      </h1>
      <div className="grid grid-cols-3 gap-6">
        {products.map((p) => (
          <ProductCard key={p._id} product={p} />
        ))}
      </div>
    </div>
  );
}
