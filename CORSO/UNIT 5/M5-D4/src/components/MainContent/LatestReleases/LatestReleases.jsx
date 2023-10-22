import React, { useState } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Alert, Form } from "react-bootstrap";
import { InputGroup } from "react-bootstrap";

import SingleCard from "./SingleCard";
import books from "./data/fantasy.json";
import { nanoid } from "nanoid";

function LatestReleases() {
  const [search, setSearch] = useState("");
  const [error, setError] = useState(false);

  const handleSearch = (e) => {
    setSearch(e.target.value);
    setError(false);
  };

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(search.toLowerCase())
  );

  const renderBooks = filteredBooks.slice(0, 32).map((book) => (
    <Col
      xs
      sm={6}
      md={4}
      lg={3}
      className="d-flex justify-content-center align-items-center"
      key={nanoid()}
    >
      <SingleCard
        key={book.asin}
        img={book.img}
        title={book.title}
        price={book.price.toFixed(2)}
        btnSeeMore={<i className="bi bi-eye"></i>}
        category={book.category}
        asin={book.asin}
      />
    </Col>
  ));

  const renderErrorMsg = () => {
    if (filteredBooks.length === 0 && search !== "") {
      return (
        <Alert variant="danger" className="mt-3 mx-5">
          Ooops, seems like I couldn't find anything from your query, please try
          again!
        </Alert>
      );
    }
    return null;
  };

  return (
    <>
      <Container className="mb-5">
        <Form>
          <InputGroup>
            <Form.Control placeholder="Search..." onChange={handleSearch} />
          </InputGroup>
        </Form>
      </Container>

      <Container>
        <Row className="g-4">{renderBooks}</Row>
      </Container>

      {renderErrorMsg()}
    </>
  );
}

export default LatestReleases;
