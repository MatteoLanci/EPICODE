import React from "react";

import "./style/deleteComment.css";
import { nanoid } from "nanoid";

const DeleteComment = ({ bookId, handleDeleteComment }) => {
  const deleteCommentFunc = async () => {
    try {
      await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/${bookId}`,
        {
          method: "DELETE",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDkzY2I4YmQ1NDljMzAwMTQ2YzM4OTYiLCJpYXQiOjE2ODg0OTY0OTEsImV4cCI6MTY4OTcwNjA5MX0.YkZXvUxurcX2zkth0PQ28hA-HjVbGUKkkDqNgkh5cBk",
            "Content-Type": "application/json",
          },
        }
      );
      setTimeout(() => {
        handleDeleteComment();
      }, 1000);
    } catch (error) {
      console.log("error", error);
    }
  };
  return (
    <i
      className="bi bi-trash ms-5"
      role="button"
      onClick={deleteCommentFunc}
      key={nanoid()}
    ></i>
  );
};

export default DeleteComment;
