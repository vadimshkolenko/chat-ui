import React, { FC } from 'react'
import { Redirect, NavLink } from 'react-router-dom'
import {
  Container,
  TextField,
  Button,
  Grid,
  Typography,
  Box,
} from '@material-ui/core'

import useInput from '../../hooks/useInput'

interface Props {
  loginCallback: ({ email, password: string }) => void
  errorMessage: string
  isLoading: boolean
  token: string
}

const LoginView: FC<Props> = ({
  errorMessage,
  isLoading,
  loginCallback,
  token,
}) => {
  const email = useInput('')
  const password = useInput('')

  if (token) {
    return <Redirect to={'/chats'} />
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    loginCallback({
      email: email.value,
      password: password.value,
    })
  }

  return (
    <Container component="main" maxWidth="xs">
      <form onSubmit={handleSubmit}>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          label="Email Address"
          name="email"
          autoComplete="email"
          autoFocus
          type="email"
          id="email"
          value={email.value}
          onChange={email.onChange}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          autoComplete="current-password"
          type="password"
          id="password"
          value={password.value}
          onChange={password.onChange}
        />
        {errorMessage && (
          <Grid container alignItems="center" justify="center">
            <Typography variant="body1" component="p" color="error">
              {errorMessage}
            </Typography>
          </Grid>
        )}
        <Button
          fullWidth
          variant="contained"
          color="primary"
          disabled={isLoading}
          type="submit"
        >
          Войти
        </Button>
      </form>
      <Box mt={1}>
        <Grid container alignItems="center" justify="center">
          <NavLink to={'/registration'}>
            <Typography variant="caption" component="p" color="primary">
              Еще нет аккаунта? Зарегистрируйся!
            </Typography>
          </NavLink>
        </Grid>
      </Box>
    </Container>
  )
}

export default LoginView
