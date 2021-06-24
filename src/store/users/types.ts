import { START_USERS_REQUEST, USERS_SUCCESS, USERS_ERROR } from './constants'

export interface User {
  id: string
  email: string
  username: string
}

export interface UsersRequestActionType {
  type: typeof START_USERS_REQUEST
}

export interface UsersSuccessActionType {
  type: typeof USERS_SUCCESS
  payload: { data: Array<User>; page: number }
}

export interface UsersErrorActionType {
  type: typeof USERS_ERROR
  payload: string
}

export type UsersActionTypes =
  | UsersRequestActionType
  | UsersSuccessActionType
  | UsersErrorActionType

export interface UsersState {
  errorMessage: string
  isLoading: boolean
  data: Array<User>
  page: number
  shouldLoadMore: boolean
}
