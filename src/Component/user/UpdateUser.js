import React, { useState, useEffect } from 'react'
import { Button } from 'react-bootstrap'


import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { ClearErrors, LoadUser, updateProfile } from '../../redux/action'

const UpdateProfile = () => {


    const navigate = useNavigate()
    const dispatch = useDispatch();

    const  user  = useSelector(state => state.user.loggedUser);
    const  isUpdated  = useSelector(state => state.user)
    const  error  = useSelector(state => state.user.error)
    const [userDetails, setUserDetails] = useState({
        name: '',
        email: '',
        avatar: ''
    })

    useEffect(() => {

        user && setUserDetails({
            name: user.name,
            email: user.email,
            avatar: user.avatar
        })
        

        if (error) {
            dispatch(ClearErrors());
        }

        if (isUpdated) {
            dispatch(LoadUser());

            navigate('/me')

            // dispatch({
            //     type: UPDATE_PROFILE_RESET
            // })
        }

    }, [dispatch, user, error, isUpdated])

    const submitHandler = (e) => {
        e.preventDefault();

       

        dispatch(updateProfile(userDetails))
    }
    const handleInput = (field, value) => {
        setUserDetails(details => ({
            ...details,
            [field]: value
        }))
    }

    const onChange = e => {
        const reader = new FileReader();

        reader.onload = () => {
            if (reader.readyState === 2) {
                user.avatar(reader? reader.result : '')
            }
        }

        reader.readAsDataURL(e.target.files[0])

    }
    return (
        <>
    
            <div className="row wrapper d-flex justify-content-center mt-5">
                <div className="col-10 col-lg-5 ">
                    <form className="shadow-lg" onSubmit={submitHandler} encType='multipart/form-data'>
                        <h1 className="mt-2 mb-5 text-white">Update Profile</h1>

                        <div className="form-group  text-white">
                            <label htmlFor="email_field">Name</label>
                            <input
                                type="name"
                                id="name_field"
                                className="form-control"
                                name='name'
                                value={user.name}
                                onChange={e => handleInput('name', e.target.value)}                         />
                        </div>

                        <div className="form-group  text-white">
                            <label htmlFor="email_field">Email</label>
                            <input
                                type="email"
                                id="email_field"
                                className="form-control"
                                name='email'
                                value={user.email}
                                onChange={e => handleInput('email', e.target.value)}
                            />
                        </div>

                        <div className='form-group  text-white'>
                            <label htmlFor='avatar_upload'>Avatar</label>
                            <div className='d-flex align-items-center'>
                                <div>
                                    <figure className='mr-3 item-rtl'>
                                        <img
                                            src={user? user.avatar  : ''}
                                            alt='Avatar Preview'
                                            style={{width: '130px' , height: '85px', borderRadius: '50%'}}
                                        />
                                    </figure>
                                </div>
                                <div className='custom-file'>
                                    <input
                                        type='file'
                                        name='avatar'
                                        className='custom-file-input'
                                        id='customFile'
                                        accept='image/*'
                                        onChange={onChange}
                                    />
                                    <label className='custom-file-label' htmlFor='customFile'>
                                        Choose Avatar
                                </label>
                                </div>
                            </div>
                        </div>

                        <Button type="submit" variant="outline-primary" style={{width: '20%'}} 
                       onClick={(e) =>document.location.reload(true)}>Update</Button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default UpdateProfile
