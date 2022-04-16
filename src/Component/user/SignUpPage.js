import React, { useEffect } from 'react';

import { useState } from 'react';
import { MainHomePage } from '../BooksStore/MainHomePage'
import { Alert, Button, Container, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ClearErrors, Register } from '../../redux/action';




export default function SignUp() {

  const isAuth = useSelector(state=> state.user.isAuth)
  const error = useSelector(state=> state.user.error)
  const loading = useSelector(state=> state.user.loading)


  
  const [reservation, setReservation] = useState({
    name: '',
    lastname: '',
    email: '',
    password: ""
  })
const { name, lastname, email, password} = reservation
const dispatch = useDispatch()
const history = useNavigate()


    useEffect(()=> {
      if(isAuth){
        history('/home')
      }

      if(error){
        <Alert variant="danger">
         {error.message}
      </Alert>
        dispatch(ClearErrors())
      }
        },[dispatch, isAuth, error])
const handleInput = (e) =>{
  setReservation({...reservation, [e.target.name]:  e.target.value})
}
    const handleSubmit = (e) =>{
       e.preventDefault()
      //  const formData = new FormData()
      //  formData.set("name", name);
      //  formData.set("email", email);
      //  formData.set("lastname", lastname);
      //  formData.set("password", password);

       dispatch(Register(reservation))
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
              <Container className="d-flex flex-column justify-content-center align-items-center w-50" style={{ minHeight: "100vh"}}>
              <Form onSubmit={handleSubmit} className="w-100 border p-4">
                  <h2>Register</h2>
                  <Form.Group className="mb-3" controlId="formBasicFirstName">
                      <Form.Label>First Name</Form.Label>
                      <Form.Control type="text" placeholder="Insert your first name..."
                      required
                      value={name} 
                      name="name"
                      onChange={handleInput} />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicLastName">
                      <Form.Label>Last Name</Form.Label>
                      <Form.Control type="text" placeholder="Insert your last name" 
                      required
                      value={lastname} 
                      name="lastname"onChange={handleInput} />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control type="email" placeholder="Insert your email"
                      required
                      value={email} 
                      name= "email"
                      onChange={handleInput} />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control type="password" placeholder="Password min 6 char..."
                      required
                      value={password} 
                      name= "password"
                      onChange={handleInput} />
                  </Form.Group>
  
                  <Button variant="primary"
                  className="d-flex mx-auto my-3" type="submit">Create an Account</Button>
                  <Link to='/' className="mt-3">Login</Link>
              </Form>
          </Container>
    
  );
}




