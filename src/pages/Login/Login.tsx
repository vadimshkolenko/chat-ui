import React, { FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import LoginView from './LoginView'
import { login } from '../../store/login/actions'
import {
  selectIsLoading,
  selectErrorMessage,
} from '../../store/login/selectors'
import { selectToken } from '../../store/account/selectors'
import { RootState } from '../../store/reducers'

const Login: FC = () => {
  const dispatch = useDispatch()

  const errorMessage = useSelector((state: RootState) =>
    selectErrorMessage(state)
  )
  const isLoading = useSelector((state: RootState) => selectIsLoading(state))
  const token = useSelector((state: RootState) => selectToken(state))

  const loginCallback = (data) => dispatch(login(data))

  return (
    <LoginView
      loginCallback={loginCallback}
      errorMessage={errorMessage}
      isLoading={isLoading}
      token={token}
    />
  )
}

export default Login
