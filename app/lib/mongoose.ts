import mongoose from "mongoose";

if (!process.env.MONGODB_URI) {
  throw new Error("Please add your MongoDB URI to .env.local");
}

const MONGODB_URI = process.env.MONGODB_URI;

let isConnected = false;

export async function connectToDatabase() {
  if (isConnected) {
    console.log("Already connected to the database.");
    return;
  }
  try {
    const db = await mongoose.connect(MONGODB_URI);
    isConnected = true;
    console.log("Connected to MongoDB.");
  } catch (error) {
    console.error("Failed to connect to MongoDB.", error);
    throw new Error("Failed to connect to MongoDB.");
  }
}
