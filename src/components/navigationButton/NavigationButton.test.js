import React from 'react';
import { render } from '@testing-library/react';
import NavigationButton from './NavigationButton';

describe('NavigationButton', () => {
  it('renders the component', () => {
    const { getByRole } = render(<NavigationButton />);
    const component = getByRole('button');
    expect(component).toBeInTheDocument();
  });
});