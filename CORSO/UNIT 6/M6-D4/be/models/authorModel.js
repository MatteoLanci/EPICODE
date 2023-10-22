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
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      required: true,
    },
    blogPosts: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post",
        default: [],
      },
    ],
  },
  {
    timestamps: true,
    strict: true,
  }
);

module.exports = mongoose.model("Author", AuthorModelSchema, "authors");
