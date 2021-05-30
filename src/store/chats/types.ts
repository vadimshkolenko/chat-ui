import { SELECT_CHAT } from './constants'

export type ActionTypes = typeof SELECT_CHAT

export interface ChatsActionType {
  type: ActionTypes
  payload?: string
}

export interface ChatsState {
  chatId: string
}
