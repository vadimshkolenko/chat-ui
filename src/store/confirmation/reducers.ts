import { ConfirmationActionType, ConfirmationState } from './types'
import {
  CONFIRMATION_SUCCESS,
  CONFIRMATION_ERROR,
  START_CONFIRMATION_REQUEST,
} from './constants'

const initialState = { errorMessage: null, isLoading: false }

export const confirmationReducer = (
  state: ConfirmationState = initialState,
  action: ConfirmationActionType
) => {
  switch (action.type) {
    case START_CONFIRMATION_REQUEST:
      return { ...state, isLoading: true }
    case CONFIRMATION_SUCCESS:
      return { ...state, isLoading: false }
    case CONFIRMATION_ERROR:
      const errorMessage = action.payload
      return { ...state, errorMessage, isLoading: false }
    default:
      return state
  }
}
