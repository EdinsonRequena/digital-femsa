import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {Home} from '..';
import PContext from '../../../context/PContext';
import {ROUTES} from '../../../router/routes';

jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({
    navigate: jest.fn(),
  }),
}));

describe('Home', () => {
  const setSelectedProduct = jest.fn();
  const products = [
    {
      id: 1,
      product: 'Producto 1',
      points: 100,
      is_redemption: true,
      image: 'https://via.placeholder.com/150',
      createdAt: new Date(),
    },
    {
      id: 2,
      product: 'Producto 2',
      points: 200,
      is_redemption: false,
      image: 'https://via.placeholder.com/150',
      createdAt: new Date(),
    },
  ];

  const setup = () => {
    const navigation = {
      navigate: jest.fn(),
    };
    const wrapper = ({children}) => (
      <PContext.Provider value={{setSelectedProduct, products}}>
        {children}
      </PContext.Provider>
    );
    const component = render(<Home />, {wrapper});

    return {component, navigation};
  };

  it('should render the component', () => {
    const {component} = setup();

    expect(component).toBeDefined();
  });

  it('should navigate to the detail product screen', () => {
    const {component, navigation} = setup();
    const tableRow = component.getByTestId('Producto 1');
    fireEvent.press(tableRow);

    expect(setSelectedProduct).toHaveBeenCalledWith(products[0]);
    expect(navigation.navigate).toHaveBeenCalledWith(ROUTES.DETAIL_PRODUCT, {
      productName: products[0].product,
    });
  });
});
