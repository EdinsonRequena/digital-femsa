import React from 'react';
import {render} from '@testing-library/react-native';
import {Header} from '..';

describe('Header', () => {
  it('should renders correctly', () => {
    const {getByText} = render(<Header user="Edinson Requena" />);

    expect(getByText('Bienvenido de vuelta!')).toBeDefined();
    expect(getByText('Edinson Requena')).toBeDefined();
  });
});
