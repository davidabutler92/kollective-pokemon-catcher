import { makeStyles } from '@material-ui/core/styles';
import { HEADER_HEIGHT } from '../../constants';

const useStyles = makeStyles({
  root: {
    minHeight: `calc(100vh - ${HEADER_HEIGHT}vh)`,
    marginTop: 20,
  },
  gridItem: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  progressSpinnerDiv: {
    height: '90vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default useStyles;
