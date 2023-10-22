import React, { Component } from 'react'
import { navLinks } from '../data/navbarLinks';
import { nanoid } from 'nanoid'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

class NavigationBar extends Component {
    constructor(props){
        super(props)
    }

    render() {
        return(
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">EpiBooks</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                       {navLinks.map((link) => {
                        return(
                            <Nav.Link key={nanoid()} href={link.href}>{link.title}</Nav.Link>
                        )
                       })}
                       </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        )
    }
}

export default NavigationBar