export const compose = (...funcs) => {
  return (initialValue) => {
    return funcs.reduceRight((value, func) => func(value), initialValue);
  };
};
