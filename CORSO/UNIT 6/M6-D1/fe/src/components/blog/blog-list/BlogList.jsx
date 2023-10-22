import React, { useContext, useEffect, useState } from "react";
import { Col, Row, Button, Offcanvas, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

import posts from "../../../data/posts.json";
import BlogItem from "../blog-item/BlogItem";
import NewAuthors from "../blog-newAuthors/NewAuthors";
import NewPosts from "../blog-NewPosts/NewPosts";

import { CanvassContext } from "../../../context/CanvassContext";

const BlogList = (props) => {
  //!------------------ STATES MNGMT --------------------------------------------->
  const { showCanvass, setShowCanvass } = useContext(CanvassContext);
  const handleCanvassClose = () => setShowCanvass(false);
  const handleCanvassShow = () => setShowCanvass(true);

  const [authors, setAuthors] = useState([]);
  const [posts, setPosts] = useState([]);

  const [newAuthorData, setNewAuthorData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    birthDate: "",
    avatar: "",
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewAuthorData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5050/authors", newAuthorData);
      // fetchAuthors();

      setNewAuthorData({
        firstName: "",
        lastName: "",
        email: "",
        birthDate: "",
        avatar: "",
      });
      handleCanvassClose();
    } catch (error) {
      console.log("Error occurs creating a new author: ", error);
    }
  };

  //!------------------ USE EFFECT ---------------------------------------------->
  useEffect(() => {
    const fetchAuthors = async () => {
      try {
        const response = await axios.get("http://localhost:5050/authors");
        setAuthors(response.data.authors);
      } catch (error) {
        console.log("Error fetching authors: ", error);
      }
    };

    const fetchPosts = async () => {
      try {
        const response = await axios.get("http://localhost:5050/posts");
        setPosts(response.data.posts);
      } catch (error) {
        console.log("Error fetching posts: ", error);
      }
    };

    fetchAuthors();
    fetchPosts();
  }, [setAuthors, setPosts]);

  //!------------------ RENDER SECTION ------------------------------------------>
  return (
    <>
      {/* <Row>
        {posts.map((post, i) => (
          <Col
            key={`item-${i}`}
            md={4}
            style={{
              marginBottom: 50,
            }}
          >
            <BlogItem key={post.title} {...post} />
          </Col>
        ))}
      </Row> */}
      {/* ------NEW ROW SHOWING DATA FROM BACKEND /posts------ */}
      <Row className="my-5 mx-auto">
        <Col>
          <NewPosts posts={posts} />
        </Col>
      </Row>
      {/* ------BUTTON TO TRIGGER OFFCANVASS FOR AUTHORS------ */}
      <div className="d-flex justify-content-center align-items-center">
        <Link to={"/newPost"}>
          <Button size="lg" variant="outline-dark">
            Add a New Post
          </Button>
        </Link>
      </div>
      {/* ------NEW ROW SHOWING DATA FROM BACKEND /authors------ */}
      <Row className="my-5 mx-auto">
        <Col>
          <NewAuthors authors={authors} />
        </Col>
      </Row>
      {/* ------BUTTON TO TRIGGER OFFCANVASS FOR AUTHORS------ */}
      <div className="d-flex justify-content-center align-items-center">
        <Button variant="outline-secondary" onClick={handleCanvassShow}>
          Add a New Author
        </Button>
      </div>

      {/* -------------------OFFCANVASS TO ADD A NEW AUTHOR DIRECTLY IN BACKEND------------------- */}
      <Offcanvas show={showCanvass} onHide={handleCanvassClose}>
        <Offcanvas.Header closeButton />
        <Offcanvas.Body>
          <h2 className="mb-5">Add a new Author</h2>
          <Form onSubmit={handleFormSubmit}>
            <Form.Group className="mb-3" controlId="formBasicFirstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter first name"
                required
                name="firstName"
                value={newAuthorData.firstName}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicLastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter last name"
                required
                name="lastName"
                value={newAuthorData.lastName}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                required
                name="email"
                value={newAuthorData.email}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicBirthDate">
              <Form.Label>Date of Birth</Form.Label>
              <Form.Control
                type="date"
                required
                name="birthDate"
                value={newAuthorData.birthDate}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicAvatar">
              <Form.Label>Choose an Avatar</Form.Label>
              <Form.Control
                type="text"
                placeholder="paste here URL of image"
                required
                name="avatar"
                value={newAuthorData.avatar}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Button variant="outline-success" type="submit" className="mt-5">
              Submit
            </Button>
          </Form>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};
console.log(posts);
export default BlogList;
