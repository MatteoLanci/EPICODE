import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import { getBooks, filterBooks } from "../states/booksState";

const SearchBar = () => {
	const dispatch = useDispatch();

	const [searchTerm, setSearchTerm] = useState("");

	const handleFilterBooks = (e) => {
		e.preventDefault();

		dispatch(filterBooks(searchTerm));
	};

	const handleResetSearchBar = (value) => {
		if (value === "") {
			dispatch(getBooks());
		}

		setSearchTerm(value);
	};

	return (
		<Container>
			<Row>
				<Col>
					<Form onSubmit={handleFilterBooks}>
						<Form.Control
							onChange={(e) => handleResetSearchBar(e.target.value)}
							type="text"
							placeholder="search book"
						/>
						<Button type="submit">Cerca</Button>
					</Form>
				</Col>
			</Row>
		</Container>
	);
};

export default SearchBar;
