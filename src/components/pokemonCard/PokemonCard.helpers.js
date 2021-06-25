export const handleCardActionClick = ({
  setIsDisabled,
  setPokemonIndex,
  isDisabled,
  index,
}) => {
  setIsDisabled(!isDisabled);
  setPokemonIndex(index);
};
