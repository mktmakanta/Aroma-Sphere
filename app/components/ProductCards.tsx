"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

import RatingStars from "./RatingStars";
import Link from "next/link";
import Products from "@/data/products";

const ProductItems = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {Products.map((product) => (
        <Card key={product._id} className="w-full max-w-xs mx-auto">
          <Link href={`/${product._id}`}>
            <CardHeader>
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-56 object-cover rounded-md"
              />
            </CardHeader>
            <CardContent className="p-4">
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <CardDescription className="text-sm text-gray-600 mt-2">
                {product.description}
              </CardDescription>
            </CardContent>
            <CardFooter className=" flex flex-col items-start">
              <div className="flex gap-2 items-center p-0 ">
                <RatingStars rating={product.rating} />{" "}
                {product.numberOfReviews} reviews
              </div>
              <div className="text-xl py-2 font-semibold">
                $ {product.price}
              </div>
            </CardFooter>
          </Link>
        </Card>
      ))}
    </div>
  );
};

export default ProductItems;
