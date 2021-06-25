export const setInLocalStorage = (pokemon) => {
  let existingEntries = [];
  existingEntries = JSON.parse(localStorage.getItem('session')) || [];
  existingEntries.push(pokemon);
  localStorage.setItem('session', JSON.stringify(existingEntries));
};

export const getFromLocalStorage = () => {
  const pokemon = JSON.parse(localStorage.getItem('session')) || [];
  return pokemon;
};
