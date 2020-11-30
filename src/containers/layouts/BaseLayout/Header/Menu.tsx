import React, { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';
import intl from 'react-intl-universal';
import styles from './index.scss';

export interface IRoutes {
  title?: string;
  id: number;
  path?: string;
}

const routes: IRoutes[] = [
  {
    id: 1,
    path: '/competition',
    title: 'COMPETITION'
  },
  {
    id: 2,
    path: '/workspace',
    title: 'WORKSPACE'
  }
];

const Menu: FC = props => {
  const location = useLocation();

  return (
    <div className={styles.menuWrap}>
      {routes.map(item => (
        <Link to={item.path} key={item.id} className={location.pathname.includes(item.path) && styles.active}>
          {intl.get(item.title)}
        </Link>
      ))}
    </div>
  );
};

export default Menu;
