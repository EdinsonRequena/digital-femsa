import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {Table} from '..';

const mockProduct = {
  product: 'Product Name',
  createdAt: '26 de enero, 2019',
  points: 10,
  image: 'https://example.com/image.jpg',
};

describe('Table', () => {
  it('should renders correctly', () => {
    const {getByText, getByTestId} = render(
      <Table {...mockProduct} onPress={() => {}} />,
    );
    expect(getByText('Product Name')).toBeDefined();
    expect(getByText('26 de enero, 2019')).toBeDefined();
    expect(getByText('+10 >')).toBeDefined();
    expect(getByTestId('table-image')).toBeDefined();
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
