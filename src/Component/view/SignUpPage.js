// import {  useState } from 'react'
// import { Form, Button} from 'react-bootstrap'
// import {Row, Col, Container} from 'react-bootstrap'


// const SignUp = () => {
//  

//   return (
//     <>
//     {
//       isRegistered ? (
//         <MainHomePage />
//       ): (
//         <Container className='mt-5' >
//         <Row className="d-flex justify-content-center ">
//        <Col md={8}>
   
//          <h2 className='mt-5'>Sign Up</h2>
         
//          <Form onSubmit= className="mt-5">
//            <Form.Group className='d-flex '>
//              <Form.Label  className='text-danger' > <strong className='h5 mr-5'>Name:</strong></Form.Label>
//              <Form.Control
//                type='text'
//                placeholder='Input your name'
//                className=" d-block ml-auto mb-2 rounded-pill"
//                value={reservation.name}
//                onChange={(e) => {
//                  handleInput('name', e.target.value)
//                }}
            
//              />
//            </Form.Group>
//            <Form.Group className='d-flex '>
//            <Form.Label  className=' text-danger' > <strong className='h5 mr-5' style={{paddingRight: "5px"}}>Email:</strong></Form.Label>
//              <Form.Control
//                type='email'yy
//                placeholder='Input your email'
//                className=" d-block ml-auto mb-2 rounded-pill"
//               
              
//              />
//            </Form.Group>
   
//            <Form.Group className='d-flex mt-4'>
//            <Form.Label  className='text-danger' > <strong className='h5 mr-4'>Password:</strong></Form.Label>
//              <Form.Control
//                type='password'
//                placeholder='Input your password'
//                className=" d-block mx-auto mb-2 rounded-pill"
//               
//                required
//              />
//            </Form.Group>
//            <Button
//            className='rounded-pill mt-5 mb-4'
//            variant='success'
//             type='submit'>
//              Create Account
//            </Button>
//            <p>Already have an account? <a href="/login">Login</a></p>
   
//          </Form>
//          </Col>
//        </Row>
//        </Container>
//       )
//     }
  
//     </>
//   )
// }

// export default SignUp


import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useState } from 'react';
import { MainHomePage } from './MainHomePage'



const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

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
          'http://localhost:3002/user/register',
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
        console.log(error)
      }
    }
  const classes = useStyles();

  return (
    <>
    {
            isRegistered ? (
              <MainHomePage />
            ): (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate
        onSubmit={handleSubmit}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                value={reservation.name}
                onChange={(e) => {
                handleInput('name', e.target.value)
                 }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
                value={reservation.lastname}
                onChange={(e) => {
                handleInput('lastname', e.target.value)
                 }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={reservation.email}
                   onChange={(e) => {
                    handleInput('email', e.target.value)
          }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={reservation.password}
                   onChange={(e) => {
                   handleInput('password', e.target.value)
                               }}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="/login" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
      
      </Box>
    </Container>
    )
  }
    </>
  );
}


