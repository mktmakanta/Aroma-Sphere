import Product from "@/app/models/products";
import { NextResponse } from "next/server";
import { connectToDatabase } from "@/app/lib/mongoose";

export async function GET() {
  try {
    await connectToDatabase();
    const products = await Product.find({});
    return NextResponse.json(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    return NextResponse.json(
      { error: "Failed to fetch products" },
      { status: 500 }
    );
  }
}
