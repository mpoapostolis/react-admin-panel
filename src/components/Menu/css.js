import { css } from "emotion"

export const logo = css`
  display: flex;
  flex-direction: center;
  width: 130px;
  margin: 0 0 35px 10px;
`

export const dl = css`
  width: 100%;
  color: #9b9b9b;
  padding-left: 10px;
  font-size: small;
  border-bottom: solid 1px #ffffff3f;
  &:last-child {
    border: none;
  }
`

export const dd = css`
  width: calc(100% - 20px);
  display: flex;
  align-items: center;
  margin-left: -10px;
  height: 40px;
  font-weight: 600;
  padding-left: 20px;
  color: #ffffffcf;
  font-size: normal;
  cursor: pointer;
  &:hover {
    color: #ffffffef;
    background-color: #002537cf;
  }
  &.active {
    width: calc(100% - 23px);
    border-left: solid 3px #008fd8;
    color: #0096e2;
    background-color: #002537;
  }
`
