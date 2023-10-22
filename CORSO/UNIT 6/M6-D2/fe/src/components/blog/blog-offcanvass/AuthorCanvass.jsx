import React, { useState, useContext } from "react";

import { Offcanvas, Form, Button } from "react-bootstrap";

import { SelectedAuthorContext } from "../../../context/SelectedAuthorContext";
import { CanvassContext } from "../../../context/CanvassContext";

import axios from "axios";

const AuthorCanvass = ({ fetchAuthors }) => {
  const { selectedAuthor, setSelectedAuthor } = useContext(
    SelectedAuthorContext
  );
  // console.log(selectedAuthor);

  const { showCanvass, setShowCanvass } = useContext(CanvassContext);
  const handleCanvassClose = () => {
    setShowCanvass(false);
    setSelectedAuthor(null);
  };

  const [newAuthorData, setNewAuthorData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    birthDate: "",
    avatar: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewAuthorData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleAddNewAuthor = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5050/authors", newAuthorData);

      setNewAuthorData({
        firstName: "",
        lastName: "",
        email: "",
        birthDate: "",
        avatar: "",
      });
      handleCanvassClose();
      fetchAuthors();
    } catch (error) {
      console.log("Error occurs creating a new author: ", error);
    }
  };

  // const handleEditAuthor = async (e) => {
  //   e.preventDefault();
  //   try {
  //     await axios.patch(
  //       `http://localhost:5050/authors/${selectedAuthor._id}`,
  //       newAuthorData
  //     );

  //     setNewAuthorData({
  //       firstName: selectedAuthor.firstName,
  //       lastName: selectedAuthor.lastName,
  //       email: selectedAuthor.email,
  //       birthDate: selectedAuthor.birthDate,
  //       avatar: selectedAuthor.avatar,
  //     });
  //     handleCanvassClose();
  //   } catch (error) {
  //     console.log("Error occurs updating author details: ", error);
  //   }
  // };

  return (
    <>
      <Offcanvas show={showCanvass} onHide={handleCanvassClose}>
        <Offcanvas.Header closeButton />
        <Offcanvas.Body>
          {selectedAuthor ? (
            <h3 className="mb-5">Edit Author Details</h3>
          ) : (
            <h2 className="mb-5">Add a new Author</h2>
          )}
          <Form onSubmit={handleAddNewAuthor}>
            <Form.Group className="mb-3" controlId="formBasicFirstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter first name"
                required
                name="firstName"
                value={
                  selectedAuthor
                    ? newAuthorData.firstName || selectedAuthor.firstName
                    : newAuthorData.firstName
                }
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicLastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter last name"
                required
                name="lastName"
                value={
                  selectedAuthor
                    ? newAuthorData.lastName || selectedAuthor.lastName
                    : newAuthorData.lastName
                }
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                required
                name="email"
                value={
                  selectedAuthor
                    ? newAuthorData.email || selectedAuthor.email
                    : newAuthorData.email
                }
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicBirthDate">
              <Form.Label>Date of Birth</Form.Label>
              <Form.Control
                type="date"
                required
                name="birthDate"
                value={
                  selectedAuthor
                    ? newAuthorData.birthDate || selectedAuthor.birthDate
                    : newAuthorData.birthDate
                }
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicAvatar">
              <Form.Label>Choose an Avatar</Form.Label>
              <Form.Control
                type="text"
                placeholder="paste here URL of image"
                required
                name="avatar"
                // value={newAuthorData.avatar}  HOT IT WAS BEFORE CHANGES
                value={
                  selectedAuthor
                    ? newAuthorData.avatar || selectedAuthor.avatar
                    : newAuthorData.avatar
                }
                onChange={handleInputChange}
              />
            </Form.Group>

            <Button variant="outline-success" type="submit" className="mt-5">
              Submit
            </Button>
          </Form>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default AuthorCanvass;
