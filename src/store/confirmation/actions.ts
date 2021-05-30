import { Dispatch } from 'redux'

import api from '../../utils/api'
import { ConfirmationActionType } from './types'
import { CONFIRMATION_ERROR } from './constants'
import { SET_USER_DATA } from '../constants'
import { token, userId } from '../../static'

export const confirm = (verificationToken: string) => async (
  dispatch: Dispatch<ConfirmationActionType>
): Promise<void> => {
  try {
    const response = await api.post('/confirm', { verificationToken })
    const { token: accessToken, id } = response.data
    localStorage.setItem(token, accessToken)
    localStorage.setItem(userId, id)
    dispatch({ type: SET_USER_DATA, payload: { accessToken, id } })
  } catch (err) {
    dispatch({ type: CONFIRMATION_ERROR, payload: err.error ?? 'Ошибка!' })
  }
}
