import {css} from 'emotion';

export const container = css`
  width: 100%;
`;

export const preHeader = css`
  width: 100%;
  display: flex;
  height: 25px;
  align-items: center;
  justify-content: space-between;
`;

export const infos = css`
  width: calc(100% - 400px);
  display: flex;
  font-weight: 600;
  font-size: small;
  color: #6b6b6b;
`;

export const upperFilters = css`
  width: 400px;
  margin-bottom: 40px;
  display: flex;
  justify-content: space-around;
`;

export const tableFilter = css`
  cursor: pointer;
  user-select: none;
  margin: 0 30px 0 30px;
`;

export const rowClass = css`
  border-bottom: solid 1px #00000022;
  white-space: pre-line;
  &.header {
    color: #717171;
    font-size: medium;
  }
  min-height: 50px;
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const columnClass = css`
  width: 100%;
  padding: 2px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  &:last-child {
    justify-content: center;
  }
`;

export const exportClass = css`
  cursor: pointer;
`;

export const sortClass = css`
  background: transparent;
  border: none;
  margin-left: 5px;
`;

export const displayClass = css`
  white-space: pre-line;
  font-size: small;
  display: flex;
  justify-content: space-start;
  align-items: center;
  padding: 5px;
  input {
    margin-right: 10px;
  }
`;

export const menuItem = css`
  width: 200px;
  padding: 15px;
  user-select: none;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  outline: none;
  background: #fff;
  &:hover {
    background: rgba(0, 0, 0, 0.05);
  }
  cursor: pointer;
`;

export const footFiltersCont = css`
  display: flex;
  width: 100%;
  height: 60px;
  align-items: center;
  flex-direction: row-reverse;
`;

export const footFilterItems = css`
  display: flex;
  justify-content: space-around;
`;

export const offsetCont = css`
  justify-content: space-between;
  display: flex;
  height: 100%;
  min-width: 120px;
`;

export const offsetArrow = css`
  cursor: pointer;
  user-select: none;
  &.disable {
    opacity: 0.2;
    cursor: not-allowed;
  }
`;
