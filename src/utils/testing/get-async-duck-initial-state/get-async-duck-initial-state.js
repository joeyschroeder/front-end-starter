import { ASYNC_THUNK_STATUS_STATES } from 'constants/async-thunk-status-states';

// eslint-disable-next-line import/no-unused-modules
export const getAsyncDuckInitialState = (dataState) => {
  return { data: dataState, status: ASYNC_THUNK_STATUS_STATES.IDLE };
};
