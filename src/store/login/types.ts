import { START_LOGIN_REQUEST, LOGIN_ERROR, LOGIN_SUCCESS } from './constants'
import { SET_TOKEN } from '../constants'

export interface UserData {
  email: string
  password: string
}

export type ActionTypes =
  | typeof LOGIN_SUCCESS
  | typeof LOGIN_ERROR
  | typeof START_LOGIN_REQUEST
  | typeof SET_TOKEN

export interface LoginActionType {
  type: ActionTypes
  payload?: string
}

export interface LoginState {
  errorMessage: string
  isLoading: boolean
}
