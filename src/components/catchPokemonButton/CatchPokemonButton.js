import React from 'react';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';

export default function CatchPokemonButton() {
  const history = useHistory();

  const handleClick = () => {
    history.push('/catch');
  };

  return (
    <Button onClick={handleClick} variant="contained">
      Catch Pokemon
    </Button>
  );
}
