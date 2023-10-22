/* eslint-disable no-unused-vars */
import React, { useContext } from "react";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";

import { myNavLinks } from "./data/myNavLinks";
import logo from "../../assets/logo.png";
import "../../assets/logo.css";
import "./myNav.css";

import { QueryContext } from "../../context/QueryContext";
import { ThemeContext } from "../../context/ThemeContext";
import { SelectCategoryContext } from "../../context/SelectCategoryContext";

import { Button, NavDropdown, NavLink } from "react-bootstrap";
import { nanoid } from "nanoid";
import { Link, useLocation } from "react-router-dom";

const MyNav = () => {
  const { setQuery } = useContext(QueryContext);
  const { theme, toggleTheme } = useContext(ThemeContext);
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
        className={`fixed-top ${
          theme === "light" ? "navLightTheme" : "navDarkTheme"
        }`}
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
                      return !isBookDetailsPage ? (
                        <>
                          <NavDropdown.Item
                            onClick={() =>
                              handleCategorySelect(dropdownEl.category)
                            }
                            key={nanoid()}
                            className={
                              dropdownEl.category === selectedCategory
                                ? `${dropdownEl.className} active`
                                : dropdownEl.className
                            }
                          >
                            {dropdownEl.title}
                          </NavDropdown.Item>
                        </>
                      ) : (
                        <>
                          <NavDropdown.Item
                            key={nanoid()}
                            className={
                              dropdownEl.category === selectedCategory
                                ? `${dropdownEl.className} active`
                                : dropdownEl.className
                            }
                          >
                            {dropdownEl.title}
                          </NavDropdown.Item>
                        </>
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
                  variant="outline-light"
                  onClick={toggleTheme}
                  style={{ width: "100px" }}
                  className={`d-flex justify-content-center align-items-center  ${
                    theme === "light" ? "lightTheme" : "darkTheme"
                  }`}
                >
                  <i
                    className={`bi ${theme === "light" ? "bi-sun" : "bi-moon"}`}
                  ></i>
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
                  variant="outline-light"
                  onClick={toggleTheme}
                  style={{ width: "100px" }}
                  className="m-0 p-0 d-flex justify-content-center align-items-center gap-2"
                >
                  <i
                    className={`bi ${theme === "light" ? "bi-sun" : "bi-moon"}`}
                  ></i>
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
