import React from 'react'
import { Image } from 'react-native'
import ImageZoom from '@kingdaro/react-native-image-pan-zoom'
import { width, height } from '../../../utils/responsive'
import styles from './ZoomImage.styles'

const ImageWithLoader = ({ image, onSwipeDown }: { image: string; onSwipeDown: () => void }) => {
  return (
    <ImageZoom
      enableSwipeDown
      cropWidth={width}
      cropHeight={height}
      imageWidth={width}
      imageHeight={height}
      onSwipeDown={onSwipeDown}
      style={styles.photoContainer}
    >
      <Image style={styles.photo} source={{ uri: image }} resizeMode="contain" />
    </ImageZoom>
  )
}

export default ImageWithLoader
