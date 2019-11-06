import React from 'react'
import { TouchableOpacity } from 'react-native'
import { User } from '../../../store/users/models'
import { Container, Avatar, AvatarPlaceholder, NameLabel, UserDataContainer, ActionLabel } from './UserElement.styled'
import i18n from '../../../translations'
import colors from '../../../constants/colors'

type Props = {
  user: User
  onLikePress: () => void
  onPhotoPress: () => void
}

const UserElement = ({ user, onLikePress, onPhotoPress }: Props) => {
  return (
    <Container>
      <ActionLabel onPress={onLikePress} color={colors.green}>
        {i18n.t('homeScreen:likeAction')}
      </ActionLabel>
      <UserDataContainer>
        {user.photos && user.photos.length > 0 ? (
          <TouchableOpacity onPress={onPhotoPress}>
            <Avatar resizeMode="center" source={{ uri: user.photos[0].url }} />
          </TouchableOpacity>
        ) : (
          <AvatarPlaceholder />
        )}
        <NameLabel>{user.info.name}</NameLabel>
      </UserDataContainer>
      <ActionLabel onPress={onLikePress} color={colors.red}>
        {i18n.t('homeScreen:dislikeAction')}
      </ActionLabel>
    </Container>
  )
}

export default UserElement
