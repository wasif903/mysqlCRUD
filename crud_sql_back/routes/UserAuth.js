const express = require("express");
const { Users } = require("../models");

const router = express.Router();

router.post("/signup", async (req, res) => {
  try {
    const { email, password, username } = req.body;
    const createUser = await Users.create({
      email: email,
      password: password,
      username: username,
    });
    console.log(email, password, username)
    res.status(200).json(createUser);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
