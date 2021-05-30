import React, { FC } from 'react'
import { Redirect } from 'react-router-dom'

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
      <div>
        <p>Поздравляем вы зарегистрированы!</p>
        <p>На указанную вами почту отправлено письмо.</p>
        <p>
          Для завершения регистрации, пожалуйста, перейдите по ссылке из этого
          письма.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Логин</label>
        <input
          type="text"
          id="username"
          value={username.value}
          onChange={username.onChange}
        />
      </div>
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
        Зарегистрироваться
      </button>
    </form>
  )
}

export default RegistrationView
