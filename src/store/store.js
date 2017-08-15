import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
//import promise from 'redux-promise-middleware'

import reducers from '../reducers'

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk, logger)))
export default store
