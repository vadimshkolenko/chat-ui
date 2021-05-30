import { ChatsState, ChatsActionType } from './types'
import { SELECT_CHAT } from './constants'

const initialState = { chatId: null }

export const chatsReducer = (
  state: ChatsState = initialState,
  action: ChatsActionType
) => {
  switch (action.type) {
    case SELECT_CHAT:
      const chatId = action.payload
      return { ...state, chatId }
    default:
      return state
  }
}
