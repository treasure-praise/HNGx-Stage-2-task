const express = require("express");
const dotenv = require("dotenv");
const { connectDB } = require("./config/db");

const app = express();

connectDB();

const PORT = 8000;

app.listen(PORT, () => {
  console.log(`Server started on Port ${PORT}`);
});
