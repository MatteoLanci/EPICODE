const express = require("express");
const mongoose = require("mongoose");

const AuthorModel = require("../../models/authorModel");
const PostsModel = require("../../models/postModel");

const author = express.Router();

//GET GLOBAL
author.get("/authors", async (req, res) => {
  try {
    const authors = await AuthorModel.find();

    res.status(200).send({
      statusCode: 200,
      authors: authors,
    });
  } catch (error) {
    res.status(500).send({
      statusCode: 500,
      message: "Internal server error",
      error,
    });
  }
});

//! GET POSTS by author name
author.get("/authors/byName", async (req, res) => {
  const { authorName } = req.query;

  try {
    console.log(`Searching authors with name: ${authorName}`);

    const author = await AuthorModel.find({
      firstName: { $regex: authorName, $options: "i" },
    });
    console.log("Found authors: ", author);

    const authorFirstName = author[0].firstName;
    console.log("Author name: ", authorFirstName);

    const posts = await PostsModel.find({
      "author.name": { $regex: new RegExp(authorFirstName, "i") },
    });

    console.log("Found posts relative to", authorFirstName, ":", posts);

    res.status(200).send({
      statusCode: 200,
      posts,
    });
  } catch (error) {
    console.log("Error: ", error);
    res.status(500).send({
      statusCode: 500,
      message: "Internal server error",
      error,
    });
  }
});

//GET SINGLE AUTHOR
author.get("/authors/:authorId", async (req, res) => {
  const { authorId } = req.params;
  try {
    const authorById = await AuthorModel.findById(authorId);

    res.status(200).send({
      statusCode: 200,
      authorById,
    });
  } catch (error) {
    res.status(500).send({
      statusCode: 500,
      message: "Internal server error",
      error,
    });
  }
});

//POST
author.post("/authors", async (req, res) => {
  const newAuthor = new AuthorModel({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    birthDate: req.body.birthDate,
    avatar: req.body.avatar,
  });

  try {
    const author = await newAuthor.save();

    res.status(201).send({
      statusCode: 201,
      message: "New author successfully created!",
      payload: author,
    });
  } catch (error) {
    res.status(500).send({
      statusCode: 500,
      message: "Internal server error",
      error,
    });
  }
});

//PATCH
author.patch("/authors/:id", async (req, res) => {
  const { id } = req.params;
  const authorExist = await AuthorModel.findById(id);

  if (!authorExist) {
    return res.status(404).send({
      statusCode: 404,
      message: `Author with id ${id} not found!`,
    });
  }

  try {
    const authorId = id;
    const dataToUpdate = req.body;
    const options = { new: true };

    const result = await AuthorModel.findByIdAndUpdate(
      authorId,
      dataToUpdate,
      options
    );

    res.statusCode(200).send({
      statusCode: 200,
      message: `Author with id ${id} modified successfully!`,
      result,
    });
  } catch (error) {
    res.status(500).send({
      statusCode: 500,
      message: "Internal server error",
      error,
    });
  }
});

//PUT

//DELETE
author.delete("/authors/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const authorExist = await AuthorModel.findById(id);

    if (!authorExist) {
      return res.status(404).send({
        statusCode: 404,
        message: `Author with id ${id} not found!`,
      });
    }

    const authorToDelete = await AuthorModel.findByIdAndDelete(id);

    res.status(200).send({
      statusCode: 200,
      message: `Author with id ${id} has been removed!`,
    });
  } catch (error) {
    res.status(500).send({
      statusCode: 500,
      message: "Internal server error",
      error,
    });
  }
});

module.exports = author;
