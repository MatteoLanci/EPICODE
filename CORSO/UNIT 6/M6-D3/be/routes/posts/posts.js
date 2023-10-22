const express = require("express");
const mongoose = require("mongoose");

const PostModel = require("../../models/postModel");

// abilitiamo il sistema di Routing
const post = express.Router();

//GET
post.get("/posts", async (req, res) => {
  try {
    const posts = await PostModel.find();

    res.status(200).send({
      statusCode: 200,
      posts: posts,
    });
  } catch (error) {
    console.log("error: ", error);

    res.status(500).send({
      statusCode: 500,
      message: "Internal server error",
      error,
    });
  }
});

// GET by Title
post.get("/posts/search", async (req, res) => {
  const { title } = req.query;

  try {
    const postsByTitle = await PostModel.find({
      title: { $regex: new RegExp(title, "i") },
    });

    res.status(200).send({
      statusCode: 200,
      postsByTitle,
    });
  } catch (error) {
    res.status(500).send({
      statusCode: 500,
      message: "Internal server error",
      error,
    });
  }
});

//GET by ID
post.get("/posts/:postId", async (req, res) => {
  const { postId } = req.params;
  try {
    const postById = await PostModel.findById(postId);

    res.status(200).send({
      statusCode: 200,
      postById,
    });
  } catch (error) {
    res.status(500).send({
      statusCode: 500,
      messange: "Internal server error",
      error,
    });
  }
});

//POST
post.post("/posts", async (req, res) => {
  const newPost = new PostModel({
    category: req.body.category,
    title: req.body.title,
    cover: req.body.cover,
    readTime: req.body.readTime,
    author: req.body.author,
    content: req.body.content,
  });

  try {
    const post = await newPost.save();

    res.status(201).send({
      statusCode: 201,
      message: "Post saved successfully",
      payload: post,
    });
  } catch (error) {
    res.status(500).send({
      statusCode: 500,
      message: "Internal server error",
      error,
    });
  }
});

//PATCH (differente da PUT)
post.patch("/posts/:id", async (req, res) => {
  const { id } = req.params;
  const postExist = await PostModel.findById(id);

  if (!postExist) {
    return res.status(404).send({
      statusCode: 404,
      message: `Post widh id ${id} not found!`,
    });
  }
  try {
    const postId = id;
    const dataToUpdate = req.body;
    const options = { new: true };

    const result = await PostModel.findByIdAndUpdate(
      postId,
      dataToUpdate,
      options
    );

    res.statusCode(200).send({
      statusCode: 200,
      message: `Post with id ${id} modified successfully!`,
      result,
    });
  } catch (error) {
    res.status(500).send({
      statusCode: 500,
      messange: "Internal server error",
      error,
    });
  }
});

//DELETE
post.delete("/posts/:id", async (req, res) => {
  const { id } = req.params;
  const postExist = await PostModel.findById(id);

  if (!postExist) {
    return res.status(404).send({
      statusCode: 404,
      message: `Post widh id ${id} not found!`,
    });
  }
  try {
    const postToDelete = await PostModel.findByIdAndDelete(id);

    res.statusCode(200).send({
      statusCode: 200,
      message: `Post with id ${id} deleted successfully!`,
      result,
    });
  } catch (error) {
    res.status(500).send({
      statusCode: 500,
      messange: "Internal server error",
      error,
    });
  }
});

module.exports = post;
