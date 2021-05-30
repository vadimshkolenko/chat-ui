import { SELECT_CHAT, ADD_MESSAGE } from './constants'
import { Message } from './types'

export const selectChat = (id: string) => ({
  type: SELECT_CHAT,
  payload: id,
})

export const addMessage = (message: Message) => ({
  type: ADD_MESSAGE,
  payload: message,
})
