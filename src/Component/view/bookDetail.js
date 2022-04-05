import React ,{useState, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getBooksDetail } from '../../redux/action'
import { useParams } from 'react-router-dom'
import { Carousel } from 'react-bootstrap'

const BookDetail = () => {
    const BookWithSpesificId = useSelector(state => state.cart.cartBooks)
    const dispatch = useDispatch()
    
    const params = useParams()  
    useEffect(() => {
        dispatch(getBooksDetail(params.id ))
    }, [dispatch, params.id])
  return (
      <>
    <section className="product">
	<div className="product__photo">
		<div className="photo-container ml-5">
			<div className="photo-main">
				<div className="controls">
					<i className="material-icons">share</i>
				</div>
				<img src={BookWithSpesificId.images[0].imgUrl}  alt="green apple slice" />
			</div>
			<div className="photo-album">
				<ul>
					<li><img src="https://res.cloudinary.com/john-mantas/image/upload/v1537302064/codepen/delicious-apples/green-apple2.png" alt="green apple" /></li>
					<li><img src="https://res.cloudinary.com/john-mantas/image/upload/v1537303532/codepen/delicious-apples/half-apple.png" alt="half apple" /></li>
					<li><img src="https://res.cloudinary.com/john-mantas/image/upload/v1537303160/codepen/delicious-apples/green-apple-flipped.png" alt="green apple" /></li>
					<li><img src="https://res.cloudinary.com/john-mantas/image/upload/v1537303708/codepen/delicious-apples/apple-top.png" alt="apple top" /></li>
				</ul>
			</div>
		</div>
	</div>
	<div className="product__info ml-5">
		<div className="title">
			<h1>{BookWithSpesificId.title}</h1>
			<span>COD: 45999</span>
		</div>
		<div className="price">
			 <span>$7.93</span>
		</div>
		<div className="variant">
			<h3>SELECT A COLOR</h3>
			<ul>
				<li><img src="https://res.cloudinary.com/john-mantas/image/upload/v1537302064/codepen/delicious-apples/green-apple2.png" alt="green apple" /></li>
				<li><img src="https://res.cloudinary.com/john-mantas/image/upload/v1537302752/codepen/delicious-apples/yellow-apple.png" alt="yellow apple" /></li>
				<li><img src="https://res.cloudinary.com/john-mantas/image/upload/v1537302427/codepen/delicious-apples/orange-apple.png" alt="orange apple" /></li>
				<li><img src="https://res.cloudinary.com/john-mantas/image/upload/v1537302285/codepen/delicious-apples/red-apple.png" alt="red apple" /></li>
			</ul>
		</div>
		<div className="description">
			<h3>BENEFITS</h3>
			<ul>
				<li>Apples are nutricious</li>
				<li>Apples may be good for weight loss</li>
				<li>Apples may be good for bone health</li>
				<li>They're linked to a lowest risk of diabetes</li>
			</ul>
		</div>
		<button className="buy--btn">ADD TO CART</button>
	</div>
</section>

</>

  )
}
export default BookDetail;