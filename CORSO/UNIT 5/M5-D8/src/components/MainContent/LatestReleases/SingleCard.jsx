import React, { useContext } from "react";

import { SelectedContext } from "../../../context/SelectedContext";

import "./style/singleCard.css";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { ThemeContext } from "../../../context/ThemeContext";
import { OffCanvassContext } from "../../../context/OffCanvassContext";

//! IMPORT CUSTOM HOOK
import useWindowDimension from "../../../hooks/useWindowDimension";

function SingleCard({ img, title, category, price, btnSeeMore, asin }) {
  const { selected, handleSelect } = useContext(SelectedContext);
  const { setShow } = useContext(OffCanvassContext);

  const handleShowCanvass = () => setShow(true);

  const handleAll = () => {
    handleShow();
    handleShowCanvass();
  };

  const { theme } = useContext(ThemeContext);

  const isSelected = selected.asin === asin;

  const handleShow = () => {
    handleSelect(asin, title);
  };

  const tooltip = (
    <Tooltip id="tolltip">
      See book <strong>details</strong>
    </Tooltip>
  );

  const { width } = useWindowDimension();
  // console.log(width);

  return (
    <>
      {width <= 576 ? (
        <Card
          onClick={handleAll}
          className={`singleCard ${isSelected ? "cardSelected" : ""} ${
            asin === "0672223754" && "mysteriousBook"
          }`}
          key={asin}
          // onClick={handleShow}
        >
          <div className="imgContainer">
            <Card.Img variant="top" src={img} />
          </div>
          <Card.Body
            className={`${
              theme === "light"
                ? "bg-light text-dark"
                : "bg-secondary text-light"
            }`}
          >
            <Card.Title className="cardTitle fs-6">{title}</Card.Title>
            <Card.Text>
              in <em>{category}</em>
            </Card.Text>
            <Card.Text>€ {price}</Card.Text>
            <Link
              to={
                asin === "0672223754" ? "/HowDareYou" : `/book/${asin}`
              } /* {`/book/${asin}`} */
            >
              <OverlayTrigger placement="right" overlay={tooltip}>
                <Button
                  variant={`${
                    theme === "light" ? "outline-success" : "outline-light"
                  }`}
                >
                  {btnSeeMore}
                </Button>
              </OverlayTrigger>
            </Link>
          </Card.Body>
        </Card>
      ) : (
        <Card
          className={`singleCard ${isSelected ? "cardSelected" : ""} ${
            asin === "0672223754" && "mysteriousBook"
          }`}
          key={asin}
          onClick={handleShow}
        >
          <div className="imgContainer">
            <Card.Img variant="top" src={img} />
          </div>
          <Card.Body
            className={`${
              theme === "light"
                ? "bg-light text-dark"
                : "bg-secondary text-light"
            }`}
          >
            <Card.Title className="cardTitle fs-6">{title}</Card.Title>
            <Card.Text>
              in <em>{category}</em>
            </Card.Text>
            <Card.Text>€ {price}</Card.Text>
            <Link
              to={
                asin === "0672223754" ? "/HowDareYou" : `/book/${asin}`
              } /* {`/book/${asin}`} */
            >
              <OverlayTrigger placement="right" overlay={tooltip}>
                <Button
                  variant={`${
                    theme === "light" ? "outline-success" : "outline-light"
                  }`}
                >
                  {btnSeeMore}
                </Button>
              </OverlayTrigger>
            </Link>
          </Card.Body>
        </Card>
      )}
    </>
  );
}

export default SingleCard;
