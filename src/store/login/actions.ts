import { Dispatch } from 'redux'

import api from '../../utils/api'
import { LoginActionType, UserData } from './types'
import { LOGIN_ERROR, LOGIN_SUCCESS, START_LOGIN_REQUEST } from './constants'
import { SET_USER_DATA } from '../constants'
import { token, userId } from '../../static'

export const login = (userData: UserData) => async (
  dispatch: Dispatch<LoginActionType>
): Promise<void> => {
  try {
    dispatch({ type: START_LOGIN_REQUEST })
    const response = await api.post('/login', userData)
    const { token: accessToken, id } = response.data
    localStorage.setItem(token, accessToken)
    localStorage.setItem(userId, id)
    dispatch({ type: LOGIN_SUCCESS })
    dispatch({ type: SET_USER_DATA, payload: { accessToken, id } })
  } catch (err) {
    dispatch({ type: LOGIN_ERROR, payload: err.error ?? 'Ошибка!' })
  }
}
