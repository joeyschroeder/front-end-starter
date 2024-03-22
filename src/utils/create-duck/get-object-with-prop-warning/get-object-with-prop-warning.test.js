import { getObjectWithPropWarning } from './get-object-with-prop-warning';

describe('getObjectWithPropWarning', () => {
  it('should throw an error if object is not an object', () => {
    expect(() => getObjectWithPropWarning(null, 'objectName', 'duckName')).toThrow('object is not object');
  });

  it('should throw an error if objectName is undefined', () => {
    expect(() => getObjectWithPropWarning({}, undefined, 'duckName')).toThrow('objectName is undefined');
  });

  it('should throw an error if duckName is undefined', () => {
    expect(() => getObjectWithPropWarning({}, 'objectName', undefined)).toThrow('duckName is undefined');
  });

  it('should return the property if it exists on the object', () => {
    const object = getObjectWithPropWarning({ prop: 'value' }, 'objectName', 'duckName');
    expect(object.prop).toBe('value');
  });

  it('should console.warn if the property does not exist on the object', () => {
    // eslint-disable-next-line no-console
    console.warn = jest.fn();
    const object = getObjectWithPropWarning({ prop: 'value' }, 'objectName', 'duckName');
    // eslint-disable-next-line no-unused-expressions
    object.nonExistentProp;
    // eslint-disable-next-line no-console
    expect(console.warn).toHaveBeenCalled();
  });
});
