const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config({ path: __dirname + "/../.env" });

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB connected : ${conn.connection.host}`);
  } catch (error) {
    console.log(`Error : ${error.message}`);
    process.exit(1);
  }
};

module.exports = { connectDB };
