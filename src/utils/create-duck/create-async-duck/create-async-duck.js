/* eslint-disable no-param-reassign */
import { createAsyncThunk } from '@reduxjs/toolkit';
import { ASYNC_THUNK_STATUS_STATES } from 'constants/async-thunk-status-states';
import { ASYNC_THUNK_TYPES } from 'constants/async-thunk-types';
import { createDuck } from '../create-duck';
import { createPath } from '../create-path/create-path';
import { createSelectState } from '../create-select-state/create-select-state';

export const createAsyncDuck = (config) => {
  const {
    initialState: initialStateParam = {},
    name,
    parentNames,
    requestFunc: requestFuncParam,
    requestOnce = false,
    resetOnReject,
  } = config;
  if (!name) throw new Error('name is undefined');
  if (!requestFuncParam) throw new Error('requestFunc is undefined');

  const initialState = {
    data: initialStateParam,
    status: ASYNC_THUNK_STATUS_STATES.IDLE,
  };

  const path = createPath(parentNames, name);

  const selectState = createSelectState(path, initialState);
  const selectData = (state) => selectState(state)?.data;
  const selectStatus = (state) => selectState(state)?.status || ASYNC_THUNK_STATUS_STATES.IDLE;

  function requestFunc(args, thunkAPI) {
    const { getState } = thunkAPI;
    if (requestOnce && selectStatus(getState()) === ASYNC_THUNK_STATUS_STATES.FULFILLED) return;

    return requestFuncParam(args, thunkAPI);
  }

  const request = createAsyncThunk(`${path}/async-request`, requestFunc);

  const extraSelectors = Object.keys(initialState.data).reduce((accumulator, key) => {
    accumulator[key] = (state) => selectData(state)?.[key] || initialState.data[key];
    return accumulator;
  }, {});

  const extraReducers = (builder) => {
    builder.addCase(request[ASYNC_THUNK_TYPES.PENDING], (state) => {
      state.status = ASYNC_THUNK_STATUS_STATES.PENDING;
    });
    builder.addCase(request[ASYNC_THUNK_TYPES.FULFILLED], (state, action) => {
      state.status = ASYNC_THUNK_STATUS_STATES.FULFILLED;
      state.data = action.payload;
    });
    builder.addCase(request[ASYNC_THUNK_TYPES.REJECTED], (state) => {
      state.status = ASYNC_THUNK_STATUS_STATES.REJECTED;
      if (resetOnReject) state.data = initialState.data;
    });
  };

  return {
    ...createDuck({
      extraReducers,
      extraSelectors,
      initialState,
      name,
      parentNames,
    }),
    request,
  };
};
