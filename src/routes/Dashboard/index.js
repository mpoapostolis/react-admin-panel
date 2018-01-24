// @ts-check

import React, { Component } from 'react';
import * as styles from './css';

class Home extends Component {
  componentDidMount() {}

  render() {
    const { container } = styles;
    const {
      headInfo,
      topPerfomCampain,
      flameChart,
      scratchAndWinChart,
      runningContest,
      contestReport,
      layout,
    } = styles;
    return (
      <div className={container}>
        <div>
          <h1>TEST</h1>
        </div>
        <div className={layout}>
          <div className={headInfo}>1</div>
          <div className={topPerfomCampain}>2</div>

          <div className={flameChart}>13</div>
          <div className={scratchAndWinChart}>14</div>

          <div className={runningContest}>15</div>
          <div className={contestReport}>61</div>
        </div>
      </div>
    );
  }
}

export default Home;
