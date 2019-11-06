import React, { useState } from 'react'
import { FlatList, ListRenderItemInfo, LayoutAnimation, View } from 'react-native'
import { User, UserPhoto } from '../../store/users/models'
import UserElement from './UserElement'
import { ImageViewer } from '..'

type Props = {
  items: User[]
  onUserLike: (id: User['id']) => void
}

const UserList = ({ items, onUserLike }: Props) => {
  const [modalPhotos, setModalPhotos] = useState([] as UserPhoto[])
  const onLikePress = (id: User['id']) => {
    LayoutAnimation.easeInEaseOut()
    onUserLike(id)
  }
  const renderItem = ({ item }: ListRenderItemInfo<User>): React.ReactElement => {
    return (
      <UserElement
        user={item}
        onLikePress={() => onLikePress(item.id)}
        onPhotoPress={() => setModalPhotos(item.photos || [])}
      />
    )
  }

  return (
    <View>
      <FlatList<User> data={items} initialNumToRender={8} keyExtractor={item => item.id} renderItem={renderItem} />
      <ImageViewer onRequestClose={() => setModalPhotos([])} images={modalPhotos} open={modalPhotos.length > 0} />
    </View>
  )
}

export default UserList
