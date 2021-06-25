export const handleNicknameChange = ({ e, setNickname }) => {
  setNickname(e.target.value);
};

export const handleNicknameSubmit = ({
  addCaughtPokemon,
  dispatch,
  e,
  handleClickClose,
  nickname,
  selectedPokemon,
  setNickname,
  setInLocalStorage,
}) => {
  e.preventDefault();
  if (nickname === '') {
    dispatch(addCaughtPokemon(selectedPokemon));
    setInLocalStorage(selectedPokemon);
    handleClickClose();
    return;
  }

  const nicknamedPokemon = {
    ...selectedPokemon,
    name: nickname,
  };

  dispatch(addCaughtPokemon(nicknamedPokemon));
  setInLocalStorage(nicknamedPokemon);
  setNickname('');
  handleClickClose();
};

export const handleClose = ({ setNickname, handleClickClose }) => {
  setNickname('');
  handleClickClose();
};
