import { START_LOGIN_REQUEST, LOGIN_ERROR, LOGIN_SUCCESS } from './constants'
import { SET_USER_DATA } from '../constants'

export interface UserData {
  email: string
  password: string
}

export type ActionTypes =
  | typeof LOGIN_SUCCESS
  | typeof LOGIN_ERROR
  | typeof START_LOGIN_REQUEST
  | typeof SET_USER_DATA

export interface LoginActionType {
  type: ActionTypes
  payload?: { accessToken: string; id: string } | string
}

export interface LoginState {
  errorMessage: string
  isLoading: boolean
}
