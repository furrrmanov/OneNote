import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension'

import rootSaga from '@/sagas'
import reducer from '@/redux/reducer'
import { loadState, saveState } from '@/redux/localstorage'

const sagaMiddleware = createSagaMiddleware()
const persistedState = loadState()

const middlewares = [sagaMiddleware]

export const store = createStore(
  reducer,
  persistedState,
  composeWithDevTools(applyMiddleware(...middlewares))
)

sagaMiddleware.run(rootSaga)

store.subscribe(() => {
  saveState(store.getState())
})
