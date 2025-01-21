import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config({ "path": "./src/config/.env" });


export const connectDB = async () => {
    const uri = process.env.MONGO_URI;
    if (!uri) {
        throw new Error("Mongo URI is missing");
    };

    mongoose.connect(uri);
}
