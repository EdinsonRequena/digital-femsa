import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {ButtonComponent} from '..';

describe('ButtonComponent', () => {
  const mockOnPress = jest.fn();
  const defaultProps = {
    title: 'Button',
    onPress: mockOnPress,
  };

  it('renders correctly with default props', () => {
    const {getByText, debug} = render(<ButtonComponent {...defaultProps} />);
    debug();
    expect(getByText(defaultProps.title)).toBeDefined();
  });

  it('calls onPress when button is pressed', () => {
    const {getByText} = render(<ButtonComponent {...defaultProps} />);
    const button = getByText(defaultProps.title);

    fireEvent.press(button);
    expect(mockOnPress).toHaveBeenCalled();
  });
});
