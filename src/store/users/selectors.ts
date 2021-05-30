import { RootState } from '../reducers'
import { User } from './types'

export const selectErrorMessage = (state: RootState): string =>
  <string>state.users.errorMessage

export const selectIsLoading = (state: RootState): boolean =>
  state.users.isLoading

export const selectUsers = (state: RootState): Array<User> | string =>
  state.users.data
