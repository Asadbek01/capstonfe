import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import CartIndicator from './CartIndicator'
// import '../../assets/'
export const MyNavbar = () => {
  const [registered, setRegistered] = useState(true)
  const navigate = useNavigate()

  return (
    
    <>
   
     <nav className="navbar row">
      <div className="col-12 col-md-3">
        <div className="navbar-brand">
         <img src='./assets/logo_nav-1.png'
          className='logo_img' 
          onClick={()=> navigate("/")}
          style={{cursor: "pointer"}}
          />
        </div>
      </div>

      <div className="col-12 col-md-6 mt-2 mt-md-0">
        <div className="input-group">
          <input
            type="text"
            id="search_field"
            className="form-control"
            placeholder="Enter Product Name ..."
          />
          <div className="input-group-append">
            <button id="search_btn" className="btn btn-primary">
              <i className="fa fa-search" aria-hidden="true"></i>
            </button>
          </div>
        </div>
      </div>

      <div className="col-12 col-md-3 mt-4 mt-md-0 text-center">
        <div className='d-flex ml-5'>
         
            <span className='ml-3'><CartIndicator /> </span>   
            <button onClick={()=>navigate("/login")} className="btn ml-3 btn-primary" id="login_btn">Login</button>
           
        </div>

      </div>
    </nav>
    </>
  )
}
