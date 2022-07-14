import { FunctionComponent } from 'react';

import styles from '@/styles/components/Header.module.scss';

export const Header: FunctionComponent = () => {
  return (
    <header className={styles.header}>
      <h1>Header</h1>
    </header>
  );
};
