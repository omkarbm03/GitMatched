const express = require("express");
const { connectDB } = require("./config/database");
const app = express();
const cookieParser = require("cookie-parser");
const authRouter = require("./routes/auth");
const profileRouter = require("./routes/profile");
const requestRouter = require("./routes/request");
const userRouter = require("./routes/user")

app.use(express.json());
app.use(cookieParser());

app.use("/", authRouter);
app.use("/", profileRouter);
app.use("/", requestRouter);
app.use("/", userRouter);

//connect to the database
connectDB()
  .then(() => {
    console.log("Connected");
    app.listen(3000, () => {
      console.log("Server is running");
    });
  })
  .catch(() => {
    console.log("error");
  });

