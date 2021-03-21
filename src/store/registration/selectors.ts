import { RootState } from '../reducers'

export const selectErrorMessage = (state: RootState): string =>
  state.registration.errorMessage

export const selectSuccess = (state: RootState): boolean =>
  state.registration.success

export const selectIsLoading = (state: RootState): boolean =>
  state.registration.isLoading
