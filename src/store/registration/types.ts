import {
  REGISTRATION_SUCCESS,
  REGISTRATION_ERROR,
  START_REQUEST,
} from './constants'

export interface UserData {
  email: string
  password: string
  username: string
}

export type ActionTypes =
  | typeof REGISTRATION_SUCCESS
  | typeof REGISTRATION_ERROR
  | typeof START_REQUEST

export interface RegistrationActionType {
  type: ActionTypes
  payload?: string
}

export interface RegistrationState {
  errorMessage: string
  success: boolean
  isLoading: boolean
}
