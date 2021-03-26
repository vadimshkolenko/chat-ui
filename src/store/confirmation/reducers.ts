import { ConfirmationActionType, ConfirmationState } from './types'
import { CONFIRMATION_ERROR } from './constants'

const initialState = { errorMessage: null }

export const confirmationReducer = (
  state: ConfirmationState = initialState,
  action: ConfirmationActionType
) => {
  switch (action.type) {
    case CONFIRMATION_ERROR:
      const errorMessage = action.payload
      return { ...state, errorMessage }
    default:
      return state
  }
}
