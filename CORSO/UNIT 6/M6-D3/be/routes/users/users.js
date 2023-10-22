const express = require("express");
const mongoose = require("mongoose");

const UserModel = require("../../models/userModel");

const user = express.Router();

//GET GLOBAL
user.get("/users", async (req, res) => {
  try {
    const users = await UserModel.find();

    res.status(200).send({
      statusCode: 200,
      users: users,
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
user.post("/users", async (req, res) => {
  const newUser = new UserModel({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.email,
    age: Number(req.body.age),
  });

  try {
    const user = await newUser.save();

    res.status(201).send({
      statusCode: 201,
      message: "User added successfully",
      payload: user,
    });
  } catch (error) {
    res.status(500).send({
      statusCode: 500,
      message: "Internal server error",
      error,
    });
  }
});

module.exports = user;
