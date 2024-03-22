import { createDuck } from 'utils/create-duck/create-duck';

export const INITIAL_STATE = 0;

export const sampleDuck = createDuck({
  name: 'sample',
  initialState: INITIAL_STATE,
});

export const updateSampleByOne = () => (dispatch, getState) => {
  const value = sampleDuck.select.state(getState());
  dispatch(sampleDuck.update(value + 1));
};
