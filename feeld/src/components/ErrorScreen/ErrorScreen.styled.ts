import styled from 'styled-components/native'
import { Ionicons } from '@expo/vector-icons'
import colors from '../../constants/colors'
import { responsiveDPSize } from '../../utils/responsive'

export const RetryIcon = styled(Ionicons)`
  color: ${colors.grey};
  margin-bottom: ${responsiveDPSize(30)};
`

export const Label = styled.Text`
  text-align: center;
  color: ${colors.grey};
`

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`
