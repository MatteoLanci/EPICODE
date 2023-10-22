import React, { useContext } from "react";

//!----------> UTILITIES IMPORT
import { nanoid } from "nanoid";

//!----------> BOOTSTRAP IMPORT
import { Button, Container, Image, Alert } from "react-bootstrap";

//!----------> ROUTER-DOM IMPORT
import { useParams, Link } from "react-router-dom";

//!----------> CONTEXT IMPORT
import { ThemeContext } from "../../context/themeContext";
import { AuthorsContext } from "../../context/AuthorsContenx";

//!----------> CSS IMPORT
import "./authorPage.css";

const AuthorPage = () => {
  const { theme } = useContext(ThemeContext);
  const { authors } = useContext(AuthorsContext);
  // console.log(authors);

  const params = useParams();
  const { id } = params;

  const selectedAuthor = authors.find((author) => author._id === id);
  // console.log(selectedAuthor);

  return (
    <>
      {!selectedAuthor ? (
        <Alert className="text-center" variant="danger">
          OOOOOPS... seems like this page doesn't exists anymore!
        </Alert>
      ) : (
        <Container
          className={theme === "light" ? "" : "text-light"}
          style={{ paddingTop: "20rem" }}
        >
          <h1>Hello World,</h1>
          <h2>
            {selectedAuthor.firstName} {selectedAuthor.lastName} here!
          </h2>
          <img
            src={selectedAuthor.avatar}
            alt=""
            style={{ borderRadius: "50%", width: "300px", background: "#ffffff" }}
            className="my-5"
          />

          <h5>{selectedAuthor.firstName}'s blogPosts: </h5>
          <ul>
            {selectedAuthor.blogPosts.map((blogPost) => {
              return (
                <li key={nanoid()}>
                  <Link className="linkToBlogPost" to={`/blogPage/${blogPost._id}`}>
                    {blogPost.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </Container>
      )}
    </>
  );
};

export default AuthorPage;
