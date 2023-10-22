import React, { useEffect, useState } from "react";
import SingleBook from "./SingleBook";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SearchBar from "./SearchBar";

const LatestRelease = () => {
	const [books, setBooks] = useState([]);

	const getBooksFromApi = async () => {
		try {
			const data = await fetch("https://epibooks.onrender.com/");
			const response = await data.json();
			setBooks(response);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getBooksFromApi();
	}, []);

	return (
		<>
			<SearchBar books={books} setBooks={setBooks} getBooks={getBooksFromApi} />
			<Container>
				<Row>
					<Col>
						{books &&
							books.map((book) => {
								return (
									<SingleBook
										key={book.asin}
										img={book.img}
										asin={book.asin}
										category={book.category}
										price={book.price}
										title={book.title}
									/>
								);
							})}
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default LatestRelease;
