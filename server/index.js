const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;

const corsOptions = {
  origin: "http://localhost:5173/",
};
app.use(cors(corsOptions));
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.json({ message: "Server is running" });
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
