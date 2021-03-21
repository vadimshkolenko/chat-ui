import { RegistrationActionType, RegistrationState } from './types'
import {
  REGISTRATION_ERROR,
  REGISTRATION_SUCCESS,
  START_REQUEST,
} from './constants'

const initialState = { errorMessage: null, success: false, isLoading: false }

export const registrationReducer = (
  state: RegistrationState = initialState,
  action: RegistrationActionType
) => {
  switch (action.type) {
    case START_REQUEST:
      return { ...state, isLoading: true }
    case REGISTRATION_SUCCESS:
      return { ...state, success: true, isLoading: false }
    case REGISTRATION_ERROR:
      const errorMessage = action.payload
      return { ...state, errorMessage, isLoading: false }
    default:
      return state
  }
}
