import axios, { AxiosRequestConfig } from 'axios';
import { get } from 'lodash';
import { message } from 'antd';
import { routerStore } from '@store/index';
import { authToken } from '@store/authStore/syncAuthToken';
import { ContentTypeEnum } from '@constants/index';
import API from '@utils/api';

const TIMEOUT = 2 * 60000;

// 默认配置
const DEFAULT_CONFIG: AxiosRequestConfig = {
  baseURL: process.env.BASEURL,
  timeout: TIMEOUT
};

// 不要token的接口
const NO_NEED_AUTH_URLS = [API.login];
// form格式提交的接口
const CONTENT_TYPE_FORM_URLENCODED = [API.login];

function getAxiosInstance() {
  const instance = axios.create(DEFAULT_CONFIG);

  // 请求拦截处理
  instance.interceptors.request.use(config => {
    if (config.method.toLocaleLowerCase() === 'post') {
      config.params = { ...config.data };
      delete config.data;
    }
    if (!NO_NEED_AUTH_URLS.includes(config.url) && authToken) {
      config.headers['Authorization'] = `Bearer ${authToken}`;
    }
    if (CONTENT_TYPE_FORM_URLENCODED.includes(config.url)) {
      config.headers['Accept'] = '*/*';
      config.headers['Content-Type'] = ContentTypeEnum.FORM_URLENCODED;
    }
    return config;
  });

  // 响应拦截处理
  instance.interceptors.response.use(
    function (response) {
      return response.data;
    },
    function (error) {
      const errData = get(error, 'response.data');
      const errMsg = errData.error.description;
      // 统一打印错误
      message.error(errMsg);

      // TODO: 修改无效token的判断条件
      if (errMsg === 'invalid token') {
        routerStore.replace('/login');
      }

      // return Promise.reject(error);
    }
  );

  return instance;
}

export default getAxiosInstance();
