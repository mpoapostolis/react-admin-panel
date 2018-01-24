import {css} from 'emotion';

export const container = css`
  width: 100%;
`;

export const layout = css`
  display: grid;
  grid-gap: 3px;
  grid-template-rows: 100px repeat(3, 1fr);
  grid-template-columns: repeat(4, 1fr);
  grid-template-areas:
    'headInfo headInfo headInfo headInfo headInfo'
    'topPerfomCampain topPerfomCampain flameChart flameChart flameChart'
    'runningContest runningContest scratchAndWinChart scratchAndWinChart scratchAndWinChart'
    '. . contestReport contestReport contestReport';
`;

export const headInfo = css`
  border: solid 1px #dae0e7;
  grid-area: headInfo;
`;

export const topPerfomCampain = css`
  border: solid 1px #dae0e7;
  grid-area: topPerfomCampain;
`;

export const flameChart = css`
  border: solid 1px #dae0e7;
  grid-area: flameChart;
`;

export const scratchAndWinChart = css`
  border: solid 1px #dae0e7;
  grid-area: scratchAndWinChart;
`;

export const runningContest = css`
  border: solid 1px #dae0e7;
  grid-area: runningContest;
`;

export const contestReport = css`
  border: solid 1px #dae0e7;
  grid-area: contestReport;
`;
