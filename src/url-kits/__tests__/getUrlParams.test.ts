import { getUrlParams } from '../getUrlParams';

describe('getUrlParams', () => {
  it('should return an empty object if window is undefined', () => {
    // 模拟window对象为undefined
    Object.defineProperty(global, 'window', {
      value: undefined,
      writable: true,
    });

    const result = getUrlParams();

    expect(result).toEqual({});
  });

  it('should return an empty object if url does not contain query parameters', () => {
    // 模拟window.location.href为'http://example.com'
    Object.defineProperty(global, 'window', {
      value: {
        location: {
          href: 'http://example.com',
        },
      },
      writable: true,
    });

    const result = getUrlParams();

    expect(result).toEqual({});
  });

  it('should correctly parse query parameters from the url', () => {
    // 模拟window.location.href为'http://example.com?param1=value1&param2=value2'
    Object.defineProperty(global, 'window', {
      value: {
        location: {
          href: 'http://example.com?param1=value1&param2=value2',
        },
      },
      writable: true,
    });

    const result = getUrlParams();

    expect(result).toEqual({
      param1: 'value1',
      param2: 'value2',
    });
  });

  it('should correctly parse query parameters from a custom url', () => {
    const url = 'http://example.com?param1=value1&param2=value2';

    const result = getUrlParams(url);

    expect(result).toEqual({
      param1: 'value1',
      param2: 'value2',
    });
  });

  it('should correctly decode encoded query parameters', () => {
    // 模拟window.location.href为'http://example.com?param1=value%201&param2=value%202'
    Object.defineProperty(global, 'window', {
      value: {
        location: {
          href: 'http://example.com?param1=value%201&param2=value%202',
        },
      },
      writable: true,
    });

    const result = getUrlParams();

    expect(result).toEqual({
      param1: 'value 1',
      param2: 'value 2',
    });
  });
});
