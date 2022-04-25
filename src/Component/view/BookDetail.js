import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addToCartAction,
  getBooksDetail,
  removeFromCartAction,
} from "../../redux/action";
import { useParams } from "react-router-dom";
import { Alert } from "react-bootstrap";

const BookDetail = () => {
  // getting state from redux Store
  const BookWithSpesificId = useSelector(
    (state) => state.bookWithSpecificId.bookWithId
  );
  const cartLength = useSelector((state) => state.cart.cartBooks.length);
  const books = useSelector((state) => state.book.stock);

  // useState
  const [quantity, setQuantity] = useState(1);

  // Assigning
  const dispatch = useDispatch();
  const params = useParams();

  //  getting BookDetail
  useEffect(() => {
    dispatch(getBooksDetail(params.id));
  }, [dispatch, params.id]);

  const addToCartHandler = () => {
    dispatch(addToCartAction(params.id, quantity));
  };

  const increaseQuantity = () => {
    const count = document.querySelector(".count");
    if (count.valueAsNumber >= BookWithSpesificId.stock) return;
    const qty = count.valueAsNumber + 1;
    setQuantity(qty);
  };

  const decreaseQuantity = () => {
    const count = document.querySelector(".count");
    if (count.valueAsNumber <= 1) return;
    const qty = count.valueAsNumber - 1;
    setQuantity(qty);
  };

  return (
    <div className="container container-fluid">
      <div className="row f-flex justify-content-around">
        <div
          className="col-12 col-lg-5 mt-5  img-fluid card mr-5"
          id="product_image "
        >
          <img
            src={
              BookWithSpesificId.images && BookWithSpesificId.images.length > 0
                ? BookWithSpesificId.images[0].imgUrl
                : ""
            }
            height="100%"
          />
        </div>

        <div className="col-12 col-lg-5 mt-5">
          <h3 className="text-white">{BookWithSpesificId.subtitle}</h3>
          <p id="product_id">{BookWithSpesificId.title}</p>

          <hr />

          <div className="rating-outer">
            <div className="rating-inner"></div>
          </div>
          <span id="no_of_reviews">
            ({BookWithSpesificId.numReviews} Reviews)
          </span>

          <hr />

          <p id="product_price" className="text-white">
            ${BookWithSpesificId.price}
          </p>
          <div className="stockCounter d-inline">
            <span className="btn btn-danger minus" onClick={decreaseQuantity}>
              -
            </span>

            <input
              type="number"
              className="form-control count d-inline ml-1"
              value={quantity}
            />
            <span
              className="btn btn-primary plus ml-1"
              onClick={increaseQuantity}
            >
              +
            </span>

            <hr />

            <p className="text-white">
              Status:{" "}
              <span
                className={
                  BookWithSpesificId.stock > 0
                    ? "text-success ml-2"
                    : "text-danger ml-2 "
                }
              >
                {BookWithSpesificId.stock > 0 ? (
                  <small style={{ fontSize: "16px", fontFamily: "monospace" }}>
                    In Stock ({BookWithSpesificId.stock})
                  </small>
                ) : (
                  "out Of stock"
                )}
              </span>
            </p>

            <hr />

            <h4 className="mt-2 text-white">Description:</h4>
            <p>{BookWithSpesificId.description}</p>
            <hr />
            <button
              id="review_btn"
              type="button"
              className="btn btn-primary mt-4"
              data-toggle="modal"
              data-target="#ratingModal"
              disabled={BookWithSpesificId.stock === 0}
              onClick={addToCartHandler}
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BookDetail;
