import React, { useEffect } from "react";

import { useState } from "react";
import { MainHomePage } from "../BooksStore/MainHomePage";
import { Alert, Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ClearErrors, UserRegister } from "../../redux/action";
import { useNavigate } from "react-router-dom";
export default function SignUp() {
  const [registration, setRegistration] = useState({
    name: "",
    lastname: "",
    email: "",
    password: "",
  });
  const [isAuth, setAuth] = useState(false);
  const [userError, setUserError] = useState(false);

  const history = useNavigate();

  const handleInput = (fieldName, value) => {
    setRegistration({
      ...registration,
      [fieldName]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!registration.email || !registration.password) {
        return setUserError(true);
      }
      let response = await fetch("http://localhost:3002/users/register", {
        method: "POST",
        body: JSON.stringify(registration),
        headers: {
          "Content-type": "application/json",
        },
      });
      if (response.ok) {
        setAuth(true);
        setRegistration({
          name: "",
          lastname: "",
          email: "",
          password: "",
        });
      } else {
        alert("ERROR");
      }
    } catch (error) {
      alert("ERROR", error.message);
    }
  };

  return (
    <>
      {isAuth ? (
        history("/home")
      ) : (
        // <Alert> ok</Alert>
        <Container className="d-flex flex-column justify-content-center align-items-center w-50">
          <Form onSubmit={handleSubmit} className="w-75 border p-4">
            <h2 className="text-white">Register</h2>
            <Form.Group className="mb-3" controlId="formBasicFirstName">
              <Form.Label className="text-white">First Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Insert your first name..."
                required
                value={registration.name}
                onChange={(e) => handleInput("name", e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicLastName">
              <Form.Label className="text-white">Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Insert your last name"
                required
                value={registration.lastname}
                onChange={(e) => handleInput("lastname", e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="text-white">Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Insert your email"
                required
                value={registration.email}
                onChange={(e) => handleInput("email", e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label className="text-white">Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password min 6 char..."
                required
                value={registration.password}
                onChange={(e) => handleInput("password", e.target.value)}
              />
            </Form.Group>

            <Button
              variant="primary"
              className="d-flex mx-auto my-3"
              type="submit"
            >
              Create an Account
            </Button>
            <Link to="/" className="mt-3">
              Login
            </Link>
          </Form>
        </Container>
      )}
    </>
  );
}
