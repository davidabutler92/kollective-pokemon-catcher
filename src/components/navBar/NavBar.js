import React from 'react';
import useStyles from './NavBar.styles';
import { useLocation } from 'react-router-dom';

/** components */
import NavigationButton from '../navigationButton/NavigationButton';

/** material ui components */
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

export default function NavBar() {
  const { pathname } = useLocation();
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar className={classes.toolBar}>
        <Typography variant="h4" className={classes.title}>
          Pokemon Catcher
        </Typography>
        {pathname === '/catch' ? (
          <NavigationButton title={'Caught Pokemon'} path={'/'} />
        ) : (
          <NavigationButton title={'Wild Area'} path={'/catch'} />
        )}
      </Toolbar>
    </AppBar>
  );
}
