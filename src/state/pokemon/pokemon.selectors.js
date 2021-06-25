export const getPokemonState = (state) => state?.pokemon || {};

export const getAllPokemon = (state) => getPokemonState(state)?.pokemon || [];

export const getPokemonByIndex = (state, index) =>
  getAllPokemon(state)?.[index] || {};

export const getCaughtPokemon = (state) =>
  getPokemonState(state)?.caughtPokemon || [];

export const getCaughtPokemonByIndex = (state, index) =>
  getCaughtPokemon(state)?.[index] || {};

export const getIsCaughtPokemonEmpty = (state) =>
  !getCaughtPokemon(state).length;
