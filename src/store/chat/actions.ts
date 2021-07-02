import { ADD_MESSAGE, RESET_CHAT } from './constants'
import { Message } from './types'

export const addMessage = (message: Message) => ({
  type: ADD_MESSAGE,
  payload: message,
})

export const resetChat = () => ({ type: RESET_CHAT })
