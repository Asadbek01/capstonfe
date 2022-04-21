import React, { useState, useEffect } from 'react'
import { Button } from 'react-bootstrap'


import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { ClearErrors, LoadUser, updateUser } from '../../redux/action'

const UpdateProfile = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [avatar, setAvatar] = useState('')
    const [avatarPreview, setAvatarPreview] = useState('/images/default_avatar.jpg')

    const navigate = useNavigate()
    const dispatch = useDispatch();

    const  user  = useSelector(state => state.user.loggedUser);
    const { error, isUpdated, loading } = useSelector(state => state.user)

    useEffect(() => {

        if (user) {
            setName(user.name);
            setEmail(user.email);
            setAvatarPreview( user && user.avatar)
        }

        if (error) {
            dispatch(ClearErrors());
        }

        if (isUpdated) {
            alert("edited Successfully")
            dispatch(LoadUser());

            navigate('/me')

            // dispatch({
            //     type: UPDATE_PROFILE_RESET
            // })
        }

    }, [dispatch, error, isUpdated])

    const submitHandler = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.set('name', name);
        formData.set('email', email);
        formData.set('avatar', avatar);

        dispatch(updateUser(formData))
    }

    const onChange = e => {
        const reader = new FileReader();

        reader.onload = () => {
            if (reader.readyState === 2) {
                setAvatarPreview( reader? reader.result : '')
                setAvatar(reader? reader.result : '')
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
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>

                        <div className="form-group  text-white">
                            <label htmlFor="email_field">Email</label>
                            <input
                                type="email"
                                id="email_field"
                                className="form-control"
                                name='email'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        <div className='form-group  text-white'>
                            <label htmlFor='avatar_upload'>Avatar</label>
                            <div className='d-flex align-items-center'>
                                <div>
                                    <figure className='mr-3 item-rtl'>
                                        <img
                                            src={avatarPreview? avatarPreview : ''}
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

                        <Button type="submit" variant="outline-primary" style={{width: '20%'}} disabled={loading ? true : false} >Update</Button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default UpdateProfile
