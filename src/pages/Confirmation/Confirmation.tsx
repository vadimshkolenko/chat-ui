import React, { FC } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { confirm } from '../../store/confirmation/actions'
import {
  selectErrorMessage,
  selectIsLoading,
} from '../../store/confirmation/selectors'
import ConfirmationView from './ConfirmationView'
import { RootState } from '../../store/reducers'

const Confirmation: FC = () => {
  const dispatch = useDispatch()

  const { verificationToken } = useParams<{ verificationToken: string }>()

  const errorMessage = useSelector((state: RootState) =>
    selectErrorMessage(state)
  )
  const isLoading = useSelector((state: RootState) => selectIsLoading(state))

  const confirmCallback = () => dispatch(confirm(verificationToken))

  return (
    <ConfirmationView
      confirmCallback={confirmCallback}
      errorMessage={errorMessage}
      isLoading={isLoading}
    />
  )
}

export default Confirmation
