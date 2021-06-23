import { getRandomInt } from './pokeApi.helpers';

export const getRandomPokemon = async () => {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon-species/?limit=0`);
  if (!res.ok) {
    throw new Error('Could not find Pokemon');
  } else {
    const pokemon = await res.json();
    const maxPokemonCount = pokemon.count;
    const randomPokemonIds = getRandomInt(1, maxPokemonCount);

    return Promise.all(
      randomPokemonIds.map(async (id) => {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        if (!res.ok) {
          throw new Error('Could not find Pokemon');
        }
        return await response.json();
      })
    );
  }
};
