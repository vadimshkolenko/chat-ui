import { ADD_MESSAGE } from './constants'

export interface Message {
  content: string
  from: string
  id: string
}

export type ActionTypes = typeof ADD_MESSAGE

export interface ChatsActionType {
  type: ActionTypes
  payload?: string | any
}

export interface ChatsState {
  chatId: string
  chats: { [id: string]: { messages: Array<Message> } }
}
