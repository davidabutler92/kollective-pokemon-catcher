import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  cardContent: {
    backgroundColor: theme.palette.primary.main,
    borderRadius: 5,
  },
  boldWhite: {
    color: 'white',
    fontWeight: 700,
  },
  thinWhite: {
    color: 'white',
    fontWeight: 200,
  },
}));

export default useStyles;
