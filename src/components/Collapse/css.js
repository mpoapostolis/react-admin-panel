import {css} from 'emotion';

export const openClass = (n, height) => css`
  height: ${(n + 1) * height}px;
`;

export const container = css`
  user-select: none;
  font-family: 'Source Sans Pro', sans-serif;
  transition: 0.25s;
  height: 30px;
  width: 180px;
  border-bottom: solid 1px rgba(255, 255, 255, 0.15);
  overflow-y: hidden;
`;

export const collapseItem = css`
  display: flex;
  cursor: pointer;
  width: 100%;
  justify-content: space-between;
  height: 22px;
  font-size: 9px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 2;
  letter-spacing: normal;
  text-align: left;
  color: #aec0c0;
  margin-bottom: 4px;
  align-items: flex-end;

  &.closed {
    margin: 0;
    height: 30px;
    align-items: center;
    font-size: 15px;
  }
  transition: 0.125s;
`;

export const menuItem = css`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  height: 30px;
`;

export const arrow = css``;
