import React from 'react'
import CartIndicator from './CartIndicator'
// import '../../assets/'
export const MyNavbar = () => {
  return (
    <>
     <nav class="navbar row">
      <div class="col-12 col-md-3">
        <div class="navbar-brand">
         <img src='./assets/logo_nav-1.png' className='logo_img' />
        </div>
      </div>

      <div class="col-12 col-md-6 mt-2 mt-md-0">
        <div class="input-group">
          <input
            type="text"
            id="search_field"
            class="form-control"
            placeholder="Enter Product Name ..."
          />
          <div class="input-group-append">
            <button id="search_btn" class="btn">
              <i class="fa fa-search" aria-hidden="true"></i>
            </button>
          </div>
        </div>
      </div>

      <div class="col-12 col-md-3 mt-4 mt-md-0 text-center">
        <div className='d-flex ml-5'>

        <button class="btn ml-3 " id="login_btn">Login</button>
         <span className='ml-3'><CartIndicator /> </span>    
        </div>

      </div>
    </nav>
    </>
  )
}
