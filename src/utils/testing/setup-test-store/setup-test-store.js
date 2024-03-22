import { configureStore } from '@reduxjs/toolkit';
import { REDUCER } from 'store';

// eslint-disable-next-line import/no-unused-modules
export const setupStore = (preloadedState) => {
  return configureStore({
    reducer: REDUCER,
    preloadedState,
  });
};
