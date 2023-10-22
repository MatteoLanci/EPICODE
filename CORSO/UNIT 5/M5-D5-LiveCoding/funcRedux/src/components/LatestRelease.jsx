import React, { useEffect, useState } from "react";
import SingleBook from "./SingleBook";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SearchBar from "./SearchBar";
import { useSelector } from "react-redux";
import { allBooks } from "../states/booksState";

const LatestRelease = () => {
	const books = useSelector(allBooks);

	return (
		<>
			<SearchBar books={books} />
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
