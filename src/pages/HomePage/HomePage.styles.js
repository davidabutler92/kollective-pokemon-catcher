import { makeStyles } from '@material-ui/core/styles';
import { HEADER_HEIGHT } from '../../constants';

const useStyles = makeStyles({
  root: {
    minHeight: `calc(100vh - ${HEADER_HEIGHT}vh)`,
  },
  gridItem: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 350,
  },
  progressSpinnerDiv: {
    height: '90vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleDiv: {
    display: 'flex',
    justifyContent: 'flex-start',
    paddingLeft: 20,
    marginTop: 20,
  },
});

export default useStyles;
