import React from 'react';
import { render } from '@testing-library/react';
import PokemonDetailsCard from './PokemonDetailsCard';

describe('PokemonDetailsCard', () => {
  it('renders the component', () => {
    const pokemon = {
      sprites: {
        front_default: 'http://pokeapi.co/media/sprites/pokemon/12.png',
      },
    };

    const { getByTestId } = render(<PokemonDetailsCard pokemon={pokemon} />);
    const component = getByTestId('pokemon-details-card');
    expect(component).toBeInTheDocument();
  });
});
