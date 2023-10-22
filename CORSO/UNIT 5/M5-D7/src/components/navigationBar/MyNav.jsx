import React, { useContext } from "react";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";

import { myNavLinks } from "./data/myNavLinks";
import logo from "../../assets/logo.png";
import "../../assets/logo.css";

import { QueryContext } from "../../context/QueryContext";
import { ThemeContext } from "../../context/ThemeContext";
import { SelectCategoryContext } from "../../context/SelectCategoryContext";

import { Button, NavDropdown, NavLink } from "react-bootstrap";
import { nanoid } from "nanoid";
import { Link, useLocation, useNavigate } from "react-router-dom";

const MyNav = () => {
  const { setQuery } = useContext(QueryContext);
  const toggleTheme = useContext(ThemeContext);
  const location = useLocation();

  const { selectedCategory, setSelectedCategory } = useContext(
    SelectCategoryContext
  );

  const isBookDetailsPage = location.pathname.includes("/book/");

  const handleSearchChange = (e) => {
    setQuery(e.target.value);
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  return (
    <>
      <Navbar
        fluid="true"
        bg="dark"
        variant="dark"
        expand="lg"
        className="fixed-top"
      >
        <Container fluid className="mx-0">
          <Navbar.Brand as={Link} to="/">
            EpiBooks <img className="logo" src={logo} alt="EpiBooks_logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto">
              {myNavLinks.map((link) =>
                link.dropdown ? (
                  <NavDropdown
                    key={nanoid()}
                    title={link.title}
                    menuVariant="dark"
                  >
                    {link.dropdownItems.map((dropdownEl) => {
                      return (
                        <NavDropdown.Item
                          onClick={() =>
                            handleCategorySelect(dropdownEl.category)
                          }
                          key={dropdownEl.id}
                          className={
                            dropdownEl.category === selectedCategory
                              ? `${dropdownEl.className} active`
                              : dropdownEl.className
                          }
                        >
                          {dropdownEl.title}
                        </NavDropdown.Item>
                      );
                    })}
                  </NavDropdown>
                ) : (
                  <Nav.Link
                    key={link.id}
                    as={Link}
                    to={link.href}
                    className={link.className}
                  >
                    {link.title}
                  </Nav.Link>
                )
              )}
            </Nav>
            {!isBookDetailsPage && (
              <Form className="d-flex navInput">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                  onChange={handleSearchChange}
                />
                <Button
                  variant="outline-warning"
                  // onClick={toggleTheme} //todo ripristinare onClick per il cambio tema!
                  style={{ width: "100px" }}
                  className="m-0 p-0 d-flex justify-content-center align-items-center gap-2"
                >
                  <i className="bi bi-sun"></i>
                  <i className="bi bi-moon"></i>
                </Button>
              </Form>
            )}
            {isBookDetailsPage && (
              <Form className="d-flex navInput">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button
                  variant="outline-warning"
                  // onClick={toggleTheme} //todo ripristinare onClick per il cambio tema!
                  style={{ width: "100px" }}
                  className="m-0 p-0 d-flex justify-content-center align-items-center gap-2"
                >
                  <i className="bi bi-sun"></i>
                  <i className="bi bi-moon"></i>
                </Button>
              </Form>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default MyNav;
