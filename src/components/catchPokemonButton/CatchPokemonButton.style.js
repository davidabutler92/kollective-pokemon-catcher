import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  buttonRoot: {
    backgroundColor: theme.palette.primary.main,
    color: 'white',
    '&:hover': {
      backgroundColor: theme.palette.primary.dark,
    },
  },
}));

export default useStyles;
