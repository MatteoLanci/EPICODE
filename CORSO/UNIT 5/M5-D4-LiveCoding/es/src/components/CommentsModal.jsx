import React, { useEffect, useState } from "react";
import { Button, ListGroup, Modal } from "react-bootstrap";
import "../styles/commentsModal.css";

const CommentsModal = ({ close, asin }) => {
	const [bookComments, setBookComments] = useState(null);

	const getCommentsFromBook = async () => {
		try {
			const data = await fetch(
				`https://striveschool-api.herokuapp.com/api/comments/${asin}`,
				{
					headers: {
						Authorization:
							"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDkxZjA2YzUwYTMzNjAwMTQ5NWJlY2YiLCJpYXQiOjE2ODcyODU4NjksImV4cCI6MTY4ODQ5NTQ2OX0.tQxXmhliai0kCiHPaCNudJi0oOEF-fL-TGw2xoU6nu0",
					},
				}
			);
			const response = await data.json();
			setBookComments(response);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getCommentsFromBook();
	}, [asin]);

	return (
		<div className="modal show commentsModal" style={{ display: "block" }}>
			<Modal.Dialog centered size="lg" backdrop="static">
				<Modal.Header>
					<Modal.Title>Titolo</Modal.Title>
				</Modal.Header>

				<Modal.Body>
					{bookComments &&
						bookComments.map((comment) => {
							return (
								<ListGroup
									className="d-flex justify-content-between align-items-start"
									as="ol"
									numbered
								>
									<div className="ms-2 me-auto">
										<div>{comment.comment}</div>
										<div>Voto: {comment.rate}</div>
									</div>
								</ListGroup>
							);
						})}
				</Modal.Body>

				<Modal.Footer>
					<Button onClick={close}>Chiudi</Button>
				</Modal.Footer>
			</Modal.Dialog>
		</div>
	);
};

export default CommentsModal;
