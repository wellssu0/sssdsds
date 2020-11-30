import React, { FC } from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import Error from '@components/Error';
import { routes, asynchronousComponents } from './menu';
import Header from './Header';
import styles from './index.scss';

interface IProps {}

const BaseLayout: FC<IProps> = props => {
  return (
    <div>
      <Header />
      <div className={styles.content}>
        <Router>
          <Switch>
            {routes.map(m => {
              if (!m.path) {
                return null;
              }
              return (
                <Route
                  key={m.id}
                  exact={m.exact}
                  path={m.path}
                  component={m.component ? asynchronousComponents[m.component] : null}
                />
              );
            })}
            <Route component={Error} />
          </Switch>
        </Router>
      </div>
    </div>
  );
};

export default BaseLayout;
