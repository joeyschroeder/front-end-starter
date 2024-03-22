import { ASYNC_THUNK_STATUS_STATES } from 'constants/async-thunk-status-states';
import { selectAnyRequestRejected } from './select-any-request-rejected';

describe('selectAnyRequestRejected', () => {
  it('should return true if any request is rejected', () => {
    const state = {
      request1: ASYNC_THUNK_STATUS_STATES.FULFILLED,
      request2: ASYNC_THUNK_STATUS_STATES.REJECTED,
    };
    const selectors = [(state) => state.request1, (state) => state.request2];
    expect(selectAnyRequestRejected(state, selectors)).toBe(true);
  });

  it('should return false if no requests are rejected', () => {
    const state = {
      request1: ASYNC_THUNK_STATUS_STATES.FULFILLED,
      request2: ASYNC_THUNK_STATUS_STATES.FULFILLED,
    };
    const selectors = [(state) => state.request1, (state) => state.request2];
    expect(selectAnyRequestRejected(state, selectors)).toBe(false);
  });
});
