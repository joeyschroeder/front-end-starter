import { createAction, handleActions } from 'redux-actions';

export const REDUCER_PREFIX = 'sample';

// Actions
const UPDATE = `${REDUCER_PREFIX}/UPDATE`;
const RESET = `${REDUCER_PREFIX}/RESET`;

// Action Creators
export const updateSampleValue = createAction(UPDATE);
export const resetSampleValue = createAction(RESET);

// Default State
export const DEFAULT_STATE = { sampleValue: 0 };

// Reducer
export const sampleReducer = handleActions(
  {
    [RESET]: () => ({ ...DEFAULT_STATE }),
    [UPDATE]: (state) => {
      const { sampleValue } = state;
      return { ...state, sampleValue: sampleValue + 1 };
    },
  },
  DEFAULT_STATE,
);

// Selectors
export const selectSample = (state = {}) => state[REDUCER_PREFIX] || {};
export const selectSampleValue = (state) =>
  selectSample(state).sampleValue || DEFAULT_STATE.sampleValue;

// Thunks
