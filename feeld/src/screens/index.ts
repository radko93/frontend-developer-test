import HomeScreen from './HomeScreen'
import LoginScreen from './LoginScreen'
import i18n from '../translations'

export default {
  HomeScreen: { routeName: 'HomeScreen', component: HomeScreen, title: i18n.t('homeScreen:title') },
  LoginScreen: { routeName: 'LoginScreen', component: LoginScreen, title: i18n.t('loginScreen:title') },
}
