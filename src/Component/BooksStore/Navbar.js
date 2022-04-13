import React, { useEffect, useState } from "react";
import {
  Badge,
  Button,
  Card,
  Dropdown,
  DropdownButton,
  FormControl,
  Jumbotron,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { getSearchedBooks } from "../../redux/action";
import { Avatar } from "@material-ui/core";
import { FiShoppingCart } from "react-icons/fi";
// import '../../assets/'

export const MyNavbar = () => {
  const cartLength = useSelector((state) => state.cart.cartBooks.length);
  const SearchedBooks = useSelector((state) => state.book.searchedBook);
  const userMe = useSelector((state) => state.user);
  const isAuth = useSelector((state) => state.user);

  const navigate = useNavigate();
  const [SearchQuery, setSearchQuery] = useState("");

  const dispatch = useDispatch();

  // prevent page refreshing
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  // search input onChange event
  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  useEffect(() => {
    dispatch(getSearchedBooks(SearchQuery));
  }, [SearchQuery]);
  return (
    <>
      <nav className="navbar row" color="dark">
        <div className="col-12 col-md-3">
          <div className="navbar-brand">
            <img
              src="./assets/logo_nav-1.png"
              className=" responsive logo_img ml-5"
              onClick={() => navigate("/")}
              style={{ cursor: "pointer" }}
              alt="logo"
            />
          </div>
        </div>

        <div className="col-12 col-md-6 mt-2 mt-md-0">
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <FormControl
                type="text"
                id="search_field"
                className="form-control"
                placeholder="Enter the book you want..."
                onChange={(e) => handleInputChange(e)}
                value={SearchQuery}
              />
              <div className="input-group-append">
                <DropdownButton
                  menuAlign="right"
                  variant="outline-secondary"
                  id="dropdown-basic-button"
                  title={"Category"}
                  className="ml-2"

                  // title={currentCategory.toLocaleUpperCase()}
                >
                  <Dropdown.Item className="text-capitalize">
                    sdcsdc
                  </Dropdown.Item>
                </DropdownButton>
              </div>
            </div>
          </form>
        </div>

        <div className="col-12 col-md-3 mt-4 mt-md-0 text-center">
          <div style={{ position: "relative", right: "10%" }}>
            <FiShoppingCart
              color="blue"
              size={20}
              onClick={() => navigate("/cart")}
            />
            <Badge
              variant="danger"
              style={{ position: "absolute", top: "15px" }}
            >
              {cartLength}
            </Badge>
          </div>

          {isAuth ? (
            <header class="header">
              <div class="profile">
                <div class="profile__avatar i-block pull-left">
                  <span class="profile__monogram i-block ">
                    <Avatar
                      src={
                        userMe.loggedUser && userMe.loggedUser.length > 0
                          ? userMe.loggedUser[0].avatar.url
                          : ""
                      }
                      alt={
                        userMe.loggedUser && userMe.loggedUser.length > 0
                          ? userMe.loggedUser[0].name
                          : ""
                      }
                    />
                  </span>
                </div>
                <span class="profile__name i-block pull-left mt-n1 ">
                  {userMe.loggedUser && userMe.loggedUser.length > 0
                    ? userMe.loggedUser[0].name
                    : ""}
                </span>
                <ul class="menu" style={{ height: "15vh" }}>
                  <li class="menu__item">Profile</li>
                  <li href="/" class="menu__item">
                    Log out
                  </li>
                </ul>
              </div>
            </header>
          ) : (
            <Button
              onClick={() => navigate("/login")}
              variant="primary"
              className="ml-4"
            >
              Login
            </Button>
          )}
        </div>
      </nav>
      <div className="container-fluid">
        <section id="products" className="container my-2">
          <div className="row">
            {SearchedBooks?.filter((book) => {
              if (!SearchQuery) return false;
              if (book.title.toLowerCase().includes(SearchQuery.toLowerCase()))
                return true;
            }).map((book) => (
              <div className="col-sm-12 col-md-6 col-lg-3 my-3">
                <div style={{ cursor: "pointer" }}>
                  <div className="card card_book">
                    <img
                      className="card-img-top mx-auto"
                      src={book.images[0].imgUrl}
                    />
                    <div className="card-body d-flex flex-column ">
                      <h5 className="card-title">
                        <Link to={`/detail/${book._id}`}>{book.title}</Link>
                      </h5>
                      <div className="ratings mt-auto">
                        <div className="rating-outer">
                          <div className="rating-inner"></div>
                        </div>
                        <span id="no_of_reviews">({book.ratings} Reviews)</span>
                      </div>
                      <div className="d-flex">
                        <Button
                          style={{ width: "50%" }}
                          variant="outline-danger"
                          className="ml-2"
                        >
                          ${book.price}
                        </Button>
                        <Button
                          style={{ width: "50%" }}
                          variant="outline-success"
                          className="ml-2"
                        >
                          <Link to={`detail/${book._id}`}>View </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};
