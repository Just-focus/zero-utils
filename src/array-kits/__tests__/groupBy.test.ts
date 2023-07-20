import { groupBy } from '../groupBy';

describe('groupBy', () => {
  it('should group array elements by string key', () => {
    const array = [
      { id: 1, name: 'Alice', age: 25 },
      { id: 2, name: 'Bob', age: 30 },
      { id: 3, name: 'Charlie', age: 25 },
      { id: 4, name: 'Dave', age: 30 },
    ];

    const result = groupBy(array, 'age');

    expect(result).toEqual({
      '25': [
        { id: 1, name: 'Alice', age: 25 },
        { id: 3, name: 'Charlie', age: 25 },
      ],
      '30': [
        { id: 2, name: 'Bob', age: 30 },
        { id: 4, name: 'Dave', age: 30 },
      ],
    });
  });

  it('should group array elements by iteratee function', () => {
    const array = [
      { id: 1, name: 'Alice', age: 25 },
      { id: 2, name: 'Bob', age: 30 },
      { id: 3, name: 'Charlie', age: 25 },
      { id: 4, name: 'Dave', age: 30 },
    ];

    const iteratee = (item: typeof array[0]) => item.name.charAt(0) as 'name';

    const result = groupBy(array, iteratee);

    expect(result).toEqual({
      A: [{ id: 1, name: 'Alice', age: 25 }],
      B: [{ id: 2, name: 'Bob', age: 30 }],
      C: [{ id: 3, name: 'Charlie', age: 25 }],
      D: [{ id: 4, name: 'Dave', age: 30 }],
    });
  });

  it('should throw a TypeError if the first argument is not an array', () => {
    const notAnArray = 'not an array';

    expect(() => {
      // @ts-ignore
      groupBy(notAnArray, 'key');
    }).toThrow(TypeError);
  });
});
