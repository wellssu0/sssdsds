import React from 'react';
// import loadable from '@loadable/component';
import { Router } from 'react-router-dom';
import { createHashHistory as createHistory } from 'history';
import { syncHistoryWithStore } from '@superwf/mobx-react-router';

import { RenderRoutes } from '@router/RenderRoutes';
import { routes } from '@router/router';
import styles from './index.scss';
import * as store from '@store/index';
import Provider from './Provider';
import IntlWrapper from './IntlWrapper';

const HashHistory = createHistory();
const history = syncHistoryWithStore(HashHistory, store.routerStore);

const AppWrapper: React.FC = ({ children }) => <div className={styles.appWrapper}>{children}</div>;

function App() {
  const authorized = true;
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
