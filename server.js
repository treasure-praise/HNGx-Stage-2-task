const express = require("express");
const dotenv = require("dotenv");
const { connectDB } = require("./config/db");
const userRoute = require("./routes/userRoutes.js");

const app = express();

connectDB();

const PORT = 8000;

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({ message: "hello world" });
});

app.use("/api", userRoute);

app.listen(PORT, () => {
  console.log(`Server started on Port ${PORT}`);
});
