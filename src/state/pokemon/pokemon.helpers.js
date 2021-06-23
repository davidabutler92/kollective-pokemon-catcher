export const transformIndexById = (pokemonArr = []) => {
  return pokemonArr.reduce((acc, curr) => {
    return {
      ...acc,
      [curr.id]: curr,
    };
  }, {});
};
