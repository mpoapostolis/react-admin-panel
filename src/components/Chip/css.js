import {css} from 'emotion';

export const chipCont = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  word-wrap: normal;
  padding: 4px;
  border-radius: 32px;
  font-size: large;
  margin: 5px;
  min-width: 73.3px;
  height: 18px;
  border-radius: 2px;
  background: #333333;
  color: white;
`;

export const btn = css`
  background: #333333;
  border: 0;
  cursor: pointer;
  font: inherit;
  line-height: 12px;
  font-weight: 600;
  outline: none;
  &:after {
    content: 'x';
    color: white;
    font-weight: 600;
  }
`;
