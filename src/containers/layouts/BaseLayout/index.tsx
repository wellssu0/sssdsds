import React, { FC } from 'react';
import Header from './Header';
import styles from './index.scss';

const BaseLayout: FC = ({ children }) => {
  return (
    <div>
      <Header />
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default BaseLayout;
