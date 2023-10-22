import React, { useContext, useEffect, useState } from "react";

import axios from "axios";

//!----------> BOOTSTRAP IMPORT
import { Button, Container, Image } from "react-bootstrap";

//!----------> ROUTER-DOM IMPORT
import { useNavigate, useParams } from "react-router-dom";

//!----------> COMPONENT IMPORT
import BlogLike from "../../components/likes/BlogLike";

//!----------> CSS IMPORT
import "./blogPage.css";

//!----------> CONTEXT IMPORT
import { SelectedBlogPostContext } from "../../context/SelectedBlogPostContext";
import { ThemeContext } from "../../context/themeContext";

const BlogPage = () => {
  const { selectedBlogPost } = useContext(SelectedBlogPostContext);
  const blogPosts = [selectedBlogPost];

  const { theme } = useContext(ThemeContext);

  const [blog, setBlog] = useState({});
  const [loading, setLoading] = useState(true);
  const params = useParams();
  const navigate = useNavigate();

  const handleEditBlogPost = async () => {
    try {
      const response = await axios.patch(
        `http://localhost:5050/${blogPosts._id}`
      );
    } catch (error) {
      console.log("Error editing blogPost: ", error);
    }
  };

  useEffect(() => {
    const { id } = params;
    const blog = blogPosts.find((post) => post._id === id);

    if (blog) {
      setBlog(blog);
      setLoading(false);
    } else {
      navigate("*");
    }
  }, [navigate, params]);

  if (loading) {
    return <div>loading</div>;
  } else {
    return (
      <div className="blog-details-root">
        <Container>
          <Image className="blog-details-cover" src={blog.cover} fluid />

          <Button
            variant={theme === "light" ? "outline-dark" : "outline-light"}
          >
            Edit BlogPost
          </Button>

          <h1
            className={`blog-details-title ${
              theme === "light" ? "" : "text-light"
            }`}
          >
            {blog.title}
          </h1>

          <div
            className={`blog-details-container ${
              theme === "light" ? "" : "text-light"
            }`}
          >
            <div className="blog-details-info">
              <div>{blog.createdAt}</div>
              <div>{`lettura da ${blog.readTime.value} ${blog.readTime.unit}`}</div>
              <div
                style={{
                  marginTop: 20,
                }}
              >
                <BlogLike defaultLikes={["123"]} onChange={console.log} />
              </div>
            </div>
          </div>

          <div
            dangerouslySetInnerHTML={{
              __html: blog.content,
            }}
            className={`border py-5 ${theme === "light" ? "" : "text-light"}`}
          ></div>
        </Container>
      </div>
    );
  }
};

export default BlogPage;
