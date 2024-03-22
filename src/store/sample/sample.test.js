import { INITIAL_STATE, sampleDuck } from './sample';

describe('sampleDuck', () => {
  it('should create a duck with the correct initial state', () => {
    const duck = sampleDuck;
    expect(duck.initialState).toEqual(INITIAL_STATE);
  });
});
