import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
    fontWeight: 900,
    color: 'white',
  },
  toolBar: {
    backgroundColor: theme.palette.secondary.main,
  },
}));

export default useStyles;
