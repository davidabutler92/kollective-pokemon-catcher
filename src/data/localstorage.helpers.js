export const getFromLocalStorage = (key) => {
  const item = localStorage.getItem(key);
  return JSON.parse(item);
};

export const setInLocalStorage = (key, value) => {
  const stringyItem = JSON.stringify(value);
  localStorage.setItem(key, stringyItem);
};
