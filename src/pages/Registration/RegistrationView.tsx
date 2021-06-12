import React, { FC } from 'react'
import { NavLink, Redirect } from 'react-router-dom'
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
  registrationCallback: ({ email, password, username: string }) => void
  errorMessage: string
  success: boolean
  isLoading: boolean
  token: string
}

const RegistrationView: FC<Props> = ({
  registrationCallback,
  errorMessage,
  success,
  isLoading,
  token,
}) => {
  const username = useInput('')
  const email = useInput('')
  const password = useInput('')

  if (token) {
    return <Redirect to={'/chats'} />
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    registrationCallback({
      username: username.value,
      email: email.value,
      password: password.value,
    })
  }

  if (success) {
    return (
      <Grid container alignItems="center" justify="center">
        <Typography variant="h4" component="h1" color="primary">
          Поздравляем вы зарегистрированы!
        </Typography>
        <Box mt={1}>
          <Typography variant="body1" component="p" color="primary">
            На указанную вами почту отправлено письмо. Для завершения
            регистрации, пожалуйста, перейдите по ссылке из этого письма.
          </Typography>
        </Box>
      </Grid>
    )
  }

  return (
    <Container component="main" maxWidth="xs">
      <form onSubmit={handleSubmit}>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          label="Username"
          name="username"
          autoComplete="username"
          autoFocus
          type="text"
          id="username"
          value={username.value}
          onChange={username.onChange}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          label="Email"
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
          label="Password"
          name="password"
          autoComplete="password"
          autoFocus
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
          Зарегистрироваться
        </Button>
      </form>
      <Box mt={1}>
        <Grid container alignItems="center" justify="center">
          <NavLink to={'/login'}>
            <Typography variant="caption" component="p" color="primary">
              Уже есть аккаунт? Войди!
            </Typography>
          </NavLink>
        </Grid>
      </Box>
    </Container>
  )
}

export default RegistrationView
