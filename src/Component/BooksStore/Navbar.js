import React, { useEffect, useState } from 'react'
import { Button, Card, Jumbotron } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import {  Link, Route, Routes, useNavigate } from 'react-router-dom'
import { FaShoppingCart } from 'react-icons/fa'
import { getSearchedBooks } from '../../redux/action'
// import '../../assets/'

export const MyNavbar = () => {
  const [registered, setRegistered] = useState(true)
const cartLength = useSelector(state => state.cart.cartBooks.length)
  const SearchedBooks = useSelector(state=>state.book.searchedBook)
  
  const navigate = useNavigate()
  const [ SearchQuery, setSearchQuery] = useState('')
    
    
    const dispatch = useDispatch()
    
  // prevent page refreshing
  const handleSubmit = (e) => {
     e.preventDefault()

  }
 
   
   // search input onChange event
   const handleInputChange = (e) => {
     setSearchQuery(e.target.value)
   }

   useEffect(() =>{
    dispatch(getSearchedBooks(SearchQuery))
  }, [SearchQuery]);
   
 
  return (
     
    <>
   
     <nav className="navbar row">
      <div className="col-12 col-md-3">
        <div className="navbar-brand">
         <img src='./assets/logo_nav-1.png'
          className=' responsive logo_img ml-5' 
          onClick={()=> navigate("/")}
          style={{cursor: "pointer"}}
          alt="logo"
          />
        </div>
      </div>

      <div className="col-12 col-md-6 mt-2 mt-md-0">
      <form onSubmit={handleSubmit}>
      <div className="input-group">
          <input
            type="text"
            id="search_field"
            className="form-control"
            placeholder="Enter the book you want..."
            onChange={(e) => handleInputChange(e)}
            value={SearchQuery}
          />
          <div className="input-group-append">
            <button id="search_btn" className="btn btn-primary">
              <i className="fa fa-search" aria-hidden="true"></i>
            </button>
          </div>
        </div>
    </form>
      </div>

      
        { registered ? (
      <div className="col-12 col-md-3 mt-4 mt-md-0 text-center">
        <div className='d-flex ml-5'>
        <Button color='primary' onClick={() => navigate('/cart')}>
        <FaShoppingCart />
        <span className='ml-2'>{cartLength}</span>
      </Button> 
          </div>
      </div>
      
        
        ):(
          <div className="col-12 col-md-3 mt-4 mt-md-0 text-center">
          <div className='d-flex ml-5'>
  {/* <span className='ml-3'><CartIndicator /> </span>  */}
            <Button onClick={()=>  navigate("/login") }  variant="primary" className="ml-4" >Login</Button>
          </div>
        </div>
        )
       
      }
    </nav>
    <div className='container-fluid'>
         <section  id="products" className="container mt-5">
      <div className="row">

    {
    SearchedBooks?.filter((book) => {
      if(!SearchQuery) return false
      if(book.title.toLowerCase().includes(SearchQuery.toLowerCase())) return true
    }).map((book) => (

      <div className="col-sm-12 col-md-6 col-lg-3 my-3">
      <div  
      style={{ cursor: "pointer" }}>
      <div className='card card_book'>
        
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
        <div className='d-flex'>
        <Button style={{width: "50%"}} variant="outline-danger" className='ml-2'>${book.price}</Button>
        <Button 
        style={{width: "50%"}} 
        variant="outline-success"
        className='ml-2'
        ><Link to={`detail/${book._id}`}>View </Link></Button>
      </div>
      </div>
    </div> 
    </div>
    </div>

    ))
}
  </div>
 </section>
 </div>


    </>
  )
}
