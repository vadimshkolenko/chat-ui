import { Dispatch } from 'redux'
import api from '../../utils/api'
import { ConfirmationActionType } from './types'
import {
  CONFIRMATION_ERROR,
  CONFIRMATION_SUCCESS,
  START_CONFIRMATION_REQUEST,
} from './constants'
import { token } from '../../static'

export const confirm = (verificationToken: string) => async (
  dispatch: Dispatch<ConfirmationActionType>
): Promise<void> => {
  try {
    dispatch({ type: START_CONFIRMATION_REQUEST })
    const response = await api.post('/confirm', { verificationToken })
    const { token: accessToken } = response.data
    localStorage.setItem(token, accessToken)
    dispatch({ type: CONFIRMATION_SUCCESS })
  } catch (err) {
    dispatch({ type: CONFIRMATION_ERROR, payload: err.error ?? '' })
  }
}
