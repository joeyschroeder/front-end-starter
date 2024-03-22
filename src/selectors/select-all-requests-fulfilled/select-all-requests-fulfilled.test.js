import { ASYNC_THUNK_STATUS_STATES } from 'constants/async-thunk-status-states';
import { selectAllRequestFulfilled } from './select-all-requests-fulfilled';

describe('selectAllRequestFulfilled', () => {
  it('should return true if all requests are fulfilled', () => {
    const state = {
      request1: ASYNC_THUNK_STATUS_STATES.FULFILLED,
      request2: ASYNC_THUNK_STATUS_STATES.FULFILLED,
    };
    const selectors = [(state) => state.request1, (state) => state.request2];
    expect(selectAllRequestFulfilled(state, selectors)).toBe(true);
  });

  it('should return false if any request is not fulfilled', () => {
    const state = {
      request1: ASYNC_THUNK_STATUS_STATES.FULFILLED,
      request2: ASYNC_THUNK_STATUS_STATES.PENDING,
    };
    const selectors = [(state) => state.request1, (state) => state.request2];
    expect(selectAllRequestFulfilled(state, selectors)).toBe(false);
  });
});
