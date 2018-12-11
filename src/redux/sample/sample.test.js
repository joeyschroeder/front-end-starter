import { DEFAULT_STATE, resetSampleValue, sampleReducer, updateSampleValue } from './sample';

describe('sampleReducer', () => {
  describe('updateSampleValue', () => {
    it('should add 1 to state.sample.count', () => {
      const action = updateSampleValue();
      const result = sampleReducer(DEFAULT_STATE, action);
      expect(result).toMatchSnapshot();
    });
  });

  describe('resetSampleValue', () => {
    it('should reset to state.sample.count to 0', () => {
      const action = resetSampleValue();
      const result = sampleReducer(DEFAULT_STATE, action);
      expect(result).toMatchSnapshot();
    });
  });
});
