import {css} from 'emotion';

export const container = css`
  padding: 0 10px 0 10px;
  color: white;
  color: #999999;
`;

export const logo = css`
  display: flex;
  flex-direction: center;
  max-width: 150px;
  margin-bottom: 35px;
`;

export const activeContestLabel = css`
  font-size: small;
  color: #000;
`;

export const menuItemClass = css`
  height: 30px;
  padding-left: 10px;
  display: flex;
  align-items: center;
  cursor: pointer;
  user-select: none;
  &.active {
    color: white;
    font-weight: 600;
  }
  &:hover {
    background: rgba(0, 139, 206, 0.225);
  }
  transition: 0.125s;
`;

export const sectionClass = css`
  border-bottom: solid 1px rgba(255, 255, 255, 0.15);
`;
