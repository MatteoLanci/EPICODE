/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from "react";

//!----------> UTILITIES IMPORT
import axios from "axios";
import { nanoid } from "nanoid";

//!----------> BOOTSTRAP IMPORT
import { Button, Container, Image, Alert } from "react-bootstrap";

//!----------> ROUTER-DOM IMPORT
import { useNavigate, useParams } from "react-router-dom";

//!----------> COMPONENT IMPORT
import BlogLike from "../../components/likes/BlogLike";
import NewCommentModal from "../../components/blogPostNewComment/NewCommentModal";

//!----------> CSS IMPORT
import "./blogPage.css";

//!----------> CONTEXT IMPORT
import { SelectedBlogPostContext } from "../../context/SelectedBlogPostContext";
import { ThemeContext } from "../../context/themeContext";
import { NewCommentContext } from "../../context/NewCommentContext";

//!----------> ICONS IMPORT
import { FiThumbsUp } from "react-icons/fi";
import { FiThumbsDown } from "react-icons/fi";

const BlogPage = ({ postId }) => {
  const { theme } = useContext(ThemeContext);
  const { showNewCommentModal, setShowNewCommentModal } = useContext(NewCommentContext);
  const { selectedBlogPost } = useContext(SelectedBlogPostContext);

  const blogPosts = [selectedBlogPost];

  const navigate = useNavigate();
  const params = useParams();
  const { id } = params;

  const [comments, setComments] = useState([]);
  const [blog, setBlog] = useState({});
  const [loading, setLoading] = useState(true);

  // console.log(blog);

  const specificBlog = blogPosts.find((post) => post._id === id);

  const handleShowNewCommentModal = () => {
    setShowNewCommentModal(true);
  };

  const fetchComments = async () => {
    try {
      const response = await axios.get(`http://localhost:5050/posts/${id}/comments`);
      const data = response.data.comments;
      setComments(data);
      setBlog(specificBlog);
      setLoading(false);
    } catch (error) {
      console.log(`Error fetching comments from post with id: ${id}`);
    }
  };

  const fetchBlog = async () => {
    try {
      const response = await axios.get(`http://localhost:5050/posts/${id}`);
      setBlog(response.data.postById);
      setLoading(false);
    } catch (error) {
      console.log(`Error fetching blogPost with id: ${id}`);
    }
  };

  useEffect(() => {
    if (specificBlog) {
      fetchComments();
      fetchBlog();
    } else {
      navigate("*");
    }
  }, [showNewCommentModal]);

  //! ---------------> JSX RENDER
  if (loading) {
    return (
      <div style={{ minHeight: "90vh", paddingTop: "10rem", paddingInlineStart: "4rem" }}>
        loading
      </div>
    );
  } else {
    return (
      <div className="blog-details-root">
        <Container>
          <Image className="blog-details-cover" src={blog.cover} fluid />
          <h1 className={`blog-details-title  ${theme === "light" ? "" : "text-light"}`}>
            {blog.title}
          </h1>

          <div
            dangerouslySetInnerHTML={{ __html: blog.content }}
            className={` blogContent py-2 ${theme === "light" ? "" : "text-light"}`}
          />

          <div className={`blog-details-container ${theme === "light" ? "" : "text-light"}`}>
            <div className="blog-details-info mt-5">
              <div>{blog.createdAt}</div>
              {/* <div>{`lettura da ${blog.readTime.value} ${blog.readTime.unit}`}</div> */}

              <div style={{ marginTop: 20 }}>
                <BlogLike defaultLikes={["123"]} onChange={console.log} />
              </div>

              <div className="showComments mt-4 w-100 d-flex flex-column ">
                <Button
                  variant={theme === "light" ? "outline-primary" : "outline-warning"}
                  style={{ width: "200px" }}
                  className="align-self-end"
                  onClick={handleShowNewCommentModal}
                >
                  Add A New Review
                </Button>
                <NewCommentModal blogPost={specificBlog} fetchComments={fetchComments} />
                <hr />
                <h3 className="mb-2">Top Reviews:</h3>
                {comments.length === 0 ? (
                  <Alert variant="danger" className="text-center mt-3">
                    No Reviews Yet! Hurry Up and Add a New One!
                  </Alert>
                ) : (
                  comments.map((comment) => (
                    <div className="border mb-3 p-3" style={{ maxWidth: "800px" }} key={nanoid()}>
                      <h3>{comment.title}</h3>
                      <p>{comment.content}</p>
                      <p>Rate: {comment.rating}</p>
                      <p>comment by: {comment.userName.email}</p>
                      <div className="d-flex align-items-center justify-content-start gap-2">
                        <em style={{ fontSize: ".8rem" }}>Was this review usefull?</em>
                        <FiThumbsUp style={{ cursor: "pointer" }} />
                        <FiThumbsDown style={{ cursor: "pointer" }} />
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </Container>
      </div>
    );
  }
};

export default BlogPage;
