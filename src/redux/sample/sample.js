import { createAction, handleActions } from 'redux-actions';

// Actions
const UPDATE = 'sample/UPDATE';
const RESET = 'sample/RESET';

// Action Creators
export const updateSampleValue = createAction(UPDATE);
export const resetSampleValue = createAction(RESET);

// Default State
export const DEFAULT_STATE = { sampleValue: 0 };

// Reducer
export const sampleReducer = handleActions(
  {
    [RESET]: state => ({ ...state, sampleValue: DEFAULT_STATE.sampleValue }),
    [UPDATE]: state => {
      const { sampleValue } = state;
      return { ...state, sampleValue: sampleValue + 1 };
    }
  },
  DEFAULT_STATE
);

// Selectors
export const selectSample = (state = {}) => state.sample || {};
export const selectSampleValue = state => selectSample(state).sampleValue || DEFAULT_STATE.sampleValue;

// Thunks
