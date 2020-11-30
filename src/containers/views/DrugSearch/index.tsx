import React from 'react';
import { useLocation } from 'react-router-dom';
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
      <div className={styles.searchWrap}>药物搜索页面</div>
    </div>
  );
}

export default DrugSearch;
