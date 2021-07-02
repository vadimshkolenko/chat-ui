import { ADD_MESSAGE, RESET_CHAT } from './constants'

export interface Message {
  content: string
  from: string
  id: string
}

interface AddMessageActionType {
  type: typeof ADD_MESSAGE
  payload: string
}

interface ResetChatActionType {
  type: typeof RESET_CHAT
}

export type ChatActionTypes = AddMessageActionType | ResetChatActionType

export interface ChatState {
  messages: Array<Message>
}
