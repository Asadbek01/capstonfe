import React, { Fragment } from 'react'
import { Link, useNavigate } from 'react-router-dom'


import { useDispatch, useSelector } from 'react-redux'
// import { addItemToCart, removeItemFromCart } from '../../actions/cartActions'
import { addToCartAction, removeFromCartAction } from '../../redux/action'
// const [quantity, setQuantity] = useState(1)

export const CartPage = () => {

    const dispatch = useDispatch();
    const history = useNavigate()

    const cartItems = useSelector((state) => state.cart.cartBooks)
    console.log(cartItems)

    const removeCartItemHandler = (id) => {
      dispatch(removeFromCartAction(id))
    }

    const increaseQty = (id, quantity, stock) => {
        const newQty = quantity + 1;

        if (newQty > stock) return;

        dispatch(addToCartAction(id, newQty))
    }

    const decreaseQty = (id, quantity) => {

        const newQty = quantity - 1;

        if (newQty <= 0) return;

        dispatch(addToCartAction(id, newQty))

    }

    const checkoutHandler = () => {
        history('/login?redirect=shipping')
    }

    return (
        <Fragment>
            {cartItems.length === 0 ? <h2 className="text-center text-white">Your Cart is Empty</h2> : (
                <Fragment>
                    <h2 className="mt-5 text-white">Your Cart: <b>{cartItems.length} items</b></h2>

                    <div className="row d-flex justify-content-between">
                        <div className="col-12 col-lg-8 mx-2">

                            {cartItems.map((item, i) => (
                                <Fragment>
                                    <hr style={{border: "1px solid "}} />

                                    <div className="cart-item" key={i.id}>
                                        <div className="row">
                                            <div className="col-4 col-lg-3">
                                                <img src={item.images[0].imgUrl} alt="books" height="90" width="115" />
                                            </div>

                                            <div className="col-5 col-lg-3">
                                                <Link className='' to={`/books/${item.books}`}>{item.title}</Link>
                                            </div>


                                            <div className="col-4 col-lg-2 mt-4 mt-lg-0">
                                                <p className='text-white' id="card_item_price">${item.price}</p>
                                            </div>

                                            <div className="col-4 col-lg-3 mt-4 mt-lg-0">
                                                <div className="stockCounter d-inline">
                                                    <span className="btn btn-danger minus mr-1" onClick={() => decreaseQty(item.product, item.quantity)}>-</span>

                                                    <input type="number" className="form-control count d-inline" value={item.quantity} readOnly />

                                                    <span className="btn btn-primary plus ml-1" onClick={() => increaseQty(item.product, item.quantity, item.stock)}>+</span>
                                                </div>
                                            </div>

                                            <div className="col-4 col-lg-1 mt-4 mt-lg-0">
                                                <i id="delete_cart_item" className="fa fa-trash btn btn-danger" onClick={() => removeCartItemHandler(i)} ></i>
                                            </div>

                                        </div>
                                    </div>
                                    <hr style={{border: "1px solid"}}/>
                                </Fragment>
                            ))}

                        </div>

                        <div className="col-12 col-lg-3 my-4 mx-2" >
                            <div id="order_summary" className=' text-white'>
                                <h4>Order Summary</h4>
                                <hr style={{ border: '1px solid'}}/>
                                <p>Subtotal:  <span className="order-summary-values">{cartItems.reduce((acc, currentValue) => acc + parseFloat(currentValue.price), 0)}</span></p>
                                {/* <p>Est. total: <span className="order-summary-values">${cartItems.reduce((acc, item) => acc + item.quantity * item.price, 0).toFixed(2)}</span></p> */}

                                <hr  style={{ border: '1px solid'}} />
                                <button id="checkout_btn" className="btn btn-primary btn-block" onClick={checkoutHandler}>Check out</button>
                            </div>
                        </div>
                    </div>
                </Fragment>

            )}
        </Fragment>
        //  <Row>
/* //         <Col sm={12} className="font-weight-bold ml-5 text-white">
//           TOTAL:{" "}
//           {book.reduce(
//             (acc, currentValue) => acc + parseFloat(currentValue.price),
//             0
//           )}
//         </Col>
//       </Row> */
    )
}

