import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: 220,
    height: 300,
  },
  media: {
    height: 120,
    width: 120,
    marginLeft: 'auto',
    marginRight: 'auto',
    backgroundColor: '#efebe9',
    borderRadius: 2,
  },
  text: {
    textAlign: 'center',
  },
  button: {
    width: '100%',
    backgroundColor: '#ff867c',
    color: 'white',
    '&:hover': {
      backgroundColor: '#b61827',
    },
  },
  cardAction: {
    width: '100%',
  },
}));

export default useStyles;
