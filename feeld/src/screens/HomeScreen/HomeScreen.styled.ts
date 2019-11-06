import styled from 'styled-components/native'
import { responsiveDPSize } from '../../utils/responsive'

export const EmptyContainer = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
`

export const Container = styled.SafeAreaView`
  flex: 1;
  padding-horizontal: ${responsiveDPSize(10)};
  padding-vertical: ${responsiveDPSize(5)};
`
