import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { Spinner } from 'react-bootstrap'



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
                        <img className="rounded-circle img-fluid " style={{width: "70%", height: "30vh" }} src={user.avatar.url} alt={user.name} />
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
                        <Link to="/orders/me" className="btn btn-danger btn-block mt-5">
                            My Orders
                        </Link>
                    )}

                    <Link to="/password/update" className="btn btn-primary btn-block mt-3">
                        Change Password
                    </Link>
                </div>
            </div>
            </>
          )
        
      }
      </>
  )
}
