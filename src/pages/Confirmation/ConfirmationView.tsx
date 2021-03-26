import React, { FC, useEffect } from 'react'
import { Redirect } from 'react-router-dom'

interface Props {
  confirmCallback: () => void
  errorMessage: string
  token: string
}

const ConfirmationView: FC<Props> = ({
  confirmCallback,
  errorMessage,
  token,
}: Props) => {
  useEffect(() => confirmCallback(), [])

  if (token) return <Redirect to={'/'} />

  if (errorMessage) {
    return <p>{errorMessage}</p>
  }

  return <div>Подождите, пожалуйста...</div>
}

export default ConfirmationView
