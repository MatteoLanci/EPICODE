import React, { useContext } from "react";

import { SelectedContext } from "../../../context/SelectedContext";

import "./style/singleCard.css";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

function SingleCard({ img, title, category, price, btnSeeMore, asin }) {
  const { selected, handleSelect } = useContext(SelectedContext);

  const isSelected = selected.asin === asin;

  const handleShow = () => {
    handleSelect(asin, title);
  };

  const tooltip = (
    <Tooltip id="tolltip">
      See book <strong>details</strong>
    </Tooltip>
  );

  return (
    <>
      <Card
        className={`singleCard ${
          isSelected ? "border border-2 border-warning" : ""
        }`}
        key={asin}
        onClick={handleShow}
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
          <Link to={`/book/${asin}`}>
            <OverlayTrigger placement="right" overlay={tooltip}>
              <Button variant="outline-success">{btnSeeMore}</Button>
            </OverlayTrigger>
          </Link>
        </Card.Body>
      </Card>
    </>
  );
}

export default SingleCard;
