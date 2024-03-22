import { configureStore } from '@reduxjs/toolkit';
import { sampleDuck } from './sample/sample';

export const REDUCER = {
  [sampleDuck.name]: sampleDuck.reducer,
};

export const STORE = configureStore({
  reducer: REDUCER,
});
