import {
  START_USERS_REQUEST,
  USERS_SUCCESS,
  USERS_ERROR,
  USERS_RESET,
} from './constants'

export interface User {
  id: string
  email: string
  username: string
}

interface UsersRequestActionType {
  type: typeof START_USERS_REQUEST
}

interface UsersSuccessActionType {
  type: typeof USERS_SUCCESS
  payload: { data: Array<User>; page: number }
}

interface UsersErrorActionType {
  type: typeof USERS_ERROR
  payload: string
}

interface UsersResetActionType {
  type: typeof USERS_RESET
}

export type UsersActionTypes =
  | UsersRequestActionType
  | UsersSuccessActionType
  | UsersErrorActionType
  | UsersResetActionType

export interface UsersState {
  errorMessage: string
  isLoading: boolean
  data: Array<User>
  page: number
  shouldLoadMore: boolean
}
