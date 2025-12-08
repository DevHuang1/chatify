import mongoose from "mongoose";

export const connectDB = async () => {
  try {
<<<<<<< HEAD
    const conn = await mongoose.connect(process.env.MONGO_URI);
=======
    const { MONGO_URI } = process.env;
    if (!MONGO_URI) throw new Error("MONGO_URI is not set");
    const conn = await mongoose.connect(MONGO_URI);
>>>>>>> 16cf9cfa0d2c80c48fbf8fc178e3b958214176ab
    console.log("MONGODB CONNECTED: ", conn.connection.host);
  } catch (error) {
    console.error("Error connecting to MONGODB: ", error);
    process.exit(1); //failure
  }
};
