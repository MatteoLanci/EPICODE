import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";

const SearchBar = ({ books, setBooks, getBooks }) => {
	const [searchTerm, setSearchTerm] = useState("");

	const filterBooks = (e) => {
		e.preventDefault();

		const filterBooks = books.filter((book) =>
			book.title.toLowerCase().includes(searchTerm.toLowerCase())
		);

		setBooks(filterBooks);
	};

	const handleResetSearchBar = (value) => {
		if (value === "") {
			getBooks();
		}

		setSearchTerm(value);
	};

	return (
		<Container>
			<Row>
				<Col>
					<Form onSubmit={filterBooks}>
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
