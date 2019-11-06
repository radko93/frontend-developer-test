import React from 'react'
import { Provider } from 'react-redux'
import store from './src/store'
import RootNavigator from './src/navigation'
import { UIManager } from 'react-native'

UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true)

const Root = (): React.ReactElement => {
  return (
    <Provider store={store}>
      <RootNavigator />
    </Provider>
  )
}

export default Root
