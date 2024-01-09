const express = require("express");
const bcrypt = require("bcrypt"); // for hashing the password in order to store into the db
const { UserSchema } = require("../model/index");

const router = express.Router();

router.post("/register", async (req, res) => {
  console.log(req.body);
  try {
    const { email, password } = req.body;

    // checking whether user already exists or not
    const existingUser = await UserSchema.findOne({ email });

    if (existingUser) {
      res.status(400).json({ message: "Email is Already Registered!" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log({ hashedPassword });
    // Creating a new User
    console.log("before saving to schema");
    const newUser = new UserSchema({
      email,
      password: hashedPassword,
    });
    console.log("after saving to schema", newUser);
    // saving user to database

    await newUser.save();

    res.status(201).json({ message: "User Registered Successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
});

module.exports = router;
