export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 py-8 text-center mt-12">
      <p className="mb-2 text-blue-600">
        &copy; {new Date().getFullYear()} Simple Product Management. All rights
        reserved.
      </p>
      <p className="text-blue-600">
        Built with Next.js 15 + NextAuth + MongoDB
      </p>
    </footer>
  );
}
