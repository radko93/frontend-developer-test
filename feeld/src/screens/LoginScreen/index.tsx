import React from 'react'
import { NavigationStackProp } from 'react-navigation-stack'
import { NavigationState } from 'react-navigation'
import { connect } from 'react-redux'
import { Container } from './LoginScreen.styled'
import { Button } from '../../components'
import screens from '..'
import colors from '../../constants/colors'
import i18n from '../../translations'
import { login } from '../../store/auth/actions'

type Props = {
  navigation: NavigationStackProp<NavigationState, {}>
}

const LoginScreen = (props: Props & ConnectProps) => {
  const signIn = () => {
    props.login({ email: 'how@areu.doing' })
    props.navigation.navigate(screens.HomeScreen.routeName)
  }
  return (
    <Container>
      <Button onPress={signIn} color={colors.primaryColor} label={i18n.t('loginScreen:loginButton')} />
    </Container>
  )
}

const actions = {
  login: login.request,
}
type ConnectProps = typeof actions

export default connect(
  null,
  actions,
)(LoginScreen)
