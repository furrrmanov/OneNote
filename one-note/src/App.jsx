import React from 'react'
import { Provider } from 'react-redux'

import { store } from '@/redux/store'
import RouteWrapper from '@/components/wrappers/RouteWrapper'

function App() {
  return (
    <Provider store={store}>
      <RouteWrapper />
    </Provider>
  )
}

export default App
