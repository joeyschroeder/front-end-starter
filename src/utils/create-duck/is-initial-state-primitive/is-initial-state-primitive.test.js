import { isInitialStatePrimitive } from './is-initial-state-primitive';

describe('isInitialStatePrimitive', () => {
  it('should return true for primitive values', () => {
    expect(isInitialStatePrimitive(1)).toBe(true);
    expect(isInitialStatePrimitive('string')).toBe(true);
    expect(isInitialStatePrimitive(true)).toBe(true);
    expect(isInitialStatePrimitive(null)).toBe(true);
    expect(isInitialStatePrimitive(undefined)).toBe(true);
  });

  it('should return true for arrays', () => {
    expect(isInitialStatePrimitive([1, 2, 3])).toBe(true);
  });

  it('should return false for objects', () => {
    expect(isInitialStatePrimitive({ prop: 'value' })).toBe(false);
  });
});
