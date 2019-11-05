import React from 'react'
import { render, fireEvent } from 'react-native-testing-library'
import ErrorScreen from '.'

const props = {
  onRetry: jest.fn(),
}

describe('ErrorScreen Component', (): void => {
  it('Renders ErrorScreen with default props', (): void => {
    const wrapper = render(<ErrorScreen {...props} />)
    expect(wrapper).toMatchSnapshot()
  })

  it('Should fire onPress event', (): void => {
    const wrapper = render(<ErrorScreen {...props} />)
    const { getByTestId } = wrapper
    fireEvent.press(getByTestId('retry-button'))
    expect(props.onRetry).toBeCalled()
  })
})
