import { ASYNC_THUNK_STATUS_STATES } from 'constants/async-thunk-status-states';
import { selectAnyRequestPending } from './select-any-request-pending';

describe('selectAnyRequestPending', () => {
  it('should return true if any request is pending', () => {
    const state = {
      request1: ASYNC_THUNK_STATUS_STATES.FULFILLED,
      request2: ASYNC_THUNK_STATUS_STATES.PENDING,
    };
    const selectors = [(state) => state.request1, (state) => state.request2];
    expect(selectAnyRequestPending(state, selectors)).toBe(true);
  });

  it('should return false if no requests are pending', () => {
    const state = {
      request1: ASYNC_THUNK_STATUS_STATES.FULFILLED,
      request2: ASYNC_THUNK_STATUS_STATES.FULFILLED,
    };
    const selectors = [(state) => state.request1, (state) => state.request2];
    expect(selectAnyRequestPending(state, selectors)).toBe(false);
  });
});
