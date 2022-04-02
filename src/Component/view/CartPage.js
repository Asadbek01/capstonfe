import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { removeFromCartAction } from '../../redux/action'

export const CartPage = () => {
  const products = useSelector(state => state.book.data)
  const  dispatch = useDispatch()
  return (
    <Row>
    <Col sm={12}>
      <ul style={{ listStyle: "none" }}>
        {products.map((book, i) => (
          <li key={i} className="my-4">
            <Button variant="danger" onClick={() =>  dispatch(removeFromCartAction(i))}>
              remove
            </Button>
            <img
              className="book-cover-small"
              src={book.imageUrl}
              alt="book selected"
            />
            {book.title}
          </li>
        ))}
      </ul>
    </Col>
    <Row>
      <Col sm={12} className="font-weight-bold">
        TOTAL:{" "}
        {products.reduce(
          (acc, currentValue) => acc + parseFloat(currentValue.price),
          0
        )}
      </Col>
    </Row>
  </Row>
  )
}
