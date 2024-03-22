import { isInitialStatePrimitive } from '../is-initial-state-primitive/is-initial-state-primitive';
import { createSelectors } from './create-selectors';

jest.mock('../is-initial-state-primitive/is-initial-state-primitive');

describe('createSelectors', () => {
  it('should return undefined if initial state is primitive', () => {
    isInitialStatePrimitive.mockReturnValue(true);

    const selectors = createSelectors(() => {}, 'value');
    expect(selectors).toBeUndefined();
  });

  it('should create selectors for each key in the initial state if it is an object', () => {
    isInitialStatePrimitive.mockReturnValue(false);

    const initialState = { prop1: 'value1', prop2: 'value2' };
    const selectState = (state) => state;
    const selectors = createSelectors(selectState, initialState);

    const state = { prop1: 'new value1', prop2: 'new value2' };
    expect(selectors.prop1(state)).toBe('new value1');
    expect(selectors.prop2(state)).toBe('new value2');
  });
});
