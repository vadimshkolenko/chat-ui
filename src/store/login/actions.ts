import { Dispatch } from 'redux'

import api from '../../utils/api'
import { LoginActionType, UserData } from './types'
import { LOGIN_ERROR, LOGIN_SUCCESS, START_LOGIN_REQUEST } from './constants'
import { SET_TOKEN } from '../constants'
import { token } from '../../static'

export const login = (userData: UserData) => async (
  dispatch: Dispatch<LoginActionType>
): Promise<void> => {
  try {
    dispatch({ type: START_LOGIN_REQUEST })
    const response = await api.post('/login', userData)
    const { token: accessToken } = response.data
    localStorage.setItem(token, accessToken)
    dispatch({ type: LOGIN_SUCCESS })
    dispatch({ type: SET_TOKEN, payload: accessToken })
  } catch (err) {
    dispatch({ type: LOGIN_ERROR, payload: err.error ?? '' })
  }
}
