import React from 'react'
import { Provider } from 'react-redux'

import { store } from '@/redux/store'
import IntlProviderWrapper from '@/components/wrappers/IntlProviderWrapper'
import RouteWrapper from '@/components/wrappers/RouteWrapper'
import ThemeWrapper from '@/components/wrappers/ThemeWrapper'

function App() {
  return (
    <Provider store={store}>
      <IntlProviderWrapper>
        <ThemeWrapper>
          <RouteWrapper />
        </ThemeWrapper>
      </IntlProviderWrapper>
    </Provider>
  )
}

export default App
