import React, { useState, useEffect } from 'react';
import { getRandomPokemon } from '../../services/pokeApi';

export default function CatchPokemonPage() {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    getRandomPokemon().then((res) => console.log(res));
  }, []);
  return <div>Catch Pokemon Here</div>;
}
