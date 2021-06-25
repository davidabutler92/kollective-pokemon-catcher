import React from 'react';
import useStyles from './NavBar.styles';
import { Link } from 'react-router-dom';

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
      <Toolbar className={classes.toolBar}>
        <Typography variant="h4" className={classes.title}>
          <Link className={classes.link} to="/">
            Pokemon Catcher
          </Link>
        </Typography>
        <CatchPokemonButton />
      </Toolbar>
    </AppBar>
  );
}
