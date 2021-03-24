import { RootState } from '../reducers'

export const selectErrorMessage = (state: RootState): string =>
  state.confirmation.errorMessage

export const selectIsLoading = (state: RootState): boolean =>
  state.confirmation.isLoading
