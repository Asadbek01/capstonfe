
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getBooks } from '../../redux/action'
import { Products } from './Books'
import { Alert, Button, Col, Jumbotron, Spinner } from 'react-bootstrap'



export const MainHomePage = () => {
  const [bookSelected, setBookSelected] = useState(null)

  const books = useSelector((state) => state.book.stock)
  const errorCode = useSelector((state) => state.book.errorCode)
  const isLoading = useSelector((state) => state.book.isLoading)
  
 
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getBooks())
    // setIsLoading(false)
  }, [dispatch])


  const changeBook = (book) => setBookSelected(book);
  
  return (
<>
<Jumbotron>
<h1>upto 75% off</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam deserunt nostrum accusamus. Nam alias sit necessitatibus, aliquid ex minima at!</p>
  <p>
    <Button variant="primary">Shop now</Button>
  </p>
</Jumbotron>
{/* <sectionid="home">
<div class="row">

    <div class="content">
       
    </div>

    <div class="swiper books-slider">
        <div class="swiper-wrapper">
            <a href="#" class="swiper-slide"><img src="../../../public/assets/image/book-1.png" alt="" /></a>
            <a href="#" class="swiper-slide"><img src="../../../public/assets/image/book-2.png" alt="" /></a>
            <a href="#" class="swiper-slide"><img src="../../../public/assets/image/book-3.png" alt="" /></a>
            <a href="#" class="swiper-slide"><img src="../../../public/assets/image/book-4.png" alt="" /></a>
            <a href="#" class="swiper-slide"><img src="../../../public/assets/image/book-5.png" alt="" /></a>
            <a href="#" class="swiper-slide"><img src="../../../public/assets/image/book-6.png" alt="" /></a>
        </div>
        <img src="image/stand.png" class="stand" alt="" />
    </div>

</div>

</section> */}
    
        <div className='container-fluid'>
         <h1 id="products_heading">Latest Books</h1>
         <section  id="products" className="container mt-5">
      <div className="row">
      {
      errorCode && (
        
        <Alert variant="danger" style={{margin: "auto", width: "40%"}}>
          An error occurred: {errorCode}
        </Alert>
          )
        }
        {
          isLoading && (
            <div className='d-flex  m-auto'><Spinner style={{ margin: "auto", fontSize: "20px" }} animation="border" role="status" variant="primary" />
              <h3 className="mt-1 ml-3 ">Loading...</h3>
              </div>
              )
            }
             



    {
      books.map((book, i) =>(
        <>
        
       <Products
        book= {book}
        bookSelected={bookSelected}
        changeBook={changeBook}
        key={i.id}
        
        
        />
  {/* <Col md={8}>
        <BookDetail
        bookSelected={bookSelected}
        />
      </Col> */}

        </>
      ))
}
      </div>
    </section>
  </div>
  
      </>  
  )
}


// <span className='ml-3'><CartIndicator /> </span>   
// <button onClick={()=>navigate("/login")} className="btn ml-3 btn-primary" id="login_btn">Login</button>