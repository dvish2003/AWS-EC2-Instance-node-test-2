import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

import dbConnect from "./db/db.js";
import rootRouter from "./routes/server.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8006;

// Middleware
app.use(express.json());

// Connect DB
dbConnect();

// Routes
app.use("/api", rootRouter);

app.get("/api/products",(req, res) => {
  return res.json({message: "Products route is working!"});
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
