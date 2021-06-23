import React from 'react';
import useStyles from './NavBar.styles';

/** material ui components */
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

/** components */
import CatchPokemonButton from '../catchPokemonButton/CatchPokemonButton';

export default function NavBar() {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          Pokemon Catcher
        </Typography>
        <CatchPokemonButton />
      </Toolbar>
    </AppBar>
  );
}
