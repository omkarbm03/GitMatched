const express = require("express");
const { connectDB } = require("./config/database");
const app = express();
const cookieParser = require("cookie-parser");
const authRouter = require("./routes/auth");
const profileRouter = require("./routes/profile");
const requestRouter = require("./routes/request");
const userRouter = require("./routes/user");
const cors = require("cors");
require("dotenv").config();

const options = {
  origin: ["http://localhost:5173",
  "http://127.0.0.1:5173"],
  methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
  preflightContinue: false,
  optionsSuccessStatus: 204,
};

app.use(cors(options));
app.options(/.*/, cors(options));

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
    app.listen(process.env.PORT, () => {
      console.log("Server is running");
    });
  })
  .catch(() => {
    console.log("error");
  });
