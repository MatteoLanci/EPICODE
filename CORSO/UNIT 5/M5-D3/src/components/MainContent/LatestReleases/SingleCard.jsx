import React, { useState } from "react";

import "./style/singleCard.css";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function SingleCard({ img, title, category, price, btnSeeMore }) {
  const [selected, setSelected] = useState(false);

  const toggleSelected = () => setSelected(!selected);

  return (
    <Card
      className={`singleCard ${
        selected ? "border border-danger shadow bg-warning bg-opacity-25" : null
      }`}
      onClick={toggleSelected}
    >
      <div className="imgContainer">
        <Card.Img variant="top" src={img} />
      </div>
      <Card.Body>
        <Card.Title className="cardTitle fs-6">{title}</Card.Title>
        <Card.Text>
          in <em>{category}</em>
        </Card.Text>
        <Card.Text>€ {price}</Card.Text>
        <Button variant="outline-success">{btnSeeMore}</Button>
      </Card.Body>
    </Card>
  );
}

export default SingleCard;
