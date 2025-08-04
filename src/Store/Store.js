import { configureStore } from '@reduxjs/toolkit';
import playersReducer from './Slice/playerSlice'

const store = configureStore({
  reducer: {
    players: playersReducer, 
  },
});

export default store;