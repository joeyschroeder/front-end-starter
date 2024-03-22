import { ASYNC_THUNK_STATUS_STATES } from 'constants/async-thunk-status-states';

export const getAsyncDuckInitialState = (dataState) => {
  return { data: dataState, status: ASYNC_THUNK_STATUS_STATES.IDLE };
};
