import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import testDuck from './test.duck';

export const createRootReducer = (history = {}) =>
  combineReducers({
    router: connectRouter(history),
    testState: testDuck
  });
