import { createSlice } from '@reduxjs/toolkit';
import { getCategory1Players , getCategory2Players , getCategory3Players } from '../Action/Player-action';

const playersSlice = createSlice({
  name: 'players',
  initialState: {
    category1: [],
    category2: [],
    category3: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCategory1Players.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCategory1Players.fulfilled, (state, action) => {
        state.loading = false;
        state.category1 = action.payload;
      })
      .addCase(getCategory1Players.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })



      .addCase(getCategory2Players.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCategory2Players.fulfilled, (state, action) => {
        state.loading = false;
        state.category2 = action.payload;
      })
      .addCase(getCategory2Players.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      

      .addCase(getCategory3Players.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCategory3Players.fulfilled, (state, action) => {
        state.loading = false;
        state.category3 = action.payload;
      })
      .addCase(getCategory3Players.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default playersSlice.reducer;
