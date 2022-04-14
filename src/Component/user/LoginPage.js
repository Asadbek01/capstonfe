import React, { useEffect, useState } from "react";
import {
  Form,
  Button,
  Row,
  Col,
  Navbar,
  Container,
  Spinner,
} from "react-bootstrap";
import { MainHomePage } from "../BooksStore/MainHomePage.js";
import { useNavigate } from "react-router";
import { FcGoogle } from "react-icons/fc";

import { ClearErrors, Login } from "../../redux/action/index.js";
import { useDispatch, useSelector } from "react-redux";

const UserLogin = () => {
  // const [registration, setRegistration] = useState({
  //   email: "",
  //   password: "",
  //   rememberMe: false
  // });

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setrememberMe] = useState(false);

  const dispatch = useDispatch();
  const { isAuth, loggedUser, loading, error } = useSelector(
    (state) => state.user
  );

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(ClearErrors());
    }
  }, [dispatch, isAuth, error]);

  // const handleInput = (fieldName, value) => {
  //   setRegistration({
  //     ...registration,
  //     [fieldName]: value,
  //   });
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const response = await fetch("http://localhost:3002/users/login", {
  //       method: "POST",
  //       body: JSON.stringify(registration),
  //       headers: {
  //         "Content-type": "application/json",
  //       },
  //     });
  //     if (response.ok) {
  //       setRegister(true)
  //       const user = await response.json();
  //       localStorage.setItem("MyToken", user.accessToken);
  //       setRegistration({
  //         email: "",
  //         password: "",
  //         rememberMe: false
  //       });
  //     } else {
  //       console.log("Error while fetched!");
  //     }
  //   } catch (error) {
  //       console.log(error)
  //   }
  // };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(Login(email, password, rememberMe));
  };
  return (
    <>
      {/* {
  loading && (
    <div className='d-flex  m-auto'><Spinner style={{ margin: "auto", fontSize: "20px" }} animation="border" role="status" variant="primary" />
    <h2 className="mt-1 ml-3 ">Loading...</h2>
    </div>
  ) ( */}

      {isAuth ? (
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
                  <div
                    className="d-flex font-weight-bold ml-5 "
                    style={{ color: "white" }}
                  >
                    <hr
                      style={{ width: "100px", border: "0.5px solid white" }}
                      className="mr-2 ml-2 "
                    />
                    or
                    <hr
                      style={{ width: "100px", border: "0.5px solid white" }}
                      className="mr-2 ml-2"
                    />
                  </div>

                  <div>
                    <h2 className="text-center  text-white pb-2">
                      Welcome Back
                    </h2>
                    {/* <img className="LoginImage pb-3" src="https://www.freeiconspng.com/uploads/person-icon-8.png" /> */}
                  </div>
                  <Form.Group className="pb-3">
                    <Form.Control
                      // className="rounded-"
                      type="email"
                      placeholder="Enter email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Control
                      // className="rounded-pill"
                      type="password"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                    />
                  </Form.Group>
                  <Form.Group className="d-flex mt-4">
                    <Form.Check
                      type="checkbox"
                      label=" Remember Me?"
                      className="text-white"
                      checked={rememberMe}
                      onChange={(e) => {
                        setrememberMe(e.target.checked);
                      }}
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

                  <p className="mt-4 text-center text-white">
                    Don't have an account? <a href="/signUp">Sign Up</a>
                  </p>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      )}
      {/* )
            } */}
    </>
  );
};
export default UserLogin;
