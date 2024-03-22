import { ASYNC_THUNK_STATUS_STATES } from 'constants/async-thunk-status-states';

export const selectAllRequestFulfilled = (state, selectors) => {
  return selectors.every((selector) => selector(state) === ASYNC_THUNK_STATUS_STATES.FULFILLED);
};
