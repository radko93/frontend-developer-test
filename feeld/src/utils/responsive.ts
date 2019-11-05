import { Dimensions } from 'react-native'

const { height, width } = Dimensions.get('window')

const IPHONE_X_WIDTH = 375

const roundResponsiveValue = (value: number): number => {
  return Math.round(value)
}

const responsivePercentageFontSize = (f: number): number => {
  const tempHeight = (16 / 9) * width
  return roundResponsiveValue(Math.sqrt(Math.pow(tempHeight, 2) + Math.pow(width, 2)) * (f / 100))
}

// Helpers from https://github.com/nirsky/react-native-size-matters
const scale = (size: number): number => roundResponsiveValue((width / IPHONE_X_WIDTH) * size)

const responsiveDPSize = (size: number, factor = 0.5): number =>
  roundResponsiveValue(size + (scale(size) - size) * factor)

export { responsivePercentageFontSize, responsiveDPSize, height, width }
