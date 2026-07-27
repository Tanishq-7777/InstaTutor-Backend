const express = require("express");
const validate = require("../validations/validate");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const User = require("../models/user");
const authRouter = express.Router();

authRouter.post("/signup", async (req, res) => {
  try {
    const userData = req.body;
    validate(userData);
    const { name, email, password, phone, role } = userData;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({
      name,
      email,
      password: hashedPassword,
      phone,
      role,
    });
    await user.save(user);
    res.send("user data saved");
  } catch (err) {
    console.log(err.message);
    res.status(400).send(err.message);
  }
});
module.exports = authRouter;
