import { isInitialStatePrimitive } from '../is-initial-state-primitive/is-initial-state-primitive';

export function createReducers(initialState) {
  let reducers;

  // If initialState is a single value, then we only need a single update reducer, else if
  // initialState is an object, then we need an update reducer for each key in the object.
  if (!isInitialStatePrimitive(initialState)) {
    reducers = Object.keys(initialState).reduce((accumulator, key) => {
      const actionName = `update${key[0].toUpperCase()}${key.slice(1)}`;
      accumulator[actionName] = (state, { payload }) => {
        // eslint-disable-next-line no-param-reassign
        state[key] = payload;
      };

      return accumulator;
    }, {});
  }

  return {
    ...reducers,
    reset: () => initialState,
    update: (state, { payload }) => payload,
  };
}
