import React from 'react'
import { Provider } from 'react-redux'

import { store } from '@/redux/store'
import SignIn from '@/components/pages/LoginPage'

function App() {
  return <Provider store={store}>
    <SignIn />
  </Provider>
}

export default App
