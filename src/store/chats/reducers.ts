import { ChatsState, ChatsActionType } from './types'
import { ADD_MESSAGE } from './constants'

const initialState = { chatId: null, chats: {} }

export const chatsReducer = (
  state: ChatsState = initialState,
  action: ChatsActionType
) => {
  switch (action.type) {
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
