import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import routes from "./routes/routes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

const corsOptions = {
  origin: "http://localhost:5173/",
};

app.use(cors(corsOptions));
app.use(express.json());
app.use("/", routes);

connectDB();

app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
