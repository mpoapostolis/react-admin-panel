import {css} from 'emotion';

export const tabsCont = css`
  margin-top: 50px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: 100%;
`;

export const tabs = css`
  width: 95%;
  display: flex;
  justify-content: flex-start;
  border-bottom: solid 1px rgba(0, 0, 0, 0.2);
  &.um {
    width: 100%;
  }
`;

export const tabBtn = css`
  width: 100%;
`;

export const tabItem = css`
  color: rgba(0, 0, 0, 0.45);
  cursor: pointer;
  user-select: none;
  height: 100%;
  &.active {
    color: rgb(156, 42, 160);
    border-bottom: solid 2px #008bcc;
  }
  font-size: large;
  width: 15%;
`;
