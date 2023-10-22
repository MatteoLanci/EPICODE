import React, { useEffect, useState } from "react";
import { Button, ListGroup, Modal } from "react-bootstrap";
import "../styles/commentsModal.css";
import { useDispatch, useSelector } from "react-redux";
import {
	allComments,
	getComments,
	isCommentsLoading,
} from "../states/getCommentsState";
import { nanoid } from "nanoid";

const CommentsModal = ({ close, asin }) => {
	const dispatch = useDispatch();

	const bookComments = useSelector(allComments);
	const isLoading = useSelector(isCommentsLoading);

	useEffect(() => {
		dispatch(getComments(asin));
	}, [asin]);

	return (
		<div className="modal show commentsModal" style={{ display: "block" }}>
			<Modal.Dialog centered size="lg" backdrop="static">
				<Modal.Header>
					<Modal.Title>Titolo</Modal.Title>
				</Modal.Header>

				<Modal.Body>
					{isLoading && <h2>Caricamento commenti...</h2>}
					{!isLoading &&
						bookComments &&
						bookComments.map((comment) => {
							return (
								<ListGroup
									key={nanoid()}
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
