import React from 'react';
import { useLocation } from 'react-router-dom';
import classnames from 'classnames';
import SearchInput from '@views/competition/components/SearchInput';
import styles from './index.scss';
// import useRootStore from '@store/useRootStore';
// import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';

export interface IProps {}

function DrugSearch({}: IProps) {
  const location = useLocation();
  console.log(location, 'drugSearch');
  // const { globalStore, authStore } = useRootStore();
  // const IconMenuFold = globalStore.sideBarCollapsed ? MenuUnfoldOutlined : MenuFoldOutlined;
  return (
    <div className={styles.drugSearchWrap}>
      <div className={styles.searchWrap}>
        <div className={styles.bgShade}>
          <div className={styles.bgLeft}></div>
          <div className={styles.bgRight}></div>
        </div>
        <div className={styles.innerWrap}>
          <div className={styles.inputWrap}>
            <SearchInput />
            <img src="/src/assets/images/competition/vs.png" alt="" />
            <SearchInput />
          </div>
          <div className={classnames(styles.searchBtn, styles.active)}>生成对比</div>
        </div>
      </div>
      <div className={styles.his}></div>
      <div className={styles.footer}>fdsfsdf</div>
    </div>
  );
}

export default DrugSearch;
