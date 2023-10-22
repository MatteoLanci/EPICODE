import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { SharedState } from "../context/booksContext";

const NavigationBar = () => {
	// useContext è l'hook che ci consente di andare a "leggere" il nostro contesto dichiarato altrove
	// e di conseguenza leggere anche lo stato passato al provider come "value"
	const mySharedState = useContext(SharedState);
	console.log(mySharedState);

	return (
		<Navbar expand="lg" className="bg-body-tertiary">
			<Container>
				<Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto">
						<Nav.Link href="#">Home</Nav.Link>
						<Nav.Link href="#">About</Nav.Link>
						<Nav.Link href="#">Browse</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default NavigationBar;
