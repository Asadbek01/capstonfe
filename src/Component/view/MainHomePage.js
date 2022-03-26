// jest supertest

import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getBooks } from '../../redux/action'
import { Products } from '../Product/Products'


export const MainHomePage = () => {

  const books = useSelector((state) => state.book.data)
  const [isLoading, setIsLoading] = useState(false)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getBooks())
  }, [dispatch])
  
  return (
    
    
        <div className='container-fluid'>
         <h1 id="products_heading">Latest Books</h1>
         <section  id="products" className="container mt-5">
      <div className="row">
    {
      books.map((book, i) =>(
        <>
        
       <Products book= {book} key={i._id}/>
        </>
      ))
}
      </div>
    </section>
  </div>
  
  )
}
