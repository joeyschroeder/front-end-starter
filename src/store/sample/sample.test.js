import {
  resetSampleValue,
  selectSampleValue,
  updateSampleValue
} from './sample';

import { createRootReducer } from '../create-root-reducer';

describe('sampleReducer', () => {
  describe('updateSampleValue', () => {
    it('should add 1 to state.sample.sampleValue', () => {
      const sampleValue = 0;
      const action = updateSampleValue();
      const state = createRootReducer()({ sample: { sampleValue } }, action);
      const result = selectSampleValue(state);

      expect(result).toEqual(sampleValue + 1);
    });
  });

  describe('resetSampleValue', () => {
    it('should reset to state.sample.sampleValue to 0', () => {
      const action = resetSampleValue();
      const state = createRootReducer()(
        { sample: { sampleValue: 10 } },
        action
      );
      const result = selectSampleValue(state);

      expect(result).toEqual(0);
    });
  });
});
