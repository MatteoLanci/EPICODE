/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from "react";

//!----------> CSS IMPORT
import "./BlogPost.css";

//!----------> EXTERNAL COMPONENTS IMPORT
import {
  Container,
  Row,
  Col,
  Card,
  Form,
  Button,
  Alert,
} from "react-bootstrap";
import { Link } from "react-router-dom";

//!----------> LIBRARIES IMPORT
import { nanoid } from "nanoid";

//!----------> ICONS IMPORT
import { FaSadTear } from "react-icons/fa";

//!----------> CONTEXT IMPORT
import { ThemeContext } from "../../../context/themeContext";

//?-----------------------------------------------------------> COMPONENT'S FUNCTION

const BlogPost = ({ posts }) => {
  const { theme } = useContext(ThemeContext);

  const [searchValue, setSearchValue] = useState("");
  const [filteredPosts, setFilteredPosts] = useState(posts);

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setSearchValue(inputValue);
    handleFilterPosts(inputValue);
  };

  const handleFilterPosts = () => {
    const filtered = posts.filter((post) =>
      post.title.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredPosts(filtered);
  };

  useEffect(() => {
    handleFilterPosts();
  }, [posts]);

  return (
    <>
      <h2 className={`mb-3 ${theme === "light" ? "" : "text-light"}`}>
        BlogPosts
      </h2>

      <Form className="mt-5 mb-2 d-flex justify-content-center align-items-center gap-3">
        <Form.Control
          type="text"
          placeholder="Search article..."
          value={searchValue}
          onChange={handleInputChange}
        />
      </Form>

      <div className="d-flex justify-content-center align-items-center mt-5">
        <Link to={"/newPost"}>
          <Button
            size="md"
            variant={theme === "light" ? "outline-dark" : "outline-light"}
            className="mb-5"
          >
            Add a New Post
          </Button>
        </Link>
      </div>

      {filteredPosts.length === 0 ? (
        <Alert
          variant="danger"
          className="d-flex justify-content-center align-items-center gap-2"
        >
          Oooops! Seems like I didn't find any blogPost with keyword "
          {searchValue}" in it! <FaSadTear />
        </Alert>
      ) : (
        <>
          <Container>
            <Row className="g-4">
              {filteredPosts.map((post) => (
                <Col xs={12} md={6} lg={4} key={nanoid()}>
                  <Card
                    className={
                      theme === "light"
                        ? "postCard"
                        : "postCardDarkTheme bg-secondary text-light"
                    }
                  >
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
      )}
    </>
  );
};

export default BlogPost;
