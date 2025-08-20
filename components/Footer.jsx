export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 text-center mt-12">
      <p className="mb-2">
        &copy; {new Date().getFullYear()} MyShop. All rights reserved.
      </p>
      <p className="text-gray-400">
        Built with Next.js 15 + NextAuth + MongoDB
      </p>
    </footer>
  );
}
