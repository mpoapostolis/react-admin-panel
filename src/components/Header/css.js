import {css} from 'emotion';

export const container = css`
  display: flex;
  user-select: none;
  height: 100%;
  justify-content: flex-end;
  align-items: center;
  margin-right: 20px;
`;

export const avatar = css`
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #0000005f;
  color: #fff;
  font-size: xx-large;
  width: 35px;
  height: 35px;
  &.small {
    width: 25px;
    height: 25px;
    border-radius: 0%;
    background: transparent;
    margin: 0;
    font-size: large;
  }
`;

export const infoBox = css`
  display: flex;
  width: 150px;
  word-break: none;
  flex-direction: column;
  justify-content: center;
  align-items: space-around;
  height: 100%;
  cursor: pointer;
`;

export const nameLabel = css`
  width: 150px;
  color: #696969;
  font-weight: 600;
`;

export const roleLabel = css`
  width: 120px;
  color: #999;
  font-weight: normal;
`;

export const menuItem = css`
  width: 200px;
  padding: 15px;
  user-select: none;
  display: flex;
  justify-content: space-around;
  align-items: center;
  outline: none;
  background: #fff;
  &:first-child {
    background: #0000001f;
    &:hover {
      background: #0000001f;
    }
    b {
      text-transform: capitalize;
    }
  }
  &:hover {
    background: rgba(0, 0, 0, 0.05);
  }
  cursor: pointer;
`;
export const leftSide = css`
  flex: 1;
  display: flex;
`;

export const rightSide = css`
  flex: 4;
`;

export const infos = css`
  margin-left: 20px;
  b {
    cursor: pointer;
  }
`;
