const mongoose = require("mongoose"); 


const connectDB = async () => {
    await mongoose.connect("Your URL");
}



module.exports = { connectDB}