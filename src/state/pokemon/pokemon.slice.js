import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

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
