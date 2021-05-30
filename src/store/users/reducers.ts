import { UsersActionType, UsersState } from './types'
import { USERS_ERROR, USERS_SUCCESS, START_USERS_REQUEST } from './constants'

const initialState = {
  errorMessage: null,
  isLoading: false,
  data: [],
}

export const usersReducer = (
  state: UsersState = initialState,
  action: UsersActionType
) => {
  switch (action.type) {
    case START_USERS_REQUEST:
      return { ...state, isLoading: true }
    case USERS_SUCCESS:
      const data = action.payload
      return { ...state, isLoading: false, data }
    case USERS_ERROR:
      const errorMessage = action.payload
      return { ...state, errorMessage, isLoading: false }
    default:
      return state
  }
}
