import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MDBDataTable } from "mdbreact";
import { useDispatch, useSelector } from "react-redux";
import { getAdminBooks, ClearErrors } from "../../redux/action";
import { Alert, Spinner } from "react-bootstrap";
import Sidebar from "./SideBarAdmin";
export const BookList = () => {
  const books = useSelector((state) => state.book.stock);
  const error = useSelector((state) => state.book.errorCode);

  const isLoading = useSelector((state) => state.book.isLoading);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getAdminBooks());
    if (error) {
      <Alert
        variant="danger"
        className="text-center"
        style={{ margin: "auto", width: "30%" }}
      >
        An error occurred: {error}
      </Alert>;
    }
  }, [dispatch, isLoading, error]);
  const setBooks = () => {
    const data = {
      columns: [
        {
          label: "ID",
          field: "id",
          sort: "asc",
        },
        {
          label: "Title",
          field: "title",
          sort: "asc",
        },
        {
          label: "Price",
          field: "price",
          sort: "asc",
        },
        {
          label: "Stock",
          field: "stock",
          sort: "asc",
        },
        {
          label: "Actions",
          field: "actions",
        },
      ],
      rows: [],
    };
    {
      books.book && books.book.map((element) => {
            data &&
              data.rows.push({
                id: element._id,
                title: element.title,
                price: `$${element.price}`,
                stock: element.stock,
                actions: 
                  <>
                    <Link
                      to={`/books/admin/${element._id}`}
                      className="btn btn-primary py-1 px-2"
                    >
                      {" "}
                      <i className="fa fa-pencil"></i>
                    </Link>
                    <button className="btn btn-danger py-1 px-2 ml-2">
                      <i className="fa fa-trash"></i>
                    </button>
                  </>
              });
          }) 
          return data
    }
  };
  return (
    <>
      <div className="row" style={{height:"95vh"}}>
        <div className="col-12 col-md-2">
          <Sidebar />
        </div>
        <div className="col-12 col-md-10">
          <>
            {isLoading && (
              <div className="d-flex m-auto">
                <Spinner
                  style={{ margin: "auto", fontSize: "20px" }}
                  animation="border"
                  role="status"
                  variant="primary"
                />
                <h2 className="mt-1 ml-3 text-white ">Loading...</h2>
              </div>
            )}
             <div className="row">

            <MDBDataTable
              data={setBooks()}
              className="px-3 text-white mb-n5"
              bordered
              striped
              hover
            />
             </div>
          </>
        </div>
      </div>
    </>
  );
};
