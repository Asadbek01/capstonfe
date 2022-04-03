import { Component } from "react";
import { Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";
import { addToCartAction } from '../../redux/action' 





class BookDetail extends Component {
  state = {
    book: null,
  };

  componentDidUpdate(prevProps) {
    if (prevProps.bookSelected !== this.props.bookSelected) {
      this.setState({
        book: this.props.bookSelected,
    });
    console.log( this.props.bookSelected);
    }
  }

  render() {
    return (
      <div className="mt-3">
        
          <>
            <Row>
              <Col sm={12}>
                <h1>{}</h1>
              </Col>
            </Row>
            <Row className="mt-3">
              <Col sm={4}>
                <div className="mt-3">
                  <img
                    className="book-cover"
                    
                    alt="book selected"
                  />
                </div>
              </Col>
              <Col sm={8}>
                <p>
                  <span className="font-weight-bold">Description:</span>
               
                </p>
                <p>
                  <span className="font-weight-bold">Price:</span>
                  {/* {this.state.book.price} */}
                </p>
                
                    <Button color="primary" onClick={() => {
                       // book is the book object, with price, title, description
                   useDispatch(addToCartAction(this.state.book))
                    }}>
                      ADD TO CART
                    </Button>
               
              </Col>
            </Row>
          </>
        
      </div>
    );
  }
}

export default BookDetail
