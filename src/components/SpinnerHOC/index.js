import React from 'react';
import { CircularProgress } from 'material-ui/Progress';
import { css } from 'emotion';

const container = css`
  width: 100%;
  height: 100%;
  filter: blur(100px);
`;

export default function SpinnerHOC(props) {
  return props.loading ? (
    <div className={container}>{props.children}</div>
  ) : (
    props.children
  );
}
