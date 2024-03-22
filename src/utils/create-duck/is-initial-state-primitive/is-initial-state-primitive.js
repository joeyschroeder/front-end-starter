export function isInitialStatePrimitive(initialState) {
  if (initialState === null || initialState === undefined) return true;
  return Array.isArray(initialState) || typeof initialState !== 'object';
}
