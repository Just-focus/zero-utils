export const getUrlParams = (url?: string): Record<string, string> => {
  if (typeof window === 'undefined') {
    return {}
  }

  url = url || (location && location.href);

  if (url.indexOf('?') < 0) return {};

  return url
    .replace(/^.+?\?/, '')
    .replace(/#.+/, '')
    .split('&')
    .filter(param => param)
    .map(decodeURIComponent)
    .reduce((obj: Record<string, any>, param: string) => {
      const [search, value] = param.split('=');
      obj[search] = value;
      return obj;
    }, {})
}
