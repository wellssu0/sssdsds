import React from 'react';
import loadable from '@loadable/component';
import { Router, Switch, Route } from 'react-router-dom';
import { createHashHistory as createHistory } from 'history';
import { syncHistoryWithStore } from '@superwf/mobx-react-router';

import styles from './index.scss';
import * as store from '@store/index';
import PageLoading from '@components/PageLoading';
import Error from '@components/Error';
import Provider from './Provider';
import IntlWrapper from './IntlWrapper';

const HashHistory = createHistory();
const history = syncHistoryWithStore(HashHistory, store.routerStore);
console.log(history, 'appIndex');

const loadableOptions = { fallback: <PageLoading /> };
const BaseLayout = loadable(() => import(/* webpackChunkName: "baseLayout" */ '@layouts/BaseLayout'), loadableOptions);
const Login = loadable(() => import(/* webpackChunkName: "login" */ '@views/Login'), loadableOptions);

const AppWrapper: React.FC = ({ children }) => <div className={styles.appWrapper}>{children}</div>;

function App() {
  return (
    <Provider>
      <IntlWrapper>
        <AppWrapper>
          <Router history={history}>
            <Switch>
              <Route exact path="/login" component={Login} />
              <Route path="/" component={BaseLayout} />
              <Route component={Error} />
            </Switch>
          </Router>
        </AppWrapper>
      </IntlWrapper>
    </Provider>
  );
}

export default App;
