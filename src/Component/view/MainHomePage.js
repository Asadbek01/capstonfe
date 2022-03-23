// jest supertest

import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getBooks } from '../../redux/action'


export const MainHomePage = () => {

  const books = useSelector((state) => state.book.data)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getBooks())
  }, [dispatch])
  
  return (
    
    
        <div className='container-fluid'>
         <h1 id="products_heading">Latest Books</h1>
         <section  id="products" className="container mt-5">
      <div className="row">
    {
      books && books.map((book, i) =>(
        <>
        
        <div key ={i._id}className="col-sm-12 col-md-6 col-lg-3 my-3">
          <div className="card p-3 rounded">
            <img
              className="card-img-top mx-auto"
              src={book.images[0].imgUrl}
              />
            <div className="card-body d-flex flex-column ">
              <h5 className="card-title">
                <a href="" className='ml-2'>{book.title}</a>
              </h5>
              <div className="ratings mt-auto">
                <div className="rating-outer">
                  <div className="rating-inner"></div>
                </div>
                <span id="no_of_reviews">({book.ratings} Reviews)</span>
              </div>
              <p className="card-text">${book.price}</p>
              <a href="#" id="view_btn" className="btn btn-block rounded-pill">View Details</a>
            </div>
          </div>
        </div>
        </>
      ))
}
      </div>
    </section>
  </div>
  
  )
}
