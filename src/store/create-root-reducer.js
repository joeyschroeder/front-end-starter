import { combineReducers } from 'redux';
import { sampleReducer, REDUCER_PREFIX as SAMPLE } from './sample/sample';

export const createRootReducer = () =>
  combineReducers({
    [SAMPLE]: sampleReducer,
  });
