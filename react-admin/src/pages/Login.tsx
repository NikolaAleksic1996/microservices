import React, { SyntheticEvent, useState } from 'react';
import { Button, Container, TextField, Typography } from '@mui/material';
import { Navigate } from 'react-router-dom';
import axios from 'axios';

const formStyles = {
  width: '100%',
  marginTop: '1rem',
};

const submitStyles = {
  margin: '1rem 0',
};

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [redirect, setRedirect] = useState(false);

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();

    await axios.post('login', {
      email,
      password,
    });

    setRedirect(true);
  };

  if (redirect) {
    return <Navigate to="/" />;
  }

  return (
    <Container component="main" maxWidth="xs">
      <Typography component="h1" variant="h5">
        Sign in
      </Typography>
      <form style={formStyles} onSubmit={handleSubmit}>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          autoFocus
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          style={submitStyles}
        >
          Sign In
        </Button>
      </form>
    </Container>
  );
};

export default LoginPage;
