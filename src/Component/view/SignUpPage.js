import React from 'react';

import { useState } from 'react';
import { MainHomePage } from '../BooksStore/MainHomePage'
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';




export default function SignUp() {
  const [isRegistered, setIsRegistered] = useState(false)
    const [reservation, setReservation] = useState({
      name: '',
      lastname: '',
      email: '',
      password: ""
    })
  
    const handleInput = (fieldName, value) => {
      setReservation({
        ...reservation,
        [fieldName]: value,
      })
    }
  
    const handleSubmit = async (e) => {
      e.preventDefault()
      console.log(reservation)
      try {
        let response = await fetch(
          'http://localhost:3002/users/register',
          {
            method: 'POST',
            body: JSON.stringify(reservation),
            headers: {
              'Content-type': 'application/json',
            },
          }
        )
        if (response.ok) {
          setIsRegistered(true)
          setReservation({
            name: '',
            lastname: '',
            email: '',
            password: ""
  
          })
        } else {
          alert('ERROR')
        }
      } catch (error) {
        alert('ERROR', error.message)
      }
    }

  return (
    <>
    {
            isRegistered ? (
              <MainHomePage />
            ): (
              <Container className="d-flex flex-column justify-content-center align-items-center w-50" style={{ minHeight: "100vh"}}>
              <Form onSubmit={handleSubmit} className="w-100 border p-4">
                  <h2>Register</h2>
                  {/* <Form.Group className="mb-3" controlId="formBasicFirstName">
                      <Form.Label>First Name</Form.Label>
                      <Form.Control type="text" placeholder="Insert your first name..." value={reservation.name} onChange={e => handleInput(e.target.value)} />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicLastName">
                      <Form.Label>Last Name</Form.Label>
                      <Form.Control type="text" placeholder="Insert your last name" value={reservation.lastname} onChange={e => handleInput(e.target.value)} />
                  </Form.Group> */}
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control type="email" placeholder="Insert your email" value={reservation.email} onChange={e => handleInput(e.target.value)} />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control type="password" placeholder="Password min 6 char..." value={reservation.password} onChange={e => handleInput(e.target.value)} />
                  </Form.Group>
  
                  <Button variant="primary"
                  className="d-flex mx-auto my-3" type="submit">Create an Account</Button>
                  <Link to='/login' className="mt-3">Login</Link>
              </Form>
          </Container>
    )
  }
    </>
  );
}




