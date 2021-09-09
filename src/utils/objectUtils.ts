/**
 * Calls the callback function for each key-value pair in the argument object
 */
export const objectForEach = <T extends unknown>(
  obj: {[k: string | number]: T},
  callback: (
    value: T,
    key: string,
    index: number,
    object: {[k: string | number]: T}
  ) => void
) => {
  Object.entries(obj).forEach(([key, value], index) => {
    callback(value, key, index, obj);
  });
};

/**
 * Maps an object to another object with the same keys as the argument object
 */
export const objectMap = <T extends unknown, R extends unknown>(
  obj: {[k: string | number]: T},
  callback: (
    value: T,
    key: string,
    index: number,
    object: {[k: string | number]: T}
  ) => R
): {[k in keyof typeof obj]: R} => {
  return Object.entries(obj).reduce(
    (accumulator, [key, value], index) => ({
      ...accumulator,
      [key]: callback(value, key, index, obj)
    }),
    {}
  );
};

/**
 * Reduces an object to a value
 */
export const objectReduce = <T extends unknown, R extends unknown>(
  obj: {[k: string | number]: T},
  callback: (
    accumulator: R,
    value: T,
    key: string,
    index: number,
    object: {[k: string | number]: T}
  ) => R,
  initialValue: R
) => {
  return Object.entries(obj).reduce(
    (accumulator, [key, value], index) =>
      callback(accumulator, value, key, index, obj),
    initialValue
  );
};

export const objectTrim = <T extends unknown>(obj: {[k: string]: T}) => {
  const copy = {...obj};

  objectForEach(copy, (value, key) => {
    if (value === undefined) {
      delete copy[key];
    }
  });

  return copy as {[k in keyof typeof obj]: T};
};

export const objectTrimInPlace = (obj: {[k: string]: unknown}) => {
  objectForEach(obj, (value, key) => {
    if (value === undefined) {
      delete obj[key];
    }
  });
};
