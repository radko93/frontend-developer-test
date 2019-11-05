import React from 'react'
import { View, Text } from 'react-native'
import { NavigationStackProp } from 'react-navigation-stack'
import { NavigationState } from 'react-navigation'

type Props = {
  navigation: NavigationStackProp<NavigationState, {}>
}

const LoginScreen = (props: Props) => {
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>LoginScreen</Text>
    </View>
  )
}

export default LoginScreen
