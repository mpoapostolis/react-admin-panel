import { css } from "emotion"

export const container = css`
  display: flex;
  height: 100%;
  align-items: center;
  color: #717171;
  text-transform: capitalize;
`

export const oval = css`
  border-radius: 50%;
  width: 10px;
  height: 10px;
  margin-right: 10px;
  background-color: #dc1937;
  &.active {
    background-color: #18d6a2;
  }
`
