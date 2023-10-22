//!GLOBAL IMPORTS
import React, { useContext, useEffect, useState } from "react";
import { QueryContext } from "../../../context/QueryContext";
import { ThemeContext } from "../../../context/ThemeContext";
import { nanoid } from "nanoid";

//!IMPORT FROM BOOTSTRAP
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Alert } from "react-bootstrap";

//!INTERNAL IMPORTS
import SingleCard from "./SingleCard";
// import books from "./data/fantasy.json";
import CommentArea from "./CommentArea";
import "./style/latestReleases.css";
import { SelectCategoryContext } from "../../../context/SelectCategoryContext";
import { Link } from "react-router-dom";
//!------------------------------------------------------

const LatestReleases = () => {
  const { query, setQuery } = useContext(QueryContext);
  const { theme, setTheme } = useContext(ThemeContext);
  const { selectedCategory } = useContext(SelectCategoryContext);

  const [filteredBooks, setFilteredBooks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const category = selectedCategory || "fantasy";
      try {
        const response = await import(`./data/${category}.json`);
        const categoryBooks = response.default;

        setFilteredBooks(
          categoryBooks.filter((book) =>
            book.title.toLowerCase().includes(query.toLowerCase())
          )
        );
      } catch (error) {
        console.log("Error fetching data: ", error);
      }
    };

    fetchData();
    console.log(selectedCategory);
  }, [query, setFilteredBooks, setQuery, selectedCategory]);

  const renderBooks = filteredBooks.slice(0, 100).map((book) => (
    <Col
      xs={12}
      sm={6}
      md={4}
      className="d-flex justify-content-center align-items-center"
      key={nanoid()}
    >
      <SingleCard
        key={nanoid()}
        img={book.img}
        title={book.title}
        price={book.price.toFixed(2)}
        btnSeeMore={<i className="bi bi-three-dots"></i>}
        category={book.category}
        asin={book.asin}
      />
    </Col>
  ));

  const renderErrorMsg = () => {
    if (filteredBooks.length === 0 && query !== "") {
      return (
        <Alert variant="danger" className="mt-5 mx-0" key={nanoid()}>
          Ooops, seems like I couldn't find anything from your query, please try
          again!
        </Alert>
      );
    }
    return null;
  };

  return (
    <>
      <Container
        className={`mainContainer ${
          theme === "light" ? "bg-light" : "bg-dark text-light"
        }`}
        key={nanoid()}
      >
        <Row key={nanoid()}>
          <Col xs={12} sm={8} className="m-0 booksContainer" key={nanoid()}>
            <div className="mainContainer-scrollable" key={nanoid()}>
              <Row className="g-4" key={nanoid()}>
                {renderBooks}
                {renderErrorMsg()}
              </Row>
            </div>
          </Col>
          <Col xs={12} sm={4} className="m-0 commentsContainer" key={nanoid()}>
            <div className="commentsContainer-scrollable" key={nanoid()}>
              <CommentArea />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default LatestReleases;
