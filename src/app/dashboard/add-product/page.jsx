"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

export default function AddProduct() {
  //   const { data: session } = useSession();
  const router = useRouter();
  const [form, setForm] = useState({ name: "", description: "", price: "" });

  //   if (!session) {
  //     router.push("/login");
  //     return null;
  //   }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    if (res.ok) {
      toast.success("Product added!");
      router.push("/products");
    }
  };

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-5">Add Product</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-96">
        <input
          type="text"
          placeholder="Name"
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="border p-2"
        />
        <textarea
          placeholder="Description"
          onChange={(e) => setForm({ ...form, description: e.target.value })}
          className="border p-2"
        />
        <input
          type="number"
          placeholder="Price"
          onChange={(e) => setForm({ ...form, price: e.target.value })}
          className="border p-2"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-green-600 text-white rounded"
        >
          Add
        </button>
      </form>
    </div>
  );
}
