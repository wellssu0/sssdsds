import React from 'react';
import Loadable from '@loadable/component';

import PageLoading from '@components/PageLoading';

const loadComponent = (loader: () => Promise<any>) => Loadable(loader, { fallback: <PageLoading /> });
export const asynchronousComponents = {
  Competition: loadComponent(() => import(/* webpackChunkName: "competition" */ '@views/Competition')),
  Workspace: loadComponent(() => import(/* webpackChunkName: "workspace" */ '@views/Workspace')),
  DrugSearch: loadComponent(() => import(/* webpackChunkName: "drug-search" */ '@views/DrugSearch'))
};

// all routers key
export type AsynchronousComponentKeys = keyof typeof asynchronousComponents;

export interface IRoutes {
  title?: string;
  id: number;
  pid?: number;
  path?: string;
  icon?: JSX.Element;
  component?: AsynchronousComponentKeys;
  exact?: boolean;
  showMenu?: boolean;
}

export interface IRoutesInTree extends IRoutes {
  children?: IRoutesInTree[];
}

export const routes: IRoutes[] = [
  {
    id: 1,
    path: '/',
    exact: true,
    component: 'DrugSearch',
    showMenu: false
  },
  {
    id: 2,
    path: '/competition',
    title: 'COMPETITION',
    component: 'Competition',
    exact: true,
    showMenu: true
  },
  {
    id: 3,
    path: '/workspace',
    title: 'WORKSPACE',
    component: 'Workspace',
    exact: true,
    showMenu: true
  }
];

export default routes;
