import React, { FC } from 'react'
import { Redirect } from 'react-router-dom'

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
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email.value}
          onChange={email.onChange}
        />
      </div>
      <div>
        <label htmlFor="password">Пароль</label>
        <input
          type="password"
          id="password"
          value={password.value}
          onChange={password.onChange}
        />
      </div>
      {errorMessage && <p>{errorMessage}</p>}
      <button disabled={isLoading} type="submit">
        Войти
      </button>
    </form>
  )
}

export default LoginView
