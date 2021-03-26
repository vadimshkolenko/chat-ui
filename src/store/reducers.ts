import { combineReducers } from 'redux'

import { accountReducer } from './account/reducers'
import { confirmationReducer } from './confirmation/reducers'
import { loginReducer } from './login/reducers'
import { registrationReducer } from './registration/reducers'

export const rootReducer = combineReducers({
  account: accountReducer,
  confirmation: confirmationReducer,
  login: loginReducer,
  registration: registrationReducer,
})

export type RootState = ReturnType<typeof rootReducer>
