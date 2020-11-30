import React from 'react';
// import loadable from '@loadable/component';
import { Router } from 'react-router-dom';
import { createBrowserHistory as createHistory } from 'history';
import { syncHistoryWithStore } from '@superwf/mobx-react-router';

import { RenderRoutes } from '@router/RenderRoutes';
import { routes } from '@router/router';
import styles from './index.scss';
import * as store from '@store/index';
import Provider from './Provider';
import IntlWrapper from './IntlWrapper';

const BrowserHistory = createHistory();
const history = syncHistoryWithStore(BrowserHistory, store.routerStore);

const AppWrapper: React.FC = ({ children }) => <div className={styles.appWrapper}>{children}</div>;

function App() {
  const authorized = false;
  return (
    <Provider>
      <IntlWrapper>
        <AppWrapper>
          <Router history={history}>
            <RenderRoutes routes={routes} authorized={authorized} />
          </Router>
        </AppWrapper>
      </IntlWrapper>
    </Provider>
  );
}

export default App;
