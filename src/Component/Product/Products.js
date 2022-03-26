import React from 'react'

export const Products = ({book, i}) => {
  return (
    <div className="col-sm-12 col-md-6 col-lg-3 my-3">
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
    )
}
