import { makeStyles } from '@material-ui/core';
import { HEADER_HEIGHT } from '../../constants';

const useStyles = makeStyles({
  root: {
    minHeight: `calc(100vh - ${HEADER_HEIGHT}vh)`,
    paddingTop: 100,
  },
});

export default useStyles;
