import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";
import { Box, Button, Container, Grid, TextField, Typography } from '@mui/material';

async function loginUser(credentials) {
 return await fetch('http://127.0.0.1:8000/api/login', {
   method: 'POST',
   headers: {
     'Content-Type': 'application/json'
   },
   body: JSON.stringify(credentials)
 })
   .then(data => data.json()).then(data => data)
   .catch(error => console.log(error))
}

const Login = ({ setToken }) => {
  const [email, setUserEmail] = useState();
  const [password, setPassword] = useState();
  const [isSubmitting, setSubmitting] = useState(false);
  

  const handleSubmit = async e => {
    e.preventDefault();
    setSubmitting(true);
    const token = await loginUser({
      email,
      password
    });
    localStorage.setItem('user', JSON.stringify(token.user))
    localStorage.setItem('token', token.token)
    setToken(token.token);
  }


  return (
    <>
      <Box
        component="main"
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexGrow: 1,
          minHeight: '100%'
        }}
      >
        <Container maxWidth="sm">
          <form onSubmit={handleSubmit}>
            <Box sx={{ my: 3 }}>
              <Typography
                color="textPrimary"
                variant="h4"
              >
                Sign in
              </Typography>
              <Typography
                color="textSecondary"
                gutterBottom
                variant="body2"
              >
                Sign in on the internal platform
              </Typography>
            </Box>
            
            <Box
              sx={{
                pb: 1,
                pt: 3
              }}
            >
              <Typography
                align="center"
                color="textSecondary"
                variant="body1"
              >
                or login with email address
              </Typography>
            </Box>
            <TextField
              error=""
              fullWidth
              label="Email Address"
              margin="normal"
              name="email"
              onChange={e => setUserEmail(e.target.value)}
              type="email"
              variant="outlined"
            />
            <TextField
              error=""
              fullWidth
              label="Password"
              margin="normal"
              name="password"
              onChange={e => setPassword(e.target.value)}
              type="password"
              variant="outlined"
            />
            <Box sx={{ py: 2 }}>
              <Button
                color="primary"
                disabled={isSubmitting}
                fullWidth
                size="large"
                type="submit"
                variant="contained"
              >
                Sign In Now
              </Button>
            </Box>
            <Typography
              color="textSecondary"
              variant="body2"
            >
              Don&apos;t have an account?
              {' '}
              <Link
                to="/register"
                  variant="subtitle2"
                  underline="hover"
                  sx={{
                    cursor: 'pointer'
                  }}
                >
                  Sign Up
                </Link>
            </Typography>
          </form>
        </Container>
      </Box>
    </>
  );
};

export default Login;
Login.propTypes = {
  setToken: PropTypes.func.isRequired
};