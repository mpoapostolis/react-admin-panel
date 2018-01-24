import React from 'react';
import * as styles from './css';

function Error404() {
  const {container} = styles;

  return (
    <div className={container}>
      <img src="/images/404.gif" alt="page not found" />
    </div>
  );
}

export default Error404;
