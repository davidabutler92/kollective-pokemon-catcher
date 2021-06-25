import React from 'react';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';
import useStyles from './NavigationButton.styles';

export default function NavigationButton({ title, path }) {
  const classes = useStyles();
  const history = useHistory();

  const handleClick = () => {
    history.push(path);
  };

  return (
    <Button
      onClick={handleClick}
      variant="contained"
      className={classes.buttonRoot}
    >
      {title}
    </Button>
  );
}
