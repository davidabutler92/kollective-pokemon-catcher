import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getRandomPokemon } from '../../services/pokeApi';

export const fetchRandomPokemon = createAsyncThunk(
  'pokemon/fetchRandomPokemon',
  async () => {
    const response = await getRandomPokemon();
    return response;
  }
);

const initialState = {
  pokemon: [],
  caughtPokemon: [],
  isLoading: false,
};

const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    addCaughtPokemon: (state, action) => {
      state.caughtPokemon = [...state.caughtPokemon, action.payload];
    },
  },
  extraReducers: {
    [fetchRandomPokemon.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchRandomPokemon.fulfilled]: (state, action) => {
      state.pokemon = action.payload;
      state.isLoading = false;
    },
    [fetchRandomPokemon.rejected]: () => {},
  },
});

export const { addCaughtPokemon } = pokemonSlice.actions;
export default pokemonSlice.reducer;
