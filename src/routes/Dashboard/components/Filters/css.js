import { css } from "emotion"
import { mq } from "../../../../css"

export const container = css`
  width: 100%;
  background:white;
  margin: 0 15px 0 15px;
  display: flex;
  justify-content: space-between;
  ${mq.small(css`
    flex-direction: column;
  `)};
`

export const welcomeMessage = css`
  span {
    font-size: small;
    color: #6b6b6b;
  }
`

export const label = css`
  margin: 15px 0 5px 0;
  font-size: large;
  font-weight: 600;
`

export const filterType = css`
  display: flex;
  align-self: center;
`

export const dateRange = css`
  display: flex;
`

export const button = css`
  width: 66px;
  height: 35px;
  border-radius: 2px;
  background-color: #ffffff;
  color: #bec0c0;
  border: solid 1px #f0f0f0;
  transition: 0.125s;
  cursor: pointer;
  outline: none;
  &.active {
    color: #008fd8;
    border: solid 2px rgba(0, 143, 216, 0.51);
  }
`
