import React from "react";
import "./newAuthor.css";
import { FaTrashAlt } from "react-icons/fa";
import { FaPencilAlt } from "react-icons/fa";

import { Container, Row, Col, Card } from "react-bootstrap";

import axios from "axios";

const NewAuthors = ({ authors }) => {
  const handleDeleteAuthor = async (authorId) => {
    try {
      await axios.delete(`http://localhost:5050/authors/${authorId}`);
      //   fetchAuthors();
    } catch (error) {
      console.log("Error deleting author from DB: ", error);
    }
  };

  return (
    <>
      <h2 className="mb-3">New Authors</h2>
      <Container>
        <Row className="mx-auto g-4">
          {authors.map((author) => (
            <Col xs={12} md={4} lg={3}>
              <Card className="authorCard">
                <Card.Img
                  style={{ height: "10rem", objectFit: "cover" }}
                  variant="top"
                  src={author.avatar}
                ></Card.Img>
                <Card.Body>
                  <Card.Title>
                    {author.firstName} {author.lastName}
                  </Card.Title>
                  <Card.Text>
                    <p>
                      <strong className="d-block">Email: </strong>
                      {author.email}
                    </p>
                    <p>Born on: {author.birthDate}</p>
                    <em style={{ fontSize: ".7rem" }}>
                      <strong>Id: </strong>
                      {author._id}
                    </em>
                  </Card.Text>
                  <FaTrashAlt
                    className="authorDeleteIcon"
                    onClick={() => handleDeleteAuthor(author._id)}
                  />
                  <FaPencilAlt className="authorPatchIcon" />
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default NewAuthors;
