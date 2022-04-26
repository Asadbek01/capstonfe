import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBooks, getSearchedBooks } from "../../redux/action";
import { Books } from "./Books";
import { Alert, Button, Col, Jumbotron, Spinner } from "react-bootstrap";
import Pagination from "react-js-pagination";

export const MainHomePage = () => {
  const [bookSelected, setBookSelected] = useState(null);

  const books = useSelector((state) => state.book.stock);
  const page = useSelector((state) => state.book.stock);
  const totalBooks = useSelector((state) => state.book.stock);
  console.log("perpage ", totalBooks);
  const errorCode = useSelector((state) => state.book.errorCode);
  const isLoading = useSelector((state) => state.book.isLoading);

  const [currentPage, setCurrentPage] = useState(1);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks(currentPage));
  }, [dispatch, currentPage]);

  const changeBook = (book) => setBookSelected(book);

  function setCurrentPageNo(pageNumber) {
    setCurrentPage(pageNumber);
  }

  return (
    <>
      <div className="container fluid">
        <section id="products" className="container">
          <div className="row">
            {errorCode && (
              <Alert
                variant="danger"
                className="text-center"
                style={{ margin: "auto", width: "30%" }}
              >
                An error occurred: {errorCode}
              </Alert>
            )}
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

            {books.book &&
              books.book.map((book, i) => (
                <>
                  <Books
                    book={book}
                    bookSelected={bookSelected}
                    changeBook={changeBook}
                    key={i.id}
                  />
                </>
              ))}
          </div>
        </section>
      </div>

      <div className="d-flex justify-content-center mt-5">
        <Pagination
          activePage={currentPage}
          itemsCountPerPage={page}
          totalItemsCount={totalBooks}
          onChange={setCurrentPageNo}
          nextPageText={"Next"}
          prevPageText={"Prev"}
          firstPageText={"First"}
          lastPageText={"Last"}
          linkClass="page-link"
          itemClass="page-item"
        />
      </div>
    </>
  );
};

// <span className='ml-3'><CartIndicator /> </span>
// <button onClick={()=>navigate("/login")} className="btn ml-3 btn-primary" id="login_btn">Login</button>
