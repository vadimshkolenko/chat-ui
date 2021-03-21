import React, { FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { RootState } from '../../store/reducers'
import { registration } from '../../store/registration/actions'
import {
  selectErrorMessage,
  selectSuccess,
  selectIsLoading,
} from '../../store/registration/selectors'
import RegistrationView from './RegistrationView'

const Registration: FC = () => {
  const dispatch = useDispatch()

  const errorMessage = useSelector((state: RootState) =>
    selectErrorMessage(state)
  )
  const success = useSelector((state: RootState) => selectSuccess(state))
  const isLoading = useSelector((state: RootState) => selectIsLoading(state))

  const registrationCallback = (data) => dispatch(registration(data))

  return (
    <RegistrationView
      registrationCallback={registrationCallback}
      errorMessage={errorMessage}
      success={success}
      isLoading={isLoading}
    />
  )
}

export default Registration
