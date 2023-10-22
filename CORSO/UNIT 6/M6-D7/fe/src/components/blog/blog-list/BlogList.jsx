/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from "react";
import { Col, Row, Button } from "react-bootstrap";
import axios from "axios";

import BlogPost from "../blog-posts/BlogPost";
import BlogAuthor from "../blog-author/BlogAuthor";

import { AuthorsContext } from "../../../context/AuthorsContenx";
import { PostsContext } from "../../../context/PostsContext";

//!----------> FUNCTIONS IMPORT
import { scrollToTop } from "../../../functions/scrollToTop";

const BlogList = () => {
  //!------------------ STATES MNGMT --------------------------------------------->
  const { authors, setAuthors } = useContext(AuthorsContext);
  const { setBlogPosts } = useContext(PostsContext);

  // const [posts, setPosts] = useState([]);
  const token = JSON.parse(localStorage.getItem("userLoggedIn"));
  // console.log(token);

  const fetchAuthors = async () => {
    try {
      const response = await axios.get("http://localhost:5050/authors", {
        headers: { Authorization: token },
      });
      setAuthors(response.data.authors);
    } catch (error) {
      console.log("Error fetching authors: ", error);
    }
  };

  const fetchPosts = async () => {
    try {
      const response = await axios.get("http://localhost:5050/posts", {
        headers: { Authorization: token },
      });
      setBlogPosts(response.data.posts);
    } catch (error) {
      console.log("Error fetching posts: ", error);
    }
  };

  // console.log(posts);

  //!------------------ USE EFFECT ---------------------------------------------->
  useEffect(() => {
    scrollToTop();
    fetchAuthors();
    fetchPosts();
  }, [setAuthors, setBlogPosts]);

  //!------------------ RENDER SECTION ------------------------------------------>
  return (
    <>
      <Row className="my-5 mx-auto">
        <Col>
          <BlogPost />
        </Col>
      </Row>

      <Row className="my-5 mx-auto">
        <Col>
          <BlogAuthor authors={authors} fetchAuthors={fetchAuthors} />
        </Col>
      </Row>
    </>
  );
};
export default BlogList;
