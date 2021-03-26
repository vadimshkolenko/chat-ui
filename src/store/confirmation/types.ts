import { CONFIRMATION_ERROR } from './constants'
import { SET_TOKEN } from '../constants'

export type ActionTypes = typeof CONFIRMATION_ERROR | typeof SET_TOKEN

export interface ConfirmationActionType {
  type: ActionTypes
  payload?: string
}

export interface ConfirmationState {
  errorMessage: string
}
