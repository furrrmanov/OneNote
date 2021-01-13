import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import logger from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'

import rootSaga from '@/sagas'
import reducer from '@/redux/reducer'
import { loadState, saveState } from '@/redux/localstorage'

const sagaMiddleware = createSagaMiddleware()
const persistedState = loadState()

const middlewares = [sagaMiddleware]

if (process.env.NODE_ENV === 'development') {
  middlewares.unshift(logger)
}
export const store = createStore(
  reducer,
  persistedState,
  composeWithDevTools(applyMiddleware(...middlewares))
)

sagaMiddleware.run(rootSaga)

store.subscribe(() => {
  saveState(store.getState())
})
