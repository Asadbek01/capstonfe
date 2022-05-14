import React from "react";
import { Link } from "react-router-dom";

const OrderSuccess = () => {
  return (
    <>
      <div className="row justify-content-center">
        <div className="col-6 mt-5 text-center">
          <img
            className="my-5 img-fluid d-block mx-auto"
            src="/images/order_success.png"
            alt="Order Success"
            width="150"
            height="150"
          />

          <h2>Your Order paymnet has been paid successfully.</h2>
          <Link
            to="/orders/me"
            type="button"
            className=" mt-3 mb-5 btn btn-primary"
          >
            Go to Orders
          </Link>
        </div>
      </div>
    </>
  );
};

export default OrderSuccess;
