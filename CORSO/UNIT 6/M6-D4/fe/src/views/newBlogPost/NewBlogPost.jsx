import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Button, Container, Form } from "react-bootstrap";
import ReactQuill from "react-quill";

import "react-quill/dist/quill.snow.css";
import axios from "axios";

import "./NewBlogPost.css";

import { ThemeContext } from "../../context/themeContext";
import { AuthorsContext } from "../../context/AuthorsContenx";

const NewBlogPost = (props) => {
  const { theme } = useContext(ThemeContext);
  const { authors } = useContext(AuthorsContext);
  const navigate = useNavigate();

  const handleAuthorChange = (e) => {
    const { value } = e.target;
    setNewBlogPostData((prevState) => ({
      ...prevState,
      author: value,
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
    author: "",
    content: "",
  });
  const handleNewBlogPost = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5050/posts/create", newBlogPostData);

      setNewBlogPostData({
        category: "",
        title: "",
        cover: "",
        readTime: {
          value: null,
          unit: null,
        },
        author: "",
        content: "",
      });
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (error) {
      console.log("Error adding a new blogPost: ", error);
    }
  };

  return (
    <Container className="new-blog-container">
      <Form className={`mt-5 ${theme === "light" ? "" : "text-light"}`} onSubmit={handleNewBlogPost}>
        <Form.Group controlId="blog-author" className="mt-3">
          <Form.Label>Author</Form.Label>
          <Form.Control size="lg" as="select" required value={newBlogPostData.author._id} onChange={handleAuthorChange}>
            <option value="">Choose One</option>
            {authors.map((author) => (
              <option key={author._id} value={author._id}>
                {author.firstName} {author.lastName}
              </option>
            ))}
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="blog-form" className="mt-3">
          <Form.Label>Post Title</Form.Label>
          <Form.Control size="lg" placeholder="Title" value={newBlogPostData.title} onChange={handleTitleChange} required />
        </Form.Group>

        <Form.Group controlId="blog-category" className="mt-3">
          <Form.Label>Category</Form.Label>
          <Form.Control size="lg" as="select" value={newBlogPostData.category} onChange={handleCategoryChange} required>
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
            className={`new-blog-content ${theme === "light" ? "" : "bg-light text-dark"}`}
            required
          />
        </Form.Group>

        <Form.Group controlId="blog-post-cover" className="mt-3">
          <Form.Label>BlogPost Cover</Form.Label>
          <Form.Control size="lg" placeholder="BlogPost Cover URL" value={newBlogPostData.cover} onChange={handlePostCoverChange} required />
        </Form.Group>

        <Form.Group className="d-flex mt-3 justify-content-end">
          <Button type="reset" size="lg" variant={theme === "light" ? "outline-dark" : "outline-light"}>
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
