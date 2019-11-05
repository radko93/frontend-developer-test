import React, { useEffect } from 'react'
import { ActivityIndicator } from 'react-native'
import { connect } from 'react-redux'
import { ErrorScreen } from '../../components'
import { selectUsers, selectUsersError, selectIsFetchingUsers } from '../../store/users/selectors'
import { State } from '../../store'
import { getUsers } from '../../store/users/actions'
import { EmptyContainer, Container } from './HomeScreen.styled'
import colors from '../../constants/colors'

const AccountScreen = ({ users, error, isFetching, fetchUsers }: ConnectProps): React.ReactElement => {
  useEffect(() => {
    if (users.length === 0) {
      fetchUsers()
    }
  }, [fetchUsers, users])

  if (error) {
    return <ErrorScreen onRetry={fetchUsers} />
  }
  if (isFetching) {
    return (
      <EmptyContainer>
        <ActivityIndicator size="large" color={colors.black} />
      </EmptyContainer>
    )
  }

  return <Container />
}

const select = (store: State) => ({
  users: selectUsers(store),
  error: selectUsersError(store),
  isFetching: selectIsFetchingUsers(store),
})

const actions = {
  fetchUsers: getUsers.request,
}
type ConnectProps = ReturnType<typeof select> & typeof actions

export default connect(
  select,
  actions,
)(AccountScreen)
