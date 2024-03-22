export function createPath(...names) {
  const pathValues = names.flat(2);
  return pathValues.filter((value) => Boolean(value)).join('.');
}
