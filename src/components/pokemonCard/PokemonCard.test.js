import React from 'react';
import { render } from '@testing-library/react';
import PokemonCard from './PokemonCard';

describe('PokemonCard', () => {
  it('renders the component', () => {
    const pokemon = {
      sprites: {
        front_default: 'http://pokeapi.co/media/sprites/pokemon/12.png',
      },
    };

    const { getByTestId } = render(<PokemonCard pokemon={pokemon} />);
    const component = getByTestId('pokemon-card');
    expect(component).toBeInTheDocument();
  });
});
