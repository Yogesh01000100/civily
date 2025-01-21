import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./config/db.js";

dotenv.config({ "path": "./src/config/.env" });

const app = express();


app.use(express.json());
app.use(cors());

async function startApp() {
    try {
        await connectDB();
        app.listen(process.env.PORT, () => {
            console.log(`Server is running on port ${process.env.PORT}`);
        });
    } catch (error) {
        console.error(error);
    }
}

startApp();