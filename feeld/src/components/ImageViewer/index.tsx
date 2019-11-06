import React from 'react'
import { Modal } from 'react-native'
import Carousel from 'react-native-snap-carousel'
import { width } from '../../utils/responsive'
import ImageWithLoader from './ZoomImage'
import { Container } from './ImageViewer.styled'
import { UserPhoto } from '../../store/users/models'

type Props = {
  images: UserPhoto[]
  open: boolean
  onRequestClose: () => void
}

const ImagePreview = ({ images, open, onRequestClose }: Props) => {
  const renderItem = ({ item }: { item: UserPhoto }) => (
    <ImageWithLoader image={item.url} onSwipeDown={onRequestClose} />
  )

  return (
    <Modal animationType="fade" visible={open} transparent={true}>
      <Container>
        <Carousel<UserPhoto>
          enableSnap
          itemWidth={width}
          sliderWidth={width}
          inactiveSlideScale={1}
          inactiveSlideOpacity={1}
          data={images}
          renderItem={renderItem}
        />
      </Container>
    </Modal>
  )
}

export default ImagePreview
