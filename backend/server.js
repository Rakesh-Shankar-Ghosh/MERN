import { configDotenv } from "dotenv";
import express from "express";
import Dbconnection from "./config/dbConnection.js";
import authRoutes from "./routes/authRoute.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import cors from "cors";

const app = express();

// middleWare

const Cors = app.use(cors());
const bodyparser = app.use(express.json());

// middleWare

const dotenv = configDotenv();
const DbCnnection = Dbconnection();

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/category", categoryRoutes);
app.use("/api/v1/product", productRoutes);

app.get("/", (req, res) => {
  res.send("Welcome...");
});

const PORT = process.env.PORT;
const MODE = process.env.DEV_MODE;
app.listen(PORT, () => {
  console.log("Server running on", PORT, MODE);
});
