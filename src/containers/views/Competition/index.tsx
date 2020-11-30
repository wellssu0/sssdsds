import React from 'react';
import { useLocation, Switch, Route } from 'react-router-dom';
import Loadable from '@loadable/component';

// import styles from './index.scss';
// import useRootStore from '@store/useRootStore';
// import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';

import PageLoading from '@components/PageLoading';

const loadComponent = (loader: () => Promise<any>) => Loadable(loader, { fallback: <PageLoading /> });
export const asynchronousComponents = {
  DrugSearch: loadComponent(() => import(/* webpackChunkName: "drug-search" */ '@views/DrugSearch'))
};

export interface IProps {}

const route = [
  {
    path: '/competition/drugSearch',
    component: 'DrugSearch',
    exact: false
  }
];

function Competition({}: IProps) {
  const location = useLocation();
  console.log(location, 'competition');

  // const { globalStore, authStore } = useRootStore();
  // const IconMenuFold = globalStore.sideBarCollapsed ? MenuUnfoldOutlined : MenuFoldOutlined;
  return (
    <>
      <Switch>
        {route.map(r => (
          <Route
            key={r.path}
            exact={r.exact}
            path={r.path}
            component={r.component ? asynchronousComponents[r.component] : null}
          />
        ))}
      </Switch>
    </>
  );
}

export default Competition;
