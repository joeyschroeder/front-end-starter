import { combineReducers } from 'redux';
import { sampleReducer, REDUCER_PREFIX as SAMPLE } from './sample/sample';

export function createRootReducer() {
  return combineReducers({
    [SAMPLE]: sampleReducer,
  });
}
