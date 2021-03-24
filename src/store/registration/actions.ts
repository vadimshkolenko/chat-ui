import { Dispatch } from 'redux'

import api from '../../utils/api'
import { RegistrationActionType, UserData } from './types'
import {
  REGISTRATION_ERROR,
  REGISTRATION_SUCCESS,
  START_REGISTRATION_REQUEST,
} from './constants'

export const registration = (userData: UserData) => async (
  dispatch: Dispatch<RegistrationActionType>
): Promise<void> => {
  try {
    dispatch({ type: START_REGISTRATION_REQUEST })
    await api.post('/register', userData)
    dispatch({ type: REGISTRATION_SUCCESS })
  } catch (err) {
    const error =
      err?.response?.data?.errors?.email ||
      err?.response?.data?.errors?.username ||
      'Ошибка!'
    dispatch({
      type: REGISTRATION_ERROR,
      payload: error,
    })
  }
}
