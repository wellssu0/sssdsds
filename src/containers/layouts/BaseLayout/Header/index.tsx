import React from 'react';
import { observer } from 'mobx-react';
import { Link } from 'react-router-dom';
// import { LogoutOutlined } from '@ant-design/icons';

import CuzMenu from './Menu';
import styles from './index.scss';
import useRootStore from '@store/useRootStore';
import LogoSvg from 'assets/svg/logo.svg';
import AvatarImg from 'assets/images/avatar.png';
import { Avatar, Menu } from 'antd';
import { Dropdown } from 'antd';

function Header() {
  const { authStore } = useRootStore();
  console.log(authStore);

  const menu = (
    <Menu>
      <Menu.Item>胃癌</Menu.Item>
      <Menu.Item>食道癌</Menu.Item>
      {/* {userInfo.permitted_disease &&
        userInfo.permitted_disease.map((item: IPermittedDisease) => (
          <Menu.Item key={item.id} onClick={() => changeDisease(item.id)}>
            {item.name_cn}
          </Menu.Item>
        ))} */}
    </Menu>
  );

  return (
    <div className={styles.header}>
      <div className={styles.left}>
        <div className={styles.logoWrap}>
          <Link to="/">
            <LogoSvg color="white" />
          </Link>
        </div>
        <CuzMenu />
      </div>
      <div className={styles.right}>
        <Dropdown overlay={menu} trigger={['click']}>
          <a>
            肝癌
            <div className={styles.arrowDown}></div>
          </a>
        </Dropdown>
        <div className={styles.avatarWrap}>
          <div className={styles.username}>Admin</div>
          <Avatar shape="circle" alt="头像" size={40} src={AvatarImg} />
        </div>
        {/* <LogoutOutlined className={styles.rightIcon} onClick={authStore.logout} /> */}
      </div>
    </div>
  );
}

export default observer(Header);
