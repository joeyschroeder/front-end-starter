export const getDifferenceFromObjects = (object = {}, comparison = {}) => {
  const difference = [];
  const comparisonKeys = Object.keys(comparison).map((key) => {
    return { key, value: comparison[key] };
  });

  comparisonKeys.forEach((item) => {
    if (object[item.key] !== item.value) difference.push(item);
  });

  return difference;
};
