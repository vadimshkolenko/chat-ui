import { RootState } from '../reducers'

export const selectErrorMessage = (state: RootState): string =>
  <string>state.login.errorMessage

export const selectIsLoading = (state: RootState): boolean =>
  state.login.isLoading
