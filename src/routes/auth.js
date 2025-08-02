const express = require("express");
const { validateSignUpData } = require("../utils/validation");
const { userModel } = require("../models/user");
const authRouter = express.Router();
const { userAuth } = require("../middleware/auth");


const bcrypt = require("bcrypt");

authRouter.post("/signup", async (req, res) => {
  try {
    const { firstName, lastName, emailId, password } = req.body;
    validateSignUpData(req);

    const passwordHash = await bcrypt.hash(password, 10);
    console.log(passwordHash);
    const user = new userModel({
      firstName,
      lastName,
      emailId,
      password: passwordHash,
    });

    await user.save();
    res.send("User Added");
  } catch (err) {
    res.status(400).send(`Error adding to DB ${err}`);
  }
});

authRouter.post("/login", async (req, res) => {
  try {
    const { emailId, password } = req.body;

    const user = await userModel.findOne({ emailId: emailId });

    if (!user) {
      throw new Error("No user found");
    }
    const isPasswordValid = await user.validatePassword(password);

    if (isPasswordValid) {
      const token = await user.getJWT();

      res.cookie("token", token, {
        expires: new Date(Date.now() + 8 * 3600000),
      });

      res.send("Login successful");
    } else {
      throw new Error("Incorrect Password");
    }
  } catch (err) {
    res.status(400).send("Error : " + err.message);
  }
});

authRouter.post("/logout", userAuth, async (req, res) => {
  try {
    res.cookie("token", null, {
      expires: new Date(Date.now()),
    });
    res.send("Logged out");
  } catch (err) {
    throw new Error("ERROR: " + err.message);
  }
});

module.exports = authRouter;
