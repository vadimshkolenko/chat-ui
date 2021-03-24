import { combineReducers } from 'redux'
import { registrationReducer } from './registration/reducers'
import { confirmationReducer } from './confirmation/reducers'

export const rootReducer = combineReducers({
  registration: registrationReducer,
  confirmation: confirmationReducer,
})

export type RootState = ReturnType<typeof rootReducer>
