/**
 * 分组
 * @param array
 * @param iteratee
 * @returns array
 */
export const groupBy = <T, K extends keyof T>(
  array: T[],
  iteratee: ((item: T) => K) | K
) => {
  if (!Array.isArray(array)) {
    throw new TypeError('Expected an array for first argument');
  }

  return array.reduce((accumulator, item) => {
    const group =
      typeof iteratee === 'function' ? iteratee(item) : item[iteratee];
    accumulator[group as keyof T] ||= [];
    accumulator[group as keyof T].push(item);
    return accumulator;
  }, {} as Record<keyof T, T[]>);
};
