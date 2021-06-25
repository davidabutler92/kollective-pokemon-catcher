import { getRandomInts } from './pokeApi.helpers';
import { MIN_COUNT } from './pokeApi-constants';

/**fetch pokemon-species for the count property: 898 */
export const getPokemonCount = async () => {
  try {
    const res = await fetch(
      `https://pokeapi.co/api/v2/pokemon-species/?limit=1`
    );
    const reposnse = await res.json();
    return reposnse?.count;
  } catch (err) {
    throw new Error(err);
  }
};

/** fetch pokemon by id (1-898) */
export const getPokemonById = async (id) => {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    return response.json();
  } catch (err) {
    throw new Error(err);
  }
};

/** fetch 10 random pokemon by grabbing count, then call getPokemonById */
export const getRandomPokemon = async () => {
  const maxPokemonCount = await getPokemonCount();
  const randomPokemonIds = getRandomInts(MIN_COUNT, maxPokemonCount);
  return Promise.all(randomPokemonIds.map(getPokemonById));
};
