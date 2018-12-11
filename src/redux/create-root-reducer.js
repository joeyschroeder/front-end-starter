import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { sampleReducer } from './sample/sample';

export const createRootReducer = (history = {}) =>
  combineReducers({
    router: connectRouter(history),
    sample: sampleReducer
  });
