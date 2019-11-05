import React from 'react'
import { Container, Label } from './Button.styled'

type Props = {
  onPress: () => void
  label: string
  color: string
}

const Button = ({ onPress, color, label }: Props): React.ReactElement => {
  return (
    <Container color={color} onPress={onPress} testID="button">
      <Label color={color}>{label}</Label>
    </Container>
  )
}

export default Button
