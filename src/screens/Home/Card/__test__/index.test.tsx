import React from 'react';
import {render} from '@testing-library/react-native';
import {Card} from '..';

describe('Card component', () => {
  it('should render correctly', () => {
    const {getByText} = render(<Card month="April" pts="100" />);

    expect(getByText('April')).toBeDefined();
    expect(getByText('100 pts')).toBeDefined();
  });
});
