import React, { useContext } from "react";
import { Link } from "react-router-dom";

import "./BlogAuthor.css";

//!------------- REACT-ICONS IMPORT
import { FaTrashAlt } from "react-icons/fa";
import { FaPencilAlt } from "react-icons/fa";
import { FaList } from "react-icons/fa";

//!------------- REACT-BOOTSTRAP IMPORT
import { Container, Row, Col, Card, OverlayTrigger, Tooltip } from "react-bootstrap";

//!------------- LIBRARIES IMPORT
import axios from "axios";
import { nanoid } from "nanoid";

//!------------- CONTEXT IMPORT
import { SelectedAuthorContext } from "../../../context/SelectedAuthorContext";
import { CanvassContext } from "../../../context/CanvassContext";
import { ThemeContext } from "../../../context/themeContext";

const BlogAuthor = ({ authors, fetchAuthors }) => {
  const { theme } = useContext(ThemeContext);

  const { setSelectedAuthor } = useContext(SelectedAuthorContext);

  const { setShowCanvass } = useContext(CanvassContext);

  const handleDeleteAuthor = async (authorId) => {
    try {
      await axios.delete(`http://localhost:5050/authors/${authorId}`);

      alert("Author successfully deleted from DB! ---> CLICK 'OK' BUTTON TO CONTINUE <---");

      setTimeout(() => {
        fetchAuthors();
      }, 1000);
    } catch (error) {
      console.log("Error deleting author from DB: ", error);
    }
  };

  const handleEditAuthor = (authorDetails) => {
    const AuthorToEdit = authors.find((author) => author === authorDetails);

    if (AuthorToEdit) {
      setSelectedAuthor(AuthorToEdit);
      setShowCanvass(true);
    }
  };

  const formatDob = (dateString) => {
    const options = { day: "2-digit", month: "short", year: "numeric" };
    const date = new Date(dateString);
    return date.toDateString(undefined, options);
  };

  return (
    <>
      <h2 className={`my-5 ${theme === "light" ? "" : "text-light"}`}>Meet Our Authors</h2>
      {/* <Container>
        <Row className="mx-auto g-4">
          {authors.map((author) => (
            <Col xs={12} md={6} lg={3} key={nanoid()}>
              <Card
                className={
                  theme === "light" ? "authorCard" : "authorCardDarkTheme bg-secondary text-light"
                }
              >
                <Card.Img
                  style={{
                    height: "10rem",
                    objectFit: "cover",
                    background: "white",
                  }}
                  variant="top"
                  src={author.avatar}
                />

                <Card.Body>
                  <Card.Title>
                    {author.firstName} {author.lastName}
                  </Card.Title>
                  <Card.Text>
                    <strong className="d-block">Email: </strong>
                    {author.email}
                  </Card.Text>
                  <Card.Text className="my-3">Born on: {formatDob(author.birthDate)}</Card.Text>
                  <Card.Text style={{ fontSize: ".7rem" }}>
                    <strong>Id: </strong>
                    {author._id}
                  </Card.Text>
                </Card.Body>

                <Card.Footer className="d-flex justify-content-around align-items-center gap-2">
                  <FaTrashAlt
                    className="authorDeleteIcon"
                    onClick={() => handleDeleteAuthor(author._id)}
                  />
                  <FaPencilAlt
                    className="authorPatchIcon"
                    onClick={() => handleEditAuthor(author)}
                  />
                  <OverlayTrigger
                    placement="right"
                    overlay={
                      <Tooltip id={`tooltip-${author._id}`}>
                        See {author.firstName} {author.lastName} blogPosts
                      </Tooltip>
                    }
                  >
                    <span className="authorBlogListIcon">
                      <FaList />
                    </span>
                  </OverlayTrigger>
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      </Container> */}

      <Container className="authorContainer" style={{ minHeight: "50vh" }}>
        <Row className={theme === "light" ? "galleryWrapper" : "galleryWrapperDarkTheme"}>
          {authors.map((author) => (
            <figure className="galleryItem" key={nanoid()}>
              <img src={author.avatar} alt={author._id} className="itemImage" />
              <figcaption className="itemDescription">
                <h2 className="authorName">
                  {author.firstName} {author.lastName}
                </h2>
                <a href={`mailto:${author.email}`} className="authorEmail">
                  {author.email}
                </a>
                <span className="authorUniqueId">id: {author._id}</span>
                <div className="authorIcon removeAuthorIcon">
                  <FaTrashAlt onClick={() => handleDeleteAuthor(author._id)} />
                </div>
                <div className="authorIcon editAuthorIcon">
                  <FaPencilAlt onClick={() => handleEditAuthor(author)} />
                </div>
                <OverlayTrigger
                  placement="left"
                  overlay={
                    <Tooltip id={`tooltip-${author._id}`}>
                      Discover {author.firstName} {author.lastName} blogPosts
                    </Tooltip>
                  }
                >
                  <Link className="authorIcon blogAuthorIcon" to={`/authorPage/${author._id}`}>
                    <FaList />
                  </Link>
                </OverlayTrigger>
              </figcaption>
            </figure>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default BlogAuthor;
