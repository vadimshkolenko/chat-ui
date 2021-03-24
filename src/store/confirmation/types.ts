import {
  START_CONFIRMATION_REQUEST,
  CONFIRMATION_SUCCESS,
  CONFIRMATION_ERROR,
} from './constants'

export type ActionTypes =
  | typeof CONFIRMATION_SUCCESS
  | typeof CONFIRMATION_ERROR
  | typeof START_CONFIRMATION_REQUEST

export interface ConfirmationActionType {
  type: ActionTypes
  payload?: string
}

export interface ConfirmationState {
  errorMessage: string
  isLoading: boolean
}
