import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  getCaughtPokemon,
  getIsCaughtPokemonEmpty,
} from '../../state/pokemon/pokemon.selectors';
import { getFromLocalStorage } from '../../data/localstorage.helpers';
import { addCaughtPokemon } from '../../state/pokemon/pokemon.slice';

/** components */
import CaughtPokemonCard from '../../components/caughPokemonCard/CaughtPokemonCard';

/** material components */
import Container from '@material-ui/core/Container';
import useStyles from './HomePage.styles';
import Grid from '@material-ui/core/Grid';

export default function HomePage() {
  const pokemon = useSelector(getCaughtPokemon);
  const classes = useStyles();
  const dispatch = useDispatch();
  const isCaughtPokemonEmpty = useSelector(getIsCaughtPokemonEmpty);

  useEffect(() => {
    if (isCaughtPokemonEmpty) {
      const localStoragePokemon = getFromLocalStorage();
      localStoragePokemon.forEach((pokemon) => {
        dispatch(addCaughtPokemon(pokemon));
      });
    }
  }, [dispatch, isCaughtPokemonEmpty]);

  return (
    <Container data-testid="home-page">
      <Grid container spacing={3}>
        {pokemon?.map((pokemon, index) => {
          return (
            <Grid
              item
              key={pokemon.id}
              xs={12}
              md={4}
              lg={3}
              className={classes.gridItem}
            >
              <CaughtPokemonCard pokemon={pokemon} index={index} />
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
}
