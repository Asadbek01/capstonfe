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
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import {  getBooks, LogOutUser } from "../../redux/action";
import { Avatar } from "@material-ui/core";
import { FiShoppingCart } from "react-icons/fi";
import { Books } from "./Books";
// import '../../assets/'

export const MyNavbar = ({ userMe }) => {
  const cartLength = useSelector((state) => state.cart.cartBooks.length);
  const isAuth = useSelector(state=> state.user.isAuth)
  const SearchedBooks = useSelector((state) => state.book.stock);

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

  // prevent page refreshing
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  useEffect(() => {
    dispatch(getBooks(SearchQuery, category))

  }, [SearchQuery, category])
  // search input onChange event
  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
    setCategory(category)
  };

  
  return (
    <>
      <nav className="navbar row" color="dark">
        <div className="col-12 col-md-3">
          <div className="navbar-brand">
            <img
              src="./assets/logo_nav-1.png"
              className=" responsive logo_img ml-5"
              onClick={() => navigate("/home")}
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
                    className="ml-2"
                    title={category || ""}
                  >
                    {categories.map((category) => (
                      <Dropdown.Item
                        className="text-capitalize"
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
        
        
        <div className="col-12 col-md-3 mt-4 mt-md-0 text-center">
          {
            isAuth?(
              <div style={{ position: "relative", right: "15%", marginTop: "px"}} >
            <FiShoppingCart
              color="blue"
              size={25}
              onClick={() => navigate("/cart")}
              />
            <Badge
                        className='ml-1'
              variant="danger"
              style={{ position: "absolute", marginTop: "15px" }} 
            >
              {cartLength}
            </Badge>
          </div>
            ):(
              <div style={{position:"absolute", right:"60%"}} >
            <FiShoppingCart
              color="blue"
              size={25}
              onClick={() => navigate("/cart")}
              />
            <Badge
                        className='ml-1'
              variant="danger"
              style={{ position: "absolute", marginTop: "15px" }} 
            >
              {cartLength}
            </Badge>
          </div>
            )
          }
            {
              isAuth?(

                <header class="header ">
              <div class="profile mr-3">
                <div class="profile__avatar i-block pull-left ">
                  <span class="profile__monogram i-block ">
                    { <Avatar
                      src={userMe.avatar && userMe.avatar.url}
                      alt={userMe && userMe.name }
                    /> }
                  </span>
                </div>
                <span class="profile__name i-block pull-left pt-n3">
                  {userMe && userMe.name}
                </span>
                <ul class="menu" style={{ height: "20vh",  }}>
                  {
                    userMe.role === "admin" ?  <li class="menu__item">Dashboard</li> :  <li class="menu__item">Order</li>
                  }
                  <li class="menu__item">Profile</li>
                  <li onClick={dispatch(LogOutUser())}  class="menu__item text-danger">
                    Log out
                  </li>
                </ul>
              </div>
            </header>
            
            ) :(
            <Button
              onClick={() => navigate("/")}
              variant="primary"
style={{position: "relative", left:"40px"}}
>
              Login
            </Button>
            )
          }
          
        </div>
      </nav>
      <div className="container-fluid">
        <section id="products" className="container my-2">
          <div className="row">
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
                )) 
              }
              { SearchedBooks.book?.filter(book => {
                if(!category) return false;
                if(book.category.toLowerCase().includes(category.toLocaleLowerCase())
                )
                return true
              })
              .map(book =>(
                <Books book={book} />
              ))
}
          </div>
        </section>
      </div>
    </>
  );
};
