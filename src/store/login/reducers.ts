import { LoginActionType, LoginState } from './types'
import { LOGIN_SUCCESS, LOGIN_ERROR, START_LOGIN_REQUEST } from './constants'

const initialState = { errorMessage: null, isLoading: false }

export const loginReducer = (
  state: LoginState = initialState,
  action: LoginActionType
) => {
  switch (action.type) {
    case START_LOGIN_REQUEST:
      return { ...state, isLoading: true }
    case LOGIN_SUCCESS:
      return { ...state, isLoading: false }
    case LOGIN_ERROR:
      const errorMessage = action.payload
      return { ...state, errorMessage }
    default:
      return state
  }
}
