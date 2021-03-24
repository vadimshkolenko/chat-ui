import React, { FC, useEffect } from 'react'
import { Redirect } from 'react-router-dom'

interface Props {
  confirmCallback: () => void
  errorMessage: string
  isLoading: boolean
}

const ConfirmationView: FC<Props> = ({
  confirmCallback,
  errorMessage,
  isLoading,
}: Props) => {
  useEffect(() => confirmCallback(), [])

  if (isLoading) {
    return <div>Подождите, пожалуйста...</div>
  } else if (errorMessage) {
    return <p>{errorMessage}</p>
  } else {
    return <Redirect to={'/'} />
  }
}

export default ConfirmationView
