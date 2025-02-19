import React from 'react'
import { createAppContainer } from 'react-navigation'
import createSwitchNavigator from 'react-navigation-animated-switch'
import { createStackNavigator } from 'react-navigation-stack'
import { Transition } from 'react-native-reanimated'
import SCREENS from './screens'

export const navigators = {
  AuthenticatedNavigator: { routeName: 'AuthenticatedNavigator' },
  NotAuthenticatedNavigator: { routeName: 'NotAuthenticatedNavigator' },
}

const AuthenticatedNavigator = createStackNavigator({
  [SCREENS.HomeScreen.routeName]: {
    screen: SCREENS.HomeScreen.component,
    navigationOptions: {
      headerTitle: SCREENS.HomeScreen.title,
    },
  },
})
const NotAuthenticatedNavigator = createStackNavigator({
  [SCREENS.LoginScreen.routeName]: {
    screen: SCREENS.LoginScreen.component,
    navigationOptions: {
      headerTitle: SCREENS.LoginScreen.title,
    },
  },
})

export default createAppContainer(
  // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
  // @ts-ignore lib definitions error
  createSwitchNavigator(
    {
      [navigators.AuthenticatedNavigator.routeName]: AuthenticatedNavigator,
      [navigators.NotAuthenticatedNavigator.routeName]: NotAuthenticatedNavigator,
    },
    {
      initialRouteName: 'NotAuthenticatedNavigator',
      transition: (
        <Transition.Together>
          <Transition.Out type="slide-bottom" durationMs={400} interpolation="easeIn" />
          <Transition.In type="fade" durationMs={500} />
        </Transition.Together>
      ),
    },
  ),
)
