import pokemonReducer from './pokemon.slice';

describe('pokemonReducer', () => {
  it('should return new caughtPokemon state', () => {
    const initialState = {
      pokemon: [],
      caughtPokemon: [],
      isLoading: false,
    };

    const action = {
      type: 'pokemon/addCaughtPokemon',
      payload: 'hello',
    };

    const expectation = {
      pokemon: [],
      caughtPokemon: ['hello'],
      isLoading: false,
    };

    expect(pokemonReducer(initialState, action)).toEqual(expectation);
  });
});
