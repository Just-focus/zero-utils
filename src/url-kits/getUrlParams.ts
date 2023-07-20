/**
 * 获取链接参数
 * @param url 链接
 * @returns object
 */
export const getUrlParams = (url?: string): Record<string, string> => {
  if (typeof window === 'undefined') {
    return {};
  }

  url = url || window.location.href;

  if (url.indexOf('?') < 0) {
    return {};
  }

  return url
    .substring(url.indexOf('?') + 1)
    .split('&')
    .filter((param) => param)
    .map(decodeURIComponent)
    .reduce((obj: Record<string, string>, param: string) => {
      const [search, value] = param.split('=');
      obj[search] = value;
      return obj;
    }, {});
};
