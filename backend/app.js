import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";    
import Event from "./models/Event.js";

const MONGO_URI = process.env.MONGO_URI;


const app = express();

app.use(cors());
app.use(express.json());

await mongoose.connect(MONGO_URI);

app.get("/", async (req, res) => {
    const events = await Event.find();
    res.json(events);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});