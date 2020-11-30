import React from 'react';
import { observer } from 'mobx-react';
import { Link } from 'react-router-dom';
import { LogoutOutlined } from '@ant-design/icons';

import styles from './index.scss';
import useRootStore from '@store/useRootStore';
import LogoSvg from 'assets/svg/logo.svg';
import Menu from './Menu';

function Header() {
  const { authStore } = useRootStore();
  return (
    <div className={styles.header}>
      <div className={styles.left}>
        <div className={styles.logoWrap}>
          <Link to="/">
            <LogoSvg color="white" />
          </Link>
        </div>
        <Menu />
      </div>
      <div className={styles.right}>
        <LogoutOutlined className={styles.rightIcon} onClick={authStore.logout} />
      </div>
    </div>
  );
}

export default observer(Header);
