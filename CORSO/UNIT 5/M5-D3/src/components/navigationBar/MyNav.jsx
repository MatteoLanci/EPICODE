import React, { Component } from "react";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { myNavLinks } from "./data/myNavLinks";
import logo from "../../assets/logo.png";
import "../../assets/logo.css";

class MyNav extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <Navbar bg="dark" variant="dark" expand="lg" className="fixed-top">
          <Container fluid className="mx-0">
            <Navbar.Brand href="#">
              EpiBooks <img className="logo" src={logo} alt="EpiBooks_logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                {myNavLinks.map((link) => {
                  return (
                    <Nav.Link
                      key={link.id}
                      href={link.href}
                      className={link.className}
                    >
                      {link.title}
                    </Nav.Link>
                  );
                })}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    );
  }
}

export default MyNav;
