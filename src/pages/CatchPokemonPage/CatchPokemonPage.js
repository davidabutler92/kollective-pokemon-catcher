import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRandomPokemon } from '../../state/pokemon/pokemon.slice';
import { getPokemonState } from '../../state/pokemon/pokemon.selectors';
import { handleClickClose, handleClickOpen } from './CatchPokemon.helpers';

/** components */
import PokemonCard from '../../components/pokemonCard/PokemonCard';
import useStyles from './CatchPokemonPage.styles';
import PokemonDialog from '../../components/pokemonDialog/PokemonDialog';

/** material components */
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import CircularProgress from '@material-ui/core/CircularProgress';

export function CatchPokemonPage() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const pokemonState = useSelector(getPokemonState);
  const [isOpen, setIsOpen] = useState(false);
  const [pokemonIndex, setPokemonIndex] = useState('');

  useEffect(() => {
    dispatch(fetchRandomPokemon());
  }, [dispatch]);

  return (
    <Container data-testid="catch-pokemon-page">
      {pokemonState?.isLoading ? (
        <div className={classes.progressSpinnerDiv}>
          <CircularProgress size={100} />
        </div>
      ) : (
        <Grid container spacing={3} className={classes.root}>
          {pokemonState?.pokemon.map((pokemon, index) => {
            return (
              <Grid
                item
                key={pokemon.id}
                xs={12}
                md={4}
                lg={3}
                className={classes.gridItem}
              >
                <PokemonCard
                  index={index}
                  pokemon={pokemon}
                  setPokemonIndex={setPokemonIndex}
                  handleClickOpen={() => handleClickOpen(setIsOpen)}
                />
              </Grid>
            );
          })}
          <PokemonDialog
            pokemonIndex={pokemonIndex}
            handleClickClose={() => handleClickClose(setIsOpen)}
            isOpen={isOpen}
          />
        </Grid>
      )}
    </Container>
  );
}

export default CatchPokemonPage;
