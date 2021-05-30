import { CONFIRMATION_ERROR } from './constants'
import { SET_USER_DATA } from '../constants'

export type ActionTypes = typeof CONFIRMATION_ERROR | typeof SET_USER_DATA

export interface ConfirmationActionType {
  type: ActionTypes
  payload?: { accessToken: string; id: string } | string
}

export interface ConfirmationState {
  errorMessage: string
}
