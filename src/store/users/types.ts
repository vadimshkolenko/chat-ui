import { START_USERS_REQUEST, USERS_SUCCESS, USERS_ERROR } from './constants'

export interface User {
  id: string
  email: string
  username: string
}

export type ActionTypes =
  | typeof START_USERS_REQUEST
  | typeof USERS_SUCCESS
  | typeof USERS_ERROR

export interface UsersActionType {
  type: ActionTypes
  payload?: string | Array<User>
}

export interface UsersState {
  errorMessage: string
  isLoading: boolean
  data: Array<User>
}
