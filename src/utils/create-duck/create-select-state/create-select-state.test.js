import { createSelectState } from './create-select-state';

describe('createSelectState', () => {
  it('should select state from provided path', () => {
    const selectUser = createSelectState('user', {});
    const state = {
      user: {
        name: 'John Doe',
        age: 30,
      },
    };

    expect(selectUser(state)).toEqual({
      name: 'John Doe',
      age: 30,
    });
  });

  it('should return initial state if path does not exist', () => {
    const selectNonExistent = createSelectState('nonExistent', {
      default: 'state',
    });
    const state = {
      user: {
        name: 'John Doe',
        age: 30,
      },
    };

    expect(selectNonExistent(state)).toEqual({ default: 'state' });
  });
});
