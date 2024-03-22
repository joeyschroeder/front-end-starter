import { compose } from './compose';

describe('compose', () => {
  it('should compose functions from right to left', () => {
    const addTwo = (x) => x + 2;
    const multiplyByThree = (x) => x * 3;
    const subtractFive = (x) => x - 5;

    const composedFunc = compose(subtractFive, multiplyByThree, addTwo);

    expect(composedFunc(4)).toBe(13); // ((4 + 2) * 3) - 5 = 13
  });

  it('should return the initial value if no functions are provided', () => {
    const composedFunc = compose();
    expect(composedFunc(10)).toBe(10);
  });
});
