import Error from '@components/Error';
import React, { ReactNode } from 'react';
import { Redirect, Route, RouteComponentProps, Switch } from 'react-router-dom';
import { RouteInterface } from './types';

interface IProp {
  routes: RouteInterface[];
  authorized?: boolean;
  authPath?: string;
  children?: ReactNode;
}

export const RenderRoutes: React.FC<IProp> = ({ routes, authorized, authPath }) => {
  if (routes) {
    return (
      <Switch>
        {routes.map((route: RouteInterface, i: number) => {
          return (
            <Route
              key={route.path + route.redirect}
              path={route.path}
              exact={route.exact}
              render={(props: RouteComponentProps) => {
                if (route.redirect) {
                  return (
                    <Redirect from={route.path} to={{ pathname: route.redirect, state: { from: props.location } }} />
                  );
                }
                if (!route.routes) {
                  return <route.component {...props} />;
                }
                if (route.component) {
                  return (
                    <route.component {...props}>
                      <RenderRoutes routes={route.routes} authorized={authorized} authPath={authPath} />
                    </route.component>
                  );
                }
                return <RenderRoutes routes={route.routes} authorized={authorized} authPath={authPath} />;
              }}
            />
          );
        })}
      </Switch>
    );
  } else {
    return <Error />;
  }
};
