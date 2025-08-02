const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "your db"
  );
};

module.exports = { connectDB };
