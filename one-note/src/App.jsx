import React from 'react'
import { Provider } from 'react-redux'

import { store } from '@/redux/store'
import RouteWrapper from '@/components/wrappers/RouteWrapper'
import ThemeWrapper from '@/components/wrappers/ThemeWrapper'

function App() {
  return (
    <Provider store={store}>
      <ThemeWrapper>
        <RouteWrapper />
      </ThemeWrapper>
    </Provider>
  )
}

export default App
