import React, { FC } from 'react'

import useInput from '../../hooks/useInput'

const RegistrationView: FC = () => {
  const email = useInput('')
  const password = useInput('')

  return (
    <form onSubmit={() => console.log('submit')}>
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
      <button type="submit">Зарегистрироваться</button>
    </form>
  )
}

export default RegistrationView
