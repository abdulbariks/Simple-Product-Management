import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-gray-100 dark:bg-gray-800 text-center py-20 px-6">
      <h1 className="text-5xl font-bold mb-6 text-gray-900 dark:text-white">
        Welcome to Simple Product Management
      </h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
        Discover the best products at unbeatable prices.
      </p>
      <Link
        href="/products"
        className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-700 transition"
      >
        Explore Products
      </Link>
    </section>
  );
}
