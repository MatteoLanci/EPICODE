import React, { useContext } from "react";
import { Button, Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import logoDark from "../../assets/logo.png";
import logoLight from "../../assets/logo_white.png";
import "./styles.css";
import { TbBulbOff, TbBulb } from "react-icons/tb";

import { ThemeContext } from "../../context/themeContext";

const NavBar = (props) => {
  const { theme, handleTheme } = useContext(ThemeContext);

  return (
    <Navbar
      expand="lg"
      className="blog-navbar"
      fixed="top"
      bg={theme === "light" ? "light" : "dark"}
    >
      <Container className="justify-content-between">
        <Navbar.Brand as={Link} to="/">
          <img
            className="blog-navbar-brand"
            alt="logo"
            src={theme === "light" ? logoDark : logoLight}
          />
        </Navbar.Brand>
        <div className="d-flex justify-content-between align-items-center gap-3">
          <Button
            variant={theme === "light" ? "outline-primary" : "outline-warning"}
          >
            Log In
          </Button>
          {theme === "light" ? (
            <TbBulbOff
              style={{ fontSize: "2rem" }}
              onClick={() => handleTheme()}
            />
          ) : (
            <TbBulb
              style={{ fontSize: "2rem", color: "white" }}
              onClick={() => handleTheme()}
            />
          )}
        </div>
      </Container>
    </Navbar>
  );
};

export default NavBar;
