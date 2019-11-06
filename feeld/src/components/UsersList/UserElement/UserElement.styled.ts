import styled from 'styled-components/native'
import colors from '../../../constants/colors'
import { responsiveDPSize, responsivePercentageFontSize } from '../../../utils/responsive'

export const Container = styled.View`
  border-color: ${colors.red};
  background-color: ${colors.cardBackground};
  border-width: 1;
  border-radius: 50;
  padding-vertical: ${responsiveDPSize(5)};
  padding-horizontal: ${responsiveDPSize(10)};
  margin-vertical: ${responsiveDPSize(5)};
  margin-horizontal: ${responsiveDPSize(5)};
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

export const UserDataContainer = styled.View`
  align-items: center;
`

export const Avatar = styled.Image`
  width: ${responsiveDPSize(120)};
  height: ${responsiveDPSize(120)};
  border-radius: ${responsiveDPSize(60)};
  margin-vertical: ${responsiveDPSize(10)};
  margin-horizontal: ${responsiveDPSize(10)};
`

export const AvatarPlaceholder = styled.View`
  width: ${responsiveDPSize(120)};
  height: ${responsiveDPSize(120)};
  background-color: ${colors.grey};
`

export const NameLabel = styled.Text`
  font-size: ${responsivePercentageFontSize(3)};
  font-weight: 800;
`

export const ActionLabel = styled.Text<{ color: string }>`
  color: ${({ color }) => color};
  font-size: ${responsivePercentageFontSize(5)};
  margin-horizontal: ${responsiveDPSize(10)};
`
