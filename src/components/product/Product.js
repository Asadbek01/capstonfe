import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Product = ({ product, col }) => {
  return (
    <div className={`col-sm-12 col-md-6 col-lg-${col} my-3`}>
      <div className="card p-3 rounded">
        <img className="card-img-top mx-auto" src={product.images[0].url} />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">
            <Link to={`/product/${product._id}`}>{product.title}</Link>
          </h5>

          <div className="d-flex price_view">
            <Button
              style={{ width: "50%" }}
              variant="outline-danger"
              className="ml-2"
            >
              ${product.price}
            </Button>
            <Button
              style={{ width: "50%" }}
              variant="outline-success"
              className=" btn ml-2"
            >
              <Link to={`/product/${product._id}`} className="btn btn-block">
                View
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
    // <div className="card card_book">
    //   <img className="card-img-top mx-auto" src={product.images[0].imgUrl} />
    //   <div className="card-body d-flex flex-column ">
    //     <h5 className="card-title">
    //       {/* <Link to={`/detail/${book._id}`} className='text-secondary'>{book.title}</Link> */}
    //     </h5>
    //     <div className="ratings mt-auto">
    //       <div className="rating-outer">
    //         <div className="rating-inner"></div>
    //       </div>
    //       {/* <HeartFill color="red" size={20} className="mx-3" /> */}
    //     </div>
    //
    //   </div>
    // </div>
  );
};

export default Product;
