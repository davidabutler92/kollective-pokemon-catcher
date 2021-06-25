import React from 'react';
import { render } from '@testing-library/react';
import CaughtPokemonCard from './CaughtPokemonCard';

describe('CaughtPokemonCard', () => {
  it('renders the component', () => {
    const pokemon = {
      sprites: {
        front_default: 'http://pokeapi.co/media/sprites/pokemon/12.png',
      },
    };

    const { getByTestId } = render(<CaughtPokemonCard pokemon={pokemon} />);
    const component = getByTestId('caugh-pokemon-card');
    expect(component).toBeInTheDocument();
  });
});
