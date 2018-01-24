import React from 'react';
import * as styles from './css';

function Path(props) {
  const paths = window.location.pathname.split('/').filter(e => e);
  const {push} = props.history;
  const {container} = styles;
  return (
    <div className={container}>
      <p onClick={() => push('/')}>Dashboard </p>
      {paths.map((e, key) => <p key={key}>{decodeURI(e)}</p>)}
    </div>
  );
}

export default Path;
