const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://omkarbm03:Fy48f6eri5hKNUvC@cluster0.fghthxu.mongodb.net/GitMatched"
  );
};

module.exports = { connectDB };
