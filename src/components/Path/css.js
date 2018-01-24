import {css} from 'emotion';

export const container = css`
  display: flex;
  p {
    cursor: pointer;
    user-select: none;
    text-transform: capitalize;
    margin-right: 2px;
    color: #008fd8;
    ::after {
      content: '/';
    }
    &:last-child {
      user-select: auto;
      color: #000000;
      cursor: text;
      ::after {
        content: none;
      }
    }
    &:only-child {
      user-select: none;
      cursor: pointer;
      color: #008fd8;
      ::after {
        content: none;
      }
    }
  }
`;
