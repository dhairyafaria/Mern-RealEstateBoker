import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();

mongoose.connect(process.env.MONGO)
    .then(() => console.log("Connected to MongoDB."))
    .catch((e) => console.log("Error connecting to MongoDB: ", e));


const app = express();

app.listen(4000, () => console.log("Server is running on port 4000!"));