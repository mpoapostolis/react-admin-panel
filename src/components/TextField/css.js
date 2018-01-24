import {css} from 'emotion';

export const input = css`
  border: none;
  font-size: medium;
  transition: 0.125s;
  color: rgba(0, 0, 0, 0.8);
  background: transparent;
  border-bottom: solid 0.08em rgba(0, 0, 0, 0.25);
  width: 100%;
  &.date {
    width: 150px;
  }
  &.second {
    margin-left: 15px;
  }
  &.upload {
  }
  &:hover {
    border-bottom: solid 0.08em rgba(0, 0, 0, 0.6);
  }
  &:focus {
    border-bottom: solid 0.1em rgb(0, 0, 0, 0.8);
    outline: none;
  }
  &.error {
    color: red;
    border-bottom: solid 0.08em #ff0000;
  }
`;

export const mpla = css`
  display: flex;
  justify-content: space-around;
`;

export const hide = css`
  max-width: 20px;
  max-height: 20px;
  cursor: pointer;
`;

export const inputCont = css`
  display: inline-flex;
  align-items: center;
  position: relative;
  width: 100%;
  > .inputLabel {
    pointer-events: none;
    font-size: medium;
    position: absolute;
    color: rgba(0, 0, 0, 0.45);
    transition: all 0.15s;
    &.error {
      color: red;
    }
    &.notEmpty {
      transform: translate(-0px, -25px);
      font-size: xx-small;
    }
  }
`;

export const hideIcon = css`
  cursor:pointer
`