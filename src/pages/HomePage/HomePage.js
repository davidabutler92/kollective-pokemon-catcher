import React, { useEffect } from 'react';
import { getPokemon } from '../../services/pokeApi';

export default function HomePage() {
  useEffect(() => {
    console.log(getPokemon());
  }, []);
  return <div>Home 'list' Page</div>;
}
