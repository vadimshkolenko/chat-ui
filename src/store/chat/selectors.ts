import { RootState } from '../reducers'
import { Message } from './types'

export const selectCurrentMessages = (state: RootState): Array<Message> =>
  state.chat.messages ?? []
