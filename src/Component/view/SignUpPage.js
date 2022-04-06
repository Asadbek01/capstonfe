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
import { MainHomePage } from '../BooksStore/MainHomePage'



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
    marginLeft: theme.spacing(25)
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
       
        <Typography component="h1" variant="h5">
          Create an Account
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
          </Grid>
          <Button
            type="submit"
            variant="contained"
           color='primary'
            className={classes.submit}
            style={{width: "50%"}}
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


