const express = require("express");
const { Posts } = require("../models");

const router = express.Router();

router.post("/posts", (req, res) => {
  console.log(req.body.test);
  res
    .status(200)
    .json({ user: "name", status: "Nullaa", statusText: "I Wrote It " });
});

router.post("/create-post", async (req, res) => {
  console.log(req);
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

router.get("/get-post/:ID", async (req, res) => {
  try {
    const post = await Posts.findOne({
      where: {
        id: req.params.ID,
      },
    });
    if (!post) {
      return res.status(404).json({ error: "Post Not Found" });
    }
    res.status(200).json(post);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.delete("/delete-post/:ID", async (req, res) => {
  try {
    const { ID } = req.params;
    const post = await Posts.destroy({
      where: {
        id: ID,
      },
    });
    if (!post) {
      return res.status(404).json({ error: "Post Not Found" });
    }
    res.status(200).json({ message: "Post deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.patch("/update-post/:ID", async (req, res) => {
try {
  const { ID } = req.params;
  const post = await Posts.update(req.body, {
    where: {
      id: ID,
    },
  });
  if (!post) {
    return res.status(404).json({ error: "Post Not Found" });
  }
  res.status(200).json({ message: "Post updated successfully", post });
} catch (error) {
  console.log(error);
  res.status(500).json({ error: "Internal Server Error" });
}
})

module.exports = router;
