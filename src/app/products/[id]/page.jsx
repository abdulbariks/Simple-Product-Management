import { connectDB } from "../../../../lib/mongodb";
import Product from "../../../../models/Product";

export default async function ProductDetails({ params }) {
  await connectDB();
  const product = await Product.findById(params.id);

  if (!product) return <h1>Product not found</h1>;

  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold">{product.name}</h1>
      <p>{product.description}</p>
      <p className="text-green-600 text-xl">${product.price}</p>
    </div>
  );
}
