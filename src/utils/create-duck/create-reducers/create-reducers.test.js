import { createReducers } from './create-reducers';

describe('createReducers', () => {
  it('should create reducers for each key in the initial state if it is an object', () => {
    const initialState = { prop1: 'value1', prop2: 'value2' };
    const reducers = createReducers(initialState);

    expect(reducers.updateProp1).toBeDefined();
    expect(reducers.updateProp2).toBeDefined();
  });

  it('should not create reducers for each key in the initial state if it is a primitive', () => {
    const initialState = 'value';
    const reducers = createReducers(initialState);

    expect(reducers.updateValue).toBeUndefined();
  });

  it('should create a reset reducer that returns the initial state', () => {
    const initialState = { prop: 'value' };
    const reducers = createReducers(initialState);

    expect(reducers.reset()).toEqual(initialState);
  });

  it('should create an update reducer that returns the payload', () => {
    const initialState = { prop: 'value' };
    const reducers = createReducers(initialState);
    const payload = { prop: 'new value' };

    expect(reducers.update(initialState, { payload })).toEqual(payload);
  });
});
