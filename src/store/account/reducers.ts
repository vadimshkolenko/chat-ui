import { AccountState, AccountActionType } from './types'
import { SET_USER_DATA } from '../constants'
import { token as accessToken, userId as id } from '../../static'

const initialState = {
  token: localStorage.getItem(accessToken) ?? '',
  userId: localStorage.getItem(id) ?? '',
}

export const accountReducer = (
  state: AccountState = initialState,
  action: AccountActionType
) => {
  switch (action.type) {
    case 'SET_USER_DATA':
      const { accessToken: token, id: userId } = action.payload
      return { ...state, token, userId }
    default:
      return state
  }
}
