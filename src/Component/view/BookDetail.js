import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addToCartAction, getBooksDetail, removeFromCartAction } from '../../redux/action'
import { useParams } from 'react-router-dom'

const BookDetail = () => {
    const BookWithSpesificId = useSelector(state => state.bookWithSpecificId.bookWithId)
    const cartLength = useSelector(state => state.cart.cartBooks.length)

    // console
    const dispatch = useDispatch()

    const params = useParams()
    useEffect(() => {
        dispatch(getBooksDetail(params.id))
    }, [params.id])
    
    return (
        <div className="container container-fluid">
            <div className="row f-flex justify-content-around">

                <div className="col-12 col-lg-5 mt-5  img-fluid card mr-5"
                    id="product_image ">
                    <img src={BookWithSpesificId.images && BookWithSpesificId.images.length > 0 ? BookWithSpesificId.images[0].imgUrl : ""}  height="100%"  /> 
                </div>

                <div className="col-12 col-lg-5 mt-5">
                    <h3>{BookWithSpesificId.subtitle}</h3>
                    <p id="product_id">{BookWithSpesificId.title}</p>

                    <hr />

                    <div className="rating-outer">
                        <div className="rating-inner"></div>
                    </div>
                    <span id="no_of_reviews">({BookWithSpesificId.numReviews} Reviews)</span>

                    <hr />

                    <p id="product_price">${BookWithSpesificId.price}</p>
                    <div className="stockCounter d-inline">
                        <span className="btn btn-danger minus"
                         onClick={() => {
                            dispatch(removeFromCartAction(i)) }}>-</span>
                        <input type="number" className="form-control count d-inline" value={cartLength} readOnly />
                        <span className="btn btn-primary plus"
                         onClick={() => {
                            dispatch(addToCartAction(BookWithSpesificId)) }}
                        >+</span>

                        <hr />

                        <p>Status: <span id="stock_status" className={BookWithSpesificId.stock > 0 ? 'text-success' : 'text-danger'}>{BookWithSpesificId.stock > 0 ? "In Stock" : "out Of stock"}</span></p>

                        <hr />

                        <h4 className="mt-2">Description:</h4>
                        <p>{BookWithSpesificId.description}</p>
                        <hr />
                        <button id="review_btn" type="button"
                         className="btn btn-primary mt-4"
                          data-toggle="modal" data-target="#ratingModal"
                          onClick={() => {
                            dispatch(addToCartAction(BookWithSpesificId)) }}>
                            Add To Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default BookDetail;