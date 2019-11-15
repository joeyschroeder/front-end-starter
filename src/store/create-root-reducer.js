import { combineReducers } from 'redux';
import { sampleReducer } from './sample/sample';

export const createRootReducer = () =>
  combineReducers({
    sample: sampleReducer
  });
