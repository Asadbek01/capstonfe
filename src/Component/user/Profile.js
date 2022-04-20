import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { Button, Spinner } from 'react-bootstrap'



export const Profile = () => {
    const user = useSelector(state=> state.user.loggedUser)
    const loading = useSelector(state=> state.user.loading)
  return (
      <>
      {
          loading ? (<div className="d-flex  m-auto">
          <Spinner
            style={{ margin: "auto", fontSize: "20px" }}
            animation="border"
            role="status"
            variant="primary"
          />
          <h2 className="mt-1 ml-3 ">Loading...</h2>
        </div>
          ):( <>
            <h2 className="mt-5 ml-5 text-white">My Profile</h2>
            <div className="row justify-content-around mt-5 user-info">
                <div className="col-12 col-md-3">
                    <figure className='avatar avatar-profile'>
                        <img className="img-fluid"
                         src={user.avatar.url} alt={user.name}
                         style={{width:'200px', borderRadius: "50%"}}
                         />
                    </figure>
                    <Link to="/me/update" id="edit_profile" className="btn btn-primary btn-block my-5">
                        Edit Profile
                    </Link>
                </div>

                <div className="col-12 col-md-5">
                    <h4 className='text-white'>Full Name</h4>
                    <p className='text-secondary'>{user.name}</p>

                    <h4 className='text-white' >Email Address</h4>
                    <p className='text-secondary'>{user.email}</p>

                    <h4 className='text-white' >Joined On</h4>
                    <p className='text-secondary'>{String(user.createdAt).substring(0, 10)}</p>

                    {user.role !== 'admin' && (
                        <Button to="/orders/me" variant='outline-danger'  className=" btn-block mt-3" style={{size: "20%"}} >
                            My Orders
                        </Button>
                    )}

                    <Button to="/password/update" variant='outline-primary' 
                    size='20px'
                    className=" btn-block mt-3">
                        Change Password
                    </Button>
                </div>
            </div>
            </>
          )
        
      }
      </>
  )
}
