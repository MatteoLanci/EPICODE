import React from "react";

import "./newPost.css";

import { Container, Row, Col, Card } from "react-bootstrap";

import axios from "axios";

const NewPosts = ({ posts }) => {
  return (
    <>
      <h2 className="mb-3">New Posts</h2>
      <Container>
        <Row className="g-4">
          {posts.map((post) => (
            <Col xs={12} md={4}>
              <Card className="postCard">
                <Card.Img
                  style={{ height: "10rem", objectFit: "cover" }}
                  variant="top"
                  src={post.cover}
                ></Card.Img>
                <Card.Body style={{ height: "7rem" }}>
                  <Card.Title>{post.title}</Card.Title>
                </Card.Body>
                <Card.Footer className="d-flex justify-content-start align-items-center">
                  <Card.Img
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                    }}
                    src={post.author.avatar}
                  />
                  <div className="d-flex flex-column ms-2">
                    <span>di</span>
                    <strong>{post.author.name}</strong>
                  </div>
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default NewPosts;
