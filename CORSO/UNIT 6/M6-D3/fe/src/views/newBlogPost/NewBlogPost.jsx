import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Button, Container, Form } from "react-bootstrap";
import ReactQuill from "react-quill";

import "react-quill/dist/quill.snow.css";
import axios from "axios";

import "./NewBlogPost.css";

import { ThemeContext } from "../../context/themeContext";

const NewBlogPost = (props) => {
  const { theme } = useContext(ThemeContext);
  const navigate = useNavigate();

  // const [avatarUrl, setAvatarUrl] = useState("");
  // const handleAvatarChange = (e) => {
  //   setAvatarUrl(e.target.value);
  // };

  const handleAuthorNameChange = (e) => {
    const { value } = e.target;
    setNewBlogPostData((prevState) => ({
      ...prevState,
      author: {
        ...prevState.author,
        name: value,
      },
    }));
  };

  const handleAuthorAvatarChange = (e) => {
    const { value } = e.target;
    setNewBlogPostData((prevState) => ({
      ...prevState,
      author: {
        ...prevState.author,
        avatar: value,
      },
    }));
  };

  const handlePostCoverChange = (e) => {
    const { value } = e.target;
    setNewBlogPostData((prevState) => ({
      ...prevState,
      cover: value,
    }));
  };

  const handleTitleChange = (e) => {
    const { value } = e.target;
    setNewBlogPostData((prevState) => ({
      ...prevState,
      title: value,
    }));
  };

  const handleCategoryChange = (e) => {
    const { value } = e.target;
    setNewBlogPostData((prevState) => ({
      ...prevState,
      category: value,
    }));
  };

  const handleContentChange = (value) => {
    setNewBlogPostData((prevState) => ({
      ...prevState,
      content: value,
    }));
  };

  const [newBlogPostData, setNewBlogPostData] = useState({
    category: "",
    title: "",
    cover: "",
    readTime: {
      value: "",
      unit: "",
    },
    author: {
      name: "",
      avatar: "",
    },
    content: "",
  });
  const handleNewBlogPost = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5050/posts", newBlogPostData);

      setNewBlogPostData({
        category: "",
        title: "",
        cover: "",
        readTime: {
          value: null,
          unit: null,
        },
        author: {
          name: "",
          avatar: "",
        },
        content: "",
      });
      setTimeout(() => {
        navigate("/");
      }, 3000);
    } catch (error) {
      console.log("Error adding a new blogPost: ", error);
    }
  };

  return (
    <Container className="new-blog-container">
      <Form
        className={`mt-5 ${theme === "light" ? "" : "text-light"}`}
        onSubmit={handleNewBlogPost}
      >
        <Form.Group controlId="blog-author-name" className="mt-3">
          <Form.Label>Author Details</Form.Label>
          <Form.Control
            type="text"
            size="lg"
            placeholder="Type First Name and Last Name"
            name="author.name"
            value={newBlogPostData.author.name}
            onChange={handleAuthorNameChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="blog-author-img" className="mt-3">
          <Form.Label>Author Avatar URL</Form.Label>
          <div className="d-flex align-items-center">
            <Form.Control
              size="lg"
              placeholder="Avatar URL"
              // value={avatarUrl}
              // onChange={handleAvatarChange}
              value={newBlogPostData.author.avatar}
              onChange={handleAuthorAvatarChange}
              required
            />
            {/* {avatarUrl && (
              <img
                src={avatarUrl}
                alt="Avatar Preview"
                style={{
                  height: "50px",
                  width: "50px",
                  marginLeft: "1rem",
                  objectFit: "cover",
                }}
              ></img>
            )} */}
          </div>
        </Form.Group>

        <Form.Group controlId="blog-form" className="mt-3">
          <Form.Label>Post Title</Form.Label>
          <Form.Control
            size="lg"
            placeholder="Title"
            value={newBlogPostData.title}
            onChange={handleTitleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="blog-category" className="mt-3">
          <Form.Label>Category</Form.Label>
          <Form.Control
            size="lg"
            as="select"
            value={newBlogPostData.category}
            onChange={handleCategoryChange}
            required
          >
            <option value="" disabled>
              Select One
            </option>
            <option>Web Development</option>
            <option>Learn To Develop</option>
            <option>How To...</option>
            <option>Testimonials</option>
            <option>Day In My Life</option>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="blog-content" className="mt-3">
          <Form.Label>Post Content</Form.Label>
          <ReactQuill
            value={newBlogPostData.content}
            onChange={handleContentChange}
            className={`new-blog-content ${
              theme === "light" ? "" : "bg-light text-dark"
            }`}
            required
          />
        </Form.Group>

        <Form.Group controlId="blog-post-cover" className="mt-3">
          <Form.Label>BlogPost Cover</Form.Label>
          <Form.Control
            size="lg"
            placeholder="BlogPost Cover URL"
            // value={avatarUrl}
            // onChange={handleAvatarChange}
            value={newBlogPostData.cover}
            onChange={handlePostCoverChange}
            required
          />
        </Form.Group>

        <Form.Group className="d-flex mt-3 justify-content-end">
          <Button
            type="reset"
            size="lg"
            variant={theme === "light" ? "outline-dark" : "outline-light"}
          >
            Reset
          </Button>
          <Button
            type="submit"
            size="lg"
            variant={theme === "light" ? "dark" : "light"}
            style={{
              marginLeft: "1em",
            }}
          >
            Send
          </Button>
        </Form.Group>
      </Form>
    </Container>
  );
};

export default NewBlogPost;
