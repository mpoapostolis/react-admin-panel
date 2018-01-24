import {css} from 'emotion';

export const container = css`
  display: grid;
  width: 100vw;
  overflow-x: hidden;
  height: 100vh;
  grid-template-areas:
    'sidebar header header header'
    'sidebar main main main'
    'sidebar main main main'
    'sidebar main main main';
  grid-template-columns: 200px 1fr;
  grid-template-rows: 60px 1fr;
`;

export const sidebar = css`
  position: fixed;
  width: 200px;
  height: 100vh;
  background: black;
  box-shadow: 1px 1px 1px 1px #0000005f;
  z-index: 1000000;
  grid-area: sidebar;
`;

export const header = css`
  background: white;
  box-shadow: 0 4px 2px -2px rgba(0, 0, 0, 0.15);
  grid-area: header;
  margin-left: 200px;
  height: 60px;
  width: calc(100vw - 200px);
  position: fixed;
`;

export const main = css`
  overflow-y: auto;
  background: white;
  padding: 20px;
  grid-area: main;
`;

export const spinner = css`
  display: flex;
  width: 100%;
  height: 400px;
  align-items: center;
  justify-content: center;
`;
