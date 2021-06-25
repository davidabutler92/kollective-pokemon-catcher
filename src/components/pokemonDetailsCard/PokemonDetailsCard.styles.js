import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  card: {
    height: '100%',
    maxWidth: 700,
    margin: 'auto',
    padding: 30,
  },
  media: {
    height: 300,
    margin: 'auto',
    backgroundColor: '#efebe9',
    borderRadius: 5,
  },
  titleDiv: {
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 5,
    paddingBottom: 20,
  },
  cardTitle: {
    textTransform: 'uppercase',
    fontSize: '1.6rem',
    paddingRight: 10,
  },
  pokemonId: {
    fontSize: '1.3rem',
  },
  pokemonTypeContainer: {
    display: 'flex',
  },
  pokemonTypeDiv: {
    color: 'white',
    backgroundColor: theme.palette.secondary.main,
    padding: 5,
    borderRadius: 5,
    marginRight: 20,
    width: 100,
    textAlign: 'center',
  },
  typeTitle: {
    paddingTop: 10,
    paddingBottom: 10,
    fontWeight: 'bolder',
  },
}));

export default useStyles;
