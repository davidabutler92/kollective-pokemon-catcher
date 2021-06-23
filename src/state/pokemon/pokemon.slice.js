import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getRandomPokemon } from '../../services/pokeApi';

const fetchPokemon = createAsyncThunk('pokemon/fetchPokemon', async () => {
  const response = await getRandomPokemon();
  return response;
});

const initialState = {
  byId: {},
  allIds: [],
  isLoading: false,
};

const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducer: {},
  extraReducers: {},
});

export default pokemonSlice.reducer;
