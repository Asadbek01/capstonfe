import React, { useState } from 'react'
import { Button, Card, Jumbotron } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import CartIndicator from '../view/CartIndicator'
// import '../../assets/'
export const MyNavbar = () => {
  const [bookSelected, setBookSelected] = useState(null)
  const [registered, setRegistered] = useState(true)
  const [ SearchQuery, setSearchQuery] = useState('')
  const books = useSelector((state) => state.book.stock)
  const navigate = useNavigate()

  // prevent page refreshing
  const handleSubmit = (e) => {
    e.preventDefault()
  }
  // search input onChange event
  const handleInputChange = (e) => {
    setSearchQuery(e.target.value)
  }
  const changeBook = (book) => setBookSelected(book);
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
        <div className="input-group">
          <form style={{width: "50%"}} onSubmit={(e) => handleSubmit(e)}>
          <input
            type="text"
            id="search_field"
            className="form-control"
            placeholder="Enter the book you want..."
            onChange={(e) => handleInputChange(e)}
            value={SearchQuery}
          />
          </form>
          <div className="input-group-append">
            <button id="search_btn" className="btn btn-primary">
              <i className="fa fa-search" aria-hidden="true"></i>
            </button>
          </div>
        </div>
      </div>
      


      




        { registered ? (
      <div className="col-12 col-md-3 mt-4 mt-md-0 text-center">
        <div className='d-flex ml-5'>
          <span className='ml-3'><CartIndicator /> </span> 
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
    <Jumbotron>
<h1>upto 75% off</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam deserunt nostrum accusamus. Nam alias sit necessitatibus, aliquid ex minima at!</p>
  <p>
    <Button variant="primary">Shop now</Button>
  </p>
</Jumbotron>


            {
              books?.filter((book) => {
                if(!SearchQuery) return false
                if(book.title.toLowerCase().includes(SearchQuery.toLowerCase())) return true
              }).map((book) => (
                <div className="col-sm-12 col-md-6 col-lg-3 my-3">
                   <div   className={bookSelected?.id === book.id ? "border-thick mt-3" : "mt-3"}
    onClick={() => changeBook(book)}
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
              onClick={()=> navigate(`/detail/${book._id}`)}>View</Button>
            </div>
            </div>
          </div> 
          </div>
               </div>
              ))
            }

    </>
  )
}
