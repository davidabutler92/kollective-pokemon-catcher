import {
  getPokemonState,
  getAllPokemon,
  getPokemonByIndex,
  getCaughtPokemon,
} from './pokemon.selectors';

describe('getPokemonState', () => {
  it('should select root pokemon state', () => {
    const initialState = {
      pokemon: 'hello',
    };

    const expectation = 'hello';

    expect(getPokemonState(initialState)).toEqual(expectation);
  });

  it('should return a default', () => {
    expect(getPokemonState()).toEqual({});
  });
});

describe('getAllPokemon', () => {
  it('should select all pokemon state', () => {
    const initialState = {
      pokemon: {
        pokemon: 'hello',
      },
    };

    const expectation = 'hello';

    expect(getAllPokemon(initialState)).toEqual(expectation);
  });

  it('should return a default', () => {
    expect(getAllPokemon()).toEqual([]);
  });
});

describe('getPokemonByIndex', () => {
  it('should select a pokemon given state and an index', () => {
    const initialState = {
      pokemon: {
        pokemon: ['hello', 'goodbye'],
      },
    };

    const index = 1;

    const expectation = 'goodbye';

    expect(getPokemonByIndex(initialState, index)).toEqual(expectation);
  });

  it('should return a default', () => {
    expect(getPokemonByIndex()).toEqual({});
  });
});

describe('getCaughtPokemon', () => {
  it('should select all caught pokemon', () => {
    const initialState = {
      pokemon: {
        caughtPokemon: ['hello', 'goodbye'],
      },
    };

    const expectation = ['hello', 'goodbye'];

    expect(getCaughtPokemon(initialState)).toEqual(expectation);
  });

  it('should return a default', () => {
    expect(getCaughtPokemon()).toEqual([]);
  });
});
