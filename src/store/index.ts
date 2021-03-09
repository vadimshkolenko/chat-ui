import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

import { rootReducer } from './reducers'

const enhancer = applyMiddleware(thunk, logger)

const store = createStore(rootReducer, composeWithDevTools(enhancer))

export default store
