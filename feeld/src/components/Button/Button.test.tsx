import React from 'react'
import { render, fireEvent } from 'react-native-testing-library'
import Button from '.'

const props = {
  onPress: jest.fn(),
  label: 'Test',
  color: '#00F',
}

const wrapperComponent = <Button {...props} />

describe('Button Component', (): void => {
  it('Renders Button with default props', (): void => {
    const wrapper = render(wrapperComponent)
    expect(wrapper).toMatchSnapshot()
  })
  it('Should fire onPress event', (): void => {
    const wrapper = render(wrapperComponent)
    const { getByTestId } = wrapper
    fireEvent.press(getByTestId('button'))
  })
})
