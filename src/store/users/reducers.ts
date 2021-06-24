import { UsersActionTypes, UsersState } from './types'
import {
  USERS_ERROR,
  USERS_SUCCESS,
  START_USERS_REQUEST,
  USERS_PAGE_SIZE,
} from './constants'

const initialState = {
  errorMessage: null,
  isLoading: false,
  data: [],
  page: 1,
  shouldLoadMore: true,
}

export const usersReducer = (
  state: UsersState = initialState,
  action: UsersActionTypes
) => {
  switch (action.type) {
    case START_USERS_REQUEST:
      return { ...state, isLoading: true }
    case USERS_SUCCESS:
      const { data, page } = action.payload
      return {
        ...state,
        isLoading: false,
        shouldLoadMore: data.length === USERS_PAGE_SIZE,
        data: [...state.data, ...data],
        page,
      }
    case USERS_ERROR:
      const errorMessage = action.payload
      return { ...state, errorMessage, isLoading: false }
    default:
      return state
  }
}
