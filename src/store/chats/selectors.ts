import { RootState } from '../reducers'
import { Message } from './types'

export const selectCurrentChatId = (state: RootState): string =>
  <string>state.chats.chatId

export const selectCurrentMessages = (state: RootState): Array<Message> =>
  state.chats.chats[state.chats?.chatId]?.messages ?? []
