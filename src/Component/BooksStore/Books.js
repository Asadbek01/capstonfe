import React from 'react'
import { Alert, Button } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
export const Books = ({book, bookSelected,changeBook}) => {
  // const [isLoading, setIsLoading] = useState(true)
  console.log(book)
  const navigate = useNavigate()

  return (
    <>
   
    <div className="col-sm-12 col-md-6 col-lg-3 my-3">
    <div   className={bookSelected?.id === book.id ? "border-thick mt-3" : "mt-3"}
    onClick={() => changeBook(book)}
    style={{ cursor: "pointer" }}>
      <div className='card card_book'>
      <img
        className="card-img-top mx-auto"
        src={book.images[0].imgUrl}
        />
      <div className="card-body d-flex flex-column ">
        <h5 className="card-title">
        <Link to={`/detail/${book._id}`}>{book.title}</Link>
        </h5>
        <div className="ratings mt-auto">
          <div className="rating-outer">
            <div className="rating-inner"></div>
          </div>
          <span id="no_of_reviews">({book.ratings} Reviews)</span>
        </div>
        <div className='d-flex'>
        <Button style={{width: "50%"}} variant="outline-danger" className='ml-2'>${book.price}</Button>
        <Button 
        style={{width: "50%"}} 
        variant="outline-success"
        className='ml-2'
        onClick={()=> navigate(`/detail/${book._id}`)}>View</Button>
      </div>
      </div>
    </div>
  </div>
  </div>
    </>
    )
}
