import { getDifferenceFromObjects } from './get-difference-from-objects';

describe('getDifferenceFromObjects', () => {
  it('should an array with difference between objects', () => {
    const test = 'value';
    const different = 'test';
    const object = { test, different: 'test-1' };
    const comparison = { test, different };

    const result = getDifferenceFromObjects(object, comparison);
    expect(result).toEqual([{ key: 'different', value: different }]);
  });
});
