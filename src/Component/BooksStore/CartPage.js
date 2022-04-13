import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { removeFromCartAction } from "../../redux/action";

export const CartPage = () => {
  const book = useSelector((state) => state.cart.cartBooks);
  const dispatch = useDispatch();
  return (
    <Row>
      <Col sm={12}>
        {book.map((book, i) => (
          <Card key={i} className="my-4">
            <Button
              variant="danger"
              onClick={() => dispatch(removeFromCartAction(i))}
            >
              remove
            </Button>
            <Card.Img
              className="book-cover-small"
              src={book.images[0].imgUrl}
              alt="book selected"
            />
            {book.title}
          </Card>
        ))}
      </Col>
      <Row>
        <Col sm={12} className="font-weight-bold ml-5 text-white">
          TOTAL:{" "}
          {book.reduce(
            (acc, currentValue) => acc + parseFloat(currentValue.price),
            0
          )}
        </Col>
      </Row>
    </Row>
  );
};
