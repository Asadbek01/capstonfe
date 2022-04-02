import Button from 'react-bootstrap/Button'
import { FaShoppingCart } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'



const CartIndicator = () => {
  const navigate = useNavigate()
  const cartLength = useSelector(state => state.book.data.length)

  return (
    <div className='ml-auto mt-2'>
      <Button color='primary' onClick={() => navigate('/cart')}>
        <FaShoppingCart />
        <span className='ml-2'>{cartLength}</span>
      </Button>
    </div>
  )
}

export default CartIndicator