import { configureStore } from '@reduxjs/toolkit';
import { REDUCER } from 'store';

export const setupStore = (preloadedState) => {
  return configureStore({
    reducer: REDUCER,
    preloadedState,
  });
};
