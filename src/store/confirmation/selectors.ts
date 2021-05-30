import { RootState } from '../reducers'

export const selectErrorMessage = (state: RootState): string =>
  <string>state.confirmation.errorMessage
