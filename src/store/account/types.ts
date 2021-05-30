import { SET_USER_DATA } from '../constants'

export type ActionTypes = typeof SET_USER_DATA

export interface AccountActionType {
  type: ActionTypes
  payload?: { accessToken: string; id: string }
}

export interface AccountState {
  token: string
  userId: string
}
