import React from 'react'

export const MainHomePage = () => {
  return (
  
  <div className='container-fluid'>
         <h1 id="products_heading">Latest Books</h1>
         <section  id="products" className="container mt-5">
      <div className="row">
        <div className="col-sm-12 col-md-6 col-lg-3 my-3">
          <div className="card p-3 rounded">
            <img
              className="card-img-top mx-auto"
              src="https://cdn.pixabay.com/photo/2017/01/13/13/30/book-1977283__340.png"
            />
            <div className="card-body d-flex flex-column ">
              <h5 className="card-title">
                <a href="" className='ml-2'>Book description goes in here</a>
              </h5>
              <div className="ratings mt-auto">
                <div className="rating-outer">
                  <div className="rating-inner"></div>
                </div>
                <span id="no_of_reviews">(5 Reviews)</span>
              </div>
              <p className="card-text">$45.67</p>
              <a href="#" id="view_btn" className="btn btn-block rounded-pill">View Details</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  )
}
