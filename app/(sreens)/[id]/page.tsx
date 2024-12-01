import { notFound } from "next/navigation";
import ProductDetails from "../../components/ProductDetails";
import Products from "@/data/products";

const ProductPage = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const product = Products.find((product) => product._id === id);

  if (!product) {
    notFound();
  }

  return (
    <div className="container mx-auto p-6  min-h-screen">
      <ProductDetails product={product} />
    </div>
  );
};

export default ProductPage;
