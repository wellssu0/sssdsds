import React from 'react';
import loadable from '@loadable/component';

import { RouteInterface } from './types';
import PageLoading from '@components/PageLoading';
const loadableOptions = { fallback: <PageLoading /> };

export const routes: RouteInterface[] = [
  {
    path: '/',
    component: loadable(() => import(/* webpackChunkName: "baseLayout" */ '@layouts/BaseLayout'), loadableOptions),
    routes: [
      {
        path: '/competition',
        name: 'competition',
        title: 'COMPETITION',
        auth: true,
        routes: [
          {
            path: '/competition/drug-search',
            component: loadable(
              () => import(/* webpackChunkName: "drug-search" */ '@views/competition/DrugSearch'),
              loadableOptions
            ),
            exact: true,
            name: 'DrugSearch',
            title: 'DrugSearch',
            auth: true
          },
          {
            redirect: '/competition/drug-search'
          }
        ]
      },
      {
        path: '/workspace',
        component: loadable(() => import(/* webpackChunkName: "workspace" */ '@views/Workspace'), loadableOptions),
        exact: true,
        name: 'workspace',
        title: 'WORKSPACE',
        auth: true
        // routes: []
      },
      {
        path: '/404',
        component: loadable(() => import('@components/Error'), loadableOptions)
      },
      {
        path: '/',
        redirect: '/competition'
      }
    ]
  },
  {
    path: '/login',
    component: loadable(() => import(/* webpackChunkName: "login" */ '@views/Login'), loadableOptions),
    exact: true,
    name: 'login',
    title: '登录',
    auth: true
  },
  {
    path: '/404',
    component: loadable(() => import('@components/Error'), loadableOptions)
  }
];
