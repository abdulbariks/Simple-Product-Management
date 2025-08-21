import Link from "next/link";

export default function ProductCard({ product }) {
  return (
    <div className="border p-4 rounded shadow flex flex-col items-center">
      <h2 className="text-xl font-bold">{product.name}</h2>
      <p>{product.description.slice(0, 50)}...</p>
      <p className="text-green-600">${product.price}</p>
      <Link href={`/products/${product._id}`}>
        <button className="mt-2 px-3 py-1 bg-blue-600 text-white rounded">
          Details
        </button>
      </Link>
    </div>
  );
}
