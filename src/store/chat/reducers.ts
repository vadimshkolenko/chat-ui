import { ChatActionTypes, ChatState } from './types'
import { ADD_MESSAGE, RESET_CHAT } from './constants'

const initialState = { messages: [] }

export const chatReducer = (
  state: ChatState = initialState,
  action: ChatActionTypes
) => {
  switch (action.type) {
    case ADD_MESSAGE:
      const message = action.payload
      return {
        ...state,
        messages: [...(state?.messages ?? []), message],
      }
    case RESET_CHAT:
      return initialState
    default:
      return state
  }
}
