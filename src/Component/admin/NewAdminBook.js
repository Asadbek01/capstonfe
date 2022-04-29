import React, { useEffect, useState } from 'react'
import { Alert, Button, Spinner } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { createdBooksByAdmin, ClearErrors } from '../../redux/action'
import Sidebar from './SideBarAdmin'

export const NewAdminBook = () => {
    const [title, settitle] = useState('')
    const [price, setprice] = useState(0)
    const [description, setdescription] = useState('')
    const [category, setcategory] = useState('')
    const [stock, setstock] = useState(0)
    const [images, setimages] = useState([])
    const [imagesPreview, setimagesPreview] = useState([])
 

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const categories = [
        "History",
        "Poetry",
        "Philosophy",
        "Religion",
        "Fiction",
        "Comedy",
        "Computer-Science",
    ];

    const adminBooks = useSelector(state => state.book.adminBooks)
    const isLoading = useSelector(state => state.book.isLoading)
    const errorCode = useSelector(state => state.book.errorCode)

        

     
    const handleSubmit = (e) => {
        e.preventDefault()
      

        const formData = new FormData()
        formData.set('title', title)
        formData.set('price', price)
        formData.set('description', description)
        formData.set('category', category)
        formData.set('stock', stock)

        images.forEach(image => {
            formData.append('images', image)
        })
        dispatch(createdBooksByAdmin(formData))
       
    }

    const onChange = e => {
        const files = Array.from(e.target.files)

        setimagesPreview([])
        setimages([])

        files.forEach(file => {
            const reader = new FileReader()

            reader.onload = () => {
                if (reader.readyState === 2){
                    setimagesPreview(oldArray => [...oldArray, reader.result])
                    setimages(oldArray => [...oldArray, reader.result])
            }
        }
    reader.readAsDataURL(file)
  })

}



return (
  <>
   {errorCode &&
            <Alert
                variant="danger"
                className="text-center mt-3"
                style={{ margin: "auto", width: "30%" }}
            >
           {errorCode.message}
            </Alert>
        }
   <div className="row" >
        <div className="col-12 col-md-2 h-100">
          <Sidebar  />
        </div>

        <div className="col-12 col-md-8  m-auto">
             
           
           <div className="wrapper text-white" style={{height:"100vh"}}>
                            <form className="shadow-lg" onSubmit={handleSubmit} encType='multipart/form-data'>
                                <h2 className="">New Product</h2>

                                <div className="form-group">
                                    <label htmlFor="name_field">Title</label>
                                    <input
                                        type="text"
                                        id="name_field"
                                        className="form-control"
                                        value={title}
                                        onChange={(e) => settitle(e.target.value)}
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="price_field">Price</label>
                                    <input
                                        type="number"
                                        id="price_field"
                                        className="form-control"
                                        value={price}
                                        onChange={(e) => setprice(e.target.value)}
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="description_field">Description</label>
                                    <textarea className="form-control" id="description_field" rows="8" value={description} onChange={(e) => setdescription(e.target.value)}></textarea>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="category_field">Category</label>
                                    <select className="form-control" id="category_field" value={category} onChange={(e) => setcategory(e.target.value)}>
                                        {categories.map(category => (
                                            <option key={category} value={category} >{category}</option>
                                        ))}

                                    </select>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="stock_field">Stock</label>
                                    <input
                                        type="number"
                                        id="stock_field"
                                        className="form-control"
                                        value={stock}
                                        onChange={(e) => setstock(e.target.value)}
                                    />
                                </div>

                                <div className='form-group'>
                                    <label>Images</label>

                                    <div className='custom-file'>
                                        <input
                                            type='file'
                                            name='product_images'
                                            className='custom-file-input'
                                            id='customFile'
                                            onChange={onChange}
                                            multiple
                                        />
                                        <label className='custom-file-label' htmlFor='customFile'>
                                            Choose Images
                                     </label>
                                    </div>

                                    {imagesPreview.map(img => (
                                        <img src={img} key={img} alt="Images Preview" className="mt-3 mr-2" width="55" height="52" />
                                    ))}

                                </div>


                                <Button
                                    type="submit"
                                    className="d-flex ml-auto"
                                    variant="outline-success"
                                    disabled={isLoading ? true : false}
                                >
                                    CREATE
                                </Button>

                            </form>
                        </div>
        </div>
      </div>
  </>
)
}
