import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import MetaData from "../layout/MetaData";
import Loader from "../layout/Loader";
import Sidebar from "./Sidebar";
import { ResponsivePieCanvas } from "@nivo/pie";
import { useDispatch, useSelector } from "react-redux";

import { getAdminProducts } from "../../actions/productActions";
import { allOrders } from "../../actions/orderActions";
import { allUsers } from "../../actions/userActions";

const Dashboard = () => {
  const dispatch = useDispatch();

  const { products } = useSelector((state) => state.products);
  const prod = useSelector((state) => state.products.products);
  const { users } = useSelector((state) => state.allUsers);
  const { orders, totalAmount, loading } = useSelector(
    (state) => state.allOrders
  );

  const data = [
    {
      id: "History",
      label: "History",
      value: 5,
      color: "hsl(149, 70%, 50%)",
    },
    {
      id: "Poetry",
      label: "Poetry",
      value: 3,
      color: "hsl(333, 70%, 50%)",
    },
    {
      id: "Philosophy",
      label: "Philosophy",
      value: 4,
      color: "hsl(189, 70%, 50%)",
    },
    {
      id: "Religion",
      label: "Religion",
      value: 2,
      color: "hsl(182, 70%, 50%)",
    },
    {
      id: "Comedy",
      label: "Comedy",
      value: 2,
      color: "hsl(115, 70%, 50%)",
    },
    {
      id: "Fiction",
      label: "Fiction",
      value: 4,
      color: "hsl(327, 70%, 50%)",
    },
    {
      id: "Computer-Science",
      label: "Computer-Science",
      value: 6,
      color: "hsl(350, 70%, 50%)",
    },
  ];

  let outOfStock = 0;
  products.forEach((product) => {
    if (product.stock === 0) {
      outOfStock += 1;
    }
  });

  useEffect(() => {
    dispatch(getAdminProducts());
    dispatch(allOrders());
    dispatch(allUsers());
  }, [dispatch]);

  return (
    <>
      <div className="row">
        <div className="col-12 col-md-2">
          <Sidebar />
        </div>

        <div className="col-12 col-md-10 dashboard">
          <h1 className="my-4">Dashboard</h1>

          {loading ? (
            <Loader />
          ) : (
            <>
              <div className="row pr-4">
                <div className="col-xl-12 col-sm-12 mb-3">
                  <div
                    className="card text-white border-primary o-hidden h-100 ml-auto"
                    style={{ border: "3px solid", width: "20%" }}
                  >
                    <div className="card-body text-dark">
                      <div className="text-center card-font-size">
                        Total Amount
                        <br /> <b>${totalAmount && totalAmount.toFixed(2)}</b>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="container mb-2" style={{ height: "44%" }}>
                <ResponsivePieCanvas
                  data={data}
                  margin={{ top: 40, right: 250, bottom: 40, left: 80 }}
                  innerRadius={0.5}
                  padAngle={0.7}
                  cornerRadius={3}
                  activeOuterRadiusOffset={8}
                  colors={{ scheme: "paired" }}
                  borderColor={{
                    from: "color",
                    modifiers: [["darker", 0.6]],
                  }}
                  arcLinkLabelsSkipAngle={10}
                  arcLinkLabelsTextColor="#333333"
                  arcLinkLabelsThickness={2}
                  arcLinkLabelsColor={{ from: "color" }}
                  arcLabelsSkipAngle={10}
                  arcLabelsTextColor="#333333"
                  defs={[
                    {
                      id: "dots",
                      type: "patternDots",
                      background: "inherit",
                      color: "rgba(255, 255, 255, 0.3)",
                      size: 4,
                      padding: 1,
                      stagger: true,
                    },
                    {
                      id: "lines",
                      type: "patternLines",
                      background: "inherit",
                      color: "rgba(255, 255, 255, 0.3)",
                      rotation: -45,
                      lineWidth: 6,
                      spacing: 10,
                    },
                  ]}
                  fill={[
                    {
                      match: {
                        id: "History",
                      },
                      id: "dots",
                    },
                    {
                      match: {
                        id: "Poetry",
                      },
                      id: "dots",
                    },
                    {
                      match: {
                        id: "Philosophy",
                      },
                      id: "dots",
                    },
                    {
                      match: {
                        id: "Religion",
                      },
                      id: "dots",
                    },
                    {
                      match: {
                        id: "Fiction",
                      },
                      id: "lines",
                    },
                    {
                      match: {
                        id: "Comedy",
                      },
                      id: "lines",
                    },
                    {
                      match: {
                        id: "Computer-Science",
                      },
                      id: "lines",
                    },
                  ]}
                  legends={[
                    {
                      anchor: "right",
                      direction: "column",
                      justify: false,
                      translateX: 140,
                      translateY: 0,
                      itemsSpacing: 2,
                      itemWidth: 60,
                      itemHeight: 14,
                      itemTextColor: "#999",
                      itemDirection: "left-to-right",
                      itemOpacity: 1,
                      symbolSize: 14,
                      symbolShape: "circle",
                    },
                  ]}
                />
              </div>
              {/* ))} */}

              <div className="row pr-4">
                <div className="col-xl-3 col-sm-6 mb-3">
                  <div
                    className="card text-dark border-success o-hidden h-100"
                    style={{ border: "2px solid" }}
                  >
                    <div className="card-body text-dark">
                      <div className="text-center  card-font-size">
                        Products
                        <br /> <b>{products && products.length}</b>
                      </div>
                    </div>
                    <Link
                      className="card-footer text-white clearfix small z-1"
                      to="/admin/products"
                    >
                      <span className="float-left text-dark">View Details</span>
                      <span className="float-right">
                        <i className="fa fa-angle-right"></i>
                      </span>
                    </Link>
                  </div>
                </div>

                <div className="col-xl-3 col-sm-6 mb-3">
                  <div
                    className="card text-white border-danger o-hidden h-100"
                    style={{ border: "2px solid" }}
                  >
                    <div className="card-body  text-dark">
                      <div className="text-center card-font-size">
                        Orders
                        <br /> <b>{orders && orders.length}</b>
                      </div>
                    </div>
                    <Link
                      className="card-footer text-white clearfix small z-1"
                      to="/admin/orders"
                    >
                      <span className="float-left  text-dark">
                        View Details
                      </span>
                      <span className="float-right text-dark">
                        <i className="fa fa-angle-right"></i>
                      </span>
                    </Link>
                  </div>
                </div>

                <div className="col-xl-3 col-sm-6 mb-3">
                  <div
                    className="card text-white border-info o-hidden h-100"
                    style={{ border: "2px solid" }}
                  >
                    <div className="card-body text-dark">
                      <div className="text-center card-font-size">
                        Users
                        <br /> <b>{users && users.length}</b>
                      </div>
                    </div>
                    <Link
                      className="card-footer text-dark clearfix small z-1"
                      to="/admin/users"
                    >
                      <span className="float-left text-dark">View Details</span>
                      <span className="float-right">
                        <i className="fa fa-angle-right"></i>
                      </span>
                    </Link>
                  </div>
                </div>

                <div className="col-xl-3 col-sm-6 mb-3">
                  <div
                    className="card text-white border-warning o-hidden h-100"
                    style={{ border: "2px solid" }}
                  >
                    <div className="card-body text-dark">
                      <div className="text-center card-font-size">
                        Out of Stock
                        <br /> <b>{outOfStock}</b>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
