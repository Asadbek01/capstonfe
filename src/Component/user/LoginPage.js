import React, { useEffect, useState } from "react";
import {
  Form,
  Button,
  Row,
  Col,
  Navbar,
  Container,
  Spinner,
  Alert,
} from "react-bootstrap";
import { MainHomePage } from "../BooksStore/MainHomePage.js";
import { useNavigate } from "react-router";
import { FcGoogle } from "react-icons/fc";

const UserLogin = () => {
  const [registration, setRegistration] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const [registered, setRegister] = useState(false);
  const [userError, setUserError] = useState(false);
  const [loginError, setLoginError] = useState(false);

  const handleInput = (fieldName, value) => {
    setRegistration({
      ...registration,
      [fieldName]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUserError(false);
    setLoginError(false);
    if (!registration.email || !registration.password) {
      return setUserError(true);
    }
    try {
      const response = await fetch("http://localhost:3002/users/login", {
        method: "POST",
        body: JSON.stringify(registration),
        headers: {
          "Content-type": "application/json",
        },
      });
      if (response.ok) {
        setRegister(true);
        const user = await response.json();
        localStorage.setItem("MyToken", user.accessToken);
        setRegistration({
          email: "",
          password: "",
          rememberMe: false,
        });
      } else {
        console.log("Error while fetched!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   localStorage.setItem("MyToken", loggedUser.accessToken);
  //   setRegistration({
  //     email: "",
  //     password: "",
  //     rememberMe: false,
  //   });

  //   dispatch(Login(registration));
  // };

  return (
    <>
      {/* {
  loading && (
    <div className='d-flex  m-auto'><Spinner style={{ margin: "auto", fontSize: "20px" }} animation="border" role="status" variant="primary" />
    <h2 className="mt-1 ml-3 ">Loading...</h2>
    </div>
  ) ( */}
      {userError ? (
        <Alert style={{ width: "20%", margin: "auto" }} variant={"danger"}>
          Please Fill In All Details!
        </Alert>
      ) : (
        ""
      )}
      {loginError ? (
        <Alert style={{ width: "20%", margin: "auto" }} variant={"danger"}>
          Invalid Login!
        </Alert>
      ) : (
        ""
      )}
      {registered ? (
        <MainHomePage />
      ) : (
        <Container>
          <Row className="d-flex justify-content-center mt-4">
            <Col md={4} xs={6} sm={3}>
              <div className="register-form">
                <Button
                  className="mb-3 rounded-pill ml-5"
                  style={{ width: "75%" }}
                  variant="outline-primary"
                >
                  <a
                    href="http://localhost:3002/users/googleLogin"
                    className="text-info"
                  >
                    <FcGoogle className="mr-2" style={{ color: "white" }} />
                    Google Login
                  </a>
                </Button>
                <Form onSubmit={handleSubmit}>
                  <div className="d-flex font-weight-bold ml-5">
                    <hr style={{ width: "100px" }} className="mr-2 ml-2" />
                    or
                    <hr style={{ width: "100px" }} className="mr-2 ml-2" />
                  </div>

                  <div>
                    <h2 className="text-center pb-2">Welcome Back</h2>
                    {/* <img className="LoginImage pb-3" src="https://www.freeiconspng.com/uploads/person-icon-8.png" /> */}
                  </div>
                  <Form.Group className="pb-3">
                    <Form.Control
                      // className="rounded-"
                      type="email"
                      placeholder="Enter email"
                      value={registration.email}
                      onChange={(e) => handleInput("email", e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Control
                      // className="rounded-pill"
                      type="password"
                      placeholder="Password"
                      value={registration.password}
                      onChange={(e) => handleInput("password", e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group className="d-flex mt-4">
                    <Form.Check
                      type="checkbox"
                      label="Remember Me?"
                      checked={registration.rememberMe}
                      onChange={(e) =>
                        handleInput("rememberMe", e.target.checked)
                      }
                    />
                    <Button
                      variant="primary"
                      type="submit"
                      style={{ width: "25%" }}
                      className="ml-auto rounded-pill"
                    >
                      Login
                    </Button>
                  </Form.Group>
                  <div className="row">
                    <div className="ml-auto m-2">
                      <a href="" className="forgotPassword">
                        Forgot Password?
                      </a>
                    </div>
                  </div>

                  <p className="mt-4 text-center">
                    Don't have an account? <a href="/signUp">Sign Up</a>
                  </p>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      )}
    </>
  );
};
export default UserLogin;
