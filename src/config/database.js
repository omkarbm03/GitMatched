const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://omkarbm03:Deadpool3@cluster0.fghthxu.mongodb.net/GitMatched"
  );
};

module.exports = { connectDB };
