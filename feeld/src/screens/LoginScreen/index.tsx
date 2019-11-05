import React from 'react'
import { NavigationStackProp } from 'react-navigation-stack'
import { NavigationState } from 'react-navigation'
import { Container } from './LoginScreen.styled'
import { Button } from '../../components'
import screens from '..'
import colors from '../../constants/colors'
import i18n from '../../translations'

type Props = {
  navigation: NavigationStackProp<NavigationState, {}>
}

const LoginScreen = (props: Props) => {
  const signIn = () => {
    props.navigation.navigate(screens.HomeScreen.routeName)
  }
  return (
    <Container>
      <Button onPress={signIn} color={colors.primaryColor} label={i18n.t('loginScreen:loginButton')} />
    </Container>
  )
}

export default LoginScreen
