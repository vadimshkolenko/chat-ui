import { Dispatch } from 'redux'

import api from '../../utils/api'
import { ConfirmationActionType } from './types'
import { CONFIRMATION_ERROR } from './constants'
import { SET_TOKEN } from '../constants'
import { token } from '../../static'

export const confirm = (verificationToken: string) => async (
  dispatch: Dispatch<ConfirmationActionType>
): Promise<void> => {
  try {
    const response = await api.post('/confirm', { verificationToken })
    const { token: accessToken } = response.data
    localStorage.setItem(token, accessToken)
    dispatch({ type: SET_TOKEN, payload: accessToken })
  } catch (err) {
    dispatch({ type: CONFIRMATION_ERROR, payload: err.error ?? '' })
  }
}
