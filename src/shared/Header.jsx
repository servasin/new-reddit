import { hot } from 'react-hot-loader/root';
import * as React from 'react';

function HeaderComponent() {
  return (
    <header>
      <h1>Reddit Hello</h1>
    </header>
  );
}

export const Header = hot(HeaderComponent);
