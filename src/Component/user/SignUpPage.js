import React, { useEffect } from 'react';

import { useState } from 'react';
import { MainHomePage } from '../BooksStore/MainHomePage'
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ClearErrors, UserRegister } from '../../redux/action';




export default function SignUp() {

const dispatch = useDispatch()
const {isAuth, error, loading} = useSelector(state=> state.user)
  const [reservation, setReservation] = useState({
      name: '',
      lastname: '',
      email: '',
      password: ""
    })
  

    useEffect(()=> {

      if(error){
        alert.error(error)
        dispatch(ClearErrors())
      }
        },[dispatch, isAuth, error])

    const handleSubmit = (e) =>{
       e.preventDefault()
       dispatch(UserRegister(reservation))
    }
 
  
    // const handleSubmit = async (e) => {
    //   e.preventDefault()
    //   console.log(reservation)
    //   try {
    //     let response = await fetch(
    //       'http://localhost:3002/users/register',
    //       {
    //         method: 'POST',
    //         body: JSON.stringify(reservation),
    //         headers: {
    //           'Content-type': 'application/json',
    //         },
    //       }
    //     )
    //     if (response.ok) {
    //       setIsRegistered(true)
    //       setReservation({
    //         name: '',
    //         lastname: '',
    //         email: '',
    //         password: ""
  
    //       })
    //     } else {
    //       alert('ERROR')
    //     }
    //   } catch (error) {
    //     alert('ERROR', error.message)
    //   }
    // }

  return (
    <>
    {
            isAuth ? (
              <MainHomePage />
            ): (
              <Container className="d-flex flex-column justify-content-center align-items-center w-50" style={{ minHeight: "100vh"}}>
              <Form onSubmit={handleSubmit} className="w-100 border p-4">
                  <h2>Register</h2>
                  <Form.Group className="mb-3" controlId="formBasicFirstName">
                      <Form.Label>First Name</Form.Label>
                      <Form.Control type="text" placeholder="Insert your first name..."
                      required
                      value={reservation.name} onChange={e => setReservation(e.target.value)} />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicLastName">
                      <Form.Label>Last Name</Form.Label>
                      <Form.Control type="text" placeholder="Insert your last name" 
                      required
                      value={reservation.lastname} onChange={e => setReservation(e.target.value)} />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control type="email" placeholder="Insert your email"
                      required
                      value={reservation.email} onChange={e => setReservation(e.target.value)} />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control type="password" placeholder="Password min 6 char..."
                      required
                      value={reservation.password} onChange={e => setReservation(e.target.value)} />
                  </Form.Group>
  
                  <Button variant="primary"
                  className="d-flex mx-auto my-3" type="submit">Create an Account</Button>
                  <Link to='/' className="mt-3">Login</Link>
              </Form>
          </Container>
    )
  }
    </>
  );
}




