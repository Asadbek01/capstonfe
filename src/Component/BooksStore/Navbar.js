import React, { useEffect, useState } from "react";
import {
  Alert,
  Badge,
  Button,
  Card,
  Dropdown,
  DropdownButton,
  FormControl,
  Jumbotron,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  Link,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { getBooks, LogOutUser } from "../../redux/action";
import { Avatar } from "@material-ui/core";
import { FiShoppingCart } from "react-icons/fi";
import { Books } from "./Books";
import "../BooksStore/book.css";
export const MyNavbar = () => {
  const cartLength = useSelector((state) => state.cart.cartBooks.length);
  const isAuth = useSelector((state) => state.user.isAuth);
  const SearchedBooks = useSelector((state) => state.book.stock);
  const userMe = useSelector((state) => state.user.loggedUser);

  const [SearchQuery, setSearchQuery] = useState("");
  const [category, setCategory] = useState("");

  const categories = [
    "History",
    "Poetry",
    "Philosophy",
    "Religion",
    "Fiction",
    "Comedy",
    "Computer-Science",
  ];

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  // prevent page refreshing
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  useEffect(() => {
    dispatch(getBooks(SearchQuery, category));
  }, [SearchQuery, category]);
  // search input onChange event
  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
    setCategory(category);
  };

  const removeToken = () => {
    localStorage.removeItem("MyToken");
    window.location.href = "/";
  };
  return (
    <>
      <nav className="navbar row" color="dark">
        <div className="col-12 col-md-3">
          <div className="navbar-brand">
            <img
              src="https://i.ibb.co/C6FZX5z/logo-nav-1.png" alt="logo-nav-1" border="0"
               className=" responsive logo_img ml-5"
              onClick={() => navigate("/home")}
              style={{ cursor: "pointer" }}
            />
          </div>
        </div>

        {location.pathname === "/home" && (
          <div className="col-12 col-md-6 mt-2 mt-md-0">
            <form onSubmit={handleSubmit}>
              <div className="d-flex">
                <FormControl
                  type="text"
                  id="search_field"
                  className="form-control"
                  placeholder="Enter the book you want..."
                  onChange={(e) => handleInputChange(e)}
                  value={SearchQuery}
                />

                <div>
                  <DropdownButton
                    menuAlign="right "
                    variant="outline-secondary"
                    className="d-flex ml-2 pr-5"
                    title={category || "Category"}
                  >
                    {categories.map((category) => (
                      <Dropdown.Item
                        className="text-capitalize  ml-1"
                        key={category}
                        onChange={handleInputChange}
                        onClick={() => setCategory(category)}
                      >
                        {category}
                      </Dropdown.Item>
                    ))}
                  </DropdownButton>
                </div>
              </div>
            </form>
          </div>
        )}

        <div className="col-12 col-md-3 mt-4 mt-md-0 text-center">
          {isAuth ? (
            <div
              style={{ position: "relative", right: "15%", marginTop: "px" }}
            >
              <FiShoppingCart
                style={{ cursor: "pointer" }}
                color="blue"
                size={25}
                onClick={() => navigate("/cart")}
              />
              <Badge
                className="ml-1"
                variant="danger"
                style={{ position: "absolute", marginTop: "15px" }}
              >
                {cartLength}
              </Badge>
            </div>
          ) : (
            <div style={{ position: "absolute", right: "60%" }}>
              <FiShoppingCart
                color="blue"
                size={25}
                onClick={() => navigate("/cart")}
              />
              <Badge
                className="ml-1"
                variant="danger"
                style={{ position: "absolute", marginTop: "15px" }}
              >
                {cartLength}
              </Badge>
            </div>
          )}
          {isAuth ? (
            <header class="header ">
              <div class="profile mr-3">
                <div class="profile__avatar i-block pull-left ">
                  <span class="profile__monogram i-block ">
                    {
                      <Avatar
                        src={userMe && userMe.avatar}
                        alt={userMe && userMe.name}
                      />
                    }
                  </span>
                </div>
                <span class="profile__name i-block pull-left pt-n3">
                  {userMe && userMe.name}
                </span>
                <ul
                  class="menu"
                  style={{
                    height: "20vh",
                    position: "absolute",
                    zIndex: "999",
                  }}
                >
                  {userMe.role === "admin" ? (
                    <li
                      class="menu__item"
                      onClick={() => navigate("/dashboard")}
                    >
                      Dashboard
                    </li>
                  ) : (
                    <li class="menu__item">Order</li>
                  )}
                  <li onClick={() => navigate("/me")} class="menu__item">
                    Profile
                  </li>
                  <li onClick={removeToken} class="menu__item text-danger">
                    Log out
                  </li>
                </ul>
              </div>
            </header>
          ) : (
            <Button
              onClick={() => navigate("/")}
              variant="primary"
              style={{ position: "relative", left: "40px" }}
            >
              Login
            </Button>
          )}
        </div>
      </nav>
      <div className="container-fluid">
        <section id="products" className="container my-1">
          <div className="row ml-1">
            {SearchedBooks.book
              ?.filter((book) => {
                if (!SearchQuery) return false;
                if (
                  book.title.toLowerCase().includes(SearchQuery.toLowerCase())
                )
                  return true;
              })
              .map((book) => (
                <Books book={book} />
              ))}
            {SearchedBooks.book
              ?.filter((book) => {
                if (!category) return false;
                if (
                  book.category
                    .toLowerCase()
                    .includes(category.toLocaleLowerCase())
                )
                  return true;
              })
              .map((book) => (
                <Books book={book} />
              ))}
          </div>
        </section>
      </div>
    </>
  );
};
