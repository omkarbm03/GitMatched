const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "DB URL"
  );
};

module.exports = { connectDB };
