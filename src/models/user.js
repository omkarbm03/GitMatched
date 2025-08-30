const { Timestamp } = require("mongodb");
const { mongoose } = require("mongoose");
const { Schema } = mongoose;
var validator = require("validator");
const { default: isURL } = require("validator/lib/isURL");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
      minLength: 4,
      maxLength: 50,
    },
    lastName: {
      type: String,
    },
    emailId: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      validate(value) {
        if (!validator.isEmail(value)) {
          throw new Error("Invalid Email");
        }
      },
    },
    password: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      min: 18,
    },
    gender: {
      type: String,
      Validate(value) {
        if (!["male", "female", "others"].includes(value)) {
          throw new Error("Wrong option");
        }
      },
    },
    photoUrl: {
      type: String,
      default:
        "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_1280.png",
      validate(value) {
        if (!isURL(value)) {
          throw new Error("Invalid URL");
        }
      },
    },
    about: {
      type: String,
      default: "This the default description of user",
    },
    skills: {
      type: [String],
      default: "Add your skills",
    },
  },
  { timestamps: true }
);

userSchema.methods.getJWT = async function () {
  const user = this;
  // console.log(user)
  const token = await jwt.sign({ _id: user._id }, "secretkey98", {
    expiresIn: "1d",
  });
  return token;
};
userSchema.methods.validatePassword = async function (passwordInputByUser) {
  const user = this;
  const passwordHash = user.password;
  const isPasswordValid = await bcrypt.compare(
    passwordInputByUser,
    passwordHash
  );

  return isPasswordValid;
};
const userModel = mongoose.model("User", userSchema);

module.exports = { userModel };
