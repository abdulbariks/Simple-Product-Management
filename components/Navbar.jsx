"use client";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

export default function Navbar() {
  const { data: session } = useSession();

  return (
    <nav className="w-full bg-white dark:bg-gray-900 shadow-md px-6 py-4 flex justify-between items-center">
      <Link href="/" className="text-2xl font-bold text-blue-600">
        MyShop
      </Link>
      <div className="space-x-6">
        <Link href="/products" className="hover:text-blue-500">
          Products
        </Link>
        {session ? (
          <>
            <Link href="/dashboard/add-product" className="hover:text-blue-500">
              Dashboard
            </Link>
            <button
              onClick={() => signOut()}
              className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
            >
              Logout
            </button>
          </>
        ) : (
          <Link
            href="/login"
            className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
          >
            Login
          </Link>
        )}
      </div>
    </nav>
  );
}
