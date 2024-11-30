"use client";

import React from "react";
import { notFound } from "next/navigation";
import ProductDetails from "../../components/ProductDetails";

// Define the Product type for better type safety
interface Product {
  _id: string;
  name: string;
  image: string;
  description: string;
  brand: string;
  category: string;
  price: number;
  countInStock: number;
  rating: number;
  numberOfReviews: number;
}

const fetchPerfumes = async (): Promise<Product[]> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/products`);
  const perfumes = await res.json();
  return perfumes;
};
const ProductPage = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const [product, setProduct] = React.useState<Product | null>(null);

  React.useEffect(() => {
    const loadProduct = async () => {
      const perfumes = await fetchPerfumes();
      const foundProduct = perfumes.find((product) => product._id === id);

      if (!foundProduct) {
        notFound(); // Calls Next.js' `notFound` when the product is not found
      } else {
        setProduct(foundProduct);
      }
    };

    loadProduct();
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-6 min-h-screen">
      <ProductDetails product={product} />
    </div>
  );
};

export default ProductPage;
