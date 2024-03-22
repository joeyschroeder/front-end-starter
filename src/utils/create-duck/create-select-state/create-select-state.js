import { get } from 'lodash';

export function createSelectState(path, initialState) {
  return (state) => get(state, path, initialState);
}
