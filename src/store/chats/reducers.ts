import { ChatsState, ChatsActionType } from './types'
import { ADD_MESSAGE, SELECT_CHAT } from './constants'

const initialState = { chatId: null, chats: {} }

export const chatsReducer = (
  state: ChatsState = initialState,
  action: ChatsActionType
) => {
  switch (action.type) {
    case SELECT_CHAT:
      const chatId = action.payload
      return { ...state, chatId }
    case ADD_MESSAGE:
      const message = action.payload
      return {
        ...state,
        chats: {
          ...state.chats,
          [state.chatId]: {
            messages: [...(state.chats[state.chatId]?.messages ?? []), message],
          },
        },
      }
    default:
      return state
  }
}
