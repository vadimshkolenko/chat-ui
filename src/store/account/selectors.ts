import { RootState } from '../reducers'

export const selectToken = (state: RootState): string => state.account.token
export const selectUserId = (state: RootState): string => state.account.userId
