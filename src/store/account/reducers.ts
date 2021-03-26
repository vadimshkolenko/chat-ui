import { AccountState, AccountActionType } from './types'
import { SET_TOKEN } from '../constants'
import { token as accessToken } from '../../static'

const initialState = { token: localStorage.getItem(accessToken) ?? '' }

export const accountReducer = (
  state: AccountState = initialState,
  action: AccountActionType
) => {
  switch (action.type) {
    case 'SET_TOKEN':
      const token = action.payload
      return { ...state, token }
    default:
      return state
  }
}
