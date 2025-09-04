

const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
<<<<<<< HEAD
    "DB URL"
=======
    process.env.DB_URL
>>>>>>> 0eccaa7 (Added .env file)
  );
};

module.exports = { connectDB };
