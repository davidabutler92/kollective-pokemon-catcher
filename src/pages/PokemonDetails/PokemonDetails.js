import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  getIsCaughtPokemonEmpty,
  getCaughtPokemonByIndex,
} from '../../state/pokemon/pokemon.selectors';
import { getFromLocalStorage } from '../../data/localstorage.helpers';
import { addCaughtPokemon } from '../../state/pokemon/pokemon.slice';
import useStyles from './PokemonDetails.styles';

/** components */
import PokemonDetailsCard from '../../components/pokemonDetailsCard/PokemonDetailsCard';

/** material components */
import Container from '@material-ui/core/Container';

export default function PokemonDetails() {
  const classes = useStyles();
  const { id } = useParams();
  const dispatch = useDispatch();
  const pokemon = useSelector((state) => getCaughtPokemonByIndex(state, id));
  const isCaughtPokemonEmpty = useSelector(getIsCaughtPokemonEmpty);

  useEffect(() => {
    if (isCaughtPokemonEmpty) {
      const localStoragePokemon = getFromLocalStorage();
      localStoragePokemon.forEach((pokemon) => {
        dispatch(addCaughtPokemon(pokemon));
      });
    }
  }, []);

  return (
    <Container className={classes.root} data-testid="">
      <PokemonDetailsCard pokemon={pokemon} />
    </Container>
  );
}
