import React from 'react'
import { TouchableOpacity } from 'react-native'
import i18n from '../../translations'
import { Container, Label, RetryIcon } from './ErrorScreen.styled'
import { responsiveDPSize } from '../../utils/responsive'

export type Props = {
  onRetry: () => void
}

const OfflineRetry = ({ onRetry }: Props) => (
  <Container>
    <TouchableOpacity testID="retry-button" onPress={onRetry}>
      <RetryIcon name="md-refresh" size={responsiveDPSize(50)} />
    </TouchableOpacity>
    <Label>{i18n.t('offlineScreen:errorMessage')}</Label>
  </Container>
)

export default OfflineRetry
