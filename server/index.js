const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./db");
const routes = require("./routes");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

const corsOptions = {
  origin: "http://localhost:5173/",
};

app.use(cors(corsOptions));
app.use(express.json());
app.use("/", routes);

// Підключення до бази даних
connectDB();

app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
