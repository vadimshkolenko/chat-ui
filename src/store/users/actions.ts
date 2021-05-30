import { Dispatch } from 'redux'

import api from '../../utils/api'
import { UsersActionType } from './types'
import { START_USERS_REQUEST, USERS_ERROR, USERS_SUCCESS } from './constants'

export const getUsers = () => async (
  dispatch: Dispatch<UsersActionType>
): Promise<void> => {
  try {
    dispatch({ type: START_USERS_REQUEST })
    const response = await api.get('/users')
    const users = response.data.users
    dispatch({ type: USERS_SUCCESS, payload: users })
  } catch (err) {
    dispatch({ type: USERS_ERROR, payload: err.error ?? 'Ошибка!' })
  }
}
