import { makeAutoObservable } from 'mobx';

import { LOCAL_STORAGE_KEYS } from '@constants/index';
export class GlobalStore {
  constructor() {
    makeAutoObservable(this);
  }

  /**
   * 菜单栏折叠
   *
   * @type {boolean}
   * @memberof GlobalStore
   */
  sideBarCollapsed: boolean = localStorage.getItem(LOCAL_STORAGE_KEYS.SIDE_BAR_COLLAPSED) === '1';
  /**
   * 菜单栏主题
   *
   * @type {IGlobalStore.SideBarTheme}
   * @memberof GlobalStore
   */
  sideBarTheme: IGlobalStore.SideBarTheme =
    (localStorage.getItem(LOCAL_STORAGE_KEYS.SIDE_BAR_THEME) as IGlobalStore.SideBarTheme) || 'light';
  /**
   * 打开的菜单key
   *
   * @type {string[]}
   * @memberof GlobalStore
   */
  navOpenKeys: string[] = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEYS.NAV_OPEN_KEYS)) || [];

  toggleSideBarCollapsed = () => {
    this.sideBarCollapsed = !this.sideBarCollapsed;
    localStorage.setItem(LOCAL_STORAGE_KEYS.SIDE_BAR_COLLAPSED, this.sideBarCollapsed ? '1' : '0');
  };

  changeSiderTheme = (theme: IGlobalStore.SideBarTheme) => {
    this.sideBarTheme = theme;
    localStorage.setItem(LOCAL_STORAGE_KEYS.SIDE_BAR_THEME, theme);
  };

  setOpenKeys = (openKeys: string[]) => {
    this.navOpenKeys = openKeys;
    localStorage.setItem(LOCAL_STORAGE_KEYS.NAV_OPEN_KEYS, JSON.stringify(openKeys));
  };
}

export default new GlobalStore();
