import { combineReducers } from 'redux';
import testDuck from './test.duck';

const Reducers = combineReducers({
  testState: testDuck
});

export default Reducers;
