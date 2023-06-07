// 是否为身份证
export const isIdCard = (str: string): boolean =>
  /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/.test(
    str
  );

// 判断数据类型
const typeOf = (data: any) =>
  Object.prototype.toString
    .call(data)
    .replace(/\[\w+\s(\w+)\]/, '$1')
    .toLocaleLowerCase();

export const isObject = (value: unknown): value is Record<any, any> =>
  value !== null && typeOf(value) === 'object';

export const isArray = (value: unknown): value is Array<any> =>
  value !== null && typeOf(value) === 'array';
// eslint-disable-next-line @typescript-eslint/ban-types
export const isFunction = (value: unknown): value is Function =>
  typeOf(value) === 'function';

export const isString = (value: unknown): value is string =>
  typeOf(value) === 'string';

export const isBoolean = (value: unknown): value is boolean =>
  typeOf(value) === 'boolean';

export const isNumber = (value: unknown): value is number =>
  typeOf(value) === 'number';

export const isUndef = (value: unknown): value is undefined =>
  typeOf(value) === 'undefined';

export const isDate = (value: unknown): value is undefined =>
  typeOf(value) === 'date';
