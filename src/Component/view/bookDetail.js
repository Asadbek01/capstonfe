import React ,{useState, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getBooksDetail } from '../../redux/action'
import { useParams } from 'react-router-dom'
import { Carousel } from 'react-bootstrap'

const BookDetail = () => {
    const BookWithSpesificId = useSelector(state => state.cart.cartBooks)
    const dispatch = useDispatch()
    
    const params = useParams()  
    useEffect(() => {
        dispatch(getBooksDetail(params.id ))
    }, [dispatch, params.id])
  return (
    <div className="container container-fluid">

    <div className="row f-flex justify-content-around">
    <Carousel fade>
  <Carousel.Item>
  <div className="col-12 col-lg-5 img-fluid" id="product_image">
                <img  className="d-block " src={BookWithSpesificId.images[0].imgUrl}  height="500" width="500" />
            </div>
  </Carousel.Item>
  <Carousel.Item>
  <div className="col-12 col-lg-5 img-fluid" id="product_image">
                <img  className="d-block " src={BookWithSpesificId.images[0].imgUrl}  height="500" width="500" />
            </div>
  </Carousel.Item>
  <Carousel.Item>
  <div className="col-12 col-lg-5 img-fluid" id="product_image">
                <img  className="d-block " src={BookWithSpesificId.images[0].imgUrl}  height="500" width="500" />
            </div>
  </Carousel.Item>
</Carousel>


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
                    <span className="btn btn-danger minus">-</span>

                    <input type="number" className="form-control count d-inline" value="1" readOnly />

                    <span className="btn btn-primary plus">+</span>
                </div>
                 <button type="button" id="cart_btn" className="btn btn-primary d-inline ml-4">Add to Cart</button>

                <hr />

                <p>Status: <span id="stock_status"className={BookWithSpesificId.stock > 0 ? 'text-success' : 'text-danger'}>{ BookWithSpesificId.stock > 0 ? "In Stock" : "out Of stock"}</span></p>

                <hr />

                <h4 className="mt-2">Description:</h4>
                <p>Binge on movies and TV episodes, news, sports, music and more! We insisted on 720p High Definition for this 32" LED TV, bringing out more lifelike color, texture and detail. We also partnered with Roku to bring you the best possible content with thousands of channels to choose from, conveniently presented through your own custom home screen.</p>
                <hr />				
				<button id="review_btn" type="button" className="btn btn-primary mt-4" data-toggle="modal" data-target="#ratingModal">
                            Submit Your Review
                </button>
				
				<div className="row mt-2 mb-5">
                    <div className="rating w-50">

                        <div className="modal fade" id="ratingModal" tabIndex="-1" role="dialog" aria-labelledby="ratingModalLabel" aria-hidden="true">
                            <div className="modal-dialog" role="document">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="ratingModalLabel">Submit Review</h5>
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div className="modal-body">

                                        <ul className="stars" >
                                            <li className= "star"><i className="fa fa-star"></i></li>
                                            <li className="star"><i className="fa fa-star"></i></li>
                                            <li className="star"><i className="fa fa-star"></i></li>
                                            <li className="star"><i className="fa fa-star"></i></li>
                                            <li className="star"><i className="fa fa-star"></i></li>
                                        </ul>

                                        <textarea name="review" id="review" className="form-control mt-3">

                                        </textarea>

                                        <button className="btn my-3 float-right review-btn px-4 text-white" data-dismiss="modal" aria-label="Close">Submit</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
						
            </div>

        </div>
   </div>
</div>
   
  )
}

export default BookDetail