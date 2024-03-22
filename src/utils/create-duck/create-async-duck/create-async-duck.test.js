import { ASYNC_THUNK_STATUS_STATES } from 'constants/async-thunk-status-states';
import { createAsyncDuck } from './create-async-duck';

describe('createAsyncDuck', () => {
  it('should throw an error if name is undefined', () => {
    expect(() => createAsyncDuck({ requestFunc: () => {} })).toThrow('name is undefined');
  });

  it('should throw an error if requestFunc is undefined', () => {
    expect(() => createAsyncDuck({ name: 'test' })).toThrow('requestFunc is undefined');
  });

  it('should create an async duck with the correct initial state', () => {
    const asyncDuck = createAsyncDuck({
      name: 'test',
      requestFunc: () => {},
    });

    expect(asyncDuck.initialState).toEqual({
      data: {},
      status: ASYNC_THUNK_STATUS_STATES.IDLE,
    });
  });

  it('should create an async duck with the correct selectors', () => {
    const asyncDuck = createAsyncDuck({
      name: 'test',
      requestFunc: () => {},
      initialState: { prop: 'value' },
    });

    const state = {
      test: {
        data: { prop: 'value' },
        status: ASYNC_THUNK_STATUS_STATES.IDLE,
      },
    };

    expect(asyncDuck.select.prop(state)).toBe('value');
  });
});
