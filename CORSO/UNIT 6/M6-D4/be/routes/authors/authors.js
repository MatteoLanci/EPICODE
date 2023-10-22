const express = require("express");
const mongoose = require("mongoose");

const AuthorModel = require("../../models/authorModel");
const PostsModel = require("../../models/postModel");

const author = express.Router();

//!---------> GET all Authors in DB
author.get("/authors", async (req, res) => {
  try {
    const authors = await AuthorModel.find().populate({
      path: "blogPosts",
      populate: {
        path: "comments",
        select: "title",
      },
    });

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

//!---------> GET all Posts by Author firstName
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

    const blogPosts = author[0].blogPosts;

    console.log("Found posts relative to", authorFirstName, ":", blogPosts);

    res.status(200).send({
      statusCode: 200,
      blogPostAuthor: authorFirstName,
      blogPostAuthorId: author[0]._id,
      blogPosts,
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

//!---------> GET Author by Id
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

//!---------> POST new Author in DB
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

//!---------> PATCH an existing Author in DB
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
    const dataToUpdate = req.body;
    const options = { new: true };

    const result = await AuthorModel.findByIdAndUpdate(id, dataToUpdate, options);

    res.status(200).send({
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

//!---------> DELETE an existing Author in DB
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
