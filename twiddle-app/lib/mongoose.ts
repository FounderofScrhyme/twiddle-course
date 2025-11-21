import mongoose from "mongoose";

let isConnected: boolean = false;

export const connectToDB = async (): Promise<void> => {
  mongoose.set("strictQuery", true);

  if (!process.env.MONGODB_URL) return;
  console.log("MONGODB_URL not found");

  if (isConnected) {
    return console.log("MongoDB connection already established");
  }

  try {
    await mongoose.connect(process.env.MONGODB_URL as string);

    isConnected = true;
    console.log("MondoDB connected");
  } catch (err: any) {
    console.log(`Error connectiong database ${err.message} `);
  }
};
