const express = require("express");
const { Posts } = require("../models");

const router = express.Router();

router.post("/posts", (req, res) => {
  console.log(req.body.test)
  res
    .status(200)
    .json({ user: "name", status: "Nullaa", statusText: "I Wrote It " });
});

router.post("/create-post", async (req, res) => {
  console.log(req)
  try {
    if (!req.body.title) {
      return res.status(400).json({ error: "Title is required" });
    }
    const createPost = await Posts.create(req.body);
    console.log(req.body.title);
    res.status(200).json({ posts: createPost });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});


module.exports = router;
