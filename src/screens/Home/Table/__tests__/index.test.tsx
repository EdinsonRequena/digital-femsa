import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {Table} from '..';

const mockProduct = {
  product: 'Product Name',
  points: 10,
  image: 'https://example.com/image.jpg',
};

describe('Table', () => {
  it('should render correctly', () => {
    const {getByText, getByTestId} = render(
      <Table {...mockProduct} onPress={() => {}} />,
    );

    expect(getByText('Product Name')).toBeDefined();
    expect(getByText('+')).toBeDefined();
    expect(getByTestId('table-image')).toBeDefined();
    expect(getByTestId('pressable-element')).toBeDefined();
  });

  it('should call onPress with correct parameters when button is pressed', () => {
    const onPressMock = jest.fn();
    const {getByTestId} = render(
      <Table {...mockProduct} onPress={onPressMock} />,
    );
    fireEvent.press(getByTestId('pressable-element'));
    expect(onPressMock).toHaveBeenCalledWith(mockProduct);
  });
});
