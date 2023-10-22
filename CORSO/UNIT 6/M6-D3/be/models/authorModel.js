const mongoose = require("mongoose");

const AuthorModelSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    birthDate: {
      type: Date,
      required: true,
    },
    avatar: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    strict: true,
  }
);

module.exports = mongoose.model("Author", AuthorModelSchema, "authors");
