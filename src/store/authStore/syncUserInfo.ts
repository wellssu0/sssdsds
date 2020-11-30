import { LOCAL_STORAGE_KEYS } from '@constants/index';

export const initialUserInfo = (() => {
  const localUserInfo = localStorage.getItem(LOCAL_STORAGE_KEYS.USER_INFO);
  const _userInfo: IAuthStore.UserInfo = localUserInfo ? JSON.parse(localUserInfo) : {};
  return _userInfo;
})();

export let userInfo: IAuthStore.UserInfo = initialUserInfo;

/**
 * syncUserInfo for http
 *
 * @export
 * @param {IAuthStore.UserInfo} data
 */
export function syncUserInfo(data: IAuthStore.UserInfo) {
  userInfo = data;
}
