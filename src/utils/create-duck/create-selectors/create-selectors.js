import { isInitialStatePrimitive } from '../is-initial-state-primitive/is-initial-state-primitive';

export function createSelectors(selectState, initialState) {
  let selectors;

  // If initialState is a single value, then the selectState function is all we need, else if
  // initialState is an object, then we need a selector for each key in the object.
  if (!isInitialStatePrimitive(initialState)) {
    selectors = Object.keys(initialState).reduce((accumulator, key) => {
      accumulator[key] = (state) => selectState(state)?.[key];
      return accumulator;
    }, {});
  }

  return selectors;
}
