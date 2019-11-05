import styled from 'styled-components/native'
import { responsivePercentageFontSize, responsiveDPSize } from '../../utils/responsive'

export const Container = styled.TouchableOpacity<{ color: string }>`
  border-color: ${({ color }) => color};
  border-width: 1;
  border-radius: 50;
  justify-content: center;
  align-items: center;
  padding-vertical: ${responsiveDPSize(5)};
  padding-horizontal: ${responsiveDPSize(10)};
`

export const Label = styled.Text<{ color: string }>`
  color: ${({ color }) => color};
  font-size: ${responsivePercentageFontSize(2)};
`
