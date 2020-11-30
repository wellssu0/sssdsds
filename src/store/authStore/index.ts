import { makeAutoObservable, action, reaction } from 'mobx';
import { isPlainObject } from 'lodash';

import { routerStore } from './../';
import API from '@utils/api';
import { initialUserInfo, syncUserInfo } from './syncUserInfo';
import { initialAuthToken, syncAuthToken } from './syncAuthToken';
import { LOCAL_STORAGE_KEYS } from '@constants/index';
import request from '@utils/request';

export class AuthStore {
  /**
   * 用户信息
   *
   * @type {IAuthStore.UserInfo}
   * @memberof AuthStore
   */
  userInfo: IAuthStore.UserInfo = initialUserInfo;
  authToken: string = initialAuthToken;

  constructor() {
    makeAutoObservable(this);
    reaction(() => this.userInfo, syncUserInfo);
    reaction(() => this.authToken, syncAuthToken);
  }

  @action
  login = async (params: IAuthStore.LoginParams) => {
    params = {
      ...params,
      grant_type: 'password',
      client_id: 'web',
      client_secret: '7e8a29f9f597036d85bb88486a1137fd723e0024'
    };
    const { data } = await request.post<IAuthStore.TokenData>(API.login, params);
    this.setAuthToken(isPlainObject(data) ? data.access_token : '');
    localStorage.setItem(LOCAL_STORAGE_KEYS.AUTH_TOKEN, JSON.stringify(data.access_token));

    const userInfoRes = await request.post(API.userInfo);
    this.setUserInfo(isPlainObject(userInfoRes.data) ? userInfoRes.data : {});
    localStorage.setItem(LOCAL_STORAGE_KEYS.USER_INFO, JSON.stringify(userInfoRes.data));

    routerStore.replace('/');
  };

  logout = () => {
    this.setUserInfo({});
    this.setAuthToken('');
    localStorage.removeItem(LOCAL_STORAGE_KEYS.USER_INFO);
    localStorage.removeItem(LOCAL_STORAGE_KEYS.AUTH_TOKEN);
    routerStore.replace('/login');
  };

  /**
   * 初始化用户信息
   *
   * @memberof AuthStore
   */
  @action
  setUserInfo = (userInfo: IAuthStore.UserInfo): IAuthStore.UserInfo => {
    this.userInfo = userInfo;
    return userInfo;
  };
  /**
   * 初始化用户信息
   *
   * @memberof AuthStore
   */
  @action
  setAuthToken = (authToken: string): string => {
    this.authToken = authToken;
    return authToken;
  };
}

export default new AuthStore();
