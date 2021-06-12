import { ADD_MESSAGE } from './constants'
import { Message } from './types'

export const addMessage = (message: Message) => ({
  type: ADD_MESSAGE,
  payload: message,
})
