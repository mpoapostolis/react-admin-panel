import { css } from "emotion"

export const tabsCont = css`
  display: flex;
  width: 100%;
  justify-content: center;
`

export const tabs = css`
  width: 97%;
  display: flex;
  justify-content: flex-start;
  border-bottom: solid 1px #0001;
  &.um {
    width: 100%;
  }
`
export const btn = css`
  width: 100%;
  height: 35px;
  background: white;
  border: none;
  outline: none;
  transition: 0.25s;
  color: #9e9c9c;
  &.active {
    color: #333333;
    border-bottom: solid 2px #008bcc;
  }
  &:hover {
    cursor: pointer;
    background: #0001;
  }
`
