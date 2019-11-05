import React from 'react'
import { Container } from './Button.styled'

type Props = {
  onPress: () => void
  label: string
  color: string
}

const Button = ({ onPress, color, label }: Props): React.ReactElement => {
  return (
    <Container color={color} onPress={onPress} testID="button">
      {label}
    </Container>
  )
}

export default Button
