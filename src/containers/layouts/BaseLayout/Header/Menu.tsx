import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import intl from 'react-intl-universal';
// import classnames from 'classnames';

import { routes } from './../menu';
import styles from './index.scss';

const Menu: FC = props => {
  console.log();

  return (
    <div className={styles.menuWrap}>
      {routes.map(
        item =>
          item.showMenu && (
            <Link to={item.path} key={item.id}>
              {intl.get(item.title)}
            </Link>
          )
      )}
    </div>
  );
};

export default Menu;
