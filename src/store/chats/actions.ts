import { SELECT_CHAT } from './constants'

export const selectChat = (id: string) => ({
  type: SELECT_CHAT,
  payload: id,
})
