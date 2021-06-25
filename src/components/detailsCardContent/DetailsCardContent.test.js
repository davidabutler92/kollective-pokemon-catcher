import React from 'react';
import { render } from '@testing-library/react';
import DetailsCardContent from './DetailsCardContent';

describe('DetailsCardContent', () => {
  it('renders the component', () => {
    const pokemon = {};

    const { getByTestId } = render(<DetailsCardContent pokemon={pokemon} />);
    const component = getByTestId('details-card-content');
    expect(component).toBeInTheDocument();
  });
});
