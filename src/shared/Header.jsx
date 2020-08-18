import { hot } from 'react-hot-loader/root';
import * as React from 'react';
import styles from './header.css';

function HeaderComponent() {
  console.log(styles, '\n', styles.example);
  
  return (
    <header>
      <h1 className={styles.example}>Reddit Hello</h1>
    </header>
  );
}

export const Header = hot(HeaderComponent);
