import React from 'react'
import { Provider } from 'react-redux'
import store from './src/store'
import HomeScreen from './src/screens/HomeScreen'

const Root = (): React.ReactElement => {
  return (
    <Provider store={store}>
      <HomeScreen />
    </Provider>
  )
}

export default Root
