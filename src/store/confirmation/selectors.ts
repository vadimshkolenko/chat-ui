import { RootState } from '../reducers'

export const selectErrorMessage = (state: RootState): string =>
  state.confirmation.errorMessage
