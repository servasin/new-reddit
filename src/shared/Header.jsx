import * as React from 'react';
import styles from './header.css';

export default function Header() {
  console.log(styles, '\n', styles.exaple);

  return (
    <header>
      <h1 className={styles.example}>Reddit hello</h1>
    </header>
  );
}
