import { createAction, handleActions } from 'redux-actions';

// Default State
const DEFAULT_STATE = { testProp: 0 };

// Actions
const UPDATE = 'test/UPDATE';
const RESET = 'test/RESET';

// Action Creators
export const updateTestProp = createAction(UPDATE);
export const resetTestProp = createAction(RESET);

// Selectors
export const selectTest = (state = {}) => state.test || {};
export const selectTestValue = state => selectTest(state).testProp || DEFAULT_STATE.testProp;

// Reducer
export const testReducer = handleActions(
  {
    [RESET]: state => ({ ...state, testProp: DEFAULT_STATE.testProp }),
    [UPDATE]: state => {
      const { testProp } = state;
      return { ...state, testProp: testProp + 1 };
    }
  },
  DEFAULT_STATE
);
