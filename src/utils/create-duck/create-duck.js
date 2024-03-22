import { createSlice } from '@reduxjs/toolkit';
import { createPath } from './create-path/create-path';
import { createReducers } from './create-reducers/create-reducers';
import { createSelectors } from './create-selectors/create-selectors';
import { createSelectState } from './create-select-state/create-select-state';
import { getObjectWithPropWarning } from './get-object-with-prop-warning/get-object-with-prop-warning';

export function createDuck(config) {
  if (typeof config !== 'object') throw new Error('config is not object');

  const { extraReducers, extraSelectors, initialState, name, parentNames } = config;
  if (!name) throw new Error('name is undefined');

  const path = createPath(parentNames, name);
  const selectState = createSelectState(path, initialState);

  const selectors = createSelectors(selectState, initialState);

  const slice = createSlice({
    extraReducers,
    initialState,
    name,
    reducers: createReducers(initialState),
    selectors,
  });

  const actions = getObjectWithPropWarning(slice.actions, 'actions', name);

  const select = getObjectWithPropWarning(
    {
      ...slice.getSelectors(),
      ...extraSelectors,
      state: selectState,
    },
    'select',
    name,
  );

  return {
    actions,
    initialState: slice.getInitialState(),
    name,
    path,
    reducer: slice.reducer,
    select,
  };
}
