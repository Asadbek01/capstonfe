
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getBooks } from '../../redux/action'
import { Books } from './Books'
import { Alert, Button, Col, Jumbotron, Spinner } from 'react-bootstrap'
import Pagination from 'react-js-pagination'



export const MainHomePage = () => {
  const [bookSelected, setBookSelected] = useState(null)
  
  const books = useSelector((state) => state.book.stock)
  const errorCode = useSelector((state) => state.book.errorCode)
  const isLoading = useSelector((state) => state.book.isLoading)
  // const [currentPage, setCurrentPage] = useState(1)
  
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(getBooks())
  }, [dispatch])
  
 

  const changeBook = (book) => setBookSelected(book);

  // function setCurrentPageNo (pageNumber){
  //   setCurrentPage(pageNumber )
  // }
  
  return (
<>
            <div className='container-fluid'>
         <h1 className='ml-3' id="products_heading">Latest Books</h1>
         <section  id="products" className="container mt-5">
      <div className="row">
      {
      errorCode && (
        
        <Alert variant="danger" style={{margin: "auto", width: "60%"}}>
          An error occurred: {errorCode}
        </Alert>
          )
        }
        {
          isLoading && (
            <div className='d-flex  m-auto'><Spinner style={{ margin: "auto", fontSize: "20px" }} animation="border" role="status" variant="primary" />
              <h2 className="mt-1 ml-3 ">Loading...</h2>
              </div>
              )
            }
                 {/* {
        isLoading &&  (        
          
            <div class="container">  
            <div class="card">  
            <div class="card-img skeleton">  
            </div>  
            <div class="card-body">  
            <h2 class="card-title skeleton">  
            </h2>  
            <p class="card-intro skeleton">  
            </p>  
            </div>  
            </div>  
            
            </div>   
  
  )
  } */}
             



    {
      books.map((book, i) =>(
        <>
        
       <Books
        book= {book}
        bookSelected={bookSelected}
        changeBook={changeBook}
        key={i.id}
        
        
        />
 

        </>
      ))
}
      </div>
    </section>
  </div>
   
   {/* <div className='d-flex justify-content-center mt-5'>   */}
  {/* <Pagination 
   activePage={currentPage}
  //  itemsCountPerPage={resPerPage}
  //  totalItemsCount={bookCount}
  //  onChange={setCurrentPageNo}
   nextPageText={'Next'}
   prevPageText={'Prev'}
   firstPageText={'First'}
   lastPageText={'Last'}
   itemClass={'page-item'}
   linkClass={'page-link'}
 />
   </div> */}
  
      </>  
  )
}


// <span className='ml-3'><CartIndicator /> </span>   
// <button onClick={()=>navigate("/login")} className="btn ml-3 btn-primary" id="login_btn">Login</button>