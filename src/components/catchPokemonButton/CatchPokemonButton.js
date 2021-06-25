import React from 'react';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';
import useStyles from './CatchPokemonButton.style';

export default function CatchPokemonButton() {
  const classes = useStyles();
  const history = useHistory();

  const handleClick = () => {
    history.push('/catch');
  };

  return (
    <Button
      onClick={handleClick}
      variant="contained"
      className={classes.buttonRoot}
    >
      Catch Pokemon
    </Button>
  );
}
