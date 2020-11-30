import { LOCAL_STORAGE_KEYS } from '@constants/index';

export const initialAuthToken = (() => {
  const localAuthToken = localStorage.getItem(LOCAL_STORAGE_KEYS.AUTH_TOKEN);
  const _authToken: string = localAuthToken || '';
  return _authToken;
})();

export let authToken: string = initialAuthToken;

/**
 * syncAuthToken for http
 *
 * @export
 * @param {string} token
 */
export function syncAuthToken(token: string) {
  authToken = token;
}
