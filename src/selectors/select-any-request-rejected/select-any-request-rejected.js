import { ASYNC_THUNK_STATUS_STATES } from 'constants/async-thunk-status-states';

export const selectAnyRequestRejected = (state, selectors) => {
  return selectors.some((selector) => selector(state) === ASYNC_THUNK_STATUS_STATES.REJECTED);
};
