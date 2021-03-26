import { SET_TOKEN } from '../constants'

export type ActionTypes = typeof SET_TOKEN

export interface AccountActionType {
  type: ActionTypes
  payload?: string
}

export interface AccountState {
  token: string
}
