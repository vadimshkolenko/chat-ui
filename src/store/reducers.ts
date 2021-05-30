import { combineReducers } from 'redux'

import { accountReducer } from './account/reducers'
import { confirmationReducer } from './confirmation/reducers'
import { loginReducer } from './login/reducers'
import { registrationReducer } from './registration/reducers'
import { usersReducer } from './users/reducers'
import { chatsReducer } from './chats/reducers'

export const rootReducer = combineReducers({
  account: accountReducer,
  confirmation: confirmationReducer,
  login: loginReducer,
  registration: registrationReducer,
  users: usersReducer,
  chats: chatsReducer,
})

export type RootState = ReturnType<typeof rootReducer>
