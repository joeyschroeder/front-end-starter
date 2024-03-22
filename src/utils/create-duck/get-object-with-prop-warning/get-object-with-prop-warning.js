const IGNORED_PROPERTIES = ['toJSON', '$$typeof'];

export function getObjectWithPropWarning(object = {}, objectName = '', duckName = '') {
  if (typeof object !== 'object' || object === null) throw new Error('object is not object');
  if (!objectName) throw new Error('objectName is undefined');
  if (!duckName) throw new Error('duckName is undefined');

  return new Proxy(object, {
    get(target, property) {
      if (typeof property === 'symbol') return target[property];
      if (IGNORED_PROPERTIES.includes(property)) return target[property];

      const hasOwnProperty = Object.hasOwn(target, property);
      if (hasOwnProperty) return target[property];

      const availProps = Object.getOwnPropertyNames(object).sort();
      const formattedAvailProps = availProps.map((prop) => `- ${JSON.stringify(prop)}`).join('\n');
      // eslint-disable-next-line no-console
      console.warn(
        `Property "${objectName}.${property}" does not exist on "${duckName}" duck.
        \nAvailable properties on "${objectName}" are:
        \n${formattedAvailProps}
        \nThese properties are auto-generated based on the initialState of the duck. If you need to add more properties, please reconfigure your duck.`,
      );
    },
  });
}
