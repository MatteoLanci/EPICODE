import React, { useContext, useEffect, useState } from "react";
import { Col, Row, Button } from "react-bootstrap";
import axios from "axios";

import BlogPost from "../blog-posts/BlogPost";
import BlogAuthor from "../blog-author/BlogAuthor";
import AuthorCanvass from "../blog-offcanvass/AuthorCanvass";

import { CanvassContext } from "../../../context/CanvassContext";

const BlogList = (props) => {
  //!------------------ STATES MNGMT --------------------------------------------->
  const { setShowCanvass } = useContext(CanvassContext);

  const handleCanvassShow = () => setShowCanvass(true);

  const [authors, setAuthors] = useState([]);
  const [posts, setPosts] = useState([]);

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

  //!------------------ USE EFFECT ---------------------------------------------->
  useEffect(() => {
    fetchAuthors();
    fetchPosts();
  }, [setAuthors, setPosts]);

  //!------------------ RENDER SECTION ------------------------------------------>
  return (
    <>
      <Row className="my-5 mx-auto">
        <Col>
          <BlogPost posts={posts} />
        </Col>
      </Row>

      <Row className="my-5 mx-auto">
        <Col>
          <BlogAuthor authors={authors} fetchAuthors={fetchAuthors} />
        </Col>
      </Row>

      <div className="d-flex justify-content-center align-items-center">
        <Button variant="outline-secondary" onClick={handleCanvassShow}>
          Add a New Author
        </Button>
      </div>

      {/* ----------OFFCANVASS TO ADD A NEW AUTHOR DIRECTLY IN BACKEND---------- */}
      <AuthorCanvass fetchAuthors={fetchAuthors} />
    </>
  );
};
export default BlogList;
