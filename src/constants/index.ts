export enum COOKIE_KEYS {
  LANG = 'lang'
}

export enum LOCAL_STORAGE_KEYS {
  USER_INFO = 'userInfo',
  AUTH_TOKEN = 'authToken',
  NAV_OPEN_KEYS = 'navOpenKeys',
  SIDE_BAR_THEME = 'sideBarTheme',
  SIDE_BAR_COLLAPSED = 'sideBarCollapsed',
  DATA_FORMAT = 'dataFormat',
  NOT_SUPPORT_POLLING = 'notSupportPolling'
}

export const LOGIN_CATEGORY = ['user', 'admin'];

/**
 * @description:  Content-Type
 */
export enum ContentTypeEnum {
  // json
  JSON = 'application/json;charset=UTF-8',
  // form-data qs
  FORM_URLENCODED = 'application/x-www-form-urlencoded;charset=UTF-8',
  // form-data  upload
  FORM_DATA = 'multipart/form-data;charset=UTF-8'
}
