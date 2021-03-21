import { combineReducers } from 'redux'
import { registrationReducer } from './registration/reducers'

export const rootReducer = combineReducers({
  registration: registrationReducer,
})

export type RootState = ReturnType<typeof rootReducer>
