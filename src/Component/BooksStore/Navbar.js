import React, { useState } from 'react'
import { Button, Card, Jumbotron } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import {  Route, useNavigate } from 'react-router-dom'
import { FaShoppingCart } from 'react-icons/fa'
import { SearchBooks } from '../view/SearchBooks'
// import '../../assets/'
export const MyNavbar = () => {
  const [registered, setRegistered] = useState(true)
  const books = useSelector((state) => state.book.stock)
  const cartLength = useSelector(state => state.cart.cartBooks.length)
  const navigate = useNavigate()

 
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

        <Route render={({ history }) => <SearchBooks history={history}/> } />
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
    <Jumbotron>
<h1>upto 75% off</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam deserunt nostrum accusamus. Nam alias sit necessitatibus, aliquid ex minima at!</p>
  <p>
    <Button variant="primary">Shop now</Button>
  </p>
</Jumbotron>


    </>
  )
}
